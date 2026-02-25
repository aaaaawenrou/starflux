Nomad Routine：数字游民防过劳节律引擎 (Flutter 全栈开发方案)
第一部分：产品哲学与核心价值重塑 (The "Why" & "Evolution")
市面上的效率工具（如 Todoist, 番茄钟）都在试图“榨干”用户的每一分钟，而 Nomad Routine 逆流而上，我们做的是**“反过劳边界”与“可持续性游民生态”。自由职业者和独立开发者的最大痛点，是工作、学习与生活的边界彻底坍塌**。
我们在原有“三板斧”的基础上，升级为**“四维防护网”**：
1.	动态物理容量 (Fluid Bucket)：不再死板规定每天8小时。用户可以高度自定义每日容量（例如周一打满10小时，周三只做4小时轻度维护）。填满即锁死，拒绝盲目乐观。
2.	三态一键翻转 (The Tri-State Flip)：将生活划分为三个绝对隔离的结界：工作 (Work)、学习 (Learn)、生活 (Life)。不同状态下，UI彻底改变，非当前状态的任务强行隐藏。
3.	现实动态校准 (Reality Check)：任务预估与实际花费时间动态对比，生成“时间通货膨胀率”数据，逼迫用户认清自己的真实效率。
4.	数字游民自律契约 (Nomad Contract)：通过高度自定义的周计划，允许用户设定特定的“无工作日”或“纯学习日”，系统将如同严格的导师般捍卫这些设定。
 
第二部分：商业化与付费模型 (The "Money" Engine)
维持“Freemium 基础免费 + Day-1 新手引导限时冲动付费 + 后期高级功能锁死”的绝佳组合拳，并结合新增功能进行诱饵升级。
1. 核心定价策略 (全球视野，美元计价，结合 RevenueCat)
•	基础版 (Free)：永远免费无广告。包含标准的每日8小时（不可自定义）、基础单任务计时、仅限工作/生活双态翻转、基础数据统计。
•	PRO 月度订阅 (Monthly)：$2.99 / 月（提高一点月度价格，作为价格锚点衬托买断制）。
•	PRO 终身买断 (Lifetime Retail)：$39.99。
•	🔥 Day-1 破冰买断 (Welcome Offer)：$12.99（仅在用户首次下载的头 24 小时内有效。这是 App 的生命线）。
2. 黄金 3 分钟新手引导 (Onboarding Flow - Flutter PageView 实现)
•	Screen 1（灵魂拷问）：深色背景（#0F172A），一行白字利用 Flutter AnimatedOpacity 渐显：“上一次你真正心安理得地合上电脑，是什么时候？”（停留 2.5 秒后自动跳转）。
•	Screen 2（指出病因）：屏幕中央出现一个使用 Rive 制作的满溢水桶动画。文案：“自由职业不等于 24 小时待命。你的精力，是一个有底的容器。”
•	Screen 3（引入自定义与学习）：“在 Nomad Routine，你说了算。定义你的工作日，规划你的学习日，满额强制下班。”
•	Screen 4（建立契约）：交互式卡片，让用户滑动滑块：“你希望每周工作几天？”（默认5天），“每天最长几小时？”（默认8小时）。点击 [ 签订我的游民契约 ]。
3. Day-1 终极付费墙 (The Golden Paywall)
点击“签订契约”后，直接拦截弹出。
•	UI 布局：
o	顶部醒目倒计时：🔥 破冰限时优惠：23:59:59 后恢复原价（Flutter 本地持久化记录首次启动时间，防止杀进程重置）。
o	视觉中心：精美 👑 徽章，展示特权：深度自定义工作节律、解锁学习成长模式、长效雷达图、时薪转换器。
o	价格锚点：
	选项 A：$2.99 / 月 (暗淡)。
	选项 B (默认选中，边框使用 AnimatedBuilder 制作呼吸发光效果)：$12.99 终身买断 (原价 $39.99)。
