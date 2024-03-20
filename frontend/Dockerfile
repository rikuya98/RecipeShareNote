FROM node:lts-slim

WORKDIR /front

ENV CI=true

# package.jsonとpackage-lock.jsonをコンテナにコピー
COPY ./app/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコンテナにコピー
COPY . .

# アプリケーションを起動するコマンド
CMD ["npm", "start"]