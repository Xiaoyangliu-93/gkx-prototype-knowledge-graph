"""
知识图谱产品原型自动生成系统 v2
功能：解析招标文档 -> 补全功能描述 -> 生成产品原型
"""

import json
import re
from typing import Dict, List, Optional
from dataclasses import dataclass, field
from enum import Enum
import pandas as pd
from pathlib import Path

# 如需要可以集成的LLM API
# from openai import OpenAI
# from anthropic import Anthropic

@dataclass
class FunctionItem:
    """功能项数据结构"""
    level: int  # 功能级别 (1, 2, 3)
    name: str  # 功能名称
    parent: Optional[str] = None  # 父级功能
    description: str = ""  # 功能描述
    interactions: List[str] = field(default_factory=list)  # 关键交互
    requirements: str = ""  # 原始需求描述

class PrototypeStyle(Enum):
    """原型图风格"""
    WIREFRAME = "wireframe"  # 线框图
    HIGH_FIDELITY = "high_fidelity"  # 高保真
    FLOW_DIAGRAM = "flow_diagram"  # 流程图

class KGPrototypeGenerator:
    """知识图谱产品原型生成器"""
    
    def __init__(self):
        self.functions = {}  # 存储解析的功能
        self.llm_client = None  # LLM客户端
        
    def parse_document(self, doc_content: str) -> Dict:
        """
        解析招标文档，提取功能层级
        """
        functions = {}
        current_level1 = None
        current_level2 = None
        
        # 使用正则表达式解析表格内容
        # 这里简化处理，实际需要更复杂的解析逻辑
        lines = doc_content.split('\n')
        
        for line in lines:
            # 识别一级功能（如：知识建模）
            if '知识建模' in line or '图谱构建' in line or '知识融合' in line:
                current_level1 = line.strip()
                functions[current_level1] = {
                    'level': 1,
                    'name': current_level1,
                    'children': {}
                }
            
            # 识别二级功能（如：概念抽取）
            elif current_level1 and ('概念抽取' in line or '关系生成' in line):
                current_level2 = line.strip()
                functions[current_level1]['children'][current_level2] = {
                    'level': 2,
                    'name': current_level2,
                    'parent': current_level1,
                    'children': {}
                }
        
        return functions

    def generate_ui_components(self, function: Dict) -> Dict:
        """
        生成UI组件配置
        """
        ui_config = {
            "layout": "flex",
            "components": []
        }
        
        # 根据功能类型生成不同的UI组件
        if "搜索" in function.get('name', ''):
            ui_config["components"].append({
                "type": "search_bar",
                "placeholder": "输入搜索内容...",
                "filters": ["时间", "类型", "来源"]
            })
        
        elif "可视化" in function.get('name', ''):
            ui_config["components"].append({
                "type": "graph_canvas",
                "features": ["zoom", "pan", "select", "export"]
            })
        
        elif "建模" in function.get('name', ''):
            ui_config["components"].append({
                "type": "form_builder",
                "fields": ["名称", "类型", "属性", "关系"]
            })
        
        return ui_config

    def generate_prototype_code(self, functions: Dict, style: PrototypeStyle) -> str:
        """
        生成原型代码（HTML/React/Vue）
        """
        if style == PrototypeStyle.WIREFRAME:
            return self._generate_html_wireframe(functions)
        elif style == PrototypeStyle.HIGH_FIDELITY:
            return self._generate_react_component(functions)
        else:
            return self._generate_flow_diagram(functions)

    def _generate_html_wireframe(self, functions: Dict) -> str:
        """生成HTML线框图"""
        html_template = """<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>科技知识图谱引擎 - 产品原型</title>
            <style>
                /* 内联样式，实际项目中应分离 */
                :root {{
                    --primary-color: #1890ff;
                    --secondary-color: #52c41a;
                    --background-color: #f5f5f5;
                    --card-background: #ffffff;
                    --text-primary: #262626;
                    --text-secondary: #8c8c8c;
                    --border-color: #d9d9d9;
                    --shadow: 0 2px 8px rgba(0,0,0,0.1);
                }}
                
                body {{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background-color: var(--background-color);
                    margin: 0;
                    padding: 0;
                }}
                
                .container {{
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                
                .header {{
                    text-align: center;
                    padding: 40px 0;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    border-radius: 8px;
                    margin-bottom: 30px;
                }}
                
                .nav {{
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 30px;
                }}
                
                .nav-item {{
                    padding: 12px 24px;
                    background: var(--card-background);
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: var(--shadow);
                }}
                
                .content {{
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 30px;
                }}
                
                .sidebar {{
                    background: var(--card-background);
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: var(--shadow);
                }}
                
                .main {{
                    background: var(--card-background);
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: var(--shadow);
                }}
                
                .card {{
                    background: var(--card-background);
                    padding: 20px;
                    margin: 15px 0;
                    border-radius: 8px;
                    box-shadow: var(--shadow);
                    border-left: 4px solid var(--primary-color);
                }}
                
                .button {{
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin: 5px;
                }}
                
                .search-box {{
                    width: 100%;
                    padding: 12px;
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    font-size: 16px;
                    margin-bottom: 20px;
                }}
                
                .graph-view {{
                    height: 400px;
                    border: 2px dashed var(--border-color);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-secondary);
                    font-size: 18px;
                    margin-top: 20px;
                }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>科技知识图谱引擎</h1>
                    <p>亿级规模知识管理与智能分析平台</p>
                </div>
                
                <div class="nav">
                    {nav_items}
                </div>
                
                <div class="content">
                    <div class="sidebar">
                        <h3>功能模块</h3>
                        {sidebar_items}
                    </div>
                    
                    <div class="main">
                        <input type="text" class="search-box" placeholder="智能搜索...">
                        
                        <div class="card">
                            <h3>概念抽取工作台</h3>
                            <p>上传文档进行自动概念抽取</p>
                            <button class="button">上传文档</button>
                            <button class="button">开始抽取</button>
                        </div>
                        
                        <div class="graph-view">
                            <p>知识图谱可视化区域</p>
                        </div>
                        
                        {main_content}
                    </div>
                </div>
            </div>
        </body>
        </html>
        """

        # 生成导航项
        nav_items = '\n'.join([
            f'<div class="nav-item">{name}</div>'
            for name in ['知识建模', '图谱构建', '知识融合', '图谱应用']
        ])
        
        # 生成侧边栏
        sidebar_items = '\n'.join([
            f'<div class="card"><h4>{name}</h4></div>'
            for name in functions.keys()
        ])
        
        # 生成主要内容
        main_content = ''
        
        return html_template.format(
            nav_items=nav_items,
            sidebar_items=sidebar_items,
            main_content=main_content
        )

    def _generate_react_component(self, functions: Dict) -> str:
        """生成React组件"""
        react_template = """import React, {{ useState }} from 'react';
        import {{ Card, Button, Input, Tabs }} from 'antd';
        import './KnowledgeGraphPrototype.css';

        const KnowledgeGraphPrototype = () => {{
            const [searchQuery, setSearchQuery] = useState('');
            const [activeModule, setActiveModule] = useState('modeling');
            
            const modules = {{
                modeling: {{
                    title: '知识建模',
                    functions: [{{"name": "概念抽取", "description": "自动提取文档概念"}}, {{"name": "关系生成", "description": "构建概念关系网络"}}]
                }},
                construction: {{
                    title: '图谱构建', 
                    functions: [{{"name": "实体识别", "description": "识别文本实体"}}, {{"name": "关系抽取", "description": "抽取实体关系"}}]
                }},
                application: {{
                    title: '图谱应用',
                    functions: [{{"name": "语义搜索", "description": "自然语言知识检索"}}, {{"name": "智能问答", "description": "基于图谱的问答"}}]
                }}
            }};
            
            return (
                <div className="kg-prototype">
                    <header className="header">
                        <h1>科技知识图谱引擎</h1>
                        <Input.Search
                            placeholder="智能搜索..."
                            value={{searchQuery}}
                            onChange={{(e) => setSearchQuery(e.target.value)}}
                            style={{{{ width: 400 }}}}
                        />
                    </header>
                    
                    <Tabs activeKey={{activeModule}} onChange={{setActiveModule}}>
                        {{Object.entries(modules).map(([key, module]) => (
                            <Tabs.TabPane tab={{module.title}} key={{key}}>
                                <div className="module-content">
                                    {{module.functions.map(func => (
                                        <Card key={{func.name}} title={{func.name}}>
                                            <p>{{func.description}}</p>
                                            <Button type="primary">执行</Button>
                                        </Card>
                                    ))}}
                                </div>
                            </Tabs.TabPane>
                        ))}}
                    </Tabs>
                    
                    <div className="graph-container">
                        <div id="graph-canvas" style={{{{ height: 500 }}}} />
                    </div>
                </div>
            );
        }};
        
        export default KnowledgeGraphPrototype;
        """
        return react_template

    def _generate_flow_diagram(self, functions: Dict) -> str:
        """生成流程图配置"""
        mermaid_template = """
        graph TD
            Start[开始] --> Upload[上传文档]
            Upload --> Parse[解析文档]
            Parse --> Extract[概念抽取]
            Extract --> Relate[关系识别]
            Relate --> Fusion[知识融合]
            Fusion --> Store[存储图谱]
            Store --> Query[查询应用]
            Query --> End[结束]
            
            Extract --> Review[人工审核]
            Review --> Extract
            
            style Start fill:#90EE90
            style End fill:#FFB6C1
            style Review fill:#FFE4B5
        """
        return mermaid_template

    def export_prototype(self, output_path: str, format: str = "html"):
        """
        导出原型文件
        """
        if format == "html":
            content = self._generate_html_wireframe(self.functions)
            file_extension = ".html"
        elif format == "react":
            content = self._generate_react_component(self.functions)
            file_extension = ".jsx"
        elif format == "json":
            content = json.dumps(self.functions, indent=2, ensure_ascii=False)
            file_extension = ".json"
        else:
            raise ValueError(f"Unsupported format: {format}")
        
        output_file = Path(output_path).with_suffix(file_extension)
        output_file.write_text(content, encoding='utf-8')
        print(f"原型已导出到: {output_file}")
        
        return str(output_file)