o	开发者真诚背书：“Hi，我是独立开发者。我厌倦了无休止的订阅制。一次性买断，不仅能拯救你的生活节律，也能让我安心为你开发更多功能。☕️”
o	极小退出路径：右上角灰色字 [ 稍后，先用免费版 ]。
4. 免费用户的“日常付费钩子” (Feature Teasing)
•	自定义拦截：免费用户试图将周三的工作时长从 8 小时改为 4 小时时，弹出提示：“打破标准 8 小时制？解锁 PRO，随心定制你的每一天。”
•	学习模式锁死：主页的“学习/成长” Tab 带锁，点击后弹出：“输出太多，输入太少？解锁 PRO 开启专属学习模式，让成长数据可视化。”
•	高斯模糊数据：Insights 页面，使用 Flutter 的 BackdropFilter 对“过去30天过劳雷达图”和“学习转化率”进行重度模糊，挂上 🔒。
 
第三部分：前端 UI / UX 设计规范 (Design System - Flutter Theme)
采用 极简主义 (Minimalism) + 拟物触觉 (Neumorphism hints) + 绝对色彩割裂。利用 Flutter 的 ThemeData 进行全局状态控制。
1. 三态全局色彩规范 (The Tri-State Colors)
•	🧊 【工作模式 Work Mode】（冷静、克制、效率）
o	背景色：冰川白 #F8FAFC (亮) / 深海蓝 #0F172A (暗)
o	主控色：专注蓝 #3B82F6 (进行中的任务容器，主按钮)
o	文本色：冷峻灰 #334155
•	🌱 【学习模式 Learn Mode】（沉浸、生长、心流） (新增)
o	背景色：宣纸白 #F4F4ED (亮) / 墨林绿 #141C16 (暗)
o	主控色：生机绿 #10B981 (用于学习任务和计时器)
o	文本色：深森绿 #1F2937
•	🌅 【生活模式 Life Mode】（温暖、松弛、治愈）
o	背景色：暖沙色 #FFFBF5 (亮) / 炭炉黑 #1C1917 (暗)
o	主控色：日落橘 #F97316
o	文本色：咖啡棕 #44403C
2. 核心交互动效与震动反馈 (Flutter 动画体系 + HapticFeedback)
•	动态水桶排版 (Hero & AnimatedContainer)：任务卡片随着时间流逝，高度逐渐缩水或膨胀，下方的任务会像物理方块一样被平滑挤压（使用 AnimatedList 或自定义 LayoutBuilder）。
•	拖拽超载反弹 (Draggable & DragTarget)：用户拖拽 3 小时的任务进仅剩 1 小时的工作桶时，任务块触发物理碰撞效果反弹回原位，手机执行 HapticFeedback.heavyImpact()，屏幕边缘瞬间泛起 #EF4444 红光。
•	The Flip (三态翻转下班/切换动效)：
o	点击 [ Clock Out ] 时，使用 Flutter CustomPainter 或 Rive 制作全屏遮罩动画，类似“墨水从底部滴落并迅速晕染全屏”，界面从冰蓝色瞬间切换到温暖的橘色。伴随连续两次沉闷的震动，模拟“关上大门”。
 
