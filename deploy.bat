@echo off
echo ========================================
echo AI知识图谱平台 - 部署准备脚本
echo ========================================
echo.

echo 1. 检查必要文件...
if exist "index.html" (
    echo ✅ index.html 存在
) else (
    echo ❌ index.html 不存在，正在创建...
    copy kg_enhanced_prototype.html index.html
    echo ✅ 已创建 index.html
)

if exist "dashboard_functions.js" echo ✅ dashboard_functions.js 存在
if exist "user_center_functions.js" echo ✅ user_center_functions.js 存在
if exist "knowledge_modeling_functions.js" echo ✅ knowledge_modeling_functions.js 存在
if exist "graph_construction_functions.js" echo ✅ graph_construction_functions.js 存在
if exist "knowledge_fusion_functions.js" echo ✅ knowledge_fusion_functions.js 存在
if exist "knowledge_computation_functions.js" echo ✅ knowledge_computation_functions.js 存在
if exist "graph_application_functions.js" echo ✅ graph_application_functions.js 存在
if exist "multimodal_knowledge_graph_functions.js" echo ✅ multimodal_knowledge_graph_functions.js 存在
if exist "multimodal_kg_qa_functions.js" echo ✅ multimodal_kg_qa_functions.js 存在

echo.
echo 2. 部署选项：
echo.
echo 📌 GitHub Pages (推荐)
echo    1. 访问 https://github.com
echo    2. 创建新仓库
echo    3. 上传所有文件
echo    4. 启用 GitHub Pages
echo.
echo 📌 Netlify (最简单)
echo    1. 访问 https://netlify.com
echo    2. 拖拽 index.html 到部署区域
echo.
echo 📌 Vercel
echo    1. 访问 https://vercel.com
echo    2. 连接 GitHub 仓库
echo.
echo 3. 文件准备完成！
echo    现在可以将所有文件上传到选择的平台进行部署。
echo.
pause
