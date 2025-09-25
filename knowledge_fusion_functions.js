// 知识融合模块专用功能函数

// 跨本体关系构建
function generateCrossOntologyRelationBuildingContent() {
    return `
        <div class="alert alert-info">
            <strong>跨本体关系构建：</strong>提供算法配置，支持基于词汇、结构相似度等方法构建本体间的模糊匹配关系。
        </div>

        <div class="card">
            <div class="card-header">本体关系配置页</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">源本体</label>
                            <select class="form-input">
                                <option>选择源本体...</option>
                                <option>医学本体</option>
                                <option>地理本体</option>
                                <option>人物本体</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">目标本体</label>
                            <select class="form-input">
                                <option>选择目标本体...</option>
                                <option>生物医学本体</option>
                                <option>空间本体</option>
                                <option>社会网络本体</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">关系类型</label>
                            <select class="form-input">
                                <option>模糊关系</option>
                                <option>逻辑关系</option>
                                <option>混合关系</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">相似度算法</label>
                            <select class="form-input">
                                <option>词汇相似度</option>
                                <option>结构相似度</option>
                                <option>语义相似度</option>
                                <option>混合相似度</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">相似度阈值</label>
                            <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.7">
                            <span>0.7</span>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">背景知识</label>
                            <textarea class="form-input" rows="3" placeholder="输入背景知识或规则..."></textarea>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">开始构建</button>
                    <button class="btn btn-secondary">预览配置</button>
                    <button class="btn btn-secondary">保存配置</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">关系构建结果</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>源本体概念</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px; overflow-y: auto;">
                            <div style="margin-bottom: 10px;">
                                <strong>疾病</strong> <span style="color: green;">→</span> <span style="color: blue;">疾病概念</span> (0.95)
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>症状</strong> <span style="color: green;">→</span> <span style="color: blue;">临床表现</span> (0.88)
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>治疗</strong> <span style="color: green;">→</span> <span style="color: blue;">治疗方法</span> (0.92)
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>目标本体概念</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px; overflow-y: auto;">
                            <div style="margin-bottom: 10px;">
                                <strong>疾病概念</strong> <span style="color: green;">←</span> <span style="color: orange;">疾病</span> (0.95)
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>临床表现</strong> <span style="color: green;">←</span> <span style="color: orange;">症状</span> (0.88)
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>治疗方法</strong> <span style="color: green;">←</span> <span style="color: orange;">治疗</span> (0.92)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 匹配流程管理
function generateMatchingProcessManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>匹配流程管理：</strong>提供可视化的流程编排工具，用户可拖拽组合不同的匹配组件。
        </div>

        <div class="card">
            <div class="card-header">可视化流程编排画布</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 200px 1fr; gap: 20px;">
                    <div>
                        <h5>流程组件</h5>
                        <div style="border: 1px solid var(--border-color); padding: 10px; border-radius: 6px;">
                            <div class="workflow-component" draggable="true">
                                📊 数据加载
                            </div>
                            <div class="workflow-component" draggable="true">
                                🧹 数据清洗
                            </div>
                            <div class="workflow-component" draggable="true">
                                🔍 相似度计算
                            </div>
                            <div class="workflow-component" draggable="true">
                                ⚖️ 匹配决策
                            </div>
                            <div class="workflow-component" draggable="true">
                                📋 结果输出
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>工作流画布</h5>
                        <div id="workflowCanvas" style="border: 2px dashed var(--border-color); padding: 20px; border-radius: 6px; min-height: 400px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 150px;">
                                拖拽左侧组件到此处构建工作流
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">保存工作流</button>
                    <button class="btn btn-secondary">执行工作流</button>
                    <button class="btn btn-secondary">清空画布</button>
                </div>
            </div>
        </div>
    `;
}

