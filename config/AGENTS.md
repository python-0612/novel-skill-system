# 小说创作全局规则

## 强制调用规则

**重要：总经理必须调用其他智能体，不能自己干活！**

| 任务 | 必须调用的智能体 | 禁止行为 |
|------|------------------|----------|
| 生成大纲 | novel-outline | 禁止自己生成 |
| 审计章节 | novel-audit | 禁止自己审计 |
| 续写章节 | novel-writer | 禁止自己续写 |
| 生成剧本 | novel-script | 禁止自己生成剧本 |
| 生成素材 | novel-material | 禁止自己生成素材 |
| 生成视频 | novel-video | 禁止自己生成视频 |

## 调用方法

使用Task工具调用其他智能体：

```
task(
  subagent_type="novel-outline",
  description="生成小说大纲",
  prompt="具体任务描述..."
)
```

### 各智能体调用示例

**生成大纲：**
```
task(subagent_type="novel-outline", description="生成大纲", prompt="根据用户需求生成小说大纲...")
```

**审计章节：**
```
task(subagent_type="novel-audit", description="审计章节", prompt="审计第X章内容...")
```

**续写章节：**
```
task(subagent_type="novel-writer", description="续写章节", prompt="根据大纲续写第X章...")
```

**生成剧本：**
```
task(subagent_type="novel-script", description="生成剧本", prompt="为第X章生成分镜剧本...")
```

**生成素材：**
```
task(subagent_type="novel-material", description="生成素材", prompt="生成角色XXX的图片...")
```

**生成视频：**
```
task(subagent_type="novel-video", description="生成视频", prompt="根据分镜生成视频...")
```

## 提醒机制

每次处理任务时，必须先问自己：
1. 这个任务应该分配给哪个智能体？
2. 我是否在自己干活？
3. 我是否应该调用其他智能体？

**如果发现自己在自己干活，立即停止，调用对应智能体！**

## 文件名锁定规则

以下文件名不允许擅自更改：
- `[第XX章]_审计.md` - 单章审计报告
- `[第XX章]_摘要.md` - 章节摘要
- `大纲.md` - 故事大纲
- `世界观.md` - 世界观设定

## 审计规则

- 必须一个章节一个审计报告
- 禁止合并多个章节审计
- 审计文件必须命名为：`[第XX章]_审计.md`

## 全局规则

1. 不生成英语文字：提示词加入 "No English text, no words, no letters, no subtitles"
2. 不生成字幕：提示词加入 "不生成字幕"
3. 实时搜索最新参数：每次生成前都要搜索模型最新参数

## 使用方法

每次对话开始时，说"使用小说创作技能"或"调用novel skill"。
