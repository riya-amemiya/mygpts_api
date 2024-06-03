# 開発環境のベースイメージ
FROM node:18 AS development

# 作業ディレクトリの作成
WORKDIR /app

# package.jsonとyarn.lockをコピー
COPY package.json yarn.lock ./

# 依存関係のインストール
RUN yarn install --frozen-lockfile

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN yarn build

# 本番環境のベースイメージ
FROM node:18-alpine AS production

# Node.jsの本番環境変数の設定
ENV NODE_ENV production

# 作業ディレクトリの作成
WORKDIR /app

# 開発環境から必要なファイルをコピー
COPY --from=development /app/package.json /app/yarn.lock ./
COPY --from=development /app/dist ./dist
COPY --from=development /app/prisma ./prisma

# 本番環境の依存関係のインストール
RUN yarn install --production --frozen-lockfile

# マイグレーションの実行
RUN npx prisma migrate deploy

# アプリケーションの起動
CMD ["node", "dist/main"]