// 智能匹配引擎
function generateIntelligentMatchingEngineContent() {
    return `
        <div class="alert alert-info">
            <strong>智能匹配引擎：</strong>提供一键式智能匹配功能，系统自动推荐最优匹配流程和参数。
        </div>

        <div class="card">
            <div class="card-header">Schema智能匹配结果页</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>源本体概念树</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; overflow-y: auto;">
                            <div style="margin-left: 0px;">
                                <div style="display: flex; align-items: center; padding: 5px 0;">
                                    <span style="margin-right: 10px;">📁</span>
                                    <strong>医学概念</strong>
                                </div>
                                <div style="margin-left: 20px;">
                                    <div style="display: flex; align-items: center; padding: 5px 0;">
                                        <span style="margin-right: 10px;">📄</span>
                                        <span>疾病</span>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <div style="display: flex; align-items: center; padding: 5px 0;">
                                            <span style="margin-right: 10px;">📄</span>
                                            <span>传染病</span>
                                        </div>
                                        <div style="display: flex; align-items: center; padding: 5px 0;">
                                            <span style="margin-right: 10px;">📄</span>
                                            <span>慢性病</span>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; padding: 5px 0;">
                                        <span style="margin-right: 10px;">📄</span>
                                        <span>症状</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>匹配关系</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; overflow-y: auto;">
                            <div style="text-align: center; margin: 20px 0;">
                                <div style="border: 2px solid #52c41a; padding: 10px; border-radius: 6px; margin: 10px 0;">
                                    <strong>疾病</strong> ↔ <strong>疾病概念</strong><br>
                                    <span style="color: #52c41a;">置信度: 95%</span>
                                </div>
                                <div style="border: 2px solid #1890ff; padding: 10px; border-radius: 6px; margin: 10px 0;">
                                    <strong>症状</strong> ↔ <strong>临床表现</strong><br>
                                    <span style="color: #1890ff;">置信度: 88%</span>
                                </div>
                                <div style="border: 2px solid #faad14; padding: 10px; border-radius: 6px; margin: 10px 0;">
                                    <strong>治疗</strong> ↔ <strong>治疗方法</strong><br>
                                    <span style="color: #faad14;">置信度: 92%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>目标本体概念树</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; overflow-y: auto;">
                            <div style="margin-left: 0px;">
                                <div style="display: flex; align-items: center; padding: 5px 0;">
                                    <span style="margin-right: 10px;">📁</span>
                                    <strong>生物医学概念</strong>
                                </div>
                                <div style="margin-left: 20px;">
                                    <div style="display: flex; align-items: center; padding: 5px 0;">
                                        <span style="margin-right: 10px;">📄</span>
                                        <span>疾病概念</span>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <div style="display: flex; align-items: center; padding: 5px 0;">
                                            <span style="margin-right: 10px;">📄</span>
                                            <span>感染性疾病</span>
                                        </div>
                                        <div style="display: flex; align-items: center; padding: 5px 0;">
                                            <span style="margin-right: 10px;">📄</span>
                                            <span>非感染性疾病</span>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; padding: 5px 0;">
                                        <span style="margin-right: 10px;">📄</span>
                                        <span>临床表现</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">确认匹配</button>
                    <button class="btn btn-secondary">调整参数</button>
                    <button class="btn btn-secondary">导出结果</button>
                </div>
            </div>
        </div>
    `;
}

