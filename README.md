# Warm Orange Theme / 温暖橙色主题

<div align="center">

**Language / 语言**: [English](#english) | [中文](#中文)

</div>

---

<a id="english"></a>
# English

A warm and cozy orange theme designed for long coding sessions, making your development environment more comfortable and inviting.

![Theme Preview](https://via.placeholder.com/800x450/fdfcf8/524a3e?text=Warm+Orange+Theme+Preview)

## Features

- **Warm Color Palette**: Main colors use soft amber orange paired with beige backgrounds, creating a cozy development atmosphere
- **Eye-Friendly Design**: Low-saturation color scheme reduces eye strain, perfect for extended coding sessions
- **Complete Coverage**: Covers all IDE interface elements including editor, sidebar, terminal, debug panel, and more
- **Semantic Highlighting**: Intelligent code syntax highlighting for clear and readable code structure

## Installation

### Method 1: Local Installation (Recommended)

1. **Copy Extension Folder**
   ```bash
   # Copy the entire folder to Trae's extensions directory
   cp -r trae-warm-orange-theme ~/.vscode/extensions/
   # Or Trae-specific directory (if different)
   cp -r trae-warm-orange-theme ~/.trae/extensions/
   ```

2. **Restart Trae/VS Code**
   - Completely close the application and reopen it
   - Or use `Ctrl+Shift+P` (Windows/Linux) / `Cmd+Shift+P` (Mac)
   - Type `Developer: Reload Window`

3. **Select Theme**
   - Press `Ctrl+Shift+P` / `Cmd+Shift+P`
   - Type `Preferences: Color Theme`
   - Select `Warm Orange`

### Method 2: Install from VSIX

1. **Package Extension**
   ```bash
   cd trae-warm-orange-theme
   npm install -g vsce
   vsce package
   ```
   This will generate a `.vsix` file

2. **Install VSIX**
   - In Trae/VS Code, press `Ctrl+Shift+P`
   - Type `Extensions: Install from VSIX`
   - Select the generated `.vsix` file

### Method 3: Manual Configuration Copy

If the above methods don't work, you can copy the color configuration to your settings file:

1. Open Settings (`Ctrl+,` / `Cmd+,`)
2. Click the "Open Settings (JSON)" button in the top right corner
3. Add the following configuration:

```json
{
  "workbench.colorCustomizations": {
    "editor.background": "#faf8f3",
    "editor.foreground": "#5c4a3a",
    "editorCursor.foreground": "#c94c00",
    "sideBar.background": "#f5f1e8",
    "activityBar.background": "#f5f1e8",
    "activityBar.foreground": "#8a7d68",
    "statusBar.background": "#c94c00",
    "statusBar.foreground": "#ffffff",
    "tab.activeBackground": "#ffffff",
    "tab.activeForeground": "#5c4a3a",
    "tab.activeBorder": "#c94c00",
    "tab.inactiveBackground": "#f5f1e8",
    "button.background": "#c94c00",
    "button.foreground": "#ffffff",
    "input.background": "#f5f1e8",
    "list.activeSelectionBackground": "#ffd699",
    "list.focusBackground": "#ffd699",
    "editor.selectionBackground": "#ffd699",
    "editor.lineHighlightBackground": "#f5f1e8",
    "terminal.background": "#faf8f3",
    "terminal.foreground": "#5c4a3a",
    "terminal.ansiYellow": "#c94c00"
  }
}
```

## Color Palette

### Primary Colors

| Usage | Color | Value |
|-------|-------|-------|
| Primary Action | Amber Orange | `#c94c00` |
| Hover State | Light Orange | `#f59e0b` |
| Pressed State | Dark Orange | `#b03d00` |
| Highlight Background | Pale Orange | `#ffd699` |

### Background Colors

| Usage | Color | Value |
|-------|-------|-------|
| Editor Background | Beige White | `#faf8f3` |
| Secondary Background | Light Beige | `#f5f1e8` |
| Panel Border | Beige | `#e8e0d5` |
| Divider | Dark Beige | `#d9d0c1` |

### Text Colors

| Usage | Color | Value |
|-------|-------|-------|
| Primary Text | Dark Brown | `#5c4a3a` |
| Secondary Text | Medium Brown | `#6d5a48` |
| Auxiliary Text | Light Brown | `#8a7d68` |
| Placeholder Text | Brown Gray | `#a89c84` |

## Interface Coverage

This theme covers the following interface elements:

- Editor (background, cursor, selection, line highlight, indent guides)
- Sidebar and Activity Bar
- Tabs
- Status Bar and Title Bar
- Terminal
- Debug Panel
- Dropdown Menus and Input Fields
- Lists and Tree Views
- Code Completion Suggestions
- Notifications and Messages
- Git Integration Display
- Settings Page
- Quick Picker
- Context Menu

## Code Syntax Highlighting

| Syntax Element | Color |
|---------------|-------|
| Keywords | `#c94c00` |
| Functions | `#2563eb` |
| Strings | `#5c7a45` |
| Numbers | `#c2410c` |
| Comments | `#9e9e9e` (italic) |
| Variables | `#6b4423` |
| Classes | `#d69e2e` (bold) |
| Control Flow | `#F31518` (bold) |
| Type Hints | `#0891b2` (italic) |

## Feedback

If you encounter any issues or have suggestions for improvement, please provide feedback through:

- Submit an Issue in the GitHub repository
- Send an email to the theme maintainer

**GitHub Repository**: [https://github.com/jerryjie/trae-warm-orange-theme](https://github.com/jerryjie/trae-warm-orange-theme)

**Issues**: [https://github.com/jerryjie/trae-warm-orange-theme/issues](https://github.com/jerryjie/trae-warm-orange-theme/issues)

## License

MIT License - Feel free to use and modify

## Version History

### 1.0.0
- Initial release
- Complete light theme coverage
- Semantic highlighting support

## Credits

Created with ❤️ for developers who love warm, cozy coding environments.

---

<div align="center">

[↑ Back to Top / 返回顶部](#warm-orange-theme--温暖橙色主题) | [中文](#中文)

</div>

---

<a id="中文"></a>
# 中文

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
    "editor.background": "#faf8f3",
    "editor.foreground": "#5c4a3a",
    "editorCursor.foreground": "#c94c00",
    "sideBar.background": "#f5f1e8",
    "activityBar.background": "#f5f1e8",
    "activityBar.foreground": "#8a7d68",
    "statusBar.background": "#c94c00",
    "statusBar.foreground": "#ffffff",
    "tab.activeBackground": "#ffffff",
    "tab.activeForeground": "#5c4a3a",
    "tab.activeBorder": "#c94c00",
    "tab.inactiveBackground": "#f5f1e8",
    "button.background": "#c94c00",
    "button.foreground": "#ffffff",
    "input.background": "#f5f1e8",
    "list.activeSelectionBackground": "#ffd699",
    "list.focusBackground": "#ffd699",
    "editor.selectionBackground": "#ffd699",
    "editor.lineHighlightBackground": "#f5f1e8",
    "terminal.background": "#faf8f3",
    "terminal.foreground": "#5c4a3a",
    "terminal.ansiYellow": "#c94c00"
  }
}
```

## 配色方案

### 主色调

| 用途 | 颜色 | 值 |
|------|------|-----|
| 主要操作色 | 琥珀橙 | `#c94c00` |
| 悬停状态 | 浅橙色 | `#f59e0b` |
| 按下状态 | 深橙色 | `#b03d00` |
| 高亮背景 | 淡橙色 | `#ffd699` |

### 背景色

| 用途 | 颜色 | 值 |
|------|------|-----|
| 编辑器背景 | 米白色 | `#faf8f3` |
| 次要背景 | 淡米色 | `#f5f1e8` |
| 面板边框 | 米色 | `#e8e0d5` |
| 分隔线 | 深米色 | `#d9d0c1` |

### 文字色

| 用途 | 颜色 | 值 |
|------|------|-----|
| 主要文字 | 深棕色 | `#5c4a3a` |
| 次要文字 | 中棕色 | `#6d5a48` |
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
| 关键字 | `#c94c00` |
| 函数 | `#2563eb` |
| 字符串 | `#5c7a45` |
| 数字 | `#c2410c` |
| 注释 | `#9e9e9e` (斜体) |
| 变量 | `#6b4423` |
| 类 | `#d69e2e` (粗体) |
| 控制流 | `#F31518` (粗体) |
| 类型提示 | `#0891b2` (斜体) |

## 问题反馈

如果在使用过程中发现问题或有改进建议，请通过以下方式反馈：

- 在GitHub仓库中提交Issue
- 发送邮件至主题维护者

**GitHub仓库**: [https://github.com/jerryjie/trae-warm-orange-theme](https://github.com/jerryjie/trae-warm-orange-theme)

**问题反馈**: [https://github.com/jerryjie/trae-warm-orange-theme/issues](https://github.com/jerryjie/trae-warm-orange-theme/issues)

## 许可证

MIT License - 欢迎自由使用和修改

## 版本历史

### 1.0.0
- 初始版本发布
- 完整的浅色主题覆盖
- 支持语义高亮

## 致谢

为热爱温暖舒适编码环境的开发者们精心打造。

---

<div align="center">

[↑ Back to Top / 返回顶部](#warm-orange-theme--温暖橙色主题) | [English](#english)

</div>
