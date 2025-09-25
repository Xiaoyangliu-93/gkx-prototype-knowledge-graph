// 知识建模模块专用功能函数

// 种子术语管理
function generateSeedTermsManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>种子术语管理：</strong>支持用户批量导入或手动录入特定领域的初始核心术语，作为模型学习的起点。
        </div>

        <div class="card">
            <div class="card-header">种子术语库配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">术语来源</label>
                            <select class="form-input">
                                <option>手动录入</option>
                                <option>批量导入</option>
                                <option>词典导入</option>
                                <option>专家标注</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">领域分类</label>
                            <select class="form-input">
                                <option>人工智能</option>
                                <option>生物医学</option>
                                <option>材料科学</option>
                                <option>工程技术</option>
                                <option>计算机科学</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">术语权重</label>
                            <input type="range" class="form-input" min="0" max="100" value="80">
                            <span>80%</span>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">术语文件</label>
                            <input type="file" class="form-input" accept=".txt,.csv,.json">
                            <small>支持 TXT, CSV, JSON 格式</small>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">质量验证</label>
                            <div>
                                <label><input type="checkbox" checked> 自动去重</label><br>
                                <label><input type="checkbox" checked> 格式验证</label><br>
                                <label><input type="checkbox"> 语义检查</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">导入术语</button>
                    <button class="btn btn-secondary">预览术语</button>
                    <button class="btn btn-secondary">导出术语</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">种子术语列表</div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>术语</th>
                                <th>领域</th>
                                <th>权重</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>机器学习</td>
                                <td>人工智能</td>
                                <td>95%</td>
                                <td><span style="color: green;">已激活</span></td>
                                <td>
                                    <button class="btn btn-sm">编辑</button>
                                    <button class="btn btn-sm">删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>深度学习</td>
                                <td>人工智能</td>
                                <td>92%</td>
                                <td><span style="color: green;">已激活</span></td>
                                <td>
                                    <button class="btn btn-sm">编辑</button>
                                    <button class="btn btn-sm">删除</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 候选术语生成
function generateCandidateTermsGenerationContent() {
    return `
        <div class="alert alert-info">
            <strong>候选术语生成：</strong>系统基于算法从海量文本中自动发现并推荐新的领域术语，供专家审核。
        </div>

        <div class="card">
            <div class="card-header">生成算法配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">生成算法</label>
                            <select class="form-input">
                                <option>TF-IDF + 统计方法</option>
                                <option>Word2Vec + 聚类</option>
                                <option>BERT + 语义相似度</option>
                                <option>LDA主题模型</option>
                                <option>自定义算法</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">最小词频</label>
                            <input type="number" class="form-input" value="5" min="1">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">相似度阈值</label>
                            <input type="range" class="form-input" min="0" max="100" value="75">
                            <span>75%</span>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">语料库选择</label>
                            <select class="form-input">
                                <option>科技文献库</option>
                                <option>专利数据库</option>
                                <option>学术论文库</option>
                                <option>自定义语料库</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">过滤条件</label>
                            <div>
                                <label><input type="checkbox" checked> 过滤停用词</label><br>
                                <label><input type="checkbox" checked> 过滤数字</label><br>
                                <label><input type="checkbox"> 过滤单字符</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">开始生成</button>
                    <button class="btn btn-secondary">预览设置</button>
                    <button class="btn btn-secondary">保存配置</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">生成进度</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px;">
                    <div class="stat-card">
                        <div class="stat-number">2,847</div>
                        <div class="stat-label">候选术语</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">156</div>
                        <div class="stat-label">新发现</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">89%</div>
                        <div class="stat-label">置信度</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">12分钟</div>
                        <div class="stat-label">剩余时间</div>
                    </div>
                </div>
                
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 65%;"></div>
                </div>
                <div style="text-align: center; margin-top: 10px;">处理进度: 65%</div>
            </div>
        </div>
    `;
}

