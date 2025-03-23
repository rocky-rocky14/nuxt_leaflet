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