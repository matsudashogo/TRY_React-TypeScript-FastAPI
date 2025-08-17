from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from app.config import engine, db_session
from app.models import Task, Base

# FastAPIアプリケーション作成
app = FastAPI(
    title="Todo API",
    description="MySQLデータベースからタスク情報を取得するAPI",
    version="1.0.0"
)

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番環境では適切に制限してください
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# アプリケーション起動時にテーブル作成
@app.on_event("startup")
async def startup_event():
    try:
        # テーブルが存在しない場合は作成
        Base.metadata.create_all(bind=engine)
        print("データベーステーブル作成完了")
    except Exception as e:
        print(f"テーブル作成エラー: {e}")

# ヘルスチェック
@app.get("/")
async def root():
    return {"message": "Todo API is running!"}

# データベース接続テスト
@app.get("/health")
async def health_check():
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            return {"status": "healthy", "database": "connected"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database connection failed: {str(e)}")

# 全タスク取得
@app.get("/tasks")
async def get_tasks():
    try:
        # 削除されていないタスクのみ取得
        tasks = db_session.query(Task).filter(Task.deleted_at.is_(None)).all()
        
        # タスクを辞書形式に変換
        task_list = [task.to_dict() for task in tasks]
        
        return {
            "status": "success",
            "count": len(task_list),
            "tasks": task_list
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch tasks: {str(e)}")

# アプリケーション終了時の処理
@app.on_event("shutdown")
async def shutdown_event():
    db_session.remove()