// 匹配策略配置
function generateMatchingStrategyConfigurationContent() {
    return `
        <div class="alert alert-info">
            <strong>匹配策略配置：</strong>提供基于字符串相似度、编辑距离等算法的文本匹配策略配置。
        </div>

        <div class="card">
            <div class="card-header">实例匹配策略配置卡片</div>
            <div class="card-body">
                <div class="tabs">
                    <div class="tab-header">
                        <div class="tab-item active" data-tab="text">文本匹配</div>
                        <div class="tab-item" data-tab="structure">结构匹配</div>
                        <div class="tab-item" data-tab="ml">机器学习匹配</div>
                    </div>
                    
                    <div class="tab-content">
                        <div class="tab-pane active" id="text-tab">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div>
                                    <div class="form-group">
                                        <label class="form-label">字符串相似度算法</label>
                                        <select class="form-input">
                                            <option>编辑距离</option>
                                            <option>Jaccard相似度</option>
                                            <option>余弦相似度</option>
                                            <option>Jaro-Winkler</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">相似度阈值</label>
                                        <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.8">
                                        <span>0.8</span>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">预处理选项</label>
                                        <div>
                                            <label><input type="checkbox" checked> 转小写</label><br>
                                            <label><input type="checkbox" checked> 去除标点</label><br>
                                            <label><input type="checkbox"> 词干提取</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="form-group">
                                        <label class="form-label">权重配置</label>
                                        <div>
                                            <label>编辑距离权重: <input type="range" min="0" max="1" step="0.1" value="0.6"></label><br>
                                            <label>Jaccard权重: <input type="range" min="0" max="1" step="0.1" value="0.4"></label>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">测试样例</label>
                                        <div style="border: 1px solid var(--border-color); padding: 10px; border-radius: 4px; background: #f9f9f9;">
                                            <div>文本1: "深度学习"</div>
                                            <div>文本2: "深度神经网络"</div>
                                            <div>相似度: <strong>0.75</strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane" id="structure-tab">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div>
                                    <div class="form-group">
                                        <label class="form-label">结构特征</label>
                                        <div>
                                            <label><input type="checkbox" checked> 属性数量</label><br>
                                            <label><input type="checkbox" checked> 关系数量</label><br>
                                            <label><input type="checkbox"> 层次深度</label>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">图结构算法</label>
                                        <select class="form-input">
                                            <option>图同构</option>
                                            <option>子图匹配</option>
                                            <option>路径相似度</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="form-group">
                                        <label class="form-label">结构权重</label>
                                        <div>
                                            <label>属性权重: <input type="range" min="0" max="1" step="0.1" value="0.5"></label><br>
                                            <label>关系权重: <input type="range" min="0" max="1" step="0.1" value="0.5"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane" id="ml-tab">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div>
                                    <div class="form-group">
                                        <label class="form-label">机器学习模型</label>
                                        <select class="form-input">
                                            <option>SVM</option>
                                            <option>随机森林</option>
                                            <option>神经网络</option>
                                            <option>BERT</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">训练数据</label>
                                        <input type="file" class="form-input" accept=".csv,.json">
                                        <small>支持CSV, JSON格式</small>
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="form-group">
                                        <label class="form-label">模型参数</label>
                                        <div>
                                            <label>学习率: <input type="number" value="0.001" step="0.0001"></label><br>
                                            <label>批次大小: <input type="number" value="32" min="1"></label><br>
                                            <label>训练轮数: <input type="number" value="100" min="1"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">保存配置</button>
                    <button class="btn btn-secondary">测试策略</button>
                    <button class="btn btn-secondary">重置默认</button>
                </div>
            </div>
        </div>
    `;
}

