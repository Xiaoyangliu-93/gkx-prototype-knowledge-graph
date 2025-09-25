// 图谱应用模块专用功能函数

// 智能检索接口
function generateIntelligentSearchInterfaceContent() {
    return `
        <div class="alert alert-info">
            <strong>智能检索接口：</strong>支持用户直接输入自然语言问题作为检索查询，无需构造复杂检索式。
        </div>

        <div class="card">
            <div class="card-header">统一搜索主页</div>
            <div class="card-body">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h3>智能文献检索</h3>
                    <p style="color: var(--text-secondary);">输入您的研究问题，我们将为您找到最相关的文献</p>
                </div>
                
                <div style="max-width: 800px; margin: 0 auto;">
                    <div class="form-group">
                        <label class="form-label">研究问题</label>
                        <textarea class="form-input" rows="3" placeholder="例如：深度学习在医学图像诊断中的应用有哪些最新进展？" style="font-size: 16px; padding: 15px;"></textarea>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                        <div class="form-group">
                            <label class="form-label">大模型选择</label>
                            <select class="form-input">
                                <option>GPT-4 (推荐)</option>
                                <option>Claude-3</option>
                                <option>Gemini Pro</option>
                                <option>文心一言</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">检索模式</label>
                            <select class="form-input">
                                <option>混合语义检索</option>
                                <option>基于概念检索</option>
                                <option>基于规则检索</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="btn btn-primary" style="padding: 12px 30px; font-size: 16px;">开始搜索</button>
                        <button class="btn btn-secondary">高级搜索</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">搜索统计</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
                    <div class="stat-card">
                        <div class="stat-number">1.5亿+</div>
                        <div class="stat-label">文献总量</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">40+</div>
                        <div class="stat-label">检索结果</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">3种</div>
                        <div class="stat-label">大模型</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">95%</div>
                        <div class="stat-label">准确率</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 检索结果处理
function generateSearchResultProcessingContent() {
    return `
        <div class="alert alert-info">
            <strong>检索结果处理：</strong>支持对检索到的文献列表按时间、期刊、影响因子等多种方式进行二次筛选和排序。
        </div>

        <div class="card">
            <div class="card-header">三栏式搜索结果页</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 250px 1fr 300px; gap: 20px; height: 600px;">
                    <div>
                        <h5>筛选器</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div class="form-group">
                                <label class="form-label">发表时间</label>
                                <select class="form-input">
                                    <option>全部时间</option>
                                    <option>最近一年</option>
                                    <option>最近三年</option>
                                    <option>最近五年</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">期刊类型</label>
                                <div>
                                    <label><input type="checkbox" checked> 顶级期刊</label><br>
                                    <label><input type="checkbox" checked> 核心期刊</label><br>
                                    <label><input type="checkbox"> 会议论文</label>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">影响因子</label>
                                <div>
                                    <label>最低: <input type="number" value="5" min="0"></label><br>
                                    <label>最高: <input type="number" value="50" min="0"></label>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">研究领域</label>
                                <select class="form-input">
                                    <option>全部领域</option>
                                    <option>人工智能</option>
                                    <option>生物医学</option>
                                    <option>材料科学</option>
                                </select>
                            </div>
                            
                            <button class="btn btn-primary" style="width: 100%;">应用筛选</button>
                        </div>
                    </div>
                    
                    <div>
                        <h5>文献列表</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                    <h6 style="margin: 0; color: #1890ff;">Deep Learning for Medical Image Analysis: A Comprehensive Review</h6>
                                    <span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">影响因子: 12.5</span>
                                </div>
                                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 10px;">
                                    <strong>AI总结：</strong>本文全面回顾了深度学习在医学图像分析中的应用，包括卷积神经网络、注意力机制等关键技术...
                                </p>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 12px; color: var(--text-secondary);">Nature Medicine • 2024 • 引用: 156</span>
                                    <div>
                                        <button class="btn btn-sm btn-primary">查看详情</button>
                                        <button class="btn btn-sm">添加到对话</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                    <h6 style="margin: 0; color: #1890ff;">Transformer-based Medical Image Segmentation</h6>
                                    <span style="background: #faad14; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">影响因子: 8.3</span>
                                </div>
                                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 10px;">
                                    <strong>AI总结：</strong>本研究提出了一种基于Transformer的医学图像分割方法，在多个数据集上取得了SOTA结果...
                                </p>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 12px; color: var(--text-secondary);">IEEE TMI • 2024 • 引用: 89</span>
                                    <div>
                                        <button class="btn btn-sm btn-primary">查看详情</button>
                                        <button class="btn btn-sm">添加到对话</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>AI对话</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; display: flex; flex-direction: column;">
                            <div style="flex: 1; overflow-y: auto; margin-bottom: 15px;">
                                <div style="margin-bottom: 10px; padding: 10px; background: #e6f7ff; border-radius: 6px;">
                                    <strong>用户：</strong>这些文献的主要研究方法是什么？
                                </div>
                                <div style="margin-bottom: 10px; padding: 10px; background: #f6ffed; border-radius: 6px;">
                                    <strong>AI：</strong>根据选中的文献，主要研究方法包括：1）卷积神经网络用于特征提取；2）注意力机制提升模型性能；3）Transformer架构处理序列数据...
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <textarea class="form-input" rows="2" placeholder="输入您的问题..."></textarea>
                            </div>
                            
                            <div style="text-align: center;">
                                <button class="btn btn-primary">发送</button>
                                <button class="btn btn-secondary">清空</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 检索内容管理
function generateSearchContentManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>检索内容管理：</strong>支持将检索到的文献列表一键批量保存到用户的个人知识库中。
        </div>

        <div class="card">
            <div class="card-header">文献列表工具栏</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <label><input type="checkbox" style="margin-right: 8px;">全选</label>
                        <span style="margin-left: 20px;">已选择 <strong>3</strong> 篇文献</span>
                    </div>
                    <div>
                        <button class="btn btn-primary">全部保存至知识库</button>
                        <button class="btn btn-secondary">导出为BibTeX</button>
                        <button class="btn btn-secondary">导出为EndNote</button>
                    </div>
                </div>
                
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox"></th>
                                <th>标题</th>
                                <th>作者</th>
                                <th>期刊</th>
                                <th>年份</th>
                                <th>影响因子</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" checked></td>
                                <td>Deep Learning for Medical Image Analysis</td>
                                <td>Smith, J. et al.</td>
                                <td>Nature Medicine</td>
                                <td>2024</td>
                                <td>12.5</td>
                                <td>
                                    <button class="btn btn-sm btn-primary">保存</button>
                                    <button class="btn btn-sm">预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" checked></td>
                                <td>Transformer-based Medical Image Segmentation</td>
                                <td>Johnson, M. et al.</td>
                                <td>IEEE TMI</td>
                                <td>2024</td>
                                <td>8.3</td>
                                <td>
                                    <button class="btn btn-sm btn-primary">保存</button>
                                    <button class="btn btn-sm">预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" checked></td>
                                <td>Attention Mechanisms in Medical AI</td>
                                <td>Brown, K. et al.</td>
                                <td>Medical Image Analysis</td>
                                <td>2023</td>
                                <td>6.8</td>
                                <td>
                                    <button class="btn btn-sm btn-primary">保存</button>
                                    <button class="btn btn-sm">预览</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">保存设置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">目标文件夹</label>
                            <select class="form-input">
                                <option>医学AI研究</option>
                                <option>深度学习应用</option>
                                <option>图像处理</option>
                                <option>新建文件夹...</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">标签设置</label>
                            <input type="text" class="form-input" placeholder="输入标签，用逗号分隔" value="深度学习,医学图像,AI">
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">元数据设置</label>
                            <div>
                                <label><input type="checkbox" checked> 自动下载PDF</label><br>
                                <label><input type="checkbox" checked> 提取摘要</label><br>
                                <label><input type="checkbox"> 生成关键词</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">保存格式</label>
                            <select class="form-input">
                                <option>标准格式</option>
                                <option>简化格式</option>
                                <option>详细格式</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 动态演化可视化
function generateDynamicEvolutionVisualizationContent() {
    return `
        <div class="alert alert-info">
            <strong>动态演化可视化：</strong>以时序流图等形式，动态展示特定研究主题的演进路径和热点变迁。
        </div>

        <div class="card">
            <div class="card-header">动态演化分析仪表板</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                        <div class="form-group">
                            <label class="form-label">研究主题</label>
                            <input type="text" class="form-input" placeholder="输入研究主题" value="深度学习">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">时间范围</label>
                            <select class="form-input">
                                <option>2015-2024</option>
                                <option>2020-2024</option>
                                <option>2022-2024</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">分析类型</label>
                            <select class="form-input">
                                <option>主题演化</option>
                                <option>学科交叉</option>
                                <option>技术发展</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="btn btn-primary">开始分析</button>
                        <button class="btn btn-secondary">重置参数</button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <h5>主题演化时间线</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 120px;">
                                📈 主题演化时间线图表
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>学科交叉网络</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 120px;">
                                🕸️ 学科交叉网络图
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h5>热点关键词云</h5>
                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 200px; background: #f9f9f9;">
                        <div style="text-align: center; color: var(--text-secondary); margin-top: 80px;">
                            ☁️ 关键词云图
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 竞争力与情景分析
function generateCompetitivenessScenarioAnalysisContent() {
    return `
        <div class="alert alert-info">
            <strong>竞争力与情景分析：</strong>对比不同机构、学者或技术方案在多个维度上的竞争力，并以雷达图形式呈现。
        </div>

        <div class="card">
            <div class="card-header">分析沙盒配置页</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>参数配置</h5>
                        <div class="form-group">
                            <label class="form-label">分析对象</label>
                            <select class="form-input">
                                <option>研究机构</option>
                                <option>学者个人</option>
                                <option>技术方案</option>
                                <option>期刊杂志</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">对比维度</label>
                            <div>
                                <label><input type="checkbox" checked> 论文数量</label><br>
                                <label><input type="checkbox" checked> 引用次数</label><br>
                                <label><input type="checkbox" checked> 影响因子</label><br>
                                <label><input type="checkbox"> 合作网络</label><br>
                                <label><input type="checkbox"> 创新指数</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">时间窗口</label>
                            <input type="range" class="form-input" min="1" max="10" value="5">
                            <span>5年</span>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">权重设置</label>
                            <div>
                                <label>论文数量: <input type="range" min="0" max="1" step="0.1" value="0.3"></label><br>
                                <label>引用次数: <input type="range" min="0" max="1" step="0.1" value="0.4"></label><br>
                                <label>影响因子: <input type="range" min="0" max="1" step="0.1" value="0.3"></label>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>竞争力雷达图</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 150px;">
                                📊 竞争力雷达图
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <h5>情景推演</h5>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <div class="form-group">
                                <label class="form-label">推演参数</label>
                                <div>
                                    <label>投资增长率: <input type="range" min="-50" max="200" value="20"> 20%</label><br>
                                    <label>人才流入: <input type="range" min="-30" max="100" value="10"> 10%</label><br>
                                    <label>政策支持: <input type="range" min="0" max="100" value="70"> 70%</label>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h6>推演结果</h6>
                            <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; background: #f0f0f0;">
                                <div style="margin-bottom: 10px;">
                                    <strong>乐观情景：</strong>竞争力指数 +15%
                                </div>
                                <div style="margin-bottom: 10px;">
                                    <strong>基准情景：</strong>竞争力指数 +8%
                                </div>
                                <div>
                                    <strong>悲观情景：</strong>竞争力指数 -5%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 关联与影响分析
function generateAssociationImpactAnalysisContent() {
    return `
        <div class="alert alert-info">
            <strong>关联与影响分析：</strong>挖掘某一领域的突破性技术对其他相关或非相关领域产生的潜在影响。
        </div>

        <div class="card">
            <div class="card-header">关联影响力浏览器</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div class="form-group">
                            <label class="form-label">核心技术</label>
                            <input type="text" class="form-input" placeholder="输入核心技术" value="Transformer">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">影响范围</label>
                            <select class="form-input">
                                <option>直接相关领域</option>
                                <option>间接相关领域</option>
                                <option>跨领域影响</option>
                                <option>全部领域</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="btn btn-primary">开始分析</button>
                        <button class="btn btn-secondary">重置</button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
                    <div>
                        <h5>影响网络图</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 150px;">
                                🕸️ 影响网络图
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h5>影响分析结果</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; overflow-y: auto;">
                            <div style="margin-bottom: 15px; padding: 10px; background: #e6f7ff; border-radius: 4px;">
                                <strong>自然语言处理</strong><br>
                                <span style="color: #52c41a;">影响强度: 95%</span><br>
                                <small>直接应用，推动大模型发展</small>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 10px; background: #f6ffed; border-radius: 4px;">
                                <strong>计算机视觉</strong><br>
                                <span style="color: #52c41a;">影响强度: 88%</span><br>
                                <small>Vision Transformer广泛应用</small>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 10px; background: #fff7e6; border-radius: 4px;">
                                <strong>生物信息学</strong><br>
                                <span style="color: #faad14;">影响强度: 72%</span><br>
                                <small>蛋白质结构预测应用</small>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
                                <strong>材料科学</strong><br>
                                <span style="color: #1890ff;">影响强度: 65%</span><br>
                                <small>材料性质预测模型</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 关系量化模型
function generateRelationshipQuantificationModelContent() {
    return `
        <div class="alert alert-info">
            <strong>关系量化模型：</strong>支持用户配置或训练关系评分模型，用于量化实体间关系的重要性。
        </div>

        <div class="card">
            <div class="card-header">关系评分模型配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h5>模型配置</h5>
                        <div class="form-group">
                            <label class="form-label">评分算法</label>
                            <select class="form-input">
                                <option>基于图结构</option>
                                <option>基于语义相似度</option>
                                <option>基于共现频率</option>
                                <option>混合模型</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">关系类型权重</label>
                            <div>
                                <label>引用关系: <input type="range" min="0" max="1" step="0.1" value="0.8"></label><br>
                                <label>合作关系: <input type="range" min="0" max="1" step="0.1" value="0.6"></label><br>
                                <label>相似关系: <input type="range" min="0" max="1" step="0.1" value="0.4"></label><br>
                                <label>竞争关系: <input type="range" min="0" max="1" step="0.1" value="0.3"></label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">时间衰减因子</label>
                            <input type="range" class="form-input" min="0" max="1" step="0.1" value="0.5">
                            <span>0.5</span>
                        </div>
                    </div>
                    
                    <div>
                        <h5>模型性能</h5>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 300px;">
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>准确率</span>
                                    <span style="color: #52c41a;">92.5%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 92.5%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>召回率</span>
                                    <span style="color: #1890ff;">88.3%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 88.3%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>F1分数</span>
                                    <span style="color: #faad14;">90.3%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 90.3%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">训练模型</button>
                    <button class="btn btn-secondary">测试模型</button>
                    <button class="btn btn-secondary">保存配置</button>
                </div>
            </div>
        </div>
    `;
}

// 关系分析与导出
function generateRelationshipAnalysisExportContent() {
    return `
        <div class="alert alert-info">
            <strong>关系分析与导出：</strong>以可交互的网络图或和弦图等形式，可视化展示实体间的关系网络。
        </div>

        <div class="card">
            <div class="card-header">关系分析可视化面板</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h5>关系网络图</h5>
                    </div>
                    <div>
                        <button class="btn btn-primary">导出为CSV</button>
                        <button class="btn btn-secondary">导出为图片</button>
                        <button class="btn btn-secondary">导出为JSON</button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
                    <div>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 150px;">
                                🕸️ 关系网络图
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>关系统计</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 400px; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>总关系数</span>
                                    <span style="color: #52c41a;">1,247</span>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>强关系 (>0.8)</span>
                                    <span style="color: #1890ff;">156</span>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>中等关系 (0.5-0.8)</span>
                                    <span style="color: #faad14;">423</span>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>弱关系 (<0.5)</span>
                                    <span style="color: #ff4d4f;">668</span>
                                </div>
                            </div>
                            
                            <div style="margin-top: 20px;">
                                <h6>关系类型分布</h6>
                                <div style="margin-bottom: 10px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <span>引用关系</span>
                                        <span>45%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 45%;"></div>
                                    </div>
                                </div>
                                
                                <div style="margin-bottom: 10px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <span>合作关系</span>
                                        <span>30%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 30%;"></div>
                                    </div>
                                </div>
                                
                                <div style="margin-bottom: 10px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <span>相似关系</span>
                                        <span>25%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 25%;"></div>
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

