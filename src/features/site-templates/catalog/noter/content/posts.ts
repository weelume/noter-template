export const posts = [
  {
    "slug": "three-myths-about-the-roi-of-ux",
    "category": "design",
    "image": "/templates/noter/images/WbwDSqmpfuVCtyeC0KIEeDFmBZU.jpg",
    "title": {
      "zh": "用户体验投资回报的三个误区",
      "en": "Three Myths About the ROI of UX"
    },
    "date": "2026-06-01",
    "body": [
      {
        "tag": "p",
        "zh": "用户体验团队常被问到一个熟悉的问题：“这项工作的投资回报是什么？”",
        "en": "User experience teams are often asked a familiar question: \"What's the return on investment for this work?\""
      },
      {
        "tag": "p",
        "zh": "这是个合理的问题。企业投入时间、预算和人力改善数字体验，管理者自然希望了解业务影响。然而，关于用户体验回报的讨论常被几个误区困住。",
        "en": "It's a reasonable question. Organizations invest time, budget, and people into improving digital experiences, and leadership wants to understand the business impact. Yet many discussions about UX ROI get stuck because they're based on a few common misconceptions."
      },
      {
        "tag": "p",
        "zh": "与其把投资回报当成僵硬的财务计算，不如把它视为理解优质体验如何推动业务结果的框架。",
        "en": "Instead of treating ROI as a rigid financial exercise, organizations should view it as a framework for understanding how better experiences contribute to business outcomes."
      },
      {
        "tag": "h2",
        "zh": "误区一：用户体验回报只关乎收入",
        "en": "Misconception #1: UX ROI Is Only About Revenue"
      },
      {
        "tag": "p",
        "zh": "提到投资回报，人们往往立刻想到金钱。",
        "en": "When people hear \"ROI,\" they immediately think about dollars."
      },
      {
        "tag": "p",
        "zh": "收入确实是有效设计的一种结果，却远非全部。体验改善还会影响客户留存、任务完成率、支持成本、员工效率、产品采用率和品牌认知。",
        "en": "Revenue is certainly one outcome of effective UX, but it's far from the only one. User experience improvements can influence customer retention, task completion rates, support costs, employee productivity, adoption rates, and brand perception."
      },
      {
        "tag": "p",
        "zh": "例如，减少自助服务入口的操作阻力可能不会直接带来新销售，却能减少工单、缩短处理时间、提高满意度。这些结果即便不表现为直接收入，也创造了可衡量的价值。",
        "en": "For example, reducing friction in a self-service portal may not generate new sales directly. However, it can reduce support tickets, shorten resolution times, and improve customer satisfaction. Those outcomes create measurable business value even when they don't appear as direct revenue."
      },
      {
        "tag": "p",
        "zh": "衡量用户体验回报的目标，是展示设计决策如何帮助组织实现有意义的目标。财务指标很重要，但只是故事的一部分。",
        "en": "The real goal of UX ROI is to demonstrate how design decisions help the organization achieve meaningful objectives. Financial metrics matter, but they are only part of the story."
      },
      {
        "tag": "h2",
        "zh": "误区二：回报计算必须绝对精确",
        "en": "Misconception #2: ROI Calculations Must Be Perfect"
      },
      {
        "tag": "p",
        "zh": "许多团队回避讨论回报，因为他们认为只有拿到精确数字才能提出建议。",
        "en": "Many teams avoid discussing ROI because they believe they need exact numbers before presenting their case."
      },
      {
        "tag": "p",
        "zh": "实际上，商业决策通常依赖有依据的估算，而非完美确定性。营销预测、产品规划和销售预估都包含假设。",
        "en": "In reality, business decisions are often based on informed estimates rather than perfect certainty. Marketing forecasts, product roadmaps, and sales projections all involve assumptions."
      },
      {
        "tag": "p",
        "zh": "用户体验的衡量同样如此。",
        "en": "UX measurement works the same way."
      },
      {
        "tag": "p",
        "zh": "团队可以估计简化结账流程会带来一定比例的转化提升。实际结果可能不同，但估算仍能帮助相关方判断投入的潜在价值。",
        "en": "A team might estimate that simplifying a checkout flow could increase conversion rates by a certain percentage. The exact result may differ, but the estimate still helps stakeholders evaluate the potential value of the investment."
      },
      {
        "tag": "p",
        "zh": "回报计算并不是要精准预测未来，而是提供可信的视角，说明拟议改变可能带来的影响。",
        "en": "The purpose of ROI calculations is not to predict the future with complete accuracy. Their purpose is to provide a credible view of the likely impact of a proposed change."
      },
      {
        "tag": "p",
        "zh": "有数据支撑的合理估算，通常比等待不可能达到的精确更有价值。",
        "en": "Reasonable estimates supported by data are usually more valuable than waiting for impossible precision."
      }
    ]
  },
  {
    "slug": "hiding-interaction-delays-with-progress-indicators",
    "category": "development",
    "image": "/templates/noter/images/BwBmsGmyVzeGs9Q64j0WwUeuWD4.jpg",
    "title": {
      "zh": "用进度反馈缓解交互等待",
      "en": "Hiding Interaction Delays with Progress Indicators"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "有些延迟无法避免：搜索遇到慢数据库、上传经过不稳定的网络、支付服务响应较慢。等待未必能缩短，但你可以改变它给人的感觉。",
        "en": "Some delays are unavoidable. A search hits a slow database, an upload crosses a weak connection, a payment provider takes its time. You can't always make the wait shorter — but you can change how long it feels, and that's often enough."
      },
      {
        "tag": "p",
        "zh": "感知性能是一门独立学问。研究反复表明，获得反馈的等待比面对空白的同等等待感觉更短。冻结两秒的屏幕像是故障，显示加载状态的屏幕则说明系统仍在工作。",
        "en": "Perceived performance is its own discipline. Research consistently shows that a wait filled with feedback feels shorter than an identical wait spent staring at nothing. The screen that freezes for two seconds reads as broken; the screen that shows a spinner reads as working. Same duration, completely different experience."
      },
      {
        "tag": "p",
        "zh": "让反馈与等待相匹配。不到一秒的操作，按钮变淡或一个小型加载图标就足够。更长的操作应提供真实跟踪完成度的进度条，因为不确定才是等待令人不安的原因。",
        "en": "Match the indicator to the wait. For anything under about a second, a subtle state change is plenty — fading a button or showing a small inline spinner. For longer operations, a determinate progress bar that genuinely tracks completion beats an endless spinner, because uncertainty is what makes waiting unpleasant. People will tolerate a long wait far more patiently when they can see it ending."
      },
      {
        "tag": "p",
        "zh": "骨架屏也值得一提。与其展示空白页面，不如用灰色块勾勒即将出现的文字和图片位置，让人感觉内容正在到达，界面仍有活力。",
        "en": "Skeleton screens deserve a mention. Instead of a blank page or a generic loader, sketching the layout that's about to appear — grey blocks where text and images will land — gives the impression that content is already arriving. The interface feels alive rather than stalled."
      },
      {
        "tag": "p",
        "zh": "但不要伪造进度。飞快跑到九成然后停住的进度条，会让用户不再相信任何反馈。目标是诚实地缓解等待，而非掩饰实际状态。",
        "en": "A word of caution: don't fake progress you don't have. A bar that races to 90% and then sits there teaches users to distrust your indicators entirely. The goal is to mask delay honestly, smoothing the rough edge of waiting without lying about what's happening underneath."
      }
    ]
  },
  {
    "slug": "what-the-best-intranets-get-right",
    "category": "development",
    "image": "/templates/noter/images/bghJdUFNtgknPbjGPljw8SlKyA.jpg",
    "title": {
      "zh": "优秀企业内网做对了什么",
      "en": "What the Best Intranets Get Right"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "提到企业内网，许多人仍想到没人愿意主动打开的陈旧链接目录。优秀的内网早已摆脱这种印象，观察它们的共性比功能清单更有价值。",
        "en": "The word \"intranet\" still conjures a beige link directory that nobody visits voluntarily. The best ones have shed that reputation entirely, and looking at what they share is more instructive than any feature checklist."
      },
      {
        "tag": "p",
        "zh": "它们从员工的一天出发，而非从组织架构出发。财务经理和仓库主管需要不同的工具、文档与联系人。按角色和场景呈现内容，决定了人们会使用还是回避这个工具。",
        "en": "They start from the employee's day, not the org chart. A finance manager and a warehouse supervisor need radically different things, and great intranets surface the relevant tools, documents, and people based on role and context rather than forcing everyone through the same generic homepage. Personalization here isn't a luxury; it's the difference between a tool people open and one they avoid."
      },
      {
        "tag": "p",
        "zh": "它们让搜索真正有效。无法搜索的目录只是界面更差的文件柜。清晰的元数据、合理的信息结构和准确排序，让人们不必再慌忙收藏所有链接。",
        "en": "They make search work. Internal search is notoriously bad, and a directory you can't search is just a filing cabinet with a worse interface. Strong intranets invest in findability — good metadata, sensible structure, and results that actually rank the document you needed first. When people trust search, they stop bookmarking everything in a panic."
      },
      {
        "tag": "p",
        "zh": "它们把沟通视为双向交流。优秀内网不只是领导发声的广播频道，还提供认可、反馈和真实社区，让员工感到归属。",
        "en": "They treat communication as two-way. The best examples aren't broadcast channels where leadership talks and everyone else listens. They build in recognition, feedback, and genuine community spaces, which turns the intranet from a noticeboard into somewhere people belong."
      },
      {
        "tag": "p",
        "zh": "最关键的是持续维护。过时信息会主动误导员工，因此内网比许多工具更容易腐化。明确内容归属、清理失效内容、诚实衡量使用情况，才能让它赢得日常工作中的位置。",
        "en": "And crucially, they're maintained. An intranet rots faster than almost any other internal tool, because outdated information actively misleads. The standout examples assign clear ownership, prune dead content, and measure usage honestly. The lesson across all of them is simple: an intranet succeeds when it earns its place in the daily routine rather than demanding it."
      }
    ]
  },
  {
    "slug": "the-principle-of-contrast-in-ui-design",
    "category": "design",
    "image": "/templates/noter/images/m2LLt1OVVVovr3b4QJ2g2qmBiAg.jpg",
    "title": {
      "zh": "界面设计中的对比原则",
      "en": "The Principle of Contrast in UI Design"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "在视觉原则中，对比做了最多工作，却常被忽视。色彩理论和字体排版经常成为分享主题，而对比默默决定着界面是否可用。",
        "en": "Of all the visual principles, contrast does the most work while getting the least credit. Color theory and typography get the conference talks; contrast just quietly determines whether anyone can use your interface at all."
      },
      {
        "tag": "p",
        "zh": "对比的核心是承载意义的差异。眼睛会被与周围不同的事物吸引。通过更强的字重、亮度或尺寸，你就能在无需文字说明的情况下建立视觉层级。",
        "en": "At its core, contrast is about difference that carries meaning. The eye is drawn to whatever stands apart from its surroundings, so contrast is how you tell someone where to look first, second, and third. A primary button that's the same weight as everything around it isn't a primary button — it's just another element in the noise. Make it bolder, brighter, or larger, and you've created a visual hierarchy without writing a single instruction."
      },
      {
        "tag": "p",
        "zh": "对比不仅存在于颜色中。尺寸区分标题与正文，字重区分标签与数值，间距组织相关内容。动效同样是一种对比，静止画面中的单个移动元素会立即吸引注意，因此应谨慎使用。",
        "en": "Contrast operates across more than color. Size separates a headline from body text. Weight distinguishes a label from a value. Spacing groups related things and divides unrelated ones. Even motion is a form of contrast — a single moving element on a still screen captures attention instantly, which is exactly why it should be used sparingly."
      },
      {
        "tag": "p",
        "zh": "无障碍维度也不可忽略。未达到对比度要求的文字，对不少用户而言无法阅读。“我的屏幕上看着没问题”并非标准。普通文字 4.5:1、大字 3:1 的要求来自可读性验证。",
        "en": "Then there's the accessibility dimension, which isn't optional. Text that fails contrast ratios is unreadable for a meaningful slice of your users, and \"it looks fine on my monitor\" is not a standard. The established ratios — 4.5:1 for normal text, 3:1 for large — exist because legibility was tested, not guessed."
      },
      {
        "tag": "p",
        "zh": "真正的纪律是克制。当所有元素争抢注意力，对比就会失去力量。选出最重要的内容，让它清晰突出，其余元素自然退后。",
        "en": "The discipline is restraint. Contrast loses its power when everything competes for attention; if every element shouts, the user hears silence. Pick what matters most, make it unmistakable, and let everything else recede."
      }
    ]
  },
  {
    "slug": "choosing-between-qual-and-quant-research",
    "category": "experience",
    "image": "/templates/noter/images/vx4XAXb3xDAC6RwvVBNFCbDHksU.jpg",
    "title": {
      "zh": "如何选择定性与定量研究",
      "en": "Choosing Between Qual and Quant Research"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "定性与定量研究常被视作对手，仿佛团队必须选边站。这种思路浪费了两者的价值。它们回答不同的问题，关键是弄清自己究竟想知道什么。",
        "en": "Qualitative and quantitative research get framed as rivals, as though a team must pick a camp and defend it. That framing wastes both. They answer fundamentally different questions, and the skill is knowing which question you actually have."
      },
      {
        "tag": "p",
        "zh": "定量研究回答“是什么”和“有多少”：多少用户放弃结账、哪个版本转化更好、多少人完成任务。它提供规模与可信度，却无法解释原因。六成用户在第三步离开，是事实，不是解释。",
        "en": "Quantitative research tells you what and how much. How many users dropped off at checkout, which version converted better, what percentage completed the task. It's the research of scale and confidence — large samples, clean numbers, results you can defend in a meeting. What it can't tell you is why. A funnel showing 60% abandonment at step three is a fact, not an explanation."
      },
      {
        "tag": "p",
        "zh": "定性研究回答“为什么”和“如何”。观察五个人使用结账流程，就能发现图表无法揭示的问题：模糊的标签、意外的费用、拒绝有效输入的表单。样本虽小，洞见却丰富。",
        "en": "Qualitative research tells you why and how. Sit five people in front of that checkout and watch them stumble, and the reason becomes obvious in ways no chart could reveal — a confusing label, an unexpected fee, a form that rejects valid input. Small samples, rich insight, and the discomfort of not being able to claim statistical certainty."
      },
      {
        "tag": "p",
        "zh": "两者适合串联使用。定量数据定位问题，定性研究解释原因。也可以先访谈形成假设，再通过大规模测试验证它是否适用于整体受众。",
        "en": "The two are strongest in sequence, not opposition. Quantitative data is excellent at finding where a problem lives; qualitative work is excellent at explaining it. Notice a drop in the metrics, then go watch people to understand it. Or run interviews to generate a hypothesis, then test it at scale to see if it holds across your whole audience."
      },
      {
        "tag": "p",
        "zh": "因此，不要再问哪种方法更好。先问自己想学到什么。要知道规模，就去计数；要理解原因，就去观察一个人如何遇到困难。",
        "en": "So stop asking which method is better. Ask what you're trying to learn. If you need to know the size of something, count it. If you need to know the cause, go watch a human being struggle with it."
      }
    ]
  },
  {
    "slug": "guide-remote-ux-collaboration",
    "category": "design",
    "image": "/templates/noter/images/JB7QI1dSkLjjSBkjcwUp6wFKZA.jpg",
    "title": {
      "zh": "远程用户体验协作指南",
      "en": "A Guide to Remote UX Collaboration"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "远程体验设计往往以相似的方式陷入困境。问题并非不会使用工具，而是那些承载设计思考的随意交流悄悄消失了：并肩看一眼屏幕、路过时问一句“这里是不是不太对”，却没有新的方式补上。",
        "en": "Remote UX work fails in a predictable way. Not because people can't use the tools, but because the casual moments that used to carry design thinking — the over-the-shoulder glance, the hallway \"does this feel off to you?\" — quietly disappear, and nobody replaces them."
      },
      {
        "tag": "p",
        "zh": "解决方法是让隐形信息变得可见。共享空间里的默契，在远程环境中需要刻意表达：记录看似显而易见的决策、录制简短演示代替又一场会议、维护比个人记忆更可靠的统一信息来源。",
        "en": "The fix is to make the invisible visible. In a shared room, alignment happens through ambient awareness. Remotely, you have to deliberately externalize it. That means writing decisions down even when they feel obvious, recording short walkthroughs instead of scheduling another call, and keeping a single source of truth that everyone trusts more than their memory."
      },
      {
        "tag": "p",
        "zh": "同步时间应留给真正需要实时协作的事情：发散思考、设计评审与解决分歧。六个人在同一画布上并行草图，远比五个人旁观一个人演讲更有价值。将状态更新移到异步渠道，让会议回归协作。",
        "en": "Synchronous time should be spent on the things that genuinely need it: divergent thinking, critique, and untangling disagreement. A live workshop where six people sketch in parallel on the same canvas is worth far more than six people watching one person talk. Reserve meetings for collaboration, and push status updates into async channels where they don't burn anyone's focus."
      },
      {
        "tag": "p",
        "zh": "远程评审需要格外用心。缺少肢体语言时，文字反馈可能显得尖锐。建立“哪里有效、哪里困惑、还缺什么”的共同格式，并将探索与评估分开，避免想象力过早被交付压力压缩。",
        "en": "Critique deserves special care remotely. Without body language, tone flattens and feedback can read as harsher than intended. Establish a shared format — what's working, what's confusing, what's missing — so designers aren't bracing for ambush. And separate exploration from evaluation; mixing \"let's dream\" with \"let's ship\" in the same session produces timid ideas."
      },
      {
        "tag": "p",
        "zh": "表现最好的团队，未必拥有最华丽的协作软件。它们把清晰沟通视为专业工作的一部分，而非打断工作的干扰。",
        "en": "The teams that thrive aren't the ones with the fanciest collaboration suite. They're the ones who treat clear communication as part of the craft, not an interruption to it."
      }
    ]
  },
  {
    "slug": "do-users-really-hate-change",
    "category": "experience",
    "image": "/templates/noter/images/0F6zA5hQCeuQQtMByVMwoHxP4.jpg",
    "title": {
      "zh": "用户真的讨厌改变吗",
      "en": "Why \"Users Hate Change\" Is Mostly Wrong"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "“用户讨厌改变”被反复提起，仿佛是一条物理定律。它被用于捍卫陈旧界面、合理化停滞和忽视负面反馈。但这个判断大多是错的，相信它反而会让产品变差。",
        "en": "\"Users hate change\" is one of those phrases that gets repeated until it feels like physics. It's invoked to defend stale interfaces, to justify shipping nothing, and to dismiss negative feedback as temporary noise. But the claim is mostly wrong, and believing it makes for worse products."
      },
      {
        "tag": "p",
        "zh": "用户不喜欢的，是没有解释、需要额外努力又看不到收益的改变。挪动一个每天点击四十次的按钮，等于无偿征收肌肉记忆税。问题不在新鲜感，而在于你未经说明改写了他们的心智模型。",
        "en": "What users actually dislike is unexplained change that costs them effort without obvious benefit. Move a button they use forty times a day and you've taxed muscle memory for no reward — of course they're annoyed. The complaint isn't about novelty; it's about a broken contract. They had a working mental model and you rewrote it without telling them."
      },
      {
        "tag": "p",
        "zh": "证据随处可见。能解决真实问题的新应用会被迅速采用；收益明显的全面改版也能被接受。最强烈的反对声常来自数量较少的重度用户，他们的声音不代表所有人，也通常会逐渐适应。",
        "en": "The evidence is everywhere. People adopt entirely new apps weekly when those apps solve a real problem. They tolerate sweeping redesigns when the payoff is visible within minutes. The backlash to a change tends to be loudest among power users, who are also the smallest and most adaptable segment — they're vocal, not representative, and they usually settle within a week or two."
      },
      {
        "tag": "p",
        "zh": "实践中应有意识地改变，并充分沟通。逐步发布、提供短暂的旧版回退入口、用清楚的语言解释原因。当用户能感受到好处，阻力就会减少。把“讨厌改变”视为提醒：也许改错了地方，或没有说明正确改变的价值。",
        "en": "The practical lesson is to change deliberately and communicate generously. Roll out gradually, offer a temporary way back to the old behavior, and explain why in plain language. When you frame a change as a benefit the user can feel, resistance shrinks dramatically. Treat \"users hate change\" not as a law but as a warning that you may have changed the wrong thing, or failed to make the case for the right one."
      }
    ]
  },
  {
    "slug": "five-fixes-for-better-sticky-headers",
    "category": "development",
    "image": "/templates/noter/images/RPohA5WOlyEBaXYH4UCBO2S5Clc.jpg",
    "title": {
      "zh": "让吸顶导航更好用的五个方法",
      "en": "Five Fixes for Better Sticky Headers"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "吸顶导航让用户滚动时也能随时访问菜单，听起来很有帮助，直到它占据手机屏幕的三分之一。糟糕的实现会损害可用性和搜索表现，以下方法能保留便利、减少代价。",
        "en": "A sticky header keeps navigation within reach as people scroll, which sounds purely helpful until you watch it eat a third of a phone screen on every page. Done badly, it hurts both usability and search performance. Here's how to keep the benefit without the cost."
      },
      {
        "tag": "p",
        "zh": "第一，滚动时缩小。顶部较高、开始阅读后压缩的导航能够尊重屏幕空间。尤其在手机上，从九十像素缩到五十像素，差异非常明显。",
        "en": "First, shrink on scroll. A header that's tall at the top but compresses once the user starts moving respects screen real estate. Mobile users especially feel the difference when a 90-pixel bar collapses to 50."
      },
      {
        "tag": "p",
        "zh": "第二，下滑隐藏、上滑显示。“智能导航”在阅读时让出空间，在用户改变方向寻找入口时立即出现，是理解阅读意图的一种务实方式。",
        "en": "Second, hide on scroll-down, reveal on scroll-up. This pattern — sometimes called the \"smart header\" — gets out of the way while reading and reappears the instant someone reverses direction looking for navigation. It's the closest thing to reading intent that a header can manage."
      },
      {
        "tag": "p",
        "zh": "第三，关注布局偏移。导航加载、调整尺寸、突然吸附，会影响累积布局偏移及核心网页指标。预先保留空间，避免页面跳动。",
        "en": "Third, watch your layout shift. A header that loads, then resizes, then snaps into place damages your Cumulative Layout Shift score, and Core Web Vitals feed directly into ranking. Reserve the space upfront so nothing jumps."
      },
      {
        "tag": "p",
        "zh": "第四，保持轻量。厚重的背景模糊与阴影可能让中低端设备滚动卡顿。用普通安卓设备验证，而不只是自己的旗舰手机。",
        "en": "Fourth, keep it light. Heavy sticky headers with background blur and shadow filters can cause repaint jank on lower-end devices. Test scrolling on a mid-range Android, not just your own flagship."
      },
      {
        "tag": "p",
        "zh": "第五，不要遮住锚点目标。点击跳转链接后，为导航高度预留滚动边距，确保目标标题可见。这些小改动合在一起，就能让导航从负担变成便利。",
        "en": "Fifth, ensure it never obscures anchor targets. When someone clicks a jump link, account for the header height so the destination heading isn't hidden underneath. A little scroll-margin in CSS saves a lot of confusion. Small fixes, but together they turn a liability into a genuine convenience."
      }
    ]
  },
  {
    "slug": "how-to-write-cancellation-emails",
    "category": "experience",
    "image": "/templates/noter/images/iO9bKYb19Y94k8u2nGHH96VsPk.jpg",
    "title": {
      "zh": "如何写好订阅取消邮件",
      "en": "How to Write Cancellation Emails That Works"
    },
    "date": "2026-05-15",
    "body": [
      {
        "tag": "p",
        "zh": "取消订阅不一定是告别。许多团队只发一封冷冰冰的结束通知，错失了最后一次建立信任的机会。客户刚做出决定，反而会认真阅读这封确认邮件。",
        "en": "A cancellation is not a goodbye — it's a pause you haven't earned the right to interpret yet. Too many teams treat the cancel flow as a dead end, firing off a curt \"Your subscription has ended\" and moving on. That's a missed opportunity. The cancellation email is one of the last messages a customer will actually read closely, because they've just made a decision and want confirmation it went through."
      },
      {
        "tag": "p",
        "zh": "先把信息说清楚：取消了什么、何时停止访问、是否还有待处理费用、数据会保留多久。明确这些问题能减少支持请求，也能缓解客户的不安。",
        "en": "Start with clarity. Confirm exactly what was cancelled, when access ends, and whether any charges are still pending. Ambiguity here generates support tickets and chargebacks, so spell out the date their plan lapses and what happens to their data. A customer who knows their files are safe for thirty days is far less anxious than one left guessing."
      },
      {
        "tag": "p",
        "zh": "然后避免情感施压。表达一次遗憾就够了，不必长篇挽留。可以用一个可选、低门槛的问题询问离开原因，比没人填写的长问卷更容易获得真实反馈。",
        "en": "Then resist the urge to guilt-trip. \"We're sad to see you go\" is fine once; a paragraph of pleading is not. Instead, ask a single, low-friction question: why did they leave? One optional dropdown often surfaces more honest signal than a five-question survey nobody finishes."
      },
      {
        "tag": "p",
        "zh": "最后，让回归变得容易。说明账户可以便捷恢复、设置仍会保留。优秀的取消邮件像酒店退房：温暖、高效，并留下再次到访的邀请。专业可靠的最后印象，比绝望的挽留更有效。",
        "en": "Finally, make returning easy. Tell them their account can be reactivated in one click, and that their settings will be waiting. The best cancellation emails read less like a breakup and more like a hotel checkout: warm, efficient, and quietly inviting you back. Win-back rates climb when the last impression is competence rather than desperation."
      }
    ]
  }
] as const;
export type Post = typeof posts[number];
