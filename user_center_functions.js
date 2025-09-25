// 用户中心模块专用功能函数

// 基本信息
function generateBasicInfoContent() {
    return `
        <div class="alert alert-info">
            <strong>基本信息：</strong>管理您的个人资料和账户信息。
        </div>

        <div class="card">
            <div class="card-header">个人资料</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                    <div>
                        <div style="text-align: center; margin-bottom: 30px;">
                            <div style="width: 120px; height: 120px; border-radius: 50%; background: #f0f0f0; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 48px;">
                                👤
                            </div>
                            <button class="btn btn-primary">更换头像</button>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">用户名</label>
                            <input type="text" class="form-input" value="张三" readonly>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">邮箱</label>
                            <input type="email" class="form-input" value="zhangsan@example.com">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">姓名</label>
                            <input type="text" class="form-input" value="张三">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">部门</label>
                            <select class="form-input">
                                <option>研发部</option>
                                <option>产品部</option>
                                <option>运营部</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">职位</label>
                            <input type="text" class="form-input" value="高级工程师">
                        </div>
                        
                        <div style="margin-top: 20px;">
                            <button class="btn btn-primary">保存修改</button>
                            <button class="btn btn-secondary">重置</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 头像设置
function generateAvatarSettingsContent() {
    return `
        <div class="alert alert-info">
            <strong>头像设置：</strong>上传和自定义您的个人头像。
        </div>

        <div class="card">
            <div class="card-header">头像管理</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                    <div>
                        <h6>当前头像</h6>
                        <div style="text-align: center; margin-bottom: 20px;">
                            <div style="width: 150px; height: 150px; border-radius: 50%; background: #f0f0f0; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 64px; border: 3px solid var(--border-color);">
                                👤
                            </div>
                        </div>
                        
                        <div style="text-align: center;">
                            <button class="btn btn-primary">上传新头像</button>
                            <button class="btn btn-secondary">使用默认头像</button>
                        </div>
                    </div>
                    
                    <div>
                        <h6>头像预览</h6>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
                            <div style="width: 60px; height: 60px; border-radius: 50%; background: #e6f7ff; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; border: 2px solid var(--border-color);">
                                👤
                            </div>
                            <div style="width: 60px; height: 60px; border-radius: 50%; background: #f6ffed; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; border: 2px solid var(--border-color);">
                                👨‍💼
                            </div>
                            <div style="width: 60px; height: 60px; border-radius: 50%; background: #fff7e6; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; border: 2px solid var(--border-color);">
                                👩‍💻
                            </div>
                            <div style="width: 60px; height: 60px; border-radius: 50%; background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; border: 2px solid var(--border-color);">
                                🧑‍🔬
                            </div>
                            <div style="width: 60px; height: 60px; border-radius: 50%; background: #e6f7ff; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; border: 2px solid var(--border-color);">
                                👨‍🎓
                            </div>
                            <div style="width: 60px; height: 60px; border-radius: 50%; background: #f6ffed; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; border: 2px solid var(--border-color);">
                                👩‍🎨
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">上传文件</label>
                            <input type="file" class="form-input" accept="image/*">
                        </div>
                        
                        <div style="margin-top: 20px;">
                            <button class="btn btn-primary">应用头像</button>
                            <button class="btn btn-secondary">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 账户安全
function generateAccountSecurityContent() {
    return `
        <div class="alert alert-info">
            <strong>账户安全：</strong>管理您的密码和安全设置。
        </div>

        <div class="card">
            <div class="card-header">密码管理</div>
            <div class="card-body">
                <div class="form-group">
                    <label class="form-label">当前密码</label>
                    <input type="password" class="form-input" placeholder="请输入当前密码">
                </div>
                
                <div class="form-group">
                    <label class="form-label">新密码</label>
                    <input type="password" class="form-input" placeholder="请输入新密码">
                </div>
                
                <div class="form-group">
                    <label class="form-label">确认新密码</label>
                    <input type="password" class="form-input" placeholder="请再次输入新密码">
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary">修改密码</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">安全设置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h6>两步验证</h6>
                        <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 15px;">
                            为您的账户添加额外的安全保护
                        </p>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span>已启用</span>
                        </div>
                    </div>
                    
                    <div>
                        <h6>登录通知</h6>
                        <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 15px;">
                            当有新的登录活动时发送通知
                        </p>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span>已启用</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">登录设备</div>
            <div class="card-body">
                <div style="max-height: 300px; overflow-y: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0;">Windows PC - Chrome</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                192.168.1.100 • 北京 • 2024-03-05 14:30
                            </p>
                        </div>
                        <div>
                            <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">当前设备</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0;">iPhone - Safari</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                192.168.1.101 • 北京 • 2024-03-04 09:15
                            </p>
                        </div>
                        <div>
                            <button class="btn btn-sm btn-danger">移除</button>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
                        <div>
                            <h6 style="margin: 0;">MacBook - Chrome</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                192.168.1.102 • 北京 • 2024-03-03 16:45
                            </p>
                        </div>
                        <div>
                            <button class="btn btn-sm btn-danger">移除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 界面设置
function generateInterfaceSettingsContent() {
    return `
        <div class="alert alert-info">
            <strong>界面设置：</strong>自定义您的界面外观和布局。
        </div>

        <div class="card">
            <div class="card-header">主题设置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    <div style="border: 2px solid var(--primary-color); padding: 20px; border-radius: 8px; text-align: center; cursor: pointer;">
                        <div style="width: 60px; height: 40px; background: #ffffff; border: 1px solid #d9d9d9; margin: 0 auto 10px; border-radius: 4px;"></div>
                        <h6>浅色主题</h6>
                        <p style="font-size: 12px; color: var(--text-secondary);">当前使用</p>
                    </div>
                    
                    <div style="border: 1px solid var(--border-color); padding: 20px; border-radius: 8px; text-align: center; cursor: pointer;">
                        <div style="width: 60px; height: 40px; background: #1f1f1f; border: 1px solid #434343; margin: 0 auto 10px; border-radius: 4px;"></div>
                        <h6>深色主题</h6>
                        <p style="font-size: 12px; color: var(--text-secondary);">即将推出</p>
                    </div>
                    
                    <div style="border: 1px solid var(--border-color); padding: 20px; border-radius: 8px; text-align: center; cursor: pointer;">
                        <div style="width: 60px; height: 40px; background: #f0f0f0; border: 1px solid #d9d9d9; margin: 0 auto 10px; border-radius: 4px;"></div>
                        <h6>自动主题</h6>
                        <p style="font-size: 12px; color: var(--text-secondary);">跟随系统</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">布局设置</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h6>侧边栏宽度</h6>
                        <div style="margin: 15px 0;">
                            <input type="range" min="200" max="400" value="250" class="form-input">
                            <span>250px</span>
                        </div>
                    </div>
                    
                    <div>
                        <h6>内容区域密度</h6>
                        <div style="margin: 15px 0;">
                            <select class="form-input">
                                <option>紧凑</option>
                                <option selected>标准</option>
                                <option>宽松</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">语言设置</div>
            <div class="card-body">
                <div class="form-group">
                    <label class="form-label">界面语言</label>
                    <select class="form-input">
                        <option>简体中文</option>
                        <option>English</option>
                        <option>日本語</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label class="form-label">时区</label>
                    <select class="form-input">
                        <option>Asia/Shanghai (UTC+8)</option>
                        <option>UTC</option>
                        <option>America/New_York (UTC-5)</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}

// 通知设置
function generateNotificationSettingsContent() {
    return `
        <div class="alert alert-info">
            <strong>通知设置：</strong>管理您接收的通知类型和方式。
        </div>

        <div class="card">
            <div class="card-header">通知偏好</div>
            <div class="card-body">
                <div style="max-height: 400px; overflow-y: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0;">任务完成通知</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                当您的任务完成时发送通知
                            </p>
                        </div>
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <select style="padding: 4px 8px; border: 1px solid var(--border-color); border-radius: 4px;">
                                <option>邮件</option>
                                <option>浏览器</option>
                                <option>两者</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0;">系统更新通知</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                系统更新和维护通知
                            </p>
                        </div>
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <select style="padding: 4px 8px; border: 1px solid var(--border-color); border-radius: 4px;">
                                <option>邮件</option>
                                <option>浏览器</option>
                                <option>两者</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0;">安全提醒</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                登录异常和安全相关提醒
                            </p>
                        </div>
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <select style="padding: 4px 8px; border: 1px solid var(--border-color); border-radius: 4px;">
                                <option>邮件</option>
                                <option>浏览器</option>
                                <option>两者</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0;">数据同步通知</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                数据同步状态和结果通知
                            </p>
                        </div>
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                            <select style="padding: 4px 8px; border: 1px solid var(--border-color); border-radius: 4px;">
                                <option>邮件</option>
                                <option>浏览器</option>
                                <option>两者</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 数据偏好
function generateDataPreferencesContent() {
    return `
        <div class="alert alert-info">
            <strong>数据偏好：</strong>设置您的数据存储和处理偏好。
        </div>

        <div class="card">
            <div class="card-header">数据存储</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h6>数据保留期限</h6>
                        <div style="margin: 15px 0;">
                            <select class="form-input">
                                <option>30天</option>
                                <option selected>90天</option>
                                <option>180天</option>
                                <option>1年</option>
                                <option>永久保留</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <h6>数据备份频率</h6>
                        <div style="margin: 15px 0;">
                            <select class="form-input">
                                <option>每日</option>
                                <option selected>每周</option>
                                <option>每月</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">数据处理</div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h6>数据压缩</h6>
                        <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 15px;">
                            启用数据压缩以节省存储空间
                        </p>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span>已启用</span>
                        </div>
                    </div>
                    
                    <div>
                        <h6>数据加密</h6>
                        <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 15px;">
                            对敏感数据进行加密存储
                        </p>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span>已启用</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">数据导出</div>
            <div class="card-body">
                <div class="form-group">
                    <label class="form-label">默认导出格式</label>
                    <select class="form-input">
                        <option>JSON</option>
                        <option selected>CSV</option>
                        <option>Excel</option>
                        <option>XML</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label class="form-label">导出文件命名规则</label>
                    <input type="text" class="form-input" value="{module}_{date}_{time}" placeholder="例如: {module}_{date}_{time}">
                </div>
            </div>
        </div>
    `;
}

// 操作历史
function generateOperationHistoryContent() {
    return `
        <div class="alert alert-info">
            <strong>操作历史：</strong>查看您的操作记录和活动日志。
        </div>

        <div class="card">
            <div class="card-header">操作记录</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; gap: 10px;">
                    <input type="text" class="form-input" placeholder="搜索操作..." style="flex: 1;">
                    <select class="form-input" style="width: 150px;">
                        <option>全部操作</option>
                        <option>知识建模</option>
                        <option>图谱构建</option>
                        <option>知识融合</option>
                        <option>知识计算</option>
                    </select>
                    <button class="btn btn-primary">搜索</button>
                </div>
                
                <div style="max-height: 500px; overflow-y: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">创建知识抽取任务</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                任务名称: 深度学习文献抽取 • 2024-03-05 14:30:25
                            </p>
                        </div>
                        <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">成功</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">启动图谱构建</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                图谱名称: 医学知识图谱 • 2024-03-05 13:45:12
                            </p>
                        </div>
                        <span style="background: #1890ff; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">进行中</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">导出数据</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                文件格式: CSV • 2024-03-05 12:20:08
                            </p>
                        </div>
                        <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">完成</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">修改用户设置</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                界面主题: 浅色 • 2024-03-05 11:15:33
                            </p>
                        </div>
                        <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">成功</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
                        <div>
                            <h6 style="margin: 0; color: #ff4d4f;">知识融合任务失败</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                错误: 数据源连接超时 • 2024-03-05 10:30:45
                            </p>
                        </div>
                        <span style="background: #ff4d4f; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">失败</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 登录日志
function generateLoginLogContent() {
    return `
        <div class="alert alert-info">
            <strong>登录日志：</strong>查看您的登录记录和安全信息。
        </div>

        <div class="card">
            <div class="card-header">登录记录</div>
            <div class="card-body">
                <div style="max-height: 500px; overflow-y: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #52c41a;">Windows PC - Chrome</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                192.168.1.100 • 北京 • 2024-03-05 14:30:25
                            </p>
                        </div>
                        <div>
                            <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">当前会话</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">iPhone - Safari</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                192.168.1.101 • 北京 • 2024-03-05 09:15:12
                            </p>
                        </div>
                        <div>
                            <span style="background: #faad14; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已退出</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">MacBook - Chrome</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                192.168.1.102 • 北京 • 2024-03-04 16:45:33
                            </p>
                        </div>
                        <div>
                            <span style="background: #faad14; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已退出</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #ff4d4f;">异常登录尝试</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                203.0.113.1 • 未知位置 • 2024-03-04 02:30:15
                            </p>
                        </div>
                        <div>
                            <span style="background: #ff4d4f; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已阻止</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">iPad - Safari</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                192.168.1.103 • 北京 • 2024-03-03 20:15:08
                            </p>
                        </div>
                        <div>
                            <span style="background: #faad14; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已退出</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 任务历史
function generateTaskHistoryContent() {
    return `
        <div class="alert alert-info">
            <strong>任务历史：</strong>查看您创建和执行的任务记录。
        </div>

        <div class="card">
            <div class="card-header">任务记录</div>
            <div class="card-body">
                <div style="margin-bottom: 20px; display: flex; gap: 10px;">
                    <input type="text" class="form-input" placeholder="搜索任务..." style="flex: 1;">
                    <select class="form-input" style="width: 150px;">
                        <option>全部状态</option>
                        <option>进行中</option>
                        <option>已完成</option>
                        <option>已失败</option>
                    </select>
                    <button class="btn btn-primary">搜索</button>
                </div>
                
                <div style="max-height: 500px; overflow-y: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">深度学习文献抽取任务</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                创建时间: 2024-03-05 14:30 • 完成时间: 2024-03-05 15:45
                            </p>
                        </div>
                        <div>
                            <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已完成</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">医学知识图谱构建</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                创建时间: 2024-03-05 13:45 • 状态: 进行中 (75%)
                            </p>
                        </div>
                        <div>
                            <span style="background: #1890ff; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">进行中</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">知识融合任务</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                创建时间: 2024-03-05 12:20 • 完成时间: 2024-03-05 13:10
                            </p>
                        </div>
                        <div>
                            <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已完成</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid var(--border-color);">
                        <div>
                            <h6 style="margin: 0; color: #ff4d4f;">专利知识抽取任务</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                创建时间: 2024-03-05 11:15 • 失败原因: 数据源连接超时
                            </p>
                        </div>
                        <div>
                            <span style="background: #ff4d4f; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已失败</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
                        <div>
                            <h6 style="margin: 0; color: #1890ff;">多模态知识图谱推理</h6>
                            <p style="margin: 5px 0; color: var(--text-secondary); font-size: 14px;">
                                创建时间: 2024-03-05 10:30 • 完成时间: 2024-03-05 11:45
                            </p>
                        </div>
                        <div>
                            <span style="background: #52c41a; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">已完成</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