第四部分：完整功能模块与页面详解 (Screen-by-Screen)
App 底部导航栏（BottomNavigationBar）包含：Home (今日), Plan (节律), Insights (洞察), Settings (我的)。
Tab 1: Home (今日节律) —— 核心控制台
状态 A：工作营业中 (Work UI)
•	顶栏指示器：顶部是一个精致的横向 Toggle：“🛠 工作”与“🌱 学习”（免费版点击学习提示升级）。当前选中“工作”。文案提示：“Stay focused. 距离强制下班还有 4.5 小时。”
•	视觉中心（液体容量桶）：根据当天自定义的时长（如总高度代表6小时），任务以堆叠的色块填充在桶内。
•	任务卡片区：
o	[ 💻 编写前端鉴权逻辑 | 预估 2h | 项目: 内部 ] -> 点击 [ ▶ 开始 ]，卡片展开，显示带有波纹动画的计时器。
o	超时膨胀逻辑：预估 2h 到了还没结束？卡片变红，并在视觉上不断拉长，挤压底部的剩余空间。空间被挤爆时，全屏闪烁红框。
•	悬浮按钮 (FAB)：[ 结束营业 Clock Out ]。长按 1.5 秒（带环形进度条加载），触发翻转。
状态 B：学习成长中 (Learn UI) [PRO专属]
•	切换到学习模式，UI 瞬间变为生机绿色系。工作任务被完全隐藏。
•	输入桶 (Input Bucket)：这是一个不设严格上限的“成长树”概念。记录如：“阅读架构书籍”、“学习新语言”、“看行业播客”。
•	多巴胺设计：学习模式不强调“压力”，而强调“灌溉”。计时器运转时，背景有极轻微的树叶飘动动画（使用 Flutter 粒子效果）。
状态 C：已下班 (Life UI)
•	强力阻断：所有工作和学习任务不可见。“You are off the clock. 去摸摸真实的草地吧。”
•	生活刮刮乐：系统提供 3 个生活建议卡片：“看一部老电影”、“做顿晚饭”、“发呆 15 分钟”。完成打勾。
•	硬核防过劳模式 (PRO 专属)：底部极小的灰色文字 [ ⚠️ 紧急情况，我必须加班 ]。点击后，屏幕变红，弹出弹窗：“请解开此题以解锁工作区：17 × 24 = ?”（随机两位数乘法）。输入正确答案才能解锁，极大增加加班的心理摩擦力。
Tab 2: Plan (全局规划与自律契约) —— 扩展自定义功能
这不仅是一个任务池，更是游民的排班表。
•	顶部：我的游民契约 (My Nomad Contract)
o	横向展示本周七天。每天下方显示容量（如：一 8h，二 8h，三 4h，四 休息，五 6h，六 学习日，日 休息）。
o	PRO 自定义引擎：用户点击某一天，可以极其细致地设定：这一天是“工作日/学习日/休息日”？工作容量上限是几小时？
•	左半屏/侧边拉出 (Backlog 任务池)：记录所有待办。标签区分为 #工作 和 #学习。
•	右半屏主视图 (日历看板)：用户将 Backlog 里的任务拖入对应的天数。
o	智能拒收：试图把任务拖入周四（已设定为休息日），列表会剧烈抖动并拒绝接受。拖入周三超出 4 小时，直接弹回。
Tab 3: Insights (数据洞察与游民账单) —— 价值感知阵地
•	模块 1：预估 vs 现实 (Reality Check)：双色叠加柱状图。浅蓝代表“你以为要多久”，深蓝代表“实际花多久”。计算出你的“盲目乐观指数”（例如：时间通胀率 130%）。
•	模块 2：输入输出比 (I/O Ratio) [PRO]：环形图展示本周“工作输出时间”与“学习输入时间”的比例。提醒用户：“你本周一直在透支工作，学习时间为 0，建议周末补充输入。”
•	模块 3：长效节律热力图 (Burnout Radar) [PRO]：类似 GitHub 的绿点图，但使用蓝/红色块。深蓝色代表按时下班，红色代表强行加班。一片红色就是在警告你即将崩溃。
•	模块 4：游民时薪钱包 [PRO]：在设置设定期望时薪（如 $50/h）。系统自动将本周实际工作时长乘以时薪，显示一个巨大的美元数字：“本周你创造了 $1,500，且没有过劳。你可以安心去喝啤酒了。” 这是最强的正向心理按摩。
Tab 4: Settings (设置与主题)
•	节律总控室 (Rhythm Control)：设置周起始日、默认工作时长、时区。
•	主题橱窗 (Themes)：基础冰蓝主题（免费）。PRO 用户可选：巴厘岛日落、京都禅院（带独特的背景白噪音功能）、极光黑客。
•	数据导出：支持导出 CSV 供自由职业者向客户报账。
•	开发者来信：包含社交媒体（Twitter/小红书/即刻）链接，沉淀私域流量。
 
