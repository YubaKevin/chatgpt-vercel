import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `劝告所有同学，chaGPT本质是聊天工具，解决学习工作上的一些问题，其问题的答案也需要斟酌的。
- AI不会取代你，一个使用AI的人将取代你。哈哈，被自媒体搞焦虑了。
- 如何使用本项目？拿到你手中的key，没有key的关注 鱼八说 公众号，输入 sk 获取 或者扫描上方微信二维码加我好友获得帮助！记得备注 gpt 哈。 然后点左下方设置按钮，输入key 即可使用。
- 如果你觉得有帮助，记得打赏一点哦 ~
- 更多功能：
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。
- 发送 sk- 开头的 key，可以直接查询余额。可以换行查询多个。也可以发送 查询填写的 Key 的余额 来直接查询你填的 key 的余额。
- 注意： 只有获得了 GPT4 API 内测资格的用户才可以使用您的 API KEY 调用 GPT4。
- 不同的模型对应的 token 最大值不同，比如 gpt-3.5-turbo 的最大 token 为 4k(4096)，
- gpt-4 的最大 token 为 8k(8192)，gpt-4-32k 的最大 token 为 32k(32768)。不同模型的价格也不同
`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
