// 首页仪表盘模块专用功能函数

// 核心指标
function generateCoreMetricsContent() {
    return `
        <div class="alert alert-info">
            <strong>核心指标：</strong>展示平台核心状态，包括知识图谱规模、任务数量、系统健康状态等。
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <div class="card-body">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="margin: 0; font-size: 2.5rem;">1,247,856</h3>
                            <p style="margin: 5px 0 0 0; opacity: 0.9;">知识实体总数</p>
                        </div>
                        <div style="font-size: 3rem; opacity: 0.7;">📊</div>
                    </div>
                    <div style="margin-top: 15px; display: flex; align-items: center;">
                        <span style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 12px; font-size: 12px;">
                            +12.5% 较上月
                        </span>
                    </div>
                </div>
            </div>

            <div class="card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
                <div class="card-body">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="margin: 0; font-size: 2.5rem;">3,456,789</h3>
                            <p style="margin: 5px 0 0 0; opacity: 0.9;">关系总数</p>
                        </div>
                        <div style="font-size: 3rem; opacity: 0.7;">🔗</div>
                    </div>
                    <div style="margin-top: 15px; display: flex; align-items: center;">
                        <span style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 12px; font-size: 12px;">
                            +8.3% 较上月
                        </span>
                    </div>
                </div>
            </div>

            <div class="card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white;">
                <div class="card-body">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="margin: 0; font-size: 2.5rem;">23</h3>
                            <p style="margin: 5px 0 0 0; opacity: 0.9;">进行中任务</p>
                        </div>
                        <div style="font-size: 3rem; opacity: 0.7;">⚡</div>
                    </div>
                    <div style="margin-top: 15px; display: flex; align-items: center;">
                        <span style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 12px; font-size: 12px;">
                            12个知识建模任务
                        </span>
                    </div>
                </div>
            </div>

            <div class="card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white;">
                <div class="card-body">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="margin: 0; font-size: 2.5rem;">98.7%</h3>
                            <p style="margin: 5px 0 0 0; opacity: 0.9;">系统健康度</p>
                        </div>
                        <div style="font-size: 3rem; opacity: 0.7;">💚</div>
                    </div>
                    <div style="margin-top: 15px; display: flex; align-items: center;">
                        <span style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 12px; font-size: 12px;">
                            所有服务正常
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">数据增长趋势</div>
            <div class="card-body">
                <div style="height: 300px; background: #f9f9f9; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: var(--text-secondary);">
                    📈 数据增长趋势图表
                </div>
            </div>
        </div>
    `;
}

