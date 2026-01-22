const vscode = require('vscode');

function activate(context) {
    console.log('Warm Orange Theme 已激活');
}

function deactivate() {
    console.log('Warm Orange Theme 已停用');
}

module.exports = {
    activate,
    deactivate
};