第五部分：Flutter 专属技术架构与实现方案 (Engineering Blueprint)
为了保证单人开发效率、代码健壮性、多端一致性，以及超越原生App的丝滑体验，技术选型至关重要。
1. 核心技术栈选型
•	开发框架：Flutter (Targeting iOS & Android，未来可轻松扩展 Mac/Windows 桌面版)。
•	状态管理：Riverpod (强烈推荐)。完美替代 Provider，类型安全，特别适合处理“工作/学习/生活”这种全局三态切换，且在计算“实时剩余时长”时极易构建响应式监听 (StateNotifier 或响应式重构的 @riverpod)。
•	本地数据库：Isar Database。
o	为什么不用 SQLite/Hive? Isar 是专门为 Flutter 打造的下一代 NoSQL 数据库，读写极快（支持庞大的任务日志），全异步，支持复合索引，并且原生支持关联关系（Task 关联到某个具体的 Day）。完全 Local-First，不依赖云端，节省服务器成本。
•	动画引擎：
o	UI 微交互：flutter_animate 库（用链式语法实现卡片抖动、淡入淡出，极度节省代码量）。
o	复杂水桶液态动画：Rive (flare 的升级版，设计师在外部做好动画，通过状态机在 Flutter 内部通过逻辑传参，比如传入 fillLevel 参数，水面就上升)。
•	硬件交互：haptic_feedback 库。精准控制轻震(selection)、重震(heavyImpact)和连续震动(error)。
•	商业化内购：purchases_flutter (RevenueCat 官方 SDK)。处理跨平台订阅状态校验、Day-1 限时折扣逻辑极其简单。
2. Isar 数据库模型设计 (Data Schema)
使用 Isar 注解生成强类型代码，设计必须兼顾“自定义节律”与“学习模式”。
codeDart
// 1. 全局用户配置表 (记录用户的游民契约)
@collection
class UserRhythmProfile {
  Id id = Isar.autoIncrement;
  late int defaultWorkMinutes; // 默认 480 (8小时)
  late List<int> workDays; // [1,2,3,4,5] 代表周一到周五
  late List<int> learnDays; // [6] 代表周六专属学习日
  late bool isProUser; // 缓存的 Pro 状态
  late DateTime firstLaunchTime; // 用于计算 24h 倒计时
  double? targetHourlyRate; // 时薪计算器
}

// 2. 每日容量记录表 (The Bucket Record)
@collection
class DailyBucket {
  Id id = Isar.autoIncrement;
  @Index(unique: true)
  late DateTime date; // 哪一天，例如 2023-10-25
  late int capacityLimit; // 当天自定义的容量 (分钟)
  late int totalWorkConsumed; // 已消耗工作时间
  late int totalLearnConsumed; // 已消耗学习时间
  
  @enumerated
  late DailyState state; // 枚举: working, learning, clockedOut
  
  bool get isOverworked => totalWorkConsumed > capacityLimit;
}
enum DailyState { working, learning, clockedOut }

// 3. 任务表 (Task)
@collection
class Task {
  Id id = Isar.autoIncrement;
  late String title;
  late int estimatedMinutes; 
  int actualMinutes = 0; 
  
  @enumerated
  late TaskType type; // 枚举: work, learn, lifeGoal
  
  @enumerated
  late TaskStatus status; // todo, inProgress, done
  
  @Index()
  late DateTime assignedDate; // 关联到哪一天
  
  String? projectId; // PRO 功能的标签
}
enum TaskType { work, learn, lifeGoal }
enum TaskStatus { todo, inProgress, done }
3. Flutter 核心难点攻克指南
•	难点一：全局主题无缝热切换 (The Flip)
通过 Riverpod 创建一个 ThemeController。当用户触发下班时，更新状态。在根目录的 MaterialApp 中，监听这个状态，传入不同的 ThemeData。
使用 AnimatedTheme 组件包裹根页面，Flutter 会自动处理背景色、文字颜色、按钮颜色的渐变过渡。配合上全屏的自定义动画遮罩，效果拔群。
•	难点二：后台计时器被系统杀进程 (Background Execution)
iOS/Android 都会杀后台。不要依赖真实的后台 Timer。
解决方案：当用户点击“开始任务”，将 startTime = DateTime.now() 存入 Isar，同时通过 flutter_local_notifications 注册一个本地通知（倒计时结束时提醒）。当用户切回 App 时，利用 DateTime.now().difference(startTime) 重新计算时间并更新 UI。这样即使用户关机重启，时间也不会乱。
•	难点三：Day-1 限时倒计时的安全性
防止用户通过修改手机系统时间白嫖首次优惠。
解决方案：利用 ntp 包获取网络真实时间作为参考。在 App 首次联网启动时，向 RevenueCat 写入一个自定义属性 first_open_timestamp，或者存储在本地使用强加密方案（flutter_secure_storage）。
 