// 依存关系图构建
function generateDependencyGraphConstructionContent() {
    return `
        <div class="alert alert-info">
            <strong>依存关系图构建：</strong>系统自动对文本进行句法分析，构建句子成分之间的依存关系图。
        </div>

        <div class="card">
            <div class="card-header">句法分析配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">分析引擎</label>
                            <select class="form-input">
                                <option>Stanford CoreNLP</option>
                                <option>spaCy</option>
                                <option>LTP</option>
                                <option>自定义引擎</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">语言模型</label>
                            <select class="form-input">
                                <option>中文模型</option>
                                <option>英文模型</option>
                                <option>多语言模型</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">分析深度</label>
                            <select class="form-input">
                                <option>基础分析</option>
                                <option>深度分析</option>
                                <option>完整分析</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">输入文本</label>
                            <textarea class="form-input" rows="6" placeholder="请输入待分析的文本..."></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">输出格式</label>
                            <select class="form-input">
                                <option>JSON</option>
                                <option>XML</option>
                                <option>CoNLL-U</option>
                                <option>可视化图形</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">开始分析</button>
                    <button class="btn btn-secondary">预览结果</button>
                    <button class="btn btn-secondary">导出结果</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">依存关系图可视化</div>
            <div class="card-body">
                <div class="graph-container">
                    <div style="text-align: center; color: var(--text-secondary);">
                        <div style="font-size: 48px; margin-bottom: 20px;">🔗</div>
                        <div>依存关系图将在此处显示</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 规则定义与管理
function generateRuleDefinitionManagementContent() {
    return `
        <div class="alert alert-info">
            <strong>规则定义与管理：</strong>提供可视化的规则编写界面，支持用户为概念和属性定义逻辑规则。
        </div>

        <div class="card">
            <div class="card-header">规则编辑器</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">规则类型</label>
                            <select class="form-input">
                                <option>概念规则</option>
                                <option>属性规则</option>
                                <option>关系规则</option>
                                <option>约束规则</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">规则名称</label>
                            <input type="text" class="form-input" placeholder="输入规则名称">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">规则描述</label>
                            <textarea class="form-input" rows="3" placeholder="描述规则的作用和目的"></textarea>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">规则条件</label>
                            <textarea class="form-input" rows="4" placeholder="IF 条件 THEN 结果"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">规则优先级</label>
                            <select class="form-input">
                                <option>高</option>
                                <option>中</option>
                                <option>低</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">规则状态</label>
                            <div>
                                <label><input type="radio" name="ruleStatus" checked> 启用</label>
                                <label><input type="radio" name="ruleStatus"> 禁用</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">保存规则</button>
                    <button class="btn btn-secondary">测试规则</button>
                    <button class="btn btn-secondary">导入规则</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">规则列表</div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>规则名称</th>
                                <th>类型</th>
                                <th>优先级</th>
                                <th>状态</th>
                                <th>创建时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>概念继承规则</td>
                                <td>概念规则</td>
                                <td>高</td>
                                <td><span style="color: green;">启用</span></td>
                                <td>2024-01-15</td>
                                <td>
                                    <button class="btn btn-sm">编辑</button>
                                    <button class="btn btn-sm">测试</button>
                                    <button class="btn btn-sm">删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>属性约束规则</td>
                                <td>约束规则</td>
                                <td>中</td>
                                <td><span style="color: orange;">禁用</span></td>
                                <td>2024-01-14</td>
                                <td>
                                    <button class="btn btn-sm">编辑</button>
                                    <button class="btn btn-sm">测试</button>
                                    <button class="btn btn-sm">删除</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 多维度解析引擎
function generateMultiDimensionalParsingContent() {
    return `
        <div class="alert alert-info">
            <strong>多维度解析引擎：</strong>系统自动提取文献中的研究对象、方法、结论等核心要素，生成结构化知识卡片。
        </div>

        <div class="card">
            <div class="card-header">解析配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">文献类型</label>
                            <select class="form-input">
                                <option>学术论文</option>
                                <option>技术报告</option>
                                <option>专利文档</option>
                                <option>会议论文</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">解析维度</label>
                            <div>
                                <label><input type="checkbox" checked> 研究对象</label><br>
                                <label><input type="checkbox" checked> 研究方法</label><br>
                                <label><input type="checkbox" checked> 研究结论</label><br>
                                <label><input type="checkbox"> 实验数据</label><br>
                                <label><input type="checkbox"> 技术图表</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">解析深度</label>
                            <select class="form-input">
                                <option>基础解析</option>
                                <option>深度解析</option>
                                <option>完整解析</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">文献上传</label>
                            <input type="file" class="form-input" accept=".pdf,.doc,.docx,.txt">
                            <small>支持 PDF, DOC, DOCX, TXT 格式</small>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">输出格式</label>
                            <select class="form-input">
                                <option>知识卡片</option>
                                <option>结构化数据</option>
                                <option>可视化图谱</option>
                                <option>报告文档</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">质量控制</label>
                            <div>
                                <label><input type="checkbox" checked> 自动验证</label><br>
                                <label><input type="checkbox"> 人工审核</label><br>
                                <label><input type="checkbox"> 专家标注</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">开始解析</button>
                    <button class="btn btn-secondary">预览结果</button>
                    <button class="btn btn-secondary">批量处理</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">解析结果</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                    <div class="stat-card">
                        <div class="stat-number">15</div>
                        <div class="stat-label">研究对象</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">8</div>
                        <div class="stat-label">研究方法</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">12</div>
                        <div class="stat-label">研究结论</div>
                    </div>
                </div>
                
                <div class="graph-container" style="height: 300px; margin-top: 20px;">
                    <div style="text-align: center; color: var(--text-secondary);">
                        <div style="font-size: 48px; margin-bottom: 20px;">📊</div>
                        <div>知识卡片可视化</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
