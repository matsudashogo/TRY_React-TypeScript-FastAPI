# TODOアプリ - React + TypeScript + FastAPI

## 概要

このプロジェクトは、React（フロントエンド）とFastAPI（バックエンド）を使用して構築されたシンプルなTODOアプリケーションです。TypeScriptによる型安全性と、モダンなWeb開発技術を組み合わせて、効率的で保守性の高いアプリケーションを目指しています。

## 機能

- ✅ TODOの作成、読み取り、更新、削除（CRUD操作）
- 🔄 リアルタイムでのTODO状態の更新
- 📱 レスポンシブデザイン
- 🎨 モダンで直感的なユーザーインターフェース
- 🔒 型安全性（TypeScript）

## 技術スタック

### フロントエンド
- **React 18** - ユーザーインターフェース構築
- **TypeScript** - 型安全性と開発効率の向上
- **Vite** - 高速なビルドツール
- **CSS Modules** - スタイリング
- **ESLint** - コード品質の向上

### バックエンド
- **FastAPI** - 高速なPython Webフレームワーク
- **Python 3.8+** - サーバーサイド言語
- **Pydantic** - データバリデーション
- **SQLAlchemy** - ORM（必要に応じて）

### 開発ツール
- **Git** - バージョン管理
- **npm/yarn** - パッケージ管理（フロントエンド）
- **pip** - パッケージ管理（バックエンド）

## プロジェクト構造

```
react_typescript_fastapi/
├── backend/                 # FastAPIバックエンド
│   ├── app/
│   │   ├── api/            # APIルート
│   │   ├── models.py       # データモデル
│   │   ├── config.py       # 設定ファイル
│   │   └── main.py         # メインアプリケーション
│   └── requirements.txt     # Python依存関係
├── frontend/               # Reactフロントエンド
│   ├── src/
│   │   ├── components/     # Reactコンポーネント
│   │   └── App.tsx         # メインアプリケーション
│   ├── package.json        # Node.js依存関係
│   └── tsconfig.json       # TypeScript設定
└── README.md               # このファイル
```

## セットアップと実行

### 前提条件
- Node.js 18+ と npm
- Python 3.8+
- Git

### バックエンドのセットアップ

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### フロントエンドのセットアップ

```bash
cd frontend
npm install
npm run dev
```

## API仕様

### エンドポイント
- `GET /api/todos` - 全TODOの取得
- `POST /api/todos` - 新規TODOの作成
- `PUT /api/todos/{id}` - TODOの更新
- `DELETE /api/todos/{id}` - TODOの削除

### データモデル
```typescript
interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}
```

## 開発の流れ

1. **環境構築** - 上記のセットアップ手順に従う
2. **バックエンド開発** - FastAPIでAPIエンドポイントを実装
3. **フロントエンド開発** - Reactでユーザーインターフェースを構築
4. **統合テスト** - フロントエンドとバックエンドの連携確認
5. **デプロイ** - 本番環境への展開

## 学習目標

このプロジェクトを通じて以下の技術を習得できます：

- **React Hooks** - 関数コンポーネントでの状態管理
- **TypeScript** - 型定義とインターフェース設計
- **FastAPI** - モダンなPython Webフレームワーク
- **RESTful API** - 標準的なAPI設計パターン
- **フルスタック開発** - フロントエンドとバックエンドの連携