class FunctionEnricher:
    """功能增强器：为基础功能添加详细描述和交互设计"""
    
    def __init__(self):
        # 预定义的功能增强数据库
        self.enhancement_db = {
            "概念抽取": {
                "description": "从非结构化文本中自动识别和提取领域概念，支持多种文本格式",
                "interactions": [
                    "文件上传拖拽区域",
                    "文本格式选择器",
                    "抽取进度条",
                    "概念预览表格",
                    "批量导出功能"
                ],
                "user_story": "作为知识工程师，我希望快速从大量文档中提取关键概念，节省手工标注时间"
            },
            "关系生成": {
                "description": "基于概念间的语义关联，自动构建知识图谱的关系网络",
                "interactions": [
                    "概念选择器",
                    "关系类型定义",
                    "关系强度调节",
                    "图形化关系预览",
                    "关系验证界面"
                ],
                "user_story": "作为数据分析师，我需要理解概念间的关联关系，构建完整的知识网络"
            }
        }
    
    def enrich(self, function_name: str) -> Dict:
        """增强单个功能的描述"""
        return self.enhancement_db.get(function_name, {
            "description": f"{function_name}功能模块",
            "interactions": ["基础交互界面"],
            "user_story": f"作为用户，我需要使用{function_name}功能"
        })

