// 图谱构建模块专用功能函数

// 识别模型管理
function generateRecognitionModelManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>识别模型管理：</strong>支持加载预训练模型和训练自定义实体识别模型。
        </div>

        <div class="card">
            <div class="card-header">模型管理仪表板</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
                    <div class="card" style="margin: 0;">
                        <div class="card-body">
                            <h5>BERT-Base模型</h5>
                            <p>准确率: 94.2%</p>
                            <p>状态: <span style="color: green;">已激活</span></p>
                            <button class="btn btn-primary btn-sm">配置</button>
                            <button class="btn btn-secondary btn-sm">测试</button>
                        </div>
                    </div>
                    <div class="card" style="margin: 0;">
                        <div class="card-body">
                            <h5>BiLSTM-CRF模型</h5>
                            <p>准确率: 91.8%</p>
                            <p>状态: <span style="color: orange;">训练中</span></p>
                            <button class="btn btn-primary btn-sm">配置</button>
                            <button class="btn btn-secondary btn-sm">监控</button>
                        </div>
                    </div>
                    <div class="card" style="margin: 0;">
                        <div class="card-body">
                            <h5>自定义模型</h5>
                            <p>准确率: 89.5%</p>
                            <p>状态: <span style="color: gray;">未激活</span></p>
                            <button class="btn btn-primary btn-sm">激活</button>
                            <button class="btn btn-secondary btn-sm">编辑</button>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">上传模型</button>
                    <button class="btn btn-secondary">训练新模型</button>
                    <button class="btn btn-secondary">导入预训练模型</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">模型训练配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">模型类型</label>
                            <select class="form-input">
                                <option>BERT</option>
                                <option>BiLSTM-CRF</option>
                                <option>RoBERTa</option>
                                <option>自定义架构</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">训练数据</label>
                            <input type="file" class="form-input" accept=".json,.csv,.txt">
                            <small>支持JSON, CSV, TXT格式</small>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">学习率</label>
                            <input type="number" class="form-input" value="0.001" step="0.0001">
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">批次大小</label>
                            <input type="number" class="form-input" value="32" min="1">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">训练轮数</label>
                            <input type="number" class="form-input" value="10" min="1">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">验证集比例</label>
                            <input type="range" class="form-input" min="0" max="50" value="20">
                            <span>20%</span>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">开始训练</button>
                    <button class="btn btn-secondary">预览数据</button>
                    <button class="btn btn-secondary">保存配置</button>
                </div>
            </div>
        </div>
    `;
}

// 实体分类体系
function generateEntityClassificationSystemContent() {
    return `
        <div class="alert alert-info">
            <strong>实体分类体系：</strong>可视化树状结构编辑器，支持拖拽调整层级关系。
        </div>

        <div class="card">
            <div class="card-header">分类体系编辑器</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>分类树结构</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; min-height: 300px;">
                            <div style="margin-left: 0px;">
                                <div style="display: flex; align-items: center; padding: 5px 0;">
                                    <span style="margin-right: 10px;">📁</span>
                                    <strong>实体类型</strong>
                                    <button class="btn btn-sm" style="margin-left: auto;">+</button>
                                </div>
                                <div style="margin-left: 20px;">
                                    <div style="display: flex; align-items: center; padding: 5px 0;">
                                        <span style="margin-right: 10px;">📄</span>
                                        <span>人物</span>
                                        <button class="btn btn-sm" style="margin-left: auto;">+</button>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <div style="display: flex; align-items: center; padding: 5px 0;">
                                            <span style="margin-right: 10px;">📄</span>
                                            <span>科学家</span>
                                        </div>
                                        <div style="display: flex; align-items: center; padding: 5px 0;">
                                            <span style="margin-right: 10px;">📄</span>
                                            <span>工程师</span>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; padding: 5px 0;">
                                        <span style="margin-right: 10px;">📄</span>
                                        <span>机构</span>
                                        <button class="btn btn-sm" style="margin-left: auto;">+</button>
                                    </div>
                                    <div style="display: flex; align-items: center; padding: 5px 0;">
                                        <span style="margin-right: 10px;">📄</span>
                                        <span>技术</span>
                                        <button class="btn btn-sm" style="margin-left: auto;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>分类属性配置</h5>
                        <div class="form-group">
                            <label class="form-label">分类名称</label>
                            <input type="text" class="form-input" placeholder="输入分类名称">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">父级分类</label>
                            <select class="form-input">
                                <option>实体类型</option>
                                <option>人物</option>
                                <option>机构</option>
                                <option>技术</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">分类描述</label>
                            <textarea class="form-input" rows="3" placeholder="描述该分类的特征和用途"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">属性定义</label>
                            <div>
                                <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                                    <input type="text" class="form-input" placeholder="属性名" style="flex: 1;">
                                    <select class="form-input" style="width: 120px;">
                                        <option>文本</option>
                                        <option>数字</option>
                                        <option>日期</option>
                                        <option>布尔</option>
                                    </select>
                                    <button class="btn btn-sm">+</button>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 20px;">
                            <button class="btn btn-primary">保存分类</button>
                            <button class="btn btn-secondary">重置</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 识别结果管理
function generateRecognitionResultManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>识别结果管理：</strong>提供结果审核接口，支持人工确认、修改或删除识别出的实体。
        </div>

        <div class="card">
            <div class="card-header">识别结果审核</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span>共 <strong>1,247</strong> 条识别结果</span>
                        <span style="margin-left: 20px;">已选择 <strong>0</strong> 条</span>
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
                                <th>实体文本</th>
                                <th>实体类型</th>
                                <th>置信度</th>
                                <th>上下文</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>深度学习</td>
                                <td>技术</td>
                                <td>95%</td>
                                <td>深度学习技术在图像识别领域...</td>
                                <td><span style="color: orange;">待审核</span></td>
                                <td>
                                    <button class="btn btn-sm btn-primary">确认</button>
                                    <button class="btn btn-sm btn-secondary">修正</button>
                                    <button class="btn btn-sm" style="color: red;">忽略</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>神经网络</td>
                                <td>技术</td>
                                <td>92%</td>
                                <td>神经网络模型在自然语言处理...</td>
                                <td><span style="color: green;">已确认</span></td>
                                <td>
                                    <button class="btn btn-sm btn-secondary">查看</button>
                                    <button class="btn btn-sm">编辑</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>机器学习</td>
                                <td>技术</td>
                                <td>88%</td>
                                <td>机器学习算法在数据分析中...</td>
                                <td><span style="color: orange;">待审核</span></td>
                                <td>
                                    <button class="btn btn-sm btn-primary">确认</button>
                                    <button class="btn btn-sm btn-secondary">修正</button>
                                    <button class="btn btn-sm" style="color: red;">忽略</button>
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

// 事件识别模型配置
function generateEventRecognitionModelConfigContent() {
    return `
        <div class="alert alert-info">
            <strong>事件识别模型配置：</strong>提供基于LSTM-CRF的事件识别模型配置接口，支持参数调整。
        </div>

        <div class="card">
            <div class="card-header">事件模型配置表单</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">模型类型</label>
                            <select class="form-input">
                                <option>LSTM-CRF</option>
                                <option>BERT-CRF</option>
                                <option>BiLSTM-CRF</option>
                                <option>自定义模型</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">学习率</label>
                            <input type="number" class="form-input" value="0.001" step="0.0001">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">批次大小</label>
                            <input type="number" class="form-input" value="32" min="1">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">隐藏层维度</label>
                            <input type="number" class="form-input" value="128" min="32">
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">训练轮数</label>
                            <input type="number" class="form-input" value="50" min="1">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Dropout率</label>
                            <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.5">
                            <span>0.5</span>
                        </div>
                        
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
                            <label class="form-label">强化学习句子选择器</label>
                            <div>
                                <label><input type="checkbox" checked> 启用句子选择器</label><br>
                                <label><input type="checkbox"> 自适应学习率</label><br>
                                <label><input type="checkbox"> 动态批次调整</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">保存配置</button>
                    <button class="btn btn-secondary">测试配置</button>
                    <button class="btn btn-secondary">重置默认</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">模型训练监控</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px;">
                    <div class="stat-card">
                        <div class="stat-number">45/50</div>
                        <div class="stat-label">训练轮数</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">92.5%</div>
                        <div class="stat-label">准确率</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">0.0234</div>
                        <div class="stat-label">损失值</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">2.5小时</div>
                        <div class="stat-label">剩余时间</div>
                    </div>
                </div>
                
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 90%;"></div>
                </div>
                <div style="text-align: center; margin-top: 10px;">训练进度: 90%</div>
            </div>
        </div>
    `;
}

