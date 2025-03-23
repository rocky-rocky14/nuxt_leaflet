### Dockerの開始と終了
* 開始
```
docker compose up -d
```
* 終了
```
docker compose down
```

### Dockerのコンテナに接続
```
docker-compose exec app sh
/src # yarn dev
```

### Gitのリポジトリを変更
* デフォルトのブランチを変更
```
/src # git config --global init.defaultBranch develop
```