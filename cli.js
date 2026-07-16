#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

function showHelp() {
  console.log(`
📚 小说创作技能系统 - 命令行工具

用法：novel-skill [命令]

命令：
  install     安装技能到OpenCode
  uninstall   从OpenCode卸载技能
  help        显示此帮助信息

示例：
  novel-skill install
  novel-skill uninstall
  `);
}

function install() {
  console.log('🚀 正在安装小说创作技能系统...');
  execSync('node ' + path.join(__dirname, 'install.js'), { stdio: 'inherit' });
}

function uninstall() {
  console.log('🗑️  正在卸载小说创作技能系统...');
  execSync('node ' + path.join(__dirname, 'install.js') + ' uninstall', { stdio: 'inherit' });
}

switch (command) {
  case 'install':
    install();
    break;
  case 'uninstall':
    uninstall();
    break;
  case 'help':
  case undefined:
    showHelp();
    break;
  default:
    console.error(`未知命令: ${command}`);
    showHelp();
    process.exit(1);
}
