# 网页部署指南

## 方法1：GitHub Pages (推荐)

### 步骤1：准备文件
确保以下文件在项目根目录：
- `kg_enhanced_prototype.html` (主文件)
- `dashboard_functions.js`
- `user_center_functions.js`
- `knowledge_modeling_functions.js`
- `graph_construction_functions.js`
- `knowledge_fusion_functions.js`
- `knowledge_computation_functions.js`
- `graph_application_functions.js`
- `multimodal_knowledge_graph_functions.js`
- `multimodal_kg_qa_functions.js`

### 步骤2：创建GitHub仓库
1. 访问 https://github.com
2. 点击 "New repository"
3. 仓库名：`kg-prototype` 或 `ai-knowledge-platform`
4. 选择 Public
5. 点击 "Create repository"

### 步骤3：上传文件
在项目目录中执行：
```bash
git init
git add .
git commit -m "Initial commit: AI Knowledge Graph Platform"
git branch -M main
git remote add origin https://github.com/你的用户名/kg-prototype.git
git push -u origin main
```

### 步骤4：启用GitHub Pages
1. 进入仓库页面
2. 点击 "Settings" 标签
3. 左侧菜单找到 "Pages"
4. Source 选择 "Deploy from a branch"
5. Branch 选择 "main"
6. 点击 "Save"

### 步骤5：访问网站
几分钟后，您的网站将在以下地址可访问：
`https://你的用户名.github.io/kg-prototype`

## 方法2：Netlify (最简单)

### 步骤1：访问Netlify
1. 打开 https://netlify.com
2. 点击 "Sign up" 注册账号

### 步骤2：部署
1. 登录后点击 "Add new site"
2. 选择 "Deploy manually"
3. 将 `kg_enhanced_prototype.html` 拖拽到部署区域
4. 等待部署完成

### 步骤3：访问网站
获得类似这样的链接：
`https://amazing-name-123456.netlify.app`

## 方法3：Vercel

### 步骤1：准备
1. 访问 https://vercel.com
2. 用GitHub账号登录

### 步骤2：部署
1. 点击 "New Project"
2. 选择您的GitHub仓库
3. 点击 "Deploy"

### 步骤3：访问
获得类似这样的链接：
`https://kg-prototype-abc123.vercel.app`

## 注意事项

1. **文件重命名**：将 `kg_enhanced_prototype.html` 重命名为 `index.html` 可以避免在URL中显示文件名
2. **HTTPS**：所有推荐的平台都自动提供HTTPS
3. **自定义域名**：所有平台都支持绑定自己的域名
4. **更新**：修改代码后，重新推送即可自动更新网站

## 推荐流程

1. 选择 GitHub Pages（最稳定）
2. 将 `kg_enhanced_prototype.html` 重命名为 `index.html`
3. 按照上述步骤部署
4. 分享链接给其他人访问
