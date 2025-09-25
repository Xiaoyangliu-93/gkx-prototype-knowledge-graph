// 多模态知识图谱模块专用功能函数

// 数据集构建与管理
function generateDatasetConstructionManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>数据集构建与管理：</strong>提供引导式工具，帮助用户整合文本、图片、视频等数据源，构建新的多模态数据集。
        </div>

        <div class="card">
            <div class="card-header">数据集市场主页</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h5>多模态数据集</h5>
                    <button class="btn btn-primary">新建数据集</button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div class="card" style="border: 1px solid var(--border-color);">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                                <h6 style="margin: 0; color: #1890ff;">MMKG-Text-Image</h6>
                                <span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">文本+图像</span>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                                包含100万条文本-图像对的多模态知识图谱数据集，涵盖科技、医学、艺术等领域。
                            </p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                <span style="font-size: 12px; color: var(--text-secondary);">大小: 2.3GB</span>
                                <span style="font-size: 12px; color: var(--text-secondary);">更新: 2024-03-01</span>
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn btn-sm btn-primary">查看详情</button>
                                <button class="btn btn-sm btn-secondary">下载</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" style="border: 1px solid var(--border-color);">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                                <h6 style="margin: 0; color: #1890ff;">Richpedia-Video</h6>
                                <span style="background: #faad14; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">视频+文本</span>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                                视频知识图谱数据集，包含50万个视频片段及其对应的文本描述和实体标注。
                            </p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                <span style="font-size: 12px; color: var(--text-secondary);">大小: 15.7GB</span>
                                <span style="font-size: 12px; color: var(--text-secondary);">更新: 2024-02-28</span>
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn btn-sm btn-primary">查看详情</button>
                                <button class="btn btn-sm btn-secondary">下载</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" style="border: 1px solid var(--border-color);">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                                <h6 style="margin: 0; color: #1890ff;">Visual Genome</h6>
                                <span style="background: #1890ff; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">图像+关系</span>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                                视觉基因组数据集，包含108K张图像及其详细的对象、属性和关系标注。
                            </p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                <span style="font-size: 12px; color: var(--text-secondary);">大小: 8.9GB</span>
                                <span style="font-size: 12px; color: var(--text-secondary);">更新: 2024-02-25</span>
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn btn-sm btn-primary">查看详情</button>
                                <button class="btn btn-sm btn-secondary">下载</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">数据集分类管理</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h6>按模态分类</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> 文本+图像 (15个)</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> 视频+文本 (8个)</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox"> 音频+文本 (3个)</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox"> 多模态 (12个)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>按领域分类</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> 科技 (10个)</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> 医学 (6个)</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox"> 艺术 (4个)</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox"> 教育 (5个)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 数据集评估与应用