class PrototypeStyleGenerator:
    """原型样式生成器"""
    
    def generate_css_theme(self, theme_name: str = "default") -> str:
        """生成CSS主题样式"""
        if theme_name == "default":
            return """
/* 知识图谱原型默认主题 */
:root {
    --primary-color: #1890ff;
    --secondary-color: #52c41a;
    --background-color: #f5f5f5;
    --card-background: #ffffff;
    --text-primary: #262626;
    --text-secondary: #8c8c8c;
    --border-color: #d9d9d9;
    --shadow: 0 2px 8px rgba(0,0,0,0.1);
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    text-align: center;
    padding: 40px 0;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: 8px;
    margin-bottom: 30px;
}

.nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.nav-item {
    padding: 12px 24px;
    background: var(--card-background);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: var(--shadow);
}

.nav-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 30px;
}

.sidebar {
    background: var(--card-background);
    padding: 20px;
    border-radius: 8px;
    box-shadow: var(--shadow);
    height: fit-content;
}

.main {
    background: var(--card-background);
    padding: 30px;
    border-radius: 8px;
    box-shadow: var(--shadow);
}

.card {
    background: var(--card-background);
    padding: 20px;
    margin: 15px 0;
    border-radius: 8px;
    box-shadow: var(--shadow);
    border-left: 4px solid var(--primary-color);
}

.button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    margin: 5px;
    transition: background 0.3s;
}

.button:hover {
    background: #40a9ff;
}

.search-box {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 20px;
}

.graph-view {
    height: 400px;
    border: 2px dashed var(--border-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    font-size: 18px;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .content {
        grid-template-columns: 1fr;
    }
    
    .nav {
        flex-wrap: wrap;
    }
}
"""
        return ""

    def generate_ui_components(self, function: Dict) -> Dict:
        """
        生成UI组件配置
        """
        ui_config = {
            "layout": "flex",
            "components": []
        }
        
        # 根据功能类型生成不同的UI组件
        if "搜索" in function.get('name', ''):
            ui_config["components"].append({
                "type": "search_bar",
                "placeholder": "输入搜索内容...",
                "filters": ["时间", "类型", "来源"]
            })
        
        elif "可视化" in function.get('name', ''):
            ui_config["components"].append({
                "type": "graph_canvas",
                "features": ["zoom", "pan", "select", "export"]
            })
        
        elif "建模" in function.get('name', ''):
            ui_config["components"].append({
                "type": "form_builder",
                "fields": ["名称", "类型", "属性", "关系"]
            })
        
        return ui_config

    def generate_prototype_code(self, functions: Dict, style: PrototypeStyle) -> str:
        """
        生成原型代码（HTML/React/Vue）
        """
        if style == PrototypeStyle.WIREFRAME:
            return self._generate_html_wireframe(functions)
        elif style == PrototypeStyle.HIGH_FIDELITY:
            return self._generate_react_component(functions)
        else:
            return self._generate_flow_diagram(functions)

    def _generate_html_wireframe(self, functions: Dict) -> str:
        """生成HTML线框图"""
        html_template = """<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>科技知识图谱引擎 - 产品原型</title>
            <style>
                /* 内联样式，实际项目中应分离 */
                :root {{
                    --primary-color: #1890ff;
                    --secondary-color: #52c41a;
                    --background-color: #f5f5f5;
                    --card-background: #ffffff;
                    --text-primary: #262626;
                    --text-secondary: #8c8c8c;
                    --border-color: #d9d9d9;
                    --shadow: 0 2px 8px rgba(0,0,0,0.1);
                }}
                
                body {{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background-color: var(--background-color);
                    margin: 0;
                    padding: 0;
                }}
                
                .container {{
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                
                .header {{
                    text-align: center;
                    padding: 40px 0;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    border-radius: 8px;
                    margin-bottom: 30px;
                }}
                
                .nav {{
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 30px;
                }}
                
                .nav-item {{
                    padding: 12px 24px;
                    background: var(--card-background);
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: var(--shadow);
                }}
                
                .content {{
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 30px;
                }}
                
                .sidebar {{
                    background: var(--card-background);
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: var(--shadow);
                }}
                
                .main {{
                    background: var(--card-background);
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: var(--shadow);
                }}
                
                .card {{
                    background: var(--card-background);
                    padding: 20px;
                    margin: 15px 0;
                    border-radius: 8px;
                    box-shadow: var(--shadow);
                    border-left: 4px solid var(--primary-color);
                }}
                
                .button {{
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin: 5px;
                }}
                
                .search-box {{
                    width: 100%;
                    padding: 12px;
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    font-size: 16px;
                    margin-bottom: 20px;
                }}
                
                .graph-view {{
                    height: 400px;
                    border: 2px dashed var(--border-color);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-secondary);
                    font-size: 18px;
                    margin-top: 20px;
                }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>科技知识图谱引擎</h1>
                    <p>亿级规模知识管理与智能分析平台</p>
                </div>
                
                <div class="nav">
                    {nav_items}
                </div>
                
                <div class="content">
                    <div class="sidebar">
                        <h3>功能模块</h3>
                        {sidebar_items}
                    </div>
                    
                    <div class="main">
                        <input type="text" class="search-box" placeholder="智能搜索...">
                        
                        <div class="card">
                            <h3>概念抽取工作台</h3>
                            <p>上传文档进行自动概念抽取</p>
                            <button class="button">上传文档</button>
                            <button class="button">开始抽取</button>
                        </div>
                        
                        <div class="graph-view">
                            <p>知识图谱可视化区域</p>
                        </div>
                        
                        {main_content}
                    </div>
                </div>
            </div>
        </body>
        </html>
        """

        # 生成导航项
        nav_items = '\n'.join([
            f'<div class="nav-item">{name}</div>'
            for name in ['知识建模', '图谱构建', '知识融合', '图谱应用']
        ])
        
        # 生成侧边栏
        sidebar_items = '\n'.join([
            f'<div class="card"><h4>{name}</h4></div>'
            for name in functions.keys()
        ])
        
        # 生成主要内容
        main_content = ''
        
        return html_template.format(
            nav_items=nav_items,
            sidebar_items=sidebar_items,
            main_content=main_content
        )

    def _generate_react_component(self, functions: Dict) -> str:
        """生成React组件"""
        react_template = """import React, {{ useState }} from 'react';
        import {{ Card, Button, Input, Tabs }} from 'antd';
        import './KnowledgeGraphPrototype.css';

        const KnowledgeGraphPrototype = () => {{
            const [searchQuery, setSearchQuery] = useState('');
            const [activeModule, setActiveModule] = useState('modeling');
            
            const modules = {{
                modeling: {{
                    title: '知识建模',
                    functions: [{{"name": "概念抽取", "description": "自动提取文档概念"}}, {{"name": "关系生成", "description": "构建概念关系网络"}}]
                }},
                construction: {{
                    title: '图谱构建', 
                    functions: [{{"name": "实体识别", "description": "识别文本实体"}}, {{"name": "关系抽取", "description": "抽取实体关系"}}]
                }},
                application: {{
                    title: '图谱应用',
                    functions: [{{"name": "语义搜索", "description": "自然语言知识检索"}}, {{"name": "智能问答", "description": "基于图谱的问答"}}]
                }}
            }};
            
            return (
                <div className="kg-prototype">
                    <header className="header">
                        <h1>科技知识图谱引擎</h1>
                        <Input.Search
                            placeholder="智能搜索..."
                            value={{searchQuery}}
                            onChange={{(e) => setSearchQuery(e.target.value)}}
                            style={{{{ width: 400 }}}}
                        />
                    </header>
                    
                    <Tabs activeKey={{activeModule}} onChange={{setActiveModule}}>
                        {{Object.entries(modules).map(([key, module]) => (
                            <Tabs.TabPane tab={{module.title}} key={{key}}>
                                <div className="module-content">
                                    {{module.functions.map(func => (
                                        <Card key={{func.name}} title={{func.name}}>
                                            <p>{{func.description}}</p>
                                            <Button type="primary">执行</Button>
                                        </Card>
                                    ))}}
                                </div>
                            </Tabs.TabPane>
                        ))}}
                    </Tabs>
                    
                    <div className="graph-container">
                        <div id="graph-canvas" style={{{{ height: 500 }}}} />
                    </div>
                </div>
            );
        }};
        
        export default KnowledgeGraphPrototype;
        """
        return react_template

    def _generate_flow_diagram(self, functions: Dict) -> str:
        """生成流程图配置"""
        mermaid_template = """
        graph TD
            Start[开始] --> Upload[上传文档]
            Upload --> Parse[解析文档]
            Parse --> Extract[概念抽取]
            Extract --> Relate[关系识别]
            Relate --> Fusion[知识融合]
            Fusion --> Store[存储图谱]
            Store --> Query[查询应用]
            Query --> End[结束]
            
            Extract --> Review[人工审核]
            Review --> Extract
            
            style Start fill:#90EE90
            style End fill:#FFB6C1
            style Review fill:#FFE4B5
        """
        return mermaid_template

    def export_prototype(self, output_path: str, format: str = "html"):
        """
        导出原型文件
        """
        if format == "html":
            content = self._generate_html_wireframe(self.functions)
            file_extension = ".html"
        elif format == "react":
            content = self._generate_react_component(self.functions)
            file_extension = ".jsx"
        elif format == "json":
            content = json.dumps(self.functions, indent=2, ensure_ascii=False)
            file_extension = ".json"
        else:
            raise ValueError(f"Unsupported format: {format}")
        
        output_file = Path(output_path).with_suffix(file_extension)
        output_file.write_text(content, encoding='utf-8')
        print(f"原型已导出到: {output_file}")
        
        return str(output_file)

