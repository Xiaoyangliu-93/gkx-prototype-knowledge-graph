"""
知识图谱产品原型自动生成系统
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
    
    def enrich_functions_with_llm(self, functions: Dict) -> Dict:
        """
        使用LLM补全三级功能描述和交互设计
        """
        prompt_template = """
        作为产品经理，请为以下功能补充详细描述和关键交互设计：
        
        功能模块：{module}
        功能项：{function}
        原始需求：{requirement}
        
        请提供：
        1. 功能详细描述（50-100字）
        2. 关键交互列表（3-5个）
        3. 用户故事
        
        返回JSON格式。
        """
        
        # 这里可以调用实际的LLM API
        # response = self.llm_client.complete(prompt_template.format(...))
        
        # 模拟LLM返回
        enriched = functions.copy()
        
        # 添加示例描述和交互
        sample_interactions = {
            "概念抽取": [
                "拖拽上传文档",
                "实时预览抽取结果",
                "批量审核确认",
                "导出知识图谱"
            ],
            "关系生成": [
                "可视化关系编辑",
                "智能关系推荐",
                "关系强度调节",
                "冲突检测提醒"
            ]
        }
        
        return enriched
    
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
        html_template = """
        <!DOCTYPE html>
        <html>
        <head>
            <title>知识图谱引擎原型</title>
            <style>
                * {{ margin: 0; padding: 0; box-sizing: border-box; }}
                body {{ font-family: Arial, sans-serif; }}
                .container {{ max-width: 1200px; margin: 0 auto; padding: 20px; }}
                .header {{ background: #f0f0f0; padding: 20px; margin-bottom: 20px; }}
                .nav {{ display: flex; gap: 20px; margin-bottom: 20px; }}
                .nav-item {{ padding: 10px 20px; background: #e0e0e0; cursor: pointer; }}
                .content {{ display: grid; grid-template-columns: 250px 1fr; gap: 20px; }}
                .sidebar {{ background: #f5f5f5; padding: 20px; }}
                .main {{ background: #fff; border: 1px solid #ddd; padding: 20px; }}
                .card {{ border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; }}
                .search-box {{ width: 100%; padding: 10px; margin-bottom: 20px; }}
                .button {{ padding: 8px 16px; background: #007bff; color: white; border: none; cursor: pointer; }}
                .graph-view {{ height: 400px; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; background: #fafafa; }}
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
        """生成React组件代码"""
        react_template = """
        import React, {{ useState, useEffect }} from 'react';
        import {{ Card, Button, Input, Select, Table, Tabs }} from 'antd';
        import {{ Graph }} from '@antv/g6';
        
        const KnowledgeGraphPrototype = () => {{
            const [activeModule, setActiveModule] = useState('modeling');
            const [searchQuery, setSearchQuery] = useState('');
            const [graphData, setGraphData] = useState(null);
            
            // 功能模块配置
            const modules = {{
                modeling: {{
                    title: '知识建模',
                    functions: {modeling_functions}
                }},
                construction: {{
                    title: '图谱构建',
                    functions: {construction_functions}
                }},
                fusion: {{
                    title: '知识融合',
                    functions: {fusion_functions}
                }},
                application: {{
                    title: '图谱应用',
                    functions: {application_functions}
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
        
        # 格式化功能数据
        modeling_functions = json.dumps([
            {"name": "概念抽取", "description": "自动抽取领域概念"},
            {"name": "关系生成", "description": "构建概念关系网络"}
        ])
        
        construction_functions = json.dumps([
            {"name": "实体识别", "description": "识别文本实体"},
            {"name": "关系抽取", "description": "抽取实体间关系"}
        ])
        
        fusion_functions = json.dumps([
            {"name": "实体对齐", "description": "多源数据实体匹配"},
            {"name": "知识融合", "description": "知识冲突消解"}
        ])
        
        application_functions = json.dumps([
            {"name": "语义搜索", "description": "自然语言知识检索"},
            {"name": "智能问答", "description": "基于图谱的问答"}
        ])
        
        return react_template.format(
            modeling_functions=modeling_functions,
            construction_functions=construction_functions,
            fusion_functions=fusion_functions,
            application_functions=application_functions
        )
    
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
    """功能描述增强器"""
    
    def __init__(self):
        self.templates = self._load_templates()
    
    def _load_templates(self) -> Dict:
        """加载功能模板"""
        return {
            "概念抽取": {
                "description": "基于NLP技术自动识别和抽取文本中的领域概念，构建知识图谱的基础节点",
                "interactions": [
                    "批量上传文档（支持PDF/Word/TXT）",
                    "配置抽取规则和算法参数",
                    "实时预览抽取结果",
                    "人工审核和纠错",
                    "导出概念列表"
                ],
                "user_story": "作为数据分析师，我希望能够快速从大量文献中抽取专业术语，以便构建领域知识体系"
            },
            "关系生成": {
                "description": "识别概念间的语义关系，包括上下位、因果、关联等多种关系类型",
                "interactions": [
                    "可视化关系网络",
                    "拖拽式关系编辑",
                    "关系类型定义",
                    "关系强度设置",
                    "批量关系导入"
                ],
                "user_story": "作为知识工程师，我需要定义和管理概念间的复杂关系，构建结构化知识网络"
            },
            "实体识别": {
                "description": "从文本中识别人物、机构、地点、时间等命名实体，并进行分类标注",
                "interactions": [
                    "文本输入/上传",
                    "实体高亮显示",
                    "实体类型选择",
                    "置信度筛选",
                    "批量标注确认"
                ],
                "user_story": "作为内容编辑，我希望自动识别文章中的关键实体，提高内容标注效率"
            },
            "知识融合": {
                "description": "整合多源异构数据，消除冗余和冲突，构建统一的知识表示",
                "interactions": [
                    "数据源配置",
                    "映射规则定义",
                    "冲突检测展示",
                    "融合策略选择",
                    "结果验证导出"
                ],
                "user_story": "作为数据工程师，我需要将不同来源的知识进行对齐和融合，确保知识的一致性"
            },
            "语义搜索": {
                "description": "支持自然语言查询，基于语义理解返回精准的知识检索结果",
                "interactions": [
                    "智能搜索框",
                    "搜索建议提示",
                    "结果排序筛选",
                    "相关性打分",
                    "搜索历史管理"
                ],
                "user_story": "作为研究人员，我希望通过自然语言提问快速找到相关的知识和文献"
            }
        }
    
    def enrich(self, function_name: str) -> Dict:
        """增强功能描述"""
        if function_name in self.templates:
            return self.templates[function_name]
        
        # 默认模板
        return {
            "description": f"{function_name}功能，提供智能化的知识处理能力",
            "interactions": [
                "数据输入",
                "处理配置",
                "结果预览",
                "人工确认",
                "数据导出"
            ],
            "user_story": f"作为用户，我希望使用{function_name}功能来提升工作效率"
        }

class PrototypeStyleGenerator:
    """原型样式生成器"""
    
    @staticmethod
    def generate_css_theme(theme: str = "default") -> str:
        """生成CSS主题"""
        themes = {
            "default": """
                :root {
                    --primary-color: #1890ff;
                    --success-color: #52c41a;
                    --warning-color: #faad14;
                    --error-color: #f5222d;
                    --bg-color: #f0f2f5;
                    --text-color: #333;
                    --border-color: #d9d9d9;
                }
                
                .kg-container {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    background: var(--bg-color);
                    min-height: 100vh;
                }
                
                .kg-header {
                    background: white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    padding: 16px 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .kg-sidebar {
                    width: 250px;
                    background: white;
                    border-right: 1px solid var(--border-color);
                    padding: 20px;
                }
                
                .kg-main {
                    flex: 1;
                    padding: 24px;
                }
                
                .kg-card {
                    background: white;
                    border-radius: 8px;
                    padding: 20px;
                    margin-bottom: 16px;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
                }
                
                .kg-button {
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                
                .kg-button:hover {
                    background: #40a9ff;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
                }
            """,
            
            "dark": """
                :root {
                    --primary-color: #177ddc;
                    --success-color: #49aa19;
                    --warning-color: #d89614;
                    --error-color: #a61d24;
                    --bg-color: #141414;
                    --text-color: #fff;
                    --border-color: #434343;
                }
                
                /* Dark theme styles... */
            """
        }
        
        return themes.get(theme, themes["default"])

# 主程序入口
def main():
    """
    主程序：演示如何使用原型生成器
    """
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
    html_file = generator.export_prototype("kg_prototype", "html")
    react_file = generator.export_prototype("kg_prototype", "react")
    
    print(f"✅ 原型生成完成！")
    print(f"📁 HTML原型: {html_file}")
    print(f"📁 React组件: {react_file}")
    
    # 7. 生成配套资源
    style_gen = PrototypeStyleGenerator()
    css_content = style_gen.generate_css_theme("default")
    
    css_file = Path("kg_prototype.css")
    css_file.write_text(css_content, encoding='utf-8')
    print(f"📁 CSS样式: {css_file}")
    
    # 8. 生成产品文档
    generate_product_documentation(functions, enricher)
    
    return functions, html_file, react_file

def generate_product_documentation(functions: Dict, enricher: FunctionEnricher) -> str:
    """
    生成产品需求文档
    """
    doc_template = """
# 科技知识图谱引擎产品需求文档

## 1. 产品概述
科技知识图谱引擎是一个面向科研领域的智能知识管理平台，通过构建亿级规模的知识图谱，
实现科技文献、专利、数据的智能化管理和分析。

## 2. 功能架构

{function_tree}

## 3. 详细功能说明

{function_details}

## 4. 用户故事

{user_stories}

## 5. 非功能需求
- 性能：支持亿级节点、十亿级关系的图谱存储和查询
- 可靠性：系统可用性达到99.99%
- 扩展性：支持横向扩展，动态增加计算和存储资源
- 安全性：数据加密存储，细粒度权限控制

## 6. 技术架构
- 前端：React + TypeScript + AntD
- 后端：Spring Cloud + GraphQL
- 存储：Neo4j + ElasticSearch + MinIO
- AI：Transformer模型 + 图神经网络

## 7. 项目计划
- Phase 1 (0-3月)：核心功能开发
- Phase 2 (3-6月)：智能化能力建设
- Phase 3 (6-9月)：性能优化和扩展
- Phase 4 (9-12月)：生态建设和开放平台
"""
    
    # 构建功能树
    function_tree = build_function_tree(functions)
    
    # 构建功能详情
    function_details = build_function_details(functions, enricher)
    
    # 构建用户故事
    user_stories = build_user_stories(functions, enricher)
    
    doc_content = doc_template.format(
        function_tree=function_tree,
        function_details=function_details,
        user_stories=user_stories
    )
    
    doc_file = Path("PRD_知识图谱引擎.md")
    doc_file.write_text(doc_content, encoding='utf-8')
    print(f"📁 产品文档: {doc_file}")
    
    return str(doc_file)

def build_function_tree(functions: Dict) -> str:
    """构建功能树形结构"""
    tree_lines = []
    for level1_name, level1_data in functions.items():
        tree_lines.append(f"### {level1_name}")
        if 'children' in level1_data:
            for level2_name, level2_data in level1_data['children'].items():
                tree_lines.append(f"  - {level2_name}")
                if 'children' in level2_data:
                    for level3_name in level2_data['children'].keys():
                        tree_lines.append(f"    - {level3_name}")
    return "\n".join(tree_lines)

def build_function_details(functions: Dict, enricher: FunctionEnricher) -> str:
    """构建功能详细说明"""
    details = []
    for module_name, module_data in functions.items():
        details.append(f"### {module_name}")
        if 'children' in module_data:
            for func_name, func_data in module_data['children'].items():
                enriched = enricher.enrich(func_name)
                details.append(f"#### {func_name}")
                details.append(f"**描述**：{enriched['description']}")
                details.append(f"**关键交互**：")
                for interaction in enriched['interactions']:
                    details.append(f"- {interaction}")
                details.append("")
    return "\n".join(details)

def build_user_stories(functions: Dict, enricher: FunctionEnricher) -> str:
    """构建用户故事"""
    stories = []
    for module_data in functions.values():
        if 'children' in module_data:
            for func_name in module_data['children'].keys():
                enriched = enricher.enrich(func_name)
                stories.append(f"- {enriched['user_story']}")
    return "\n".join(stories)

if __name__ == "__main__":
    # 运行主程序
    results = main()
    print("\n🎉 所有原型文件生成完成！")