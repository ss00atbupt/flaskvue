# flask web

## flask + vue 全栈工程

- python 3.8.8
- flask 1.1.2
- flask-cors 3.0.10
- vue 2.6.12
- vue-cli 4.5.13
- element-ui 2.15.2

## git拉取子模块client,此时会使子模块处于游离状态，既没有本地分支跟踪变化
```shell
git submodule update --remote client
```

## git拉取子模块client，并合并到本地分支
```shell
cd client
git checkout master
cd ..
git submoudle update --remote --merge client
```

## git拉取子模块并恢复状态
```shell
git submodule update --init --recursive
```

## git拉取主模块，同时同步拉取子模块client
```shell
git pull --recurse-submodules 
```
或者
```shell
git pull
git submodule update --init --recursive
```

## git推送本地分支并联动子模块的改动一起推送
```shell
git push --recurse-submodules=on-demand
```

## git分支切换联动子模块
```shell
git checkout --recurse-submodules
```