# 主程序入口
def main():
    """
    主程序：演示如何使用原型生成器
    """
    try:
        # 1. 初始化生成器
        generator = KGPrototypeGenerator()
        enricher = FunctionEnricher()
        
        # 2. 模拟文档内容（实际应从文件读取）
        doc_content = """
        知识建模
        - 概念抽取：需提供的功能包括科技领域种子术语生成...
        - 关系生成：需提供的功能包括依存关系图构建...
        
        图谱构建
        - 实体识别：识别文本中的实体...
        - 关系抽取：抽取实体间关系...
        """
        
        # 3. 解析文档
        functions = generator.parse_document(doc_content)
        
        # 4. 增强功能描述
        for module in functions.values():
            if 'children' in module:
                for child_name in module['children'].keys():
                    enriched_data = enricher.enrich(child_name)
                    module['children'][child_name].update(enriched_data)
        
        # 5. 生成原型
        html_wireframe = generator._generate_html_wireframe(functions)
        react_component = generator._generate_react_component(functions)
        
        # 6. 导出文件
        generator.functions = functions
        html_file = generator.export_prototype("kg_prototype_v2", "html")
        react_file = generator.export_prototype("kg_prototype_v2", "react")
        
        print(f"✅ 原型生成完成！")
        print(f"📁 HTML原型: {html_file}")
        print(f"📁 React组件: {react_file}")
        
        # 7. 生成配套资源
        style_gen = PrototypeStyleGenerator()
        css_content = style_gen.generate_css_theme("default")
        
        css_file = Path("kg_prototype_v2.css")
        css_file.write_text(css_content, encoding='utf-8')
        print(f"📁 CSS样式: {css_file}")
        
        return functions, html_file, react_file
        
    except Exception as e:
        print(f"❌ 生成原型失败: {e}")

if __name__ == "__main__":
    main()