// 多策略融合匹配
function generateMultiStrategyFusionMatchingContent() {
    return `
        <div class="alert alert-info">
            <strong>多策略融合匹配：</strong>系统根据配置的权重或融合算法，综合多个策略的匹配结果。
        </div>

        <div class="card">
            <div class="card-header">策略融合权重设置面板</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>策略权重配置</h5>
                        <div style="margin-bottom: 20px;">
                            <label>文本匹配权重</label>
                            <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.4">
                            <span>0.4</span>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <label>结构匹配权重</label>
                            <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.3">
                            <span>0.3</span>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <label>机器学习匹配权重</label>
                            <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.3">
                            <span>0.3</span>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <label>融合算法</label>
                            <select class="form-input">
                                <option>加权平均</option>
                                <option>投票机制</option>
                                <option>贝叶斯融合</option>
                                <option>深度学习融合</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <h5>融合结果预览</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                    <span><strong>实体A</strong> ↔ <strong>实体B</strong></span>
                                    <span style="color: #52c41a;"><strong>0.85</strong></span>
                                </div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                                    文本: 0.4×0.8 + 结构: 0.3×0.9 + ML: 0.3×0.8 = 0.85
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                    <span><strong>实体C</strong> ↔ <strong>实体D</strong></span>
                                    <span style="color: #1890ff;"><strong>0.72</strong></span>
                                </div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                                    文本: 0.4×0.6 + 结构: 0.3×0.8 + ML: 0.3×0.9 = 0.72
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                    <span><strong>实体E</strong> ↔ <strong>实体F</strong></span>
                                    <span style="color: #faad14;"><strong>0.65</strong></span>
                                </div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                                    文本: 0.4×0.7 + 结构: 0.3×0.5 + ML: 0.3×0.8 = 0.65
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">应用权重</button>
                    <button class="btn btn-secondary">重置权重</button>
                    <button class="btn btn-secondary">保存配置</button>
                </div>
            </div>
        </div>
    `;
}

// 匹配结果管理
function generateMatchingResultManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>匹配结果管理：</strong>以列表形式展示待审核的实例匹配对，并高亮显示关键属性的异同。
        </div>

        <div class="card">
            <div class="card-header">实例匹配审核工作台</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span>共 <strong>156</strong> 个匹配对</span>
                        <span style="margin-left: 20px;">已选择 <strong>0</strong> 个</span>
                    </div>
                    <div>
                        <select class="form-input" style="width: auto;">
                            <option>全部状态</option>
                            <option>待审核</option>
                            <option>已确认</option>
                            <option>已拒绝</option>
                        </select>
                    </div>
                </div>
                
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox"></th>
                                <th>源实例</th>
                                <th>目标实例</th>
                                <th>相似度</th>
                                <th>关键属性对比</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>
                                    <div><strong>张三</strong></div>
                                    <div style="font-size: 12px; color: var(--text-secondary);">年龄: 30, 职业: 医生</div>
                                </td>
                                <td>
                                    <div><strong>张医生</strong></div>
                                    <div style="font-size: 12px; color: var(--text-secondary);">年龄: 30, 职业: 医师</div>
                                </td>
                                <td><span style="color: #52c41a;">0.92</span></td>
                                <td>
                                    <div style="font-size: 12px;">
                                        <span style="color: green;">姓名: 相似</span><br>
                                        <span style="color: green;">年龄: 相同</span><br>
                                        <span style="color: orange;">职业: 相似</span>
                                    </div>
                                </td>
                                <td><span style="color: orange;">待审核</span></td>
                                <td>
                                    <button class="btn btn-sm btn-primary">确认</button>
                                    <button class="btn btn-sm" style="color: red;">拒绝</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>
                                    <div><strong>北京大学</strong></div>
                                    <div style="font-size: 12px; color: var(--text-secondary);">类型: 大学, 位置: 北京</div>
                                </td>
                                <td>
                                    <div><strong>Peking University</strong></div>
                                    <div style="font-size: 12px; color: var(--text-secondary);">类型: University, 位置: Beijing</div>
                                </td>
                                <td><span style="color: #1890ff;">0.88</span></td>
                                <td>
                                    <div style="font-size: 12px;">
                                        <span style="color: green;">名称: 翻译</span><br>
                                        <span style="color: green;">类型: 相同</span><br>
                                        <span style="color: green;">位置: 翻译</span>
                                    </div>
                                </td>
                                <td><span style="color: green;">已确认</span></td>
                                <td>
                                    <button class="btn btn-sm btn-secondary">查看</button>
                                    <button class="btn btn-sm">编辑</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div style="margin-top: 15px; text-align: center;">
                    <button class="btn btn-secondary">批量确认</button>
                    <button class="btn btn-secondary">批量拒绝</button>
                    <button class="btn btn-secondary">导出结果</button>
                </div>
            </div>
        </div>
    `;
}
