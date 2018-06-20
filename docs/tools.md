# Tools

## 代码规范

## 代码检查

## 代码测试

## 代码调试

## npm/bower

## Git-分布式版本管理工具
Git是一个最强大的分布式版本管理工具。
### Git基础
`git init`: 初始化（在当前文件夹建立git仓库）

`git clone <url>`: 克隆远程版本库

`git config`: 查看git信息

`git status`: 查看当前git仓库信息

`git add`: 将工作区的文件添加到暂存区

`git commit`: 将暂存区文件提交到版本库

`git diff <file>`: 查看指定文件的详细修改记录(退出按q键)

`ssh-keygen -t rsa -c "name@domain.com"`: 创建本地SSH Key

`git remote add origin git@github.com:iFiring/project-name.git`: 关联远程仓库

`git push -u origin master`: 推送至远程主库(-u 第一次)

### 版本管理
`git reset --hard HEAD^`: 回退到上一个版本

`git reset --hard 4kf4v94`: 切换到4kf4v94版本

`git checkout -- <file>`: 撤销工作区中**指定**文件的修改

`git checkout .`: 撤销工作区中**所有**文件的修改

`git checkout HEAD <file>`: 撤销指定未提交的修改内容

`git reset HEAD -- <file>`: 撤销暂存区中指定文件的修改

`git reset --hard HEAD`: 撤销工作目录中所有未提交的修改内容

`git rm <file>`: 删除一个文件，之后用commit提交

`git mv <old-name> <new-name>`: 重命名文件

`git log`: 显示所有提交日志信息(退出按q键)

`git log -p <file>`: 查看指定文件的提交历史

`git log --graggh`: 查看分支合并图

`git blame <file>`: 以列表形式查看指定文件的提交历史

`git reflog`: 显示所有命令列表(退出按q键)

`git clean -f`: 删除Untracked Files

`git clean -nf`: 查看将要删除的Untracked Files

`git clean -df`: 删除Untracked Files和其目录

### 远程仓库
`git remote -v`: 查看远程版本库信息

`git remote show <remote>`: 查看指定的远程版本库信息

`git remote add <remote> <url>`: 添加远程版本库

`git remote set-url <remote> <url>`: 修改远程版本库

`git remote rm <remote>`: 删除远程版本库

`git push <remote> <branch>`: 上传代码并快速合并

`git push <remote> : <branch-name>/<tag-name>`: 删除远程分支或标签

`git fetch <remote>`: 从远程库获取代码

`git pull <remote> <branch>`: 下载代码并快速合并(pull = fetch + merge)

### 分支管理
`git branch`: 显示所有本地分支

`git branch <new-branch-name>`: 创建新分支

`git branch -d <branch-name>`: 删除分支

`git branch -D <branch-name>`: 强行删除未合并的分支

`git checkout <branch-name/tag-name>`: 切换到指定分支/标签

`git merge <dev-branch>`: 合并指定分支到当前分支

`git rebase <dev-branch>`: 衍合指定分支到当前分支

`git checkout -b <branch-name>`: 创建并切换到新分支

`git branch -m (-M) <oldbranch> <newbranch>`: 重命名分支

### 标签管理
`git tag`: 列出所有本地标签

`git tag <tag-name>`: 给当前分支打标签

`git tag -d <tag-name>`: 删除标签

`git show <tag-name>`: 查看标签信息

`git push origin <tag-name>`: 推送标签到远程

`git push origin --tags`: 推送全部的标签到远程

`git push origin : <tag-name>`: 删除远程标签

### 多人协作
`git push origin <branch-name>`: 推送自己修改的分支

`git checkout -b <b-name> origin/<b-name>`: 在本地创建和远程分支对应的分支

### `Git add -A` 与 `add .`和 `add -u`的区别
`git add .`: 提交修改、新建的文件，不包括删除的文件

`git add -u`: 提交修改、删除的文件，不包括新建的文件

`git add -A`: 提交所有的文件变化

### `Git merge`和`rebase`的区别

## Gulp/Grunt

## Webpack/Browserify