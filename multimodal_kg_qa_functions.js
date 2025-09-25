// 面向多模态知识图谱与问答能力建设模块专用功能函数

// 文献处理子系统
function generateLiteratureProcessingSubsystemContent() {
    return `
        <div class="alert alert-info">
            <strong>文献处理子系统：</strong>支持对PDF、JATS XML、HTML等格式的文献进行正文、图、表、公式的自动化解析。
        </div>

        <div class="card">
            <div class="card-header">文献解析任务配置与监控页</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h5>文献解析任务</h5>
                    <button class="btn btn-primary">新建解析任务</button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div class="card" style="border: 1px solid var(--border-color);">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                                <h6 style="margin: 0; color: #1890ff;">深度学习文献集</h6>
                                <span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">进行中</span>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                                包含50篇深度学习相关文献的解析任务，支持PDF、XML格式。
                            </p>
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>解析进度</span>
                                    <span>35/50 (70%)</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 70%;"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                <span style="font-size: 12px; color: var(--text-secondary);">已解析文档: 35</span>
                                <span style="font-size: 12px; color: var(--text-secondary);">剩余: 15</span>
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn btn-sm btn-primary">查看详情</button>
                                <button class="btn btn-sm btn-secondary">暂停</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" style="border: 1px solid var(--border-color);">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                                <h6 style="margin: 0; color: #1890ff;">医学图像处理文献</h6>
                                <span style="background: #faad14; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">已完成</span>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">
                                30篇医学图像处理相关文献，已完成解析和结构化提取。
                            </p>
                            <div style="margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>解析进度</span>
                                    <span>30/30 (100%)</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 100%;"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                <span style="font-size: 12px; color: var(--text-secondary);">已解析文档: 30</span>
                                <span style="font-size: 12px; color: var(--text-secondary);">完成时间: 2024-03-01</span>
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn btn-sm btn-primary">查看结果</button>
                                <button class="btn btn-sm btn-secondary">导出数据</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">解析配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h6>支持格式</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> PDF格式</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> JATS XML格式</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> HTML格式</label>
                            </div>
                            <div>
                                <label><input type="checkbox"> Word格式</label>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>提取内容</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> 正文内容</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> 图表信息</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label><input type="checkbox" checked> 公式结构</label>
                            </div>
                            <div>
                                <label><input type="checkbox" checked> 引用关系</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 专利处理子系统
function generatePatentProcessingSubsystemContent() {
    return `
        <div class="alert alert-info">
            <strong>专利处理子系统：</strong>支持对专利文件中的结构图、流程图和权利要求书文本进行内容解析。
        </div>

        <div class="card">
            <div class="card-header">专利解析结果查看器</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 250px 1fr 300px; gap: 20px; height: 600px;">
                    <div>
                        <h6>专利文件列表</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px; padding: 10px; background: #e6f7ff; border-radius: 4px; cursor: pointer;">
                                <h6 style="margin: 0; font-size: 14px;">CN202410123456.7</h6>
                                <p style="font-size: 12px; color: var(--text-secondary); margin: 5px 0;">基于深度学习的图像识别方法</p>
                                <span style="font-size: 11px; color: #52c41a;">已解析</span>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 10px; background: #f0f0f0; border-radius: 4px; cursor: pointer;">
                                <h6 style="margin: 0; font-size: 14px;">US20240012345</h6>
                                <p style="font-size: 12px; color: var(--text-secondary); margin: 5px 0;">Neural Network Architecture for Medical Diagnosis</p>
                                <span style="font-size: 11px; color: #faad14;">解析中</span>
                            </div>
                            
                            <div style="margin-bottom: 15px; padding: 10px; background: #f0f0f0; border-radius: 4px; cursor: pointer;">
                                <h6 style="margin: 0; font-size: 14px;">EP20240012345</h6>
                                <p style="font-size: 12px; color: var(--text-secondary); margin: 5px 0;">Computer Vision System for Autonomous Vehicles</p>
                                <span style="font-size: 11px; color: #1890ff;">待解析</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>专利原文</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <h4>基于深度学习的图像识别方法</h4>
                            <p><strong>申请号：</strong>CN202410123456.7</p>
                            <p><strong>申请人：</strong>某某科技有限公司</p>
                            
                            <h5>技术领域</h5>
                            <p>本发明涉及计算机视觉技术领域，具体涉及一种基于深度学习的图像识别方法...</p>
                            
                            <h5>背景技术</h5>
                            <p>随着人工智能技术的快速发展，图像识别技术在各个领域得到了广泛应用...</p>
                            
                            <h5>发明内容</h5>
                            <p>本发明的目的是提供一种基于深度学习的图像识别方法，能够提高识别准确率...</p>
                            
                            <h5>附图说明</h5>
                            <p>图1是本发明实施例的系统架构图；</p>
                            <p>图2是本发明实施例的流程图；</p>
                            <p>图3是本发明实施例的神经网络结构图。</p>
                        </div>
                    </div>
                    
                    <div>
                        <h6>结构化三元组</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #1890ff;">权利部件-功能-用途三元组</h6>
                                <div style="background: #f9f9f9; padding: 10px; border-radius: 4px; font-size: 12px;">
                                    <div style="margin-bottom: 5px;"><strong>权利部件：</strong>卷积神经网络</div>
                                    <div style="margin-bottom: 5px;"><strong>功能：</strong>特征提取</div>
                                    <div><strong>用途：</strong>图像识别</div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #52c41a;">技术方案-结构实现-应用场景路径</h6>
                                <div style="background: #f9f9f9; padding: 10px; border-radius: 4px; font-size: 12px;">
                                    <div style="margin-bottom: 5px;"><strong>技术方案：</strong>深度学习图像识别</div>
                                    <div style="margin-bottom: 5px;"><strong>结构实现：</strong>CNN+全连接层</div>
                                    <div><strong>应用场景：</strong>医学影像诊断</div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #faad14;">实体关系</h6>
                                <div style="background: #f9f9f9; padding: 10px; border-radius: 4px; font-size: 12px;">
                                    <div style="margin-bottom: 5px;">深度学习 → 包含 → 卷积神经网络</div>
                                    <div style="margin-bottom: 5px;">图像识别 → 使用 → 特征提取</div>
                                    <div>医学诊断 → 应用 → 图像识别</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 科研数据库处理子系统
function generateResearchDatabaseProcessingSubsystemContent() {
    return `
        <div class="alert alert-info">
            <strong>科研数据库处理子系统：</strong>提供接口用于对接材料性能库、药物分子库等外部结构化科研数据库。
        </div>

        <div class="card">
            <div class="card-header">数据库字段映射编辑器</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; height: 500px;">
                    <div>
                        <h6>外部数据库字段</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #1890ff;">材料性能库</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📊 材料名称 (material_name)
                                    </div>
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔢 密度 (density)
                                    </div>
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🌡️ 熔点 (melting_point)
                                    </div>
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        ⚡ 导电性 (conductivity)
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #52c41a;">药物分子库</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        💊 分子名称 (molecule_name)
                                    </div>
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🧬 分子式 (formula)
                                    </div>
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🎯 靶点 (target)
                                    </div>
                                    <div style="padding: 8px; background: #f0f0f0; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📈 活性值 (activity)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>图谱本体属性</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #1890ff;">材料实体</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📝 名称 (name)
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔢 物理属性 (physical_properties)
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🌡️ 热学性质 (thermal_properties)
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        ⚡ 电学性质 (electrical_properties)
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #52c41a;">分子实体</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📝 名称 (name)
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🧬 结构信息 (structure)
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🎯 作用机制 (mechanism)
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📈 生物活性 (bioactivity)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <h6>映射关系</h6>
                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; background: #f9f9f9;">
                        <div style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 10px;">
                            <div style="padding: 8px; background: #e6f7ff; border-radius: 4px;">材料名称 → 名称</div>
                            <div style="color: #1890ff;">→</div>
                            <div style="padding: 8px; background: #e6f7ff; border-radius: 4px;">名称</div>
                        </div>
                        <div style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 10px;">
                            <div style="padding: 8px; background: #e6f7ff; border-radius: 4px;">密度 → 物理属性</div>
                            <div style="color: #52c41a;">→</div>
                            <div style="padding: 8px; background: #e6f7ff; border-radius: 4px;">物理属性</div>
                        </div>
                        <div style="display: flex; justify-content: space-around; align-items: center;">
                            <div style="padding: 8px; background: #f6ffed; border-radius: 4px;">分子名称 → 名称</div>
                            <div style="color: #faad14;">→</div>
                            <div style="padding: 8px; background: #f6ffed; border-radius: 4px;">名称</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 科研通用本体构建
function generateResearchOntologyConstructionContent() {
    return `
        <div class="alert alert-info">
            <strong>科研通用本体构建：</strong>提供本体编辑器，用于构建和管理覆盖实体类别、关系类型、属性层级的科研通用本体。
        </div>

        <div class="card">
            <div class="card-header">本体对齐工作台</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; height: 500px;">
                    <div>
                        <h6>文献实体类别</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #1890ff;">概念实体</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📚 理论概念
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔬 实验方法
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📊 数据指标
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #52c41a;">实体关系</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔗 引用关系
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📈 发展关系
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔄 对比关系
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>专利实体类别</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #1890ff;">技术实体</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        ⚙️ 技术方案
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔧 结构部件
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🎯 应用场景
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #52c41a;">技术关系</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔗 同族关系
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📈 改进关系
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔄 替代关系
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>数据库实体类别</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #1890ff;">数据实体</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📊 数据条目
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔢 数值属性
                                    </div>
                                    <div style="padding: 8px; background: #e6f7ff; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📝 描述属性
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #52c41a;">数据关系</h6>
                                <div style="margin-left: 15px;">
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔗 关联关系
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        📈 统计关系
                                    </div>
                                    <div style="padding: 8px; background: #f6ffed; margin: 5px 0; border-radius: 4px; cursor: grab;">
                                        🔄 依赖关系
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <h6>对齐关系</h6>
                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; background: #f9f9f9;">
                        <div style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 10px;">
                            <div style="padding: 8px; background: #e6f7ff; border-radius: 4px;">理论概念</div>
                            <div style="color: #1890ff;">↔</div>
                            <div style="padding: 8px; background: #e6f7ff; border-radius: 4px;">技术方案</div>
                            <div style="color: #52c41a;">↔</div>
                            <div style="padding: 8px; background: #e6f7ff; border-radius: 4px;">数据条目</div>
                        </div>
                        <div style="display: flex; justify-content: space-around; align-items: center;">
                            <div style="padding: 8px; background: #f6ffed; border-radius: 4px;">引用关系</div>
                            <div style="color: #faad14;">↔</div>
                            <div style="padding: 8px; background: #f6ffed; border-radius: 4px;">同族关系</div>
                            <div style="color: #1890ff;">↔</div>
                            <div style="padding: 8px; background: #f6ffed; border-radius: 4px;">关联关系</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 知识自动提取与建模
function generateKnowledgeAutomaticExtractionModelingContent() {
    return `
        <div class="alert alert-info">
            <strong>知识自动提取与建模：</strong>支持"实体-关系-实体+属性"四元结构的自动化提取与图谱建模。
        </div>

        <div class="card">
            <div class="card-header">知识提取规则与模型配置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <h6>提取模型选择</h6>
                        <div class="form-group">
                            <label class="form-label">模型类型</label>
                            <select class="form-input">
                                <option>四元组提取模型</option>
                                <option>三元组提取模型</option>
                                <option>实体关系联合提取模型</option>
                                <option>端到端知识提取模型</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">预训练模型</label>
                            <select class="form-input">
                                <option>BERT-based</option>
                                <option>RoBERTa-based</option>
                                <option>SciBERT-based</option>
                                <option>BioBERT-based</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">训练数据</label>
                            <input type="file" class="form-input" accept=".json,.csv">
                        </div>
                    </div>
                    
                    <div>
                        <h6>模型参数配置</h6>
                        <div class="form-group">
                            <label class="form-label">学习率</label>
                            <input type="number" class="form-input" value="2e-5" step="1e-6">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">批次大小</label>
                            <input type="number" class="form-input" value="16" min="1" max="64">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">训练轮数</label>
                            <input type="number" class="form-input" value="10" min="1" max="100">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">最大序列长度</label>
                            <input type="number" class="form-input" value="512" min="128" max="1024">
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h6>关系预测模型配置</h6>
                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                            <div>
                                <div class="form-group">
                                    <label class="form-label">模型架构</label>
                                    <select class="form-input">
                                        <option>图神经网络 (GNN)</option>
                                        <option>卷积神经网络 (CNN)</option>
                                        <option>循环神经网络 (RNN)</option>
                                        <option>Transformer</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <div class="form-group">
                                    <label class="form-label">嵌入维度</label>
                                    <input type="number" class="form-input" value="256" min="64" max="1024">
                                </div>
                            </div>
                            
                            <div>
                                <div class="form-group">
                                    <label class="form-label">训练数据比例</label>
                                    <input type="range" class="form-input" min="0.6" max="0.9" step="0.05" value="0.8">
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn btn-primary">开始训练</button>
                    <button class="btn btn-secondary">保存配置</button>
                    <button class="btn btn-secondary">重置参数</button>
                </div>
            </div>
        </div>
    `;
}

// 跨模态融合与更新
function generateCrossModalFusionUpdateContent() {
    return `
        <div class="alert alert-info">
            <strong>跨模态融合与更新：</strong>基于文献引证、专利同族等关联，实现三类资源中实体的精准匹配与融合。
        </div>

        <div class="card">
            <div class="card-header">实体融合审核界面</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <h5>待融合实体对</h5>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <button class="btn btn-primary">全部融合</button>
                        <button class="btn btn-secondary">批量审核</button>
                        <button class="btn btn-secondary">导出报告</button>
                    </div>
                </div>
                
                <div style="max-height: 500px; overflow-y: auto;">
                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                            <h6 style="margin: 0; color: #1890ff;">实体融合任务 #001</h6>
                            <span style="background: #faad14; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">待审核</span>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <h6 style="color: #1890ff;">文献实体</h6>
                                <div style="background: #e6f7ff; padding: 15px; border-radius: 4px;">
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体名称：</strong>深度学习
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体类型：</strong>理论概念
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>来源文献：</strong>Deep Learning: A Comprehensive Review
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>属性：</strong>
                                        <ul style="margin: 5px 0; padding-left: 20px;">
                                            <li>定义：基于神经网络的机器学习方法</li>
                                            <li>应用领域：图像识别、自然语言处理</li>
                                            <li>发展时间：2006年至今</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h6 style="color: #52c41a;">专利实体</h6>
                                <div style="background: #f6ffed; padding: 15px; border-radius: 4px;">
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体名称：</strong>深度学习技术
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体类型：</strong>技术方案
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>来源专利：</strong>CN202410123456.7
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>属性：</strong>
                                        <ul style="margin: 5px 0; padding-left: 20px;">
                                            <li>技术描述：基于深度神经网络的学习方法</li>
                                            <li>应用场景：医学图像诊断</li>
                                            <li>申请时间：2024年</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 15px; text-align: center;">
                            <button class="btn btn-primary">确认融合</button>
                            <button class="btn btn-secondary">拆分实体</button>
                            <button class="btn btn-secondary">跳过</button>
                        </div>
                    </div>
                    
                    <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                            <h6 style="margin: 0; color: #1890ff;">实体融合任务 #002</h6>
                            <span style="background: #52c41a; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">已融合</span>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <h6 style="color: #1890ff;">文献实体</h6>
                                <div style="background: #e6f7ff; padding: 15px; border-radius: 4px;">
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体名称：</strong>卷积神经网络
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体类型：</strong>算法模型
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>来源文献：</strong>ImageNet Classification with Deep CNNs
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h6 style="color: #52c41a;">专利实体</h6>
                                <div style="background: #f6ffed; padding: 15px; border-radius: 4px;">
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体名称：</strong>CNN算法
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>实体类型：</strong>技术方案
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <strong>来源专利：</strong>US20240012345
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 15px; text-align: center;">
                            <span style="color: #52c41a;">✅ 已成功融合为统一实体：卷积神经网络</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 图谱分析与可视化
function generateGraphAnalysisVisualizationContent() {
    return `
        <div class="alert alert-info">
            <strong>图谱分析与可视化：</strong>提供图谱结构可视化工具，直观展示"文献理论-专利技术-实验数据"的关联网络。
        </div>

        <div class="card">
            <div class="card-header">关联网络浏览器</div>
            <div class="card-body">
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h5>知识图谱可视化</h5>
                        <div style="display: flex; gap: 10px;">
                            <button class="btn btn-primary">力导向布局</button>
                            <button class="btn btn-secondary">层次布局</button>
                            <button class="btn btn-secondary">圆形布局</button>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; height: 500px;">
                    <div>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; background: #f9f9f9;">
                            <div style="text-align: center; color: var(--text-secondary); margin-top: 200px;">
                                🕸️ 知识图谱可视化区域
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h6>分析工具</h6>
                        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 6px; height: 100%; overflow-y: auto;">
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #1890ff;">社群分析</h6>
                                <div style="margin-left: 15px;">
                                    <button class="btn btn-sm btn-primary" style="width: 100%; margin-bottom: 5px;">运行社群检测</button>
                                    <button class="btn btn-sm btn-secondary" style="width: 100%; margin-bottom: 5px;">计算中心性</button>
                                    <button class="btn btn-sm btn-secondary" style="width: 100%;">识别关键节点</button>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #52c41a;">路径抽取</h6>
                                <div style="margin-left: 15px;">
                                    <div class="form-group">
                                        <label class="form-label">起始节点</label>
                                        <input type="text" class="form-input" placeholder="输入起始节点">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">目标节点</label>
                                        <input type="text" class="form-input" placeholder="输入目标节点">
                                    </div>
                                    <button class="btn btn-sm btn-primary" style="width: 100%;">抽取路径</button>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <h6 style="color: #faad14;">图谱统计</h6>
                                <div style="margin-left: 15px; font-size: 12px;">
                                    <div style="margin-bottom: 5px;">节点总数: 1,247</div>
                                    <div style="margin-bottom: 5px;">边总数: 3,456</div>
                                    <div style="margin-bottom: 5px;">平均度: 5.5</div>
                                    <div style="margin-bottom: 5px;">聚类系数: 0.23</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

