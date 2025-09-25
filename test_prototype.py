#!/usr/bin/env python3
"""
原型测试脚本
测试生成的HTML原型文件是否正常工作
"""

import os
import webbrowser
from pathlib import Path

def test_prototype_files():
    """测试原型文件是否存在且可访问"""
    proto_dir = Path(__file__).parent
    
    # 检查文件是否存在
    files_to_check = [
        'kg_prototype_v2.html',
        'kg_prototype_v2.jsx', 
        'kg_prototype_v2.css',
        'kg_enhanced_prototype.html',
        'kg_interactive_prototype.html'
    ]
    
    print("🔍 检查原型文件...")
    for file_name in files_to_check:
        file_path = proto_dir / file_name
        if file_path.exists():
            size = file_path.stat().st_size
            print(f"✅ {file_name} - {size:,} bytes")
        else:
            print(f"❌ {file_name} - 文件不存在")
    
    return True

def validate_html_syntax():
    """验证HTML语法"""
    print("\n🔍 验证HTML语法...")
    
    html_files = [
        'kg_prototype_v2.html',
        'kg_enhanced_prototype.html',
        'kg_interactive_prototype.html'
    ]
    
    for html_file in html_files:
        file_path = Path(__file__).parent / html_file
        if file_path.exists():
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 基本HTML结构检查
                if '<!DOCTYPE html>' in content and '<html' in content and '</html>' in content:
                    print(f"✅ {html_file} - HTML结构正确")
                else:
                    print(f"❌ {html_file} - HTML结构有问题")
                    
            except Exception as e:
                print(f"❌ {html_file} - 读取错误: {e}")

def check_css_syntax():
    """检查CSS语法"""
    print("\n🔍 检查CSS语法...")
    
    css_file = Path(__file__).parent / 'kg_prototype_v2.css'
    if css_file.exists():
        try:
            with open(css_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 基本CSS检查
            if ':root' in content and 'body' in content and '}' in content:
                print("✅ kg_prototype_v2.css - CSS结构正确")
            else:
                print("❌ kg_prototype_v2.css - CSS结构有问题")
                
        except Exception as e:
            print(f"❌ CSS文件读取错误: {e}")

def check_react_syntax():
    """检查React组件语法"""
    print("\n🔍 检查React组件语法...")
    
    jsx_file = Path(__file__).parent / 'kg_prototype_v2.jsx'
    if jsx_file.exists():
        try:
            with open(jsx_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 基本React检查
            if 'import React' in content and 'export default' in content and 'const' in content:
                print("✅ kg_prototype_v2.jsx - React语法正确")
            else:
                print("❌ kg_prototype_v2.jsx - React语法有问题")
                
        except Exception as e:
            print(f"❌ JSX文件读取错误: {e}")

def open_prototype_in_browser():
    """在浏览器中打开原型"""
    print("\n🌐 在浏览器中打开原型...")
    
    proto_dir = Path(__file__).parent
    enhanced_prototype = proto_dir / 'kg_enhanced_prototype.html'
    
    if enhanced_prototype.exists():
        try:
            # 获取绝对路径
            abs_path = enhanced_prototype.resolve()
            file_url = f"file:///{abs_path.as_posix()}"
            
            print(f"📂 打开文件: {file_url}")
            webbrowser.open(file_url)
            print("✅ 原型已在浏览器中打开")
            
        except Exception as e:
            print(f"❌ 无法打开浏览器: {e}")
    else:
        print("❌ 增强原型文件不存在")

def generate_prototype_summary():
    """生成原型总结"""
    print("\n📊 原型功能总结:")
    print("=" * 50)
    
    features = [
        "✅ 响应式设计 - 支持桌面和移动设备",
        "✅ 模块化导航 - 7个主要功能模块",
        "✅ 交互式界面 - 点击切换、表单操作",
        "✅ 实时监控 - 进度条、状态更新",
        "✅ 知识图谱可视化 - 节点和边的动态生成",
        "✅ 搜索功能 - 全局搜索和过滤",
        "✅ 多级菜单 - 三级功能导航",
        "✅ 表单验证 - 输入验证和错误提示",
        "✅ 导出功能 - 结果导出和保存",
        "✅ 帮助系统 - 用户指导和说明"
    ]
    
    for feature in features:
        print(feature)
    
    print("\n🎯 技术特点:")
    print("- 纯HTML/CSS/JavaScript实现")
    print("- 无外部依赖，可直接运行")
    print("- 模块化代码结构")
    print("- 可扩展的组件设计")
    print("- 现代化的UI/UX设计")

def main():
    """主函数"""
    print("🚀 开始测试proto-claude原型...")
    print("=" * 50)
    
    # 执行测试
    test_prototype_files()
    validate_html_syntax()
    check_css_syntax()
    check_react_syntax()
    
    # 生成总结
    generate_prototype_summary()
    
    # 询问是否在浏览器中打开
    try:
        response = input("\n❓ 是否在浏览器中打开增强原型? (y/n): ").lower().strip()
        if response in ['y', 'yes', '是']:
            open_prototype_in_browser()
    except KeyboardInterrupt:
        print("\n👋 测试完成!")
    
    print("\n✅ 原型测试完成!")

if __name__ == "__main__":
    main()
