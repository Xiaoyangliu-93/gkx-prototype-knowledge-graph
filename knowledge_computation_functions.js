// 知识计算模块专用功能函数

// 表示学习模型配置
function generateRepresentationLearningModelConfigurationContent() {
    return `
        <div class="alert alert-info">
            <strong>表示学习模型配置：</strong>提供主流编码模型（如TransE, ComplEx, RotatE）的选项，供用户根据不同任务场景进行选择。
        </div>

        <div class="card">
            <div class="card-header">模型选择与参数配置页</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>编码模型选择</h5>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
                            <div class="model-card" style="border: 2px solid #52c41a; padding: 15px; border-radius: 6px; text-align: center; cursor: pointer;">
                                <h6>TransE</h6>
                                <p style="font-size: 12px; color: var(--text-secondary);">基于平移的模型</p>
                            </div>
                            <div class="model-card" style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; text-align: center; cursor: pointer;">
                                <h6>ComplEx</h6>
                                <p style="font-size: 12px; color: var(--text-secondary);">复数空间模型</p>
                            </div>
                            <div class="model-card" style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; text-align: center; cursor: pointer;">
                                <h6>RotatE</h6>
                                <p style="font-size: 12px; color: var(--text-secondary);">旋转模型</p>
                            </div>
                            <div class="model-card" style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; text-align: center; cursor: pointer;">
                                <h6>DistMult</h6>
                                <p style="font-size: 12px; color: var(--text-secondary);">双线性模型</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>参数配置</h5>
                        <div class="form-group">
                            <label class="form-label">表示维度</label>
                            <input type="number" class="form-input" value="100" min="50" max="1000">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">学习率</label>
                            <input type="number" class="form-input" value="0.001" step="0.0001">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">批次大小</label>
                            <input type="number" class="form-input" value="128" min="32">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">训练轮数</label>
                            <input type="number" class="form-input" value="1000" min="100">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">初始化方法</label>
                            <select class="form-input">
                                <option>Xavier初始化</option>
                                <option>随机初始化</option>
                                <option>预训练初始化</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">开始训练</button>
                    <button class="btn btn-secondary">保存配置</button>
                    <button class="btn btn-secondary">预览参数</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">模型性能对比</div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>模型</th>
                                <th>MRR</th>
                                <th>Hits@1</th>
                                <th>Hits@10</th>
                                <th>训练时间</th>
                                <th>状态</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TransE</td>
                                <td>0.742</td>
                                <td>0.658</td>
                                <td>0.891</td>
                                <td>2.5小时</td>
                                <td><span style="color: green;">已完成</span></td>
                            </tr>
                            <tr>
                                <td>ComplEx</td>
                                <td>0.768</td>
                                <td>0.692</td>
                                <td>0.912</td>
                                <td>3.2小时</td>
                                <td><span style="color: green;">已完成</span></td>
                            </tr>
                            <tr>
                                <td>RotatE</td>
                                <td>0.801</td>
                                <td>0.734</td>
                                <td>0.928</td>
                                <td>4.1小时</td>
                                <td><span style="color: orange;">训练中</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 训练与评估配置
function generateTrainingEvaluationConfigurationContent() {
    return `
        <div class="alert alert-info">
            <strong>训练与评估配置：</strong>提供训练任务的创建、监控和管理界面，可实时查看损失变化等指标。
        </div>

        <div class="card">
            <div class="card-header">训练任务监控仪表板</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px;">
                    <div class="stat-card">
                        <div class="stat-number">0.234</div>
                        <div class="stat-label">当前损失</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">0.789</div>
                        <div class="stat-label">MRR</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">0.712</div>
                        <div class="stat-label">Hits@10</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">245/1000</div>
                        <div class="stat-label">训练轮数</div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <h5>损失变化曲线</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 200px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 80px;">
                                📈 损失变化图表
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>评估指标趋势</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 200px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 80px;">
                                📊 评估指标图表
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn btn-primary">开始训练</button>
                    <button class="btn btn-secondary">暂停训练</button>
                    <button class="btn btn-secondary">停止训练</button>
                    <button class="btn btn-secondary">导出模型</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">训练配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">打分函数</label>
                            <select class="form-input">
                                <option>L1距离</option>
                                <option>L2距离</option>
                                <option>点积</option>
                                <option>余弦相似度</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">负采样数量</label>
                            <input type="number" class="form-input" value="10" min="1" max="100">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">正则化系数</label>
                            <input type="number" class="form-input" value="0.0001" step="0.0001">
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">优化器</label>
                            <select class="form-input">
                                <option>Adam</option>
                                <option>SGD</option>
                                <option>AdamW</option>
                                <option>RMSprop</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">学习率调度</label>
                            <select class="form-input">
                                <option>固定学习率</option>
                                <option>指数衰减</option>
                                <option>余弦退火</option>
                                <option>步长衰减</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">早停策略</label>
                            <div>
                                <label><input type="checkbox" checked> 启用早停</label><br>
                                <label>耐心值: <input type="number" value="50" min="10"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 辅助信息集成
function generateAuxiliaryInformationIntegrationContent() {
    return `
        <div class="alert alert-info">
            <strong>辅助信息集成：</strong>允许用户接入文本描述、实体类型等结构化或非结构化辅助信息。
        </div>

        <div class="card">
            <div class="card-header">多模态数据源配置</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <button class="btn btn-primary">添加数据源</button>
                    <button class="btn btn-secondary">批量导入</button>
                </div>
                
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>数据源名称</th>
                                <th>信息类型</th>
                                <th>关联方式</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>实体文本描述</td>
                                <td>文本描述</td>
                                <td>实体ID匹配</td>
                                <td><span style="color: green;">已激活</span></td>
                                <td>
                                    <button class="btn btn-sm btn-primary">配置</button>
                                    <button class="btn btn-sm">编辑</button>
                                </td>
                            </tr>
                            <tr>
                                <td>实体类型信息</td>
                                <td>结构化数据</td>
                                <td>属性映射</td>
                                <td><span style="color: green;">已激活</span></td>
                                <td>
                                    <button class="btn btn-sm btn-primary">配置</button>
                                    <button class="btn btn-sm">编辑</button>
                                </td>
                            </tr>
                            <tr>
                                <td>实体图像数据</td>
                                <td>图像数据</td>
                                <td>文件名匹配</td>
                                <td><span style="color: orange;">配置中</span></td>
                                <td>
                                    <button class="btn btn-sm btn-primary">配置</button>
                                    <button class="btn btn-sm">编辑</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">数据源配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">数据源名称</label>
                            <input type="text" class="form-input" placeholder="输入数据源名称">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">信息类型</label>
                            <select class="form-input">
                                <option>文本描述</option>
                                <option>结构化数据</option>
                                <option>图像数据</option>
                                <option>音频数据</option>
                                <option>视频数据</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">数据格式</label>
                            <select class="form-input">
                                <option>JSON</option>
                                <option>CSV</option>
                                <option>XML</option>
                                <option>RDF</option>
                                <option>图像文件</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">关联方式</label>
                            <select class="form-input">
                                <option>实体ID匹配</option>
                                <option>属性映射</option>
                                <option>文件名匹配</option>
                                <option>自定义规则</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">数据文件</label>
                            <input type="file" class="form-input" accept=".json,.csv,.xml,.jpg,.png">
                            <small>支持多种格式</small>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">编码模型</label>
                            <select class="form-input">
                                <option>BERT</option>
                                <option>RoBERTa</option>
                                <option>ResNet</option>
                                <option>自定义模型</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">保存配置</button>
                    <button class="btn btn-secondary">测试连接</button>
                    <button class="btn btn-secondary">预览数据</button>
                </div>
            </div>
        </div>
    `;
}

// 相似度计算引擎
function generateSimilarityComputationEngineContent() {
    return `
        <div class="alert alert-info">
            <strong>相似度计算引擎：</strong>支持用户上传已标注的相似实体对，训练监督学习模型进行相似度计算。
        </div>

        <div class="card">
            <div class="card-header">相似度计算任务配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>计算类型选择</h5>
                        <div style="margin-bottom: 20px;">
                            <label><input type="radio" name="computeType" value="supervised" checked> 监督学习相似度计算</label><br>
                            <label><input type="radio" name="computeType" value="unsupervised"> 无监督相似度计算</label><br>
                            <label><input type="radio" name="computeType" value="hybrid"> 混合方法</label>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">算法选择</label>
                            <select class="form-input">
                                <option>余弦相似度</option>
                                <option>欧几里得距离</option>
                                <option>曼哈顿距离</option>
                                <option>Jaccard相似度</option>
                                <option>编辑距离</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">实体范围</label>
                            <select class="form-input">
                                <option>全部实体</option>
                                <option>指定类型</option>
                                <option>指定子图</option>
                                <option>自定义查询</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <h5>训练数据配置</h5>
                        <div class="form-group">
                            <label class="form-label">标注数据上传</label>
                            <input type="file" class="form-input" accept=".csv,.json">
                            <small>支持CSV, JSON格式的实体对标注数据</small>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">训练集比例</label>
                            <input type="range" class="form-input" min="0.6" max="0.9" step="0.1" value="0.8">
                            <span>80%</span>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">相似度阈值</label>
                            <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.7">
                            <span>0.7</span>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">模型参数</label>
                            <div>
                                <label>学习率: <input type="number" value="0.001" step="0.0001" style="width: 100px;"></label><br>
                                <label>批次大小: <input type="number" value="32" min="1" style="width: 100px;"></label><br>
                                <label>训练轮数: <input type="number" value="100" min="1" style="width: 100px;"></label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">开始计算</button>
                    <button class="btn btn-secondary">预览数据</button>
                    <button class="btn btn-secondary">保存配置</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">计算结果</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
                    <div class="stat-card">
                        <div class="stat-number">1,247</div>
                        <div class="stat-label">已计算实体对</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">0.823</div>
                        <div class="stat-label">平均相似度</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">0.89</div>
                        <div class="stat-label">模型准确率</div>
                    </div>
                </div>
                
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>实体1</th>
                                <th>实体2</th>
                                <th>相似度</th>
                                <th>类型</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>深度学习</td>
                                <td>神经网络</td>
                                <td><span style="color: #52c41a;">0.89</span></td>
                                <td>技术概念</td>
                                <td><button class="btn btn-sm">查看详情</button></td>
                            </tr>
                            <tr>
                                <td>机器学习</td>
                                <td>人工智能</td>
                                <td><span style="color: #1890ff;">0.76</span></td>
                                <td>技术概念</td>
                                <td><button class="btn btn-sm">查看详情</button></td>
                            </tr>
                            <tr>
                                <td>北京大学</td>
                                <td>Peking University</td>
                                <td><span style="color: #faad14;">0.92</span></td>
                                <td>机构名称</td>
                                <td><button class="btn btn-sm">查看详情</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 关联强度量化
function generateAssociationStrengthQuantificationContent() {
    return `
        <div class="alert alert-info">
            <strong>关联强度量化：</strong>提供发现实体间关联路径的工具，并将路径长度、路径模式作为量化指标之一。
        </div>

        <div class="card">
            <div class="card-header">实体关联路径浏览器</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>实体选择</h5>
                        <div class="form-group">
                            <label class="form-label">源实体</label>
                            <input type="text" class="form-input" placeholder="输入源实体名称" value="深度学习">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">目标实体</label>
                            <input type="text" class="form-input" placeholder="输入目标实体名称" value="神经网络">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">路径类型</label>
                            <select class="form-input">
                                <option>最短路径</option>
                                <option>最强路径</option>
                                <option>所有路径</option>
                                <option>指定长度路径</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">最大路径长度</label>
                            <input type="number" class="form-input" value="3" min="1" max="10">
                        </div>
                        
                        <button class="btn btn-primary">查找路径</button>
                    </div>
                    
                    <div>
                        <h5>关联路径结果</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px; overflow-y: auto;">
                            <div style="margin-bottom: 15px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                <div style="font-weight: bold; margin-bottom: 5px;">路径1 (强度: 0.89)</div>
                                <div style="font-size: 14px;">
                                    深度学习 → <span style="color: #52c41a;">属于</span> → 机器学习 → <span style="color: #52c41a;">包含</span> → 神经网络
                                </div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                                    路径长度: 2 | 路径类型: 层次关系
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                <div style="font-weight: bold; margin-bottom: 5px;">路径2 (强度: 0.76)</div>
                                <div style="font-size: 14px;">
                                    深度学习 → <span style="color: #1890ff;">应用</span> → 图像识别 → <span style="color: #1890ff;">使用</span> → 神经网络
                                </div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                                    路径长度: 2 | 路径类型: 应用关系
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                <div style="font-weight: bold; margin-bottom: 5px;">路径3 (强度: 0.65)</div>
                                <div style="font-size: 14px;">
                                    深度学习 → <span style="color: #faad14;">基于</span> → 反向传播 → <span style="color: #faad14;">训练</span> → 神经网络
                                </div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                                    路径长度: 2 | 路径类型: 技术关系
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">关联强度可视化</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>热力图</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 200px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 80px;">
                                🔥 关联强度热力图
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>网络图</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 200px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 80px;">
                                🕸️ 实体关联网络图
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">导出结果</button>
                    <button class="btn btn-secondary">保存路径</button>
                    <button class="btn btn-secondary">生成报告</button>
                </div>
            </div>
        </div>
    `;
}

// 下游应用支持
function generateDownstreamApplicationSupportContent() {
    return `
        <div class="alert alert-info">
            <strong>下游应用支持：</strong>提供API接口，允许输入实体或文本，返回语义最相关的实体列表。
        </div>

        <div class="card">
            <div class="card-header">API接口管理与测试页</div>
            <div class="card-body">
                <div class="tabs">
                    <div class="tab-header">
                        <div class="tab-item active" data-tab="semantic-search">语义检索</div>
                        <div class="tab-item" data-tab="recommendation">推荐应用</div>
                        <div class="tab-item" data-tab="similarity">相似度计算</div>
                    </div>
                    
                    <div class="tab-content">
                        <div class="tab-pane active" id="semantic-search-tab">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div>
                                    <h5>API配置</h5>
                                    <div class="form-group">
                                        <label class="form-label">接口地址</label>
                                        <input type="text" class="form-input" value="/api/v1/semantic-search" readonly>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">请求方法</label>
                                        <select class="form-input">
                                            <option>POST</option>
                                            <option>GET</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">返回数量</label>
                                        <input type="number" class="form-input" value="10" min="1" max="100">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">相似度阈值</label>
                                        <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.7">
                                        <span>0.7</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h5>在线测试</h5>
                                    <div class="form-group">
                                        <label class="form-label">查询文本</label>
                                        <textarea class="form-input" rows="3" placeholder="输入要检索的文本...">深度学习在图像识别中的应用</textarea>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">实体类型过滤</label>
                                        <select class="form-input">
                                            <option>全部类型</option>
                                            <option>技术概念</option>
                                            <option>机构名称</option>
                                            <option>人物</option>
                                        </select>
                                    </div>
                                    
                                    <button class="btn btn-primary">发送请求</button>
                                    <button class="btn btn-secondary">清空</button>
                                </div>
                            </div>
                            
                            <div style="margin-top: 20px;">
                                <h5>响应结果</h5>
                                <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; background: #f9f9f9;">
                                    <pre style="margin: 0; font-size: 12px;">
{
  "status": "success",
  "results": [
    {
      "entity": "深度学习",
      "score": 0.95,
      "type": "技术概念"
    },
    {
      "entity": "卷积神经网络",
      "score": 0.89,
      "type": "技术概念"
    },
    {
      "entity": "图像识别",
      "score": 0.82,
      "type": "应用领域"
    }
  ]
}</pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane" id="recommendation-tab">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div>
                                    <h5>推荐配置</h5>
                                    <div class="form-group">
                                        <label class="form-label">用户实体</label>
                                        <input type="text" class="form-input" placeholder="输入用户实体ID">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">推荐类型</label>
                                        <select class="form-input">
                                            <option>物品推荐</option>
                                            <option>内容推荐</option>
                                            <option>用户推荐</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">推荐数量</label>
                                        <input type="number" class="form-input" value="5" min="1" max="20">
                                    </div>
                                </div>
                                
                                <div>
                                    <h5>推荐结果</h5>
                                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 200px; overflow-y: auto;">
                                        <div style="margin-bottom: 10px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                            <strong>推荐物品1</strong> - 相似度: 0.92
                                        </div>
                                        <div style="margin-bottom: 10px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                            <strong>推荐物品2</strong> - 相似度: 0.87
                                        </div>
                                        <div style="margin-bottom: 10px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                            <strong>推荐物品3</strong> - 相似度: 0.81
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane" id="similarity-tab">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div>
                                    <h5>相似度计算</h5>
                                    <div class="form-group">
                                        <label class="form-label">实体1</label>
                                        <input type="text" class="form-input" placeholder="输入第一个实体">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">实体2</label>
                                        <input type="text" class="form-input" placeholder="输入第二个实体">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">计算方法</label>
                                        <select class="form-input">
                                            <option>余弦相似度</option>
                                            <option>欧几里得距离</option>
                                            <option>Jaccard相似度</option>
                                        </select>
                                    </div>
                                    
                                    <button class="btn btn-primary">计算相似度</button>
                                </div>
                                
                                <div>
                                    <h5>计算结果</h5>
                                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; text-align: center;">
                                        <div style="font-size: 24px; color: #52c41a; margin-bottom: 10px;">0.89</div>
                                        <div style="color: var(--text-secondary);">相似度分数</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