第六部分：独立开发者分阶段敏捷执行路线图 (Roadmap for Solo Dev)
千万不要陷入“功能完美主义”的陷阱，必须切分阶段，确保每个阶段都是一个可发布的闭环（MVP）。
阶段一：核心循环跑通（Core Loop MVP，预期耗时：3周）
•	目标：自己能用起来，验证最核心的防过劳打卡。
•	开发任务：
o	搭建 Flutter 工程，配置 Riverpod + Isar + 基础架构。
o	实现 Task 和 DailyBucket 的增删改查。
o	完成基础版 Home 页：支持工作任务添加、秒表正向计时、UI 高度动态变化。
o	实现最震撼的 The Flip (下班翻转) 逻辑和黑白/橘色双态 UI。
•	舍弃：暂不开发图表、自定义节律、学习模式、数据导出。
•	里程碑：你可以作为一号员工，每天使用它管理自己的时间，真实感受是否能降低焦虑。
阶段二：护城河构建与商业化准备（The "Pro" Setup，预期耗时：2周）
•	目标：引入高阶功能，完成商业闭环。
•	开发任务：
o	深度自定义引擎：实现设置里的“游民契约”，支持按天自定义容量和类型。
o	学习模式剥离：引入“绿色”UI状态，实现工作/学习双轨并行。
o	防过劳惩罚：开发超载红光警告、物理反弹震动、以及下班后的“数学题解锁”功能。
o	RevenueCat 接入：配置苹果/谷歌后台，写死 $2.99 和 $39.99 两个基础商品。开发内购弹窗。
o	生死攸关的 Onboarding：利用 PageView 实现极具煽动性的前 4 个引导屏，以及带有 24 小时倒计时的 $12.99 黄金付费墙。
阶段三：价值外化与打磨上线（Visual Polish & Launch，预期耗时：2周）
•	目标：让 App 看起来值 39 美元。
•	开发任务：
o	开发 Insights 页面：预估对比图、I/O 比例图、游民时薪计算器。
o	实现免费版的“高斯模糊”遮罩钩子。
o	优化所有的页面转场和微交互（使用 flutter_animate 加特效）。
o	多语言国际化支持（flutter_localizations：重点做英文和简体中文）。
o	准备 App Store 的精美截图（强调：防过劳、下班翻转、自定义节律）。
 
第七部分：冷启动与上线运营策略 (Go-to-Market Bonus)
作为独立开发者，酒香也怕巷子深。开发完成后的推广策略如下：
1.	Product Hunt 冲榜：由于极简的设计和直击痛点的“反效率/防过劳”理念，极易在海外 PH 社区引起共鸣。文案主打："We are freelancers, not 24/7 machines. Clock out at 8 hours."
2.	小红书/推特“过程分享” (Build in Public)：在开发阶段就截图分享“水桶超载反弹”的动效、“下班解数学题”的奇葩设定。标签带上 #独立开发、#数字游民、#不上班、#自由职业。
3.	定价心理战：首发第一周，向所有早期关注者发放限时折扣码（通过 RevenueCat 的促销码系统），将终身买断降至 $9.99，迅速积累第一批高粘性种子用户，刷满 App Store 的五星好评。
总结：Nomad Routine 不仅仅是一个 Flutter App，它是您和所有数字游民重建生活秩序的工具。依靠 Flutter 强大的跨平台UI表现力、Isar 极速的本地存储、加上精准拿捏人性的 Freemium+首日倒计时策略，只要严格按照此方案执行，绝对有机会成为小众生产力工具赛道中的一匹“高转化、高口碑”黑马。