// 近期活动
function generateRecentActivitiesContent() {
    return `
        <div class="alert alert-info">
            <strong>近期活动：</strong>展示最近创建或完成的任务，点击可跳转至任务详情。
        </div>

        <div class="card">
            <div class="card-header">任务活动</div>
            <div class="card-body">
                <div style="max-height: 500px; overflow-y: auto;">
                    <div style="display: flex; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div style="width: 40px; height: 40px; background: #52c41a; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-right: 15px;">
                            ✅
                        </div>
                        <div style="flex: 1;">
                            <h6 style="margin: 0; color: #1890ff;">深度学习文献知识抽取任务</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                已完成 • 抽取了1,247个实体和3,456个关系 • 2024-03-05 14:30
                            </p>
                        </div>
                        <button class="btn btn-sm btn-primary">查看详情</button>
                    </div>

                    <div style="display: flex; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div style="width: 40px; height: 40px; background: #1890ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-right: 15px;">
                            🔄
                        </div>
                        <div style="flex: 1;">
                            <h6 style="margin: 0; color: #1890ff;">医学图像知识图谱构建</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                进行中 • 进度 75% • 2024-03-05 13:45
                            </p>
                        </div>
                        <button class="btn btn-sm btn-secondary">查看进度</button>
                    </div>

                    <div style="display: flex; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div style="width: 40px; height: 40px; background: #faad14; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-right: 15px;">
                            ⚠️
                        </div>
                        <div style="flex: 1;">
                            <h6 style="margin: 0; color: #1890ff;">专利知识融合任务</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                失败 • 数据源连接超时 • 2024-03-05 12:20
                            </p>
                        </div>
                        <button class="btn btn-sm btn-danger">重新运行</button>
                    </div>

                    <div style="display: flex; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div style="width: 40px; height: 40px; background: #52c41a; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-right: 15px;">
                            ✅
                        </div>
                        <div style="flex: 1;">
                            <h6 style="margin: 0; color: #1890ff;">多模态知识图谱推理</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                已完成 • 推理出156个新关系 • 2024-03-05 11:15
                            </p>
                        </div>
                        <button class="btn btn-sm btn-primary">查看结果</button>
                    </div>

                    <div style="display: flex; align-items: center; padding: 15px;">
                        <div style="width: 40px; height: 40px; background: #1890ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-right: 15px;">
                            🔄
                        </div>
                        <div style="flex: 1;">
                            <h6 style="margin: 0; color: #1890ff;">知识计算模型训练</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                进行中 • 进度 45% • 2024-03-05 10:30
                            </p>
                        </div>
                        <button class="btn btn-sm btn-secondary">查看进度</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 快速入口
function generateQuickAccessContent() {
    return `
        <div class="alert alert-info">
            <strong>快速入口：</strong>提供常用功能的快速访问入口，提高工作效率。
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div class="card" style="text-align: center; cursor: pointer; transition: transform 0.2s;" onclick="loadModule('knowledge-modeling')">
                <div class="card-body">
                    <div style="font-size: 3rem; margin-bottom: 15px;">🔍</div>
                    <h6>新建抽取任务</h6>
                    <p style="font-size: 14px; color: var(--text-secondary);">创建新的知识抽取任务</p>
                </div>
            </div>

            <div class="card" style="text-align: center; cursor: pointer; transition: transform 0.2s;" onclick="loadModule('graph-construction')">
                <div class="card-body">
                    <div style="font-size: 3rem; margin-bottom: 15px;">🕸️</div>
                    <h6>图谱构建</h6>
                    <p style="font-size: 14px; color: var(--text-secondary);">构建知识图谱</p>
                </div>
            </div>

            <div class="card" style="text-align: center; cursor: pointer; transition: transform 0.2s;" onclick="loadModule('graph-application')">
                <div class="card-body">
                    <div style="font-size: 3rem; margin-bottom: 15px;">🔎</div>
                    <h6>语义搜索</h6>
                    <p style="font-size: 14px; color: var(--text-secondary);">智能语义检索</p>
                </div>
            </div>

            <div class="card" style="text-align: center; cursor: pointer; transition: transform 0.2s;" onclick="loadModule('knowledge-computation')">
                <div class="card-body">
                    <div style="font-size: 3rem; margin-bottom: 15px;">🧠</div>
                    <h6>知识推理</h6>
                    <p style="font-size: 14px; color: var(--text-secondary);">启动知识推理任务</p>
                </div>
            </div>

            <div class="card" style="text-align: center; cursor: pointer; transition: transform 0.2s;" onclick="loadModule('multimodal-knowledge-graph-qa')">
                <div class="card-body">
                    <div style="font-size: 3rem; margin-bottom: 15px;">💬</div>
                    <h6>智能问答</h6>
                    <p style="font-size: 14px; color: var(--text-secondary);">启动AI问答系统</p>
                </div>
            </div>

            <div class="card" style="text-align: center; cursor: pointer; transition: transform 0.2s;" onclick="loadModule('system-management')">
                <div class="card-body">
                    <div style="font-size: 3rem; margin-bottom: 15px;">⚙️</div>
                    <h6>系统管理</h6>
                    <p style="font-size: 14px; color: var(--text-secondary);">平台管理控制台</p>
                </div>
            </div>
        </div>
    `;
}

// 运行中任务
function generateRunningTasksContent() {
    return `
        <div class="alert alert-info">
            <strong>运行中任务：</strong>实时监控当前正在执行的任务状态和进度。
        </div>

        <div class="card">
            <div class="card-header">任务监控</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div style="border: 1px solid var(--border-color); padding: 20px; border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                            <h6 style="margin: 0; color: #1890ff;">深度学习文献抽取</h6>
                            <span style="background: #1890ff; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">运行中</span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>进度</span>
                                <span>75%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 75%;"></div>
                            </div>
                        </div>
                        <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                            已处理: 750/1000 篇文献
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button class="btn btn-sm btn-primary">查看详情</button>
                            <button class="btn btn-sm btn-secondary">暂停</button>
                        </div>
                    </div>

                    <div style="border: 1px solid var(--border-color); padding: 20px; border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                            <h6 style="margin: 0; color: #1890ff;">知识图谱推理</h6>
                            <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">运行中</span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>进度</span>
                                <span>45%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 45%;"></div>
                            </div>
                        </div>
                        <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                            已推理: 234/520 个实体
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button class="btn btn-sm btn-primary">查看详情</button>
                            <button class="btn btn-sm btn-secondary">暂停</button>
                        </div>
                    </div>

                    <div style="border: 1px solid var(--border-color); padding: 20px; border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                            <h6 style="margin: 0; color: #1890ff;">多模态融合</h6>
                            <span style="background: #faad14; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">等待中</span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>进度</span>
                                <span>0%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 0%;"></div>
                            </div>
                        </div>
                        <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                            等待资源分配
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button class="btn btn-sm btn-primary">查看详情</button>
                            <button class="btn btn-sm btn-danger">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 已完成任务
function generateCompletedTasksContent() {
    return `
        <div class="alert alert-info">
            <strong>已完成任务：</strong>查看最近完成的任务结果和统计信息。
        </div>

        <div class="card">
            <div class="card-header">任务历史</div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>任务名称</th>
                                <th>类型</th>
                                <th>状态</th>
                                <th>完成时间</th>
                                <th>结果</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>深度学习文献抽取</td>
                                <td>知识建模</td>
                                <td><span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">已完成</span></td>
                                <td>2024-03-05 14:30</td>
                                <td>1,247个实体</td>
                                <td>
                                    <button class="btn btn-sm btn-primary">查看结果</button>
                                    <button class="btn btn-sm btn-secondary">重新运行</button>
                                </td>
                            </tr>
                            <tr>
                                <td>医学图像知识图谱构建</td>
                                <td>图谱构建</td>
                                <td><span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">已完成</span></td>
                                <td>2024-03-05 13:45</td>
                                <td>3,456个关系</td>
                                <td>
                                    <button class="btn btn-sm btn-primary">查看结果</button>
                                    <button class="btn btn-sm btn-secondary">重新运行</button>
                                </td>
                            </tr>
                            <tr>
                                <td>知识融合任务</td>
                                <td>知识融合</td>
                                <td><span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">已完成</span></td>
                                <td>2024-03-05 12:20</td>
                                <td>融合156个实体</td>
                                <td>
                                    <button class="btn btn-sm btn-primary">查看结果</button>
                                    <button class="btn btn-sm btn-secondary">重新运行</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 失败任务
function generateFailedTasksContent() {
    return `
        <div class="alert alert-danger">
            <strong>失败任务：</strong>查看失败的任务和错误信息，支持重新运行。
        </div>

        <div class="card">
            <div class="card-header">失败任务列表</div>
            <div class="card-body">
                <div style="max-height: 500px; overflow-y: auto;">
                    <div style="border: 1px solid #ff4d4f; padding: 15px; border-radius: 6px; margin-bottom: 15px; background: #fff2f0;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <h6 style="margin: 0; color: #ff4d4f;">专利知识抽取任务</h6>
                            <span style="background: #ff4d4f; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">失败</span>
                        </div>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                            错误信息: 数据源连接超时，无法访问专利数据库
                        </p>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 12px;">
                            失败时间: 2024-03-05 12:20 | 重试次数: 3/3
                        </p>
                        <div style="margin-top: 10px; display: flex; gap: 10px;">
                            <button class="btn btn-sm btn-primary">重新运行</button>
                            <button class="btn btn-sm btn-secondary">查看日志</button>
                            <button class="btn btn-sm btn-danger">删除任务</button>
                        </div>
                    </div>

                    <div style="border: 1px solid #ff4d4f; padding: 15px; border-radius: 6px; margin-bottom: 15px; background: #fff2f0;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <h6 style="margin: 0; color: #ff4d4f;">多模态知识图谱构建</h6>
                            <span style="background: #ff4d4f; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">失败</span>
                        </div>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                            错误信息: 内存不足，无法处理大型数据集
                        </p>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 12px;">
                            失败时间: 2024-03-05 11:45 | 重试次数: 2/3
                        </p>
                        <div style="margin-top: 10px; display: flex; gap: 10px;">
                            <button class="btn btn-sm btn-primary">重新运行</button>
                            <button class="btn btn-sm btn-secondary">查看日志</button>
                            <button class="btn btn-sm btn-danger">删除任务</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 性能指标
function generatePerformanceMetricsContent() {
    return `
        <div class="alert alert-info">
            <strong>性能指标：</strong>监控系统关键性能指标，确保平台稳定运行。
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div class="card">
                <div class="card-header">CPU使用率</div>
                <div class="card-body">
                    <div style="height: 200px; background: #f9f9f9; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: var(--text-secondary);">
                        📊 CPU使用率图表
                    </div>
                    <div style="margin-top: 15px; text-align: center;">
                        <span style="font-size: 2rem; color: #52c41a;">45%</span>
                        <p style="margin: 5px 0; color: var(--text-secondary);">当前CPU使用率</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">内存使用率</div>
                <div class="card-body">
                    <div style="height: 200px; background: #f9f9f9; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: var(--text-secondary);">
                        📊 内存使用率图表
                    </div>
                    <div style="margin-top: 15px; text-align: center;">
                        <span style="font-size: 2rem; color: #faad14;">72%</span>
                        <p style="margin: 5px 0; color: var(--text-secondary);">当前内存使用率</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">系统响应时间</div>
            <div class="card-body">
                <div style="height: 300px; background: #f9f9f9; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: var(--text-secondary);">
                    📈 系统响应时间趋势图
                </div>
            </div>
        </div>
    `;
}

// 资源使用
function generateResourceUsageContent() {
    return `
        <div class="alert alert-info">
            <strong>资源使用：</strong>监控系统资源使用情况，包括存储、网络、数据库等。
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <div class="card">
                <div class="card-body">
                    <h6>存储空间</h6>
                    <div style="margin: 15px 0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>已使用</span>
                            <span>2.3TB / 5TB</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 46%;"></div>
                        </div>
                    </div>
                    <p style="font-size: 14px; color: var(--text-secondary);">剩余空间: 2.7TB</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h6>数据库连接</h6>
                    <div style="margin: 15px 0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>活跃连接</span>
                            <span>23 / 100</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 23%;"></div>
                        </div>
                    </div>
                    <p style="font-size: 14px; color: var(--text-secondary);">连接池状态: 正常</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h6>网络带宽</h6>
                    <div style="margin: 15px 0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>当前使用</span>
                            <span>156Mbps / 1Gbps</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 15.6%;"></div>
                        </div>
                    </div>
                    <p style="font-size: 14px; color: var(--text-secondary);">网络状态: 良好</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h6>GPU使用率</h6>
                    <div style="margin: 15px 0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>GPU 1</span>
                            <span>78%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 78%;"></div>
                        </div>
                    </div>
                    <p style="font-size: 14px; color: var(--text-secondary);">主要用于模型训练</p>
                </div>
            </div>
        </div>
    `;
}

// 告警信息
function generateAlertsContent() {
    return `
        <div class="alert alert-warning">
            <strong>告警信息：</strong>系统告警和通知信息，帮助及时发现和解决问题。
        </div>

        <div class="card">
            <div class="card-header">系统告警</div>
            <div class="card-body">
                <div style="max-height: 500px; overflow-y: auto;">
                    <div style="border-left: 4px solid #ff4d4f; padding: 15px; margin-bottom: 15px; background: #fff2f0;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <h6 style="margin: 0; color: #ff4d4f;">高优先级告警</h6>
                            <span style="background: #ff4d4f; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">严重</span>
                        </div>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                            数据库连接池使用率超过90%，可能影响系统性能
                        </p>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 12px;">
                            告警时间: 2024-03-05 15:30 | 状态: 未处理
                        </p>
                        <div style="margin-top: 10px;">
                            <button class="btn btn-sm btn-primary">立即处理</button>
                            <button class="btn btn-sm btn-secondary">忽略</button>
                        </div>
                    </div>

                    <div style="border-left: 4px solid #faad14; padding: 15px; margin-bottom: 15px; background: #fffbe6;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <h6 style="margin: 0; color: #faad14;">中优先级告警</h6>
                            <span style="background: #faad14; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">警告</span>
                        </div>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                            存储空间使用率超过70%，建议清理临时文件
                        </p>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 12px;">
                            告警时间: 2024-03-05 14:45 | 状态: 已处理
                        </p>
                        <div style="margin-top: 10px;">
                            <button class="btn btn-sm btn-primary">查看详情</button>
                            <button class="btn btn-sm btn-secondary">标记已读</button>
                        </div>
                    </div>

                    <div style="border-left: 4px solid #1890ff; padding: 15px; margin-bottom: 15px; background: #e6f7ff;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <h6 style="margin: 0; color: #1890ff;">低优先级告警</h6>
                            <span style="background: #1890ff; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">信息</span>
                        </div>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                            系统更新可用，建议在维护窗口期间进行更新
                        </p>
                        <p style="margin: 5px 0; color: var(--text-secondary); font-size: 12px;">
                            告警时间: 2024-03-05 13:20 | 状态: 已处理
                        </p>
                        <div style="margin-top: 10px;">
                            <button class="btn btn-sm btn-primary">查看详情</button>
                            <button class="btn btn-sm btn-secondary">标记已读</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
