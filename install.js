#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// 获取用户主目录
const homeDir = os.homedir();

// 目标路径
const paths = {
  agents: path.join(homeDir, '.opencode', 'agents'),
  skills: path.join(homeDir, '.opencode', 'skills', 'novel'),
  skillDir: path.join(homeDir, '.agents', 'skills', 'novel'),
  config: path.join(homeDir, '.config', 'opencode')
};

// 源文件路径
const sourceDir = __dirname;

// 要复制的文件
const agentFiles = [
  'novel-lead.md',
  'novel-outline.md',
  'novel-audit.md',
  'novel-writer.md',
  'novel-script.md',
  'novel-material.md',
  'novel-video.md'
];

// 创建目录
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ 创建目录: ${dirPath}`);
  }
}

// 复制文件
function copyFile(source, target) {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log(`✓ 复制文件: ${path.basename(target)}`);
  }
}

// 安装技能
function install() {
  console.log('\n🚀 开始安装小说创作技能系统...\n');

  // 创建目录
  createDir(paths.agents);
  createDir(paths.skills);
  createDir(paths.skillDir);
  createDir(paths.config);

  // 复制智能体文件
  console.log('\n📦 安装智能体文件...');
  agentFiles.forEach(file => {
    const source = path.join(sourceDir, 'agents', file);
    const target = path.join(paths.agents, file);
    copyFile(source, target);
  });

  // 复制技能文件
  console.log('\n📦 安装技能文件...');
  const skillSource = path.join(sourceDir, 'skills', 'SKILL.md');
  const skillTarget = path.join(paths.skillDir, 'SKILL.md');
  copyFile(skillSource, skillTarget);

  // 复制配置文件
  console.log('\n📦 安装配置文件...');
  const configSource = path.join(sourceDir, 'config', 'AGENTS.md');
  const configTarget = path.join(paths.config, 'AGENTS.md');
  copyFile(configSource, configTarget);

  // 复制novella.json
  const novellaSource = path.join(sourceDir, 'config', 'novella.json');
  const novellaTarget = path.join(paths.skills, 'novella.json');
  copyFile(novellaSource, novellaTarget);

  console.log('\n✅ 安装完成！\n');
  console.log('📝 使用方法：');
  console.log('   1. 重启OpenCode');
  console.log('   2. 说"使用小说创作技能"或"调用novel skill"');
  console.log('   3. 核心规则已自动加载，无需每次调用\n');
}

// 卸载技能
function uninstall() {
  console.log('\n🗑️  开始卸载小说创作技能系统...\n');

  // 删除文件
  agentFiles.forEach(file => {
    const target = path.join(paths.agents, file);
    if (fs.existsSync(target)) {
      fs.unlinkSync(target);
      console.log(`✓ 删除文件: ${file}`);
    }
  });

  // 删除技能文件
  const skillTarget = path.join(paths.skillDir, 'SKILL.md');
  if (fs.existsSync(skillTarget)) {
    fs.unlinkSync(skillTarget);
    console.log(`✓ 删除文件: SKILL.md`);
  }

  // 删除配置文件
  const configTarget = path.join(paths.config, 'AGENTS.md');
  if (fs.existsSync(configTarget)) {
    fs.unlinkSync(configTarget);
    console.log(`✓ 删除文件: AGENTS.md`);
  }

  console.log('\n✅ 卸载完成！\n');
}

// 主函数
function main() {
  const command = process.argv[2];

  if (command === 'uninstall') {
    uninstall();
  } else {
    install();
  }
}

main();
