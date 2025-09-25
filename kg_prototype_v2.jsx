import React, { useState } from 'react';
import { Card, Button, Input, Tabs } from 'antd';
import './kg_prototype_v2.css';

const KnowledgeGraphPrototype = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeModule, setActiveModule] = useState('modeling');
    
    const modules = {
        modeling: {
            title: '知识建模',
            functions: [{"name": "概念抽取", "description": "自动提取文档概念"}, {"name": "关系生成", "description": "构建概念关系网络"}]
        },
        construction: {
            title: '图谱构建', 
            functions: [{"name": "实体识别", "description": "识别文本实体"}, {"name": "关系抽取", "description": "抽取实体关系"}]
        },
        application: {
            title: '图谱应用',
            functions: [{"name": "语义搜索", "description": "自然语言知识检索"}, {"name": "智能问答", "description": "基于图谱的问答"}]
        }
    };
    
    return (
        <div className="kg-prototype">
            <header className="header">
                <h1>科技知识图谱引擎</h1>
                <Input.Search
                    placeholder="智能搜索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: 400 }}
                />
            </header>
            
            <Tabs activeKey={activeModule} onChange={setActiveModule}>
                {Object.entries(modules).map(([key, module]) => (
                    <Tabs.TabPane tab={module.title} key={key}>
                        <div className="module-content">
                            {module.functions.map(func => (
                                <Card key={func.name} title={func.name}>
                                    <p>{func.description}</p>
                                    <Button type="primary">执行</Button>
                                </Card>
                            ))}
                        </div>
                    </Tabs.TabPane>
                ))}
            </Tabs>
            
            <div className="graph-container">
                <div id="graph-canvas" style={{ height: 500 }} />
            </div>
        </div>
    );
};

export default KnowledgeGraphPrototype;
        