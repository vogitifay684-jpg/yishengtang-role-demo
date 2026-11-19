const roles = {
  "founder": {
    "title": "总部老板",
    "subtitle": "看日报，做决策",
    "scope": "总部 · 当前门店与已授权汇总",
    "boundary": "加盟店个人资料不会自动向总部开放。",
    "highlights": [
      "今日收款与新老客",
      "运营、销售建议",
      "批准后安排负责人"
    ]
  },
  "franchise": {
    "title": "加盟店老板",
    "subtitle": "经营好自己的店",
    "scope": "独立加盟主体 · 本店",
    "boundary": "不能查看总部或其他加盟店的顾客和账务。",
    "highlights": [
      "本店经营日报",
      "本店预约与收银",
      "接收授权的品牌标准"
    ]
  },
  "manager": {
    "title": "店长",
    "subtitle": "把每天的工作安排好",
    "scope": "云岭店 · 门店运营",
    "boundary": "按门店授权办事，不能代替老板审批经营建议。",
    "highlights": [
      "预约排班与接待",
      "顾客与会员卡",
      "领取老板批准的任务"
    ]
  },
  "technician": {
    "title": "头疗技师",
    "subtitle": "做好自己负责的服务",
    "scope": "云岭店 · 本人分配的服务",
    "boundary": "不能查看全店财务，也不能随意读取其他员工的顾客。",
    "highlights": [
      "今日预约",
      "服务步骤与异常上报",
      "学习与培训"
    ]
  },
  "trainer": {
    "title": "培训老师",
    "subtitle": "让服务标准真正落地",
    "scope": "云岭店 · 培训与标准",
    "boundary": "考核须有依据，不能靠 AI 自动授予实操资格。",
    "highlights": [
      "课程与服务标准",
      "员工考核",
      "知识与品牌材料审核"
    ]
  },
  "finance": {
    "title": "财务",
    "subtitle": "收款有凭据，账目能核对",
    "scope": "云岭店 · 财务与库存",
    "boundary": "不参与顾客服务操作，不自动连接真实支付渠道。",
    "highlights": [
      "收款和退款",
      "会员权益流水",
      "日结与核对"
    ]
  },
  "prospect": {
    "title": "意向合伙人",
    "subtitle": "了解品牌，推进合作",
    "scope": "本人合作进度与已授权资料",
    "boundary": "不能查看门店顾客、收银或员工经营数据。",
    "highlights": [
      "合作申请",
      "品牌资料",
      "合作进度"
    ]
  },
  "customer": {
    "title": "顾客",
    "subtitle": "预约方便，权益清楚",
    "scope": "本人预约、服务和会员权益",
    "boundary": "只能看到自己的档案和记录。",
    "highlights": [
      "自主预约与取消",
      "查看次卡和余额",
      "查看本人服务记录"
    ]
  }
};
