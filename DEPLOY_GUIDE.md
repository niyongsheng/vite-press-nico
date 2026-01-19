# GitHub Actions 自动部署指南

## 配置步骤

### 1. 启用 GitHub Pages

1. 打开你的 GitHub 仓库
2. 进入 Settings -> Pages
3. 在 Source 部分选择 GitHub Actions

### 2. 提交工作流文件

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deploy workflow"
git push origin main
```

### 3. 查看部署状态

1. 进入仓库的 Actions 标签页
2. 查看最新的 Deploy VitePress site to Pages 工作流
3. 部署完成后会显示绿色对勾

## 工作流说明

- **触发条件**: 当代码推送到 main 分支时自动触发
- **构建环境**: Ubuntu 20.04
- **Node 版本**: 20.x
- **包管理**: pnpm
- **部署目标**: GitHub Pages

## 注意事项

1. 确保仓库有足够的权限（已在 workflow 中配置）
2. 首次部署可能需要几分钟时间
3. 部署完成后可以在 Settings -> Pages 中查看访问链接