function generateDatasetEvaluationApplicationContent() {
    return `
        <div class="alert alert-info">
            <strong>数据集评估与应用：</strong>提供自动化工具，从完整性、一致性等维度对数据集质量进行评估并生成报告。
        </div>

        <div class="card">
            <div class="card-header">数据集详情页</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <h4>MMKG-Text-Image 数据集</h4>
                    <p style="color: var(--text-secondary);">包含100万条文本-图像对的多模态知识图谱数据集</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <h6>评估报告</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 120px;">
                                📊 数据集质量评估图表
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>质量指标</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px;">
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>完整性</span>
                                    <span style="color: #52c41a;">95.2%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 95.2%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>一致性</span>
                                    <span style="color: #52c41a;">92.8%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 92.8%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>准确性</span>
                                    <span style="color: #1890ff;">89.5%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 89.5%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>多样性</span>
                                    <span style="color: #faad14;">87.3%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 87.3%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h6>数据样例预览</h6>
                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            <div>
                                <h6>文本描述</h6>
                                <p style="font-size: 14px; background: #f0f0f0; padding: 10px; border-radius: 4px;">
                                    "深度学习是一种机器学习方法，通过多层神经网络来学习数据的复杂模式..."
                                </p>
                            </div>
                            <div>
                                <h6>关联图像</h6>
                                <div style="background: #f0f0f0; padding: 20px; border-radius: 4px; text-align: center; color: var(--text-secondary);">
                                    🖼️ 神经网络架构图
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h6>知识点搜索</h6>
                        <input type="text" class="form-input" placeholder="搜索知识点..." style="width: 300px;">
                    </div>
                    <div>
                        <button class="btn btn-primary">下载数据集</button>
                        <button class="btn btn-secondary">导出报告</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 知识点自定义与详情
function generateKnowledgePointCustomizationDetailsContent() {
    return `
        <div class="alert alert-info">
            <strong>知识点自定义与详情：</strong>以统一的视图展示一个知识点的多模态信息，如文本描述、关联图片、属性列表等。
        </div>

        <div class="card">
            <div class="card-header">知识点统一视图弹窗</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <h4>深度学习 (Deep Learning)</h4>
                    <p style="color: var(--text-secondary);">ID: DL_001 | 类型: 概念 | 创建时间: 2024-03-01</p>
                </div>
                
                <div class="tabs">
                    <div class="tab active" data-tab="text">文本信息</div>
                    <div class="tab" data-tab="image">图像信息</div>
                    <div class="tab" data-tab="video">视频信息</div>
                    <div class="tab" data-tab="attributes">属性列表</div>
                </div>
                
                <div class="tab-content">
                    <div id="text" class="tab-pane active">
                        <h6>文本描述</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                            <p>深度学习是机器学习的一个子领域，它基于人工神经网络，特别是深层神经网络来进行学习。深度学习通过模拟人脑的神经网络结构，能够自动学习数据的特征表示，在图像识别、自然语言处理、语音识别等领域取得了突破性进展。</p>
                        </div>
                        
                        <h6>相关概念</h6>
                        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 15px;">
                            <span style="background: #e6f7ff; color: #1890ff; padding: 4px 12px; border-radius: 16px; font-size: 12px;">神经网络</span>
                            <span style="background: #f6ffed; color: #52c41a; padding: 4px 12px; border-radius: 16px; font-size: 12px;">机器学习</span>
                            <span style="background: #fff7e6; color: #faad14; padding: 4px 12px; border-radius: 16px; font-size: 12px;">卷积神经网络</span>
                            <span style="background: #f0f0f0; color: #666; padding: 4px 12px; border-radius: 16px; font-size: 12px;">循环神经网络</span>
                        </div>
                    </div>
                    
                    <div id="image" class="tab-pane">
                        <h6>关联图像</h6>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                            <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; text-align: center;">
                                <div style="background: #f0f0f0; padding: 20px; border-radius: 4px; margin-bottom: 10px;">
                                    🖼️ 神经网络架构图
                                </div>
                                <p style="font-size: 12px; color: var(--text-secondary);">CNN架构示意图</p>
                            </div>
                            <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; text-align: center;">
                                <div style="background: #f0f0f0; padding: 20px; border-radius: 4px; margin-bottom: 10px;">
                                    🖼️ 深度学习应用场景
                                </div>
                                <p style="font-size: 12px; color: var(--text-secondary);">图像识别应用</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id="video" class="tab-pane">
                        <h6>相关视频</h6>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                            <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                                <div style="background: #f0f0f0; padding: 20px; border-radius: 4px; margin-bottom: 10px; text-align: center;">
                                    🎥 深度学习入门教程
                                </div>
                                <p style="font-size: 14px; margin-bottom: 5px;">深度学习基础概念</p>
                                <p style="font-size: 12px; color: var(--text-secondary);">时长: 15:30 | 观看次数: 1.2K</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id="attributes" class="tab-pane">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <h6>属性列表</h6>
                            <button class="btn btn-sm btn-primary">添加自定义属性</button>
                        </div>
                        
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>属性名</th>
                                        <th>属性值</th>
                                        <th>类型</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>定义</td>
                                        <td>基于人工神经网络的机器学习方法</td>
                                        <td>文本</td>
                                        <td>
                                            <button class="btn btn-sm">编辑</button>
                                            <button class="btn btn-sm btn-danger">删除</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>应用领域</td>
                                        <td>图像识别, 自然语言处理, 语音识别</td>
                                        <td>列表</td>
                                        <td>
                                            <button class="btn btn-sm">编辑</button>
                                            <button class="btn btn-sm btn-danger">删除</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>创建年份</td>
                                        <td>2006</td>
                                        <td>数字</td>
                                        <td>
                                            <button class="btn btn-sm">编辑</button>
                                            <button class="btn btn-sm btn-danger">删除</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 多模态表示模型
function generateMultimodalRepresentationModelContent() {
    return `
        <div class="alert alert-info">
            <strong>多模态表示模型：</strong>提供多种预置模型，用于为不同模态的数据（文本、图像等）生成统一向量空间下的完备表示。
        </div>

        <div class="card">
            <div class="card-header">表示模型配置向导</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h5>步骤 1/4: 选择数据集</h5>
                        <span style="color: var(--text-secondary);">进度: 25%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 25%;"></div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">选择数据集</label>
                            <select class="form-input">
                                <option>MMKG-Text-Image</option>
                                <option>Richpedia-Video</option>
                                <option>Visual Genome</option>
                                <option>自定义数据集</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">数据模态</label>
                            <div>
                                <label><input type="checkbox" checked> 文本</label><br>
                                <label><input type="checkbox" checked> 图像</label><br>
                                <label><input type="checkbox"> 视频</label><br>
                                <label><input type="checkbox"> 音频</label>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>数据集信息</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; background: #f9f9f9;">
                            <div style="margin-bottom: 10px;">
                                <strong>名称:</strong> MMKG-Text-Image
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>大小:</strong> 2.3GB
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>样本数:</strong> 1,000,000
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>模态:</strong> 文本 + 图像
                            </div>
                            <div>
                                <strong>质量评分:</strong> 92.5%
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn btn-primary">下一步</button>
                    <button class="btn btn-secondary">取消</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">预置模型选择</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                    <div class="card" style="border: 2px solid #1890ff; background: #e6f7ff;">
                        <div class="card-body">
                            <h6 style="color: #1890ff;">CLIP</h6>
                            <p style="font-size: 14px; color: var(--text-secondary);">
                                对比语言-图像预训练模型，擅长文本-图像对齐
                            </p>
                            <div style="margin: 15px 0;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>准确率</span>
                                    <span>94.2%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>速度</span>
                                    <span>快</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span>内存占用</span>
                                    <span>中等</span>
                                </div>
                            </div>
                            <button class="btn btn-primary" style="width: 100%;">选择此模型</button>
                        </div>
                    </div>
                    
                    <div class="card" style="border: 1px solid var(--border-color);">
                        <div class="card-body">
                            <h6>ALIGN</h6>
                            <p style="font-size: 14px; color: var(--text-secondary);">
                                大规模图像-文本对齐模型，支持多语言
                            </p>
                            <div style="margin: 15px 0;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>准确率</span>
                                    <span>91.8%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>速度</span>
                                    <span>中等</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span>内存占用</span>
                                    <span>高</span>
                                </div>
                            </div>
                            <button class="btn btn-secondary" style="width: 100%;">选择此模型</button>
                        </div>
                    </div>
                    
                    <div class="card" style="border: 1px solid var(--border-color);">
                        <div class="card-body">
                            <h6>ViLBERT</h6>
                            <p style="font-size: 14px; color: var(--text-secondary);">
                                视觉-语言BERT模型，支持多任务学习
                            </p>
                            <div style="margin: 15px 0;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>准确率</span>
                                    <span>89.5%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>速度</span>
                                    <span>慢</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span>内存占用</span>
                                    <span>高</span>
                                </div>
                            </div>
                            <button class="btn btn-secondary" style="width: 100%;">选择此模型</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 异质特征融合
function generateHeterogeneousFeatureFusionContent() {
    return `
        <div class="alert alert-info">
            <strong>异质特征融合：</strong>支持配置注意力机制（Attention）、门控网络（Gating）等多种策略，对不同模态的特征进行有效融合。
        </div>

        <div class="card">
            <div class="card-header">特征融合策略配置页</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <h5>多模态特征融合流程图</h5>
                    <div style="border: 1px solid var(--border-color); padding: 20px; border-radius: 6px; background: #f9f9f9; height: 300px;">
                        <div style="text-align: center; color: var(--text-secondary); margin-top: 120px;">
                            🔄 特征融合流程图
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <h6>融合策略配置</h6>
                        <div class="form-group">
                            <label class="form-label">融合方法</label>
                            <select class="form-input">
                                <option>注意力机制 (Attention)</option>
                                <option>门控网络 (Gating)</option>
                                <option>交叉注意力 (Cross-Attention)</option>
                                <option>多尺度融合 (Multi-Scale)</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">注意力头数</label>
                            <input type="number" class="form-input" value="8" min="1" max="16">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">融合权重</label>
                            <div>
                                <label>文本权重: <input type="range" min="0" max="1" step="0.1" value="0.6"></label><br>
                                <label>图像权重: <input type="range" min="0" max="1" step="0.1" value="0.4"></label>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>融合策略评估</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>融合质量</span>
                                    <span style="color: #52c41a;">92.3%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 92.3%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>计算效率</span>
                                    <span style="color: #1890ff;">88.7%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 88.7%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>泛化能力</span>
                                    <span style="color: #faad14;">85.1%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 85.1%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn btn-primary">开始融合</button>
                    <button class="btn btn-secondary">保存配置</button>
                    <button class="btn btn-secondary">重置参数</button>
                </div>
            </div>
        </div>
    `;
}

// 知识点关联构建
function generateKnowledgePointAssociationConstructionContent() {
    return `
        <div class="alert alert-info">
            <strong>知识点关联构建：</strong>系统基于多模态表示的相似度，自动推荐可能存在关联的知识点。
        </div>

        <div class="card">
            <div class="card-header">关联推荐审核工作台</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h6>知识点A: 深度学习</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; background: #f9f9f9;">
                            <div style="margin-bottom: 15px;">
                                <h6>文本描述</h6>
                                <p style="font-size: 14px;">深度学习是机器学习的一个子领域，基于人工神经网络进行学习...</p>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6>关联图像</h6>
                                <div style="background: #f0f0f0; padding: 20px; border-radius: 4px; text-align: center; color: var(--text-secondary);">
                                    🖼️ 神经网络架构图
                                </div>
                            </div>
                            
                            <div>
                                <h6>属性信息</h6>
                                <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                                    <span style="background: #e6f7ff; color: #1890ff; padding: 2px 8px; border-radius: 12px; font-size: 12px;">机器学习</span>
                                    <span style="background: #f6ffed; color: #52c41a; padding: 2px 8px; border-radius: 12px; font-size: 12px;">神经网络</span>
                                    <span style="background: #fff7e6; color: #faad14; padding: 2px 8px; border-radius: 12px; font-size: 12px;">人工智能</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>推荐关联知识点</h6>
                        <div style="max-height: 500px; overflow-y: auto;">
                            <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; margin-bottom: 15px; background: #e6f7ff;">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                    <h6 style="margin: 0; color: #1890ff;">卷积神经网络</h6>
                                    <span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">相似度: 95.2%</span>
                                </div>
                                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 10px;">
                                    深度学习中的一种重要网络架构，特别适用于图像处理任务...
                                </p>
                                <div style="display: flex; gap: 10px;">
                                    <button class="btn btn-sm btn-primary">确认关联</button>
                                    <button class="btn btn-sm btn-secondary">查看详情</button>
                                </div>
                            </div>
                            
                            <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; margin-bottom: 15px; background: #f6ffed;">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                    <h6 style="margin: 0; color: #52c41a;">机器学习</h6>
                                    <span style="background: #faad14; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">相似度: 87.6%</span>
                                </div>
                                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 10px;">
                                    人工智能的一个分支，通过算法让计算机从数据中学习模式...
                                </p>
                                <div style="display: flex; gap: 10px;">
                                    <button class="btn btn-sm btn-primary">确认关联</button>
                                    <button class="btn btn-sm btn-secondary">查看详情</button>
                                </div>
                            </div>
                            
                            <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; margin-bottom: 15px; background: #fff7e6;">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                    <h6 style="margin: 0; color: #faad14;">循环神经网络</h6>
                                    <span style="background: #1890ff; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">相似度: 82.3%</span>
                                </div>
                                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 10px;">
                                    专门用于处理序列数据的神经网络架构，在自然语言处理中应用广泛...
                                </p>
                                <div style="display: flex; gap: 10px;">
                                    <button class="btn btn-sm btn-primary">确认关联</button>
                                    <button class="btn btn-sm btn-secondary">查看详情</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

