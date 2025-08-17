from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base

# データベース接続情報
DB_USER = "root"
DB_PASSWORD = "rootpass"
DB_HOST = "localhost"
DB_PORT = "3306"
DB_NAME = "todo"

# データベースURL
DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}?charset=utf8mb4"

# エンジン作成
engine = create_engine(
    DATABASE_URL,
    echo=True,  # SQLクエリをログ出力
    pool_pre_ping=True,  # 接続の有効性を確認
    pool_recycle=3600,  # 接続プールのリサイクル時間（秒）
)

# セッションファクトリー作成
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# スコープ付きセッション作成
db_session = scoped_session(SessionLocal)

# Baseクラス作成
Base = declarative_base()
Base.query = db_session.query_property()

# データベース接続テスト用関数
def test_connection():
    try:
        with engine.connect() as connection:
            result = connection.execute("SELECT 1")
            print("データベース接続成功！")
            return True
    except Exception as e:
        print(f"データベース接続エラー: {e}")
        return False