// 多模态文献解析
function generateMultimodalLiteratureParsingContent() {
    return `
        <div class="alert alert-info">
            <strong>多模态文献解析：</strong>支持PDF/JATS/XML/HTML等多种格式的文献，并进行统一解析。
        </div>

        <div class="card">
            <div class="card-header">文献解析结果视图</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>原始文献</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; overflow-y: auto; background: #f9f9f9;">
                            <div style="font-family: 'Times New Roman', serif; line-height: 1.6;">
                                <h4>深度学习在自然语言处理中的应用</h4>
                                <p><strong>摘要：</strong>本文研究了深度学习技术在自然语言处理领域的应用...</p>
                                <p>近年来，随着计算能力的提升和大数据的发展，深度学习技术在各个领域都取得了显著的突破...</p>
                                <div style="margin: 20px 0; padding: 15px; background: white; border: 1px solid #ddd;">
                                    <strong>图1：</strong>神经网络架构图
                                    <div style="text-align: center; margin: 10px 0; padding: 20px; background: #f0f0f0;">
                                        [神经网络结构图]
                                    </div>
                                </div>
                                <p>实验结果表明，我们的方法在多个基准数据集上都取得了state-of-the-art的结果...</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>解析结果</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <strong>📄 文本内容：</strong>
                                <div style="background: #e6f7ff; padding: 10px; border-radius: 4px; margin-top: 5px;">
                                    深度学习在自然语言处理中的应用...
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong>🖼️ 图像识别：</strong>
                                <div style="background: #f6ffed; padding: 10px; border-radius: 4px; margin-top: 5px;">
                                    图1：神经网络架构图 - 置信度: 95%
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong>📊 表格数据：</strong>
                                <div style="background: #fff7e6; padding: 10px; border-radius: 4px; margin-top: 5px;">
                                    实验数据表格 - 3行4列
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong>🧮 公式识别：</strong>
                                <div style="background: #f9f0ff; padding: 10px; border-radius: 4px; margin-top: 5px;">
                                    f(x) = σ(Wx + b) - LaTeX格式
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong>📋 元数据：</strong>
                                <div style="background: #f0f0f0; padding: 10px; border-radius: 4px; margin-top: 5px;">
                                    作者: 张三, 李四 | 期刊: Nature | 年份: 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">重新解析</button>
                    <button class="btn btn-secondary">导出结果</button>
                    <button class="btn btn-secondary">保存解析</button>
                </div>
            </div>
        </div>
    `;
}

// 摘要与三元组生成
function generateSummaryTripleGenerationContent() {
    return `
        <div class="alert alert-info">
            <strong>摘要与三元组生成：</strong>利用大语言模型对文献关键段落生成摘要，提炼核心语义。
        </div>

        <div class="card">
            <div class="card-header">科研知识卡片</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <h5>📝 文献摘要</h5>
                    <div style="background: #f6ffed; padding: 15px; border-radius: 6px; border-left: 4px solid #52c41a;">
                        <p>本文研究了深度学习技术在自然语言处理领域的应用，提出了一种基于Transformer架构的新方法。通过在大规模语料库上的预训练和下游任务的微调，该方法在多个基准数据集上取得了显著的性能提升。实验结果表明，我们的方法在文本分类、命名实体识别和关系抽取等任务上都达到了state-of-the-art的效果。</p>
                    </div>
                </div>
                
                <div>
                    <h5>🔗 科研三元组</h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
                        <div class="card" style="margin: 0;">
                            <div class="card-header">研究方法</div>
                            <div class="card-body">
                                <div style="font-size: 14px;">
                                    <div style="margin-bottom: 8px;">
                                        <strong>深度学习</strong> → <em>应用于</em> → <strong>自然语言处理</strong>
                                    </div>
                                    <div style="margin-bottom: 8px;">
                                        <strong>Transformer</strong> → <em>是</em> → <strong>神经网络架构</strong>
                                    </div>
                                    <div style="margin-bottom: 8px;">
                                        <strong>预训练</strong> → <em>使用</em> → <strong>大规模语料库</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card" style="margin: 0;">
                            <div class="card-header">材料与性能</div>
                            <div class="card-body">
                                <div style="font-size: 14px;">
                                    <div style="margin-bottom: 8px;">
                                        <strong>语料库</strong> → <em>规模</em> → <strong>大规模</strong>
                                    </div>
                                    <div style="margin-bottom: 8px;">
                                        <strong>模型</strong> → <em>性能</em> → <strong>state-of-the-art</strong>
                                    </div>
                                    <div style="margin-bottom: 8px;">
                                        <strong>任务</strong> → <em>包括</em> → <strong>文本分类</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card" style="margin: 0;">
                            <div class="card-header">机制与结论</div>
                            <div class="card-body">
                                <div style="font-size: 14px;">
                                    <div style="margin-bottom: 8px;">
                                        <strong>微调</strong> → <em>用于</em> → <strong>下游任务</strong>
                                    </div>
                                    <div style="margin-bottom: 8px;">
                                        <strong>实验</strong> → <em>验证</em> → <strong>方法有效性</strong>
                                    </div>
                                    <div style="margin-bottom: 8px;">
                                        <strong>基准数据集</strong> → <em>测试</em> → <strong>性能提升</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary">重新生成</button>
                    <button class="btn btn-secondary">编辑摘要</button>
                    <button class="btn btn-secondary">导出三元组</button>
                </div>
            </div>
        </div>
    `;
}
