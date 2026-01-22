# Warm Orange Theme

一个温暖柔和的橙色主题，专为长时间编码设计，让你的开发环境更加舒适温馨。

![主题预览](https://via.placeholder.com/800x450/fdfcf8/524a3e?text=Warm+Orange+Theme+Preview)

## 主题特点

- **温暖配色**：主色调采用柔和的琥珀橙，搭配米白色背景，营造温馨的开发氛围
- **护眼设计**：低饱和度的配色方案，减少眼睛疲劳，适合长时间编码
- **完整覆盖**：涵盖IDE所有界面元素，包括编辑器、侧边栏、终端、调试面板等
- **语义高亮**：智能的代码语法高亮，让代码结构清晰易读

## 安装方法

### 方法一：本地安装（推荐）

1. **复制扩展文件夹**
   ```bash
   # 复制整个文件夹到Trae的扩展目录
   cp -r trae-warm-orange-theme ~/.vscode/extensions/
   # 或Trae专用目录（如果不同）
   cp -r trae-warm-orange-theme ~/.trae/extensions/
   ```

2. **重启Trae/VS Code**
   - 完全关闭应用后重新打开
   - 或使用 `Ctrl+Shift+P` (Windows/Linux) / `Cmd+Shift+P` (Mac)
   - 输入 `Developer: Reload Window`

3. **选择主题**
   - 按 `Ctrl+Shift+P` / `Cmd+Shift+P`
   - 输入 `Preferences: Color Theme`
   - 选择 `Warm Orange`

### 方法二：从VSIX安装

1. **打包扩展**
   ```bash
   cd trae-warm-orange-theme
   npm install -g vsce
   vsce package
   ```
   这将生成一个 `.vsix` 文件

2. **安装VSIX**
   - 在Trae/VS Code中按 `Ctrl+Shift+P`
   - 输入 `Extensions: Install from VSIX`
   - 选择生成的 `.vsix` 文件

### 方法三：手动复制配置

如果上述方法都不适用，可以将颜色配置复制到设置文件：

1. 打开设置 (`Ctrl+,` / `Cmd+,`)
2. 点击右上角的「打开设置(JSON)」按钮
3. 添加以下配置：

```json
{
  "workbench.colorCustomizations": {
    "editor.background": "#fdfcf8",
    "editor.foreground": "#524a3e",
    "editorCursor.foreground": "#d97706",
    "sideBar.background": "#fbf8f0",
    "activityBar.background": "#fbf8f0",
    "activityBar.foreground": "#8a7d68",
    "statusBar.background": "#d97706",
    "statusBar.foreground": "#ffffff",
    "tab.activeBackground": "#ffffff",
    "tab.activeForeground": "#524a3e",
    "tab.activeBorder": "#d97706",
    "tab.inactiveBackground": "#fbf8f0",
    "button.background": "#d97706",
    "button.foreground": "#ffffff",
    "input.background": "#fbf8f0",
    "list.activeSelectionBackground": "#fef3c7",
    "list.focusBackground": "#fef3c7",
    "editor.selectionBackground": "#fef3c7",
    "editor.lineHighlightBackground": "#fbf8f0",
    "terminal.background": "#fdfcf8",
    "terminal.foreground": "#524a3e",
    "terminal.ansiYellow": "#d97706"
  }
}
```

## 配色方案

### 主色调
| 用途 | 颜色 | 值 |
|------|------|-----|
| 主要操作色 | 琥珀橙 | `#d97706` |
| 悬停状态 | 浅橙色 | `#f59e0b` |
| 按下状态 | 深橙色 | `#b45309` |
| 高亮背景 | 淡橙色 | `#fef3c7` |

### 背景色
| 用途 | 颜色 | 值 |
|------|------|-----|
| 编辑器背景 | 米白色 | `#fdfcf8` |
| 次要背景 | 淡米色 | `#fbf8f0` |
| 面板边框 | 米色 | `#f6f0e0` |
| 分隔线 | 深米色 | `#e8e0cc` |

### 文字色
| 用途 | 颜色 | 值 |
|------|------|-----|
| 主要文字 | 深棕色 | `#524a3e` |
| 次要文字 | 中棕色 | `#6d6150` |
| 辅助文字 | 浅棕色 | `#8a7d68` |
| 占位文字 | 棕灰色 | `#a89c84` |

## 扩展界面

此主题覆盖的界面元素包括：

- 编辑器（背景、光标、选中、行高亮、缩进参考线）
- 侧边栏和活动栏
- 标签页
- 状态栏和标题栏
- 终端
- 调试面板
- 下拉菜单和输入框
- 列表和树形视图
- 代码补全建议
- 通知和消息
- Git集成显示
- 设置页面
- 快速选择器
- 上下文菜单

## 代码语法高亮

| 语法元素 | 颜色 |
|---------|------|
| 关键字 | `#d97706` |
| 函数 | `#d97706` |
| 字符串 | `#059669` |
| 数字 | `#b45309` |
| 注释 | `#a89c84` |
| 变量 | `#524a3e` |

## 问题反馈

如果在使用过程中发现问题或有改进建议，请通过以下方式反馈：

- 在GitHub仓库中提交Issue
- 发送邮件至主题维护者

## 许可证

MIT License - 欢迎自由使用和修改

## 版本历史

### 1.0.0
- 初始版本发布
- 完整的浅色主题覆盖
- 支持语义高亮
