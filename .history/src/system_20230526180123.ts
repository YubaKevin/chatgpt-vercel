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

export const defaultMessage = `
公告：为了更好的服务大家，本网站目前已经修改为内测网站。也开发了更好的gpt3.5产品。
需要更好的体验gpt，可以搜索 www.changshugpt.com 免梯子用国内任一邮箱注册即可免费使用。限时免费。
------------------------------------------------------------------------------------------------
想体验4.0 可以加我好友！！！vx ： myxj0112 
- 如果你觉得有帮助，记得打赏一点哦 ~
- 更多功能：
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。
- 发送 sk- 开头的 key，可以直接查询余额。可以换行查询多个。也可以发送 查询填写的 Key 的余额 来直接查询你填的 key 的余额。
`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
