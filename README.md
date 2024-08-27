# [iFCat](https://hlovez.life)

## 构建

```bash
docker build moonhou/ifcat:[version] .

docker save -o ifcat-v[version].tar moonhou/ifcat:[version]

scp ifcat-v[version].tar [user]@[host]:[path]/ifcat-v[version].tar

docker load -i ./ifcat-v0.1.1.tar
docker stop ifcat
docker rm ifcat
docker run -d --name ifcat -p 3000:3000 moonhou/ifcat:[version]

```
