App({
  onLaunch: function() {
    // 直接定义问题数据
    this.globalData.questions = [
      "请你提供一些适合油皮的日常护肤方法和步骤。",
      "请帮我评估我现在的皮肤状态。",
      "请帮我推荐一些适合干皮的补水产品。",
      "油皮常见的护肤误区有哪些？",
      "刷酸护肤需要遵医嘱吗，我是否可以自己进行刷酸护肤呢？",
      "干敏皮冬季过敏应该使用什么产品进行缓解？",
      "定期去角质对皮肤有什么好处，我应该如何正确地去角质？",
      "防晒霜的SPF值是什么意思，如何选择适合自己的SPF值？",
      "油皮使用含角鲨烷的产品对皮肤有什么副作用吗？",
      "眼霜和普通面霜有什么区别，为什么需要使用眼霜？",
      "熬夜多的混油皮用什么好",
      "送女朋友护肤品，哪些效果好还有面子",
      "冬天的时候一抹护肤品脸颊就刺痛，也是因为护肤品没选对吗",
      "想买一些平价的精华，哪些牌子的性价比好一些",
      "第一次化妆，哪些护肤品值得推荐",
      "晚间护理时候，哪些步骤可以省略",
      "广告里宣传的护肤品有那么多营养因素，到底什么营养是最重要的",
      "中年了，选择护肤品需要注意什么",
      "我脸上有斑，t区还有油，用哪一款护肤",
      "为什么我用海蓝之迷毛孔就会变大",
      "如何选择适合自己肤质的洁面产品，避免过度清洁或清洁不足？",
      "不同季节应该如何调整保湿护肤的步骤和产品？",
      "市面上的美白产品众多，如何挑选安全有效的美白产品？",
      "美白精华液应该在护肤步骤中的哪个环节使用，用量多少合适？",
      "什么成分的护肤产品可以帮助皮肤去角质呢？",
      "什么时候开始使用抗老护肤品比较合适，初期抗老产品如何选择？",
      "面部出现细纹后，怎样通过护肤来改善和预防进一步加深？",
      "抗老护肤品中的哪些成分比较有效，如何判断成分的优劣？",
      "痘痘肌应该如何选择安全成分的护肤品？",
      "皮肤过敏期间，哪些成分的护肤品是比较温和安全的？",
      "给我推荐几个提亮肤色，改善皮肤暗沉的护肤品",
      "抗初老效果较好的护肤品组合是什么？我的要求是抗黄、抗皱、平衡皮肤水油状态",
      "刷酸或者维c提亮适合什么样的肤质，这些功效的护肤品如何搭配使用",
      "有没有简单和短期的办法测试某类功效的护肤品适不适合自己",
      "有没有在去角质的同时又对皮肤屏障损害不大的方法，如何控制频率和用量",
      "精简护肤能改善皮肤状态是正确的吗？怎么才能在精简护肤的同时获得该有的功效",
      "为什么我用完早c晚a皮肤状态改善不大，反而长痘，是因为这个不适合我的肤质，还是因为我使用的方法不对",
      "去痘印比较有效安全的成分是什么",
      "皮肤屏障受损后什么样的护肤成分能帮助修护",
      "怎么快速准确判断自己的肤质",
      "如何判断我的肤质？",
      "如何避免化妆品对皮肤的刺激？",
      "能推荐一些适合敏感皮肤的护肤品吗？",
      "是否有必要购买整套系列的护肤品？",
      "护肤品的有效期有多久？",
      "基础的护肤步骤有哪些呢？",
      "如果我有痘痘的话，我该挑选什么样的洁面乳？",
      "是否需要经常更换护肤品？",
      " 如果我有祛斑美白的需求，你能为我推荐一些护肤品吗？",
      " 需要根据季节变化调整护肤品使用吗？",
      "洗完脸以后的护肤顺序？",
      "各类护肤品的上脸手法?",
      "和cpb奢雅极成分功能相似但更便宜的替代产品？",
      "刷酸要注意什么，怎么操作？",
      "护肤品使用之前要先乳化是智商税吗？",
      "如何判断我购买的黑绷带是不是正品？",
      "请给我49岁的妈妈推荐一整套护肤品，她是混干肤质，目标是抗衰、淡斑、祛皱。",
      "市面上改善皮肤紧致度的产品该怎么选择？其中针对改善下颌线轮廓哪个最有效？",
      "使用YSL夜皇后第二天早上起来额头长痘了是为什么，是我不适合这个产品吗还是可能哪个环节出了问题？",
      "大排灯真的有用吗？该如何选择？",
      "男女护肤品有什么不同，可以混用吗？",
      "护肤品多久换一次比较合适？",
      "护肤品真的可以补充水分吗？",
      "添加了功效成分的护肤品可以被皮肤吸收达到效果吗？",
      "护肤品为什么不能添加防晒功能？",
      "不同功效的护肤品叠加使用可以同时起到效果吗？",
      "精简护肤有科学理论支撑吗？",
      "相同成分的护肤品是越贵越好吗？",
      "如何根据自己的皮肤状态选择护肤品？",
      "有绝对安全的护肤成分吗？",
      "油痘肌推荐的水乳评价套餐有哪些品牌？",
      "毛孔粗大用什么护肤品改善？",
      "干皮冬季保湿的补水产品要选什么？",
      "黑眼圈可以用什么护肤品改善？",
      "敏感肌洗面奶推荐哪些品牌？",
      "如果晚上熬夜第二天面色蜡黄，可以用什么护肤产品进行紧急修复？",
      "紧致皮肤以及抗衰老的护肤品请你推荐一下",
      "面膜真的存在美白抗皱改善皮肤质量等功效吗嘛？还是它只能起到一个补水的作用？",
      " 在护肤顺序上，当我涂抹完水和面霜之后，到底是先抹隔离还是先抹防晒？",
      "我要选祛痘的护肤品，应该选包含什么成分的？",
      "给我推荐几个提亮肤色，改善皮肤暗沉的护肤品",
      "抗初老效果较好的护肤品组合是什么？我的要求是抗黄、抗皱、平衡皮肤水油状态",
      "刷酸或者维c提亮适合什么样的肤质，这些功效的护肤品如何搭配使用",
      "有没有简单和短期的办法测试某类功效的护肤品适不适合自己",
      "有没有在去角质的同时又对皮肤屏障损害不大的方法，如何控制频率和用量",
      "精简护肤能改善皮肤状态是正确的吗？怎么才能在精简护肤的同时获得该有的功效",
      "为什么我用完早c晚a皮肤状态改善不大，反而长痘，是因为这个不适合我的肤质，还是因为我使用的方法不对",
      "去痘印比较有效安全的成分是什么",
      "皮肤屏障受损后什么样的护肤成分能帮助修护",
      "怎么快速准确判断自己的肤质",
      "请你提供一些适合油皮的日常护肤方法和步骤。",
      "请帮我评估我现在的皮肤状态。",
      "请帮我推荐一些适合干皮的补水产品。",
      "油皮常见的护肤误区有哪些？",
      "刷酸护肤需要遵医嘱吗，我是否可以自己进行刷酸护肤呢？",
      "干敏皮冬季过敏应该使用什么产品进行缓解？",
      "定期去角质对皮肤有什么好处，我应该如何正确地去角质？",
      "防晒霜的SPF值是什么意思，如何选择适合自己的SPF值？",
      "油皮使用含角鲨烷的产品对皮肤有什么副作用吗？",
      "眼霜和普通面霜有什么区别，为什么需要使用眼霜？",
      "晒伤以后那些护肤品可以帮助修复？（可以再白回来）",
      "脸上总是泛红用什么护肤品比较好？",
      "哪家眼霜对淡化黑眼圈效果最明显？",
      "去黑头可以用哪些护肤品，步骤是什么？",
      " 痘痘期间可以用哪些不刺激的护肤品？",
      "早C晚A怎么搭配？",
      "哪个洗面奶清洁作用最好？",
      "有没有清爽又滋润的水乳推荐？",
      "混油皮用什么精华比较合适？",
      "夏天护肤流程和推荐产品有哪些？",
      "不同肤质（干性、油性、混合性、敏感性）在选择洁面产品时，最关键的区别要点是什么？",
      "精华液一般价格较高，如何判断一款精华液的性价比？是看有效成分浓度、品牌，还是其他因素？",
      "防晒霜的防晒指数（SPF 和 PA）越高越好吗？日常通勤、户外运动、海边度假分别适合怎样指数的防晒霜，过度使用高指数防晒霜会不会对皮肤有负面影响？",
      "随着年龄增长，肌肤胶原蛋白流失加快，除了使用含有胶原蛋白的护肤品，还有哪些护肤方法可以刺激胶原蛋白再生，延缓衰老，像按摩手法、美容仪器之类的效果如何？",
      "痘痘肌在护肤过程中，除了控油祛痘产品，保湿环节容易被忽视，怎样选择一款既清爽又能满足痘痘肌保湿需求的护肤品，避免闷痘？",
      "晚上护肤的最后一步通常是涂面霜，但有些人涂完面霜第二天早上起来脸会油，是面霜本身不适合，还是涂抹方法有误，正确的面霜使用方式应该是怎样的？",
      "自制天然果蔬面膜，如黄瓜面膜、酸奶面膜等，真的比市面上正规品牌的面膜更安全有效吗？自制过程中需要注意什么来防止细菌滋生等问题？",
      "眼部肌肤很娇嫩，容易出现黑眼圈、细纹，眼霜的质地有啫喱、乳液、膏状之分，这几种质地分别适合什么眼部肌肤状况，以及不同年龄段该如何挑选眼霜？",
      "肌肤换季过敏是常见问题，在换季前如何提前调整护肤步骤和更换护肤品，来预防肌肤过敏，出现过敏症状后，有哪些急救护肤措施？",
      "美白一直是热门护肤需求，口服美白产品（如美白丸、美白饮）宣称能从内而外美白，与外用美白护肤品相比，它们的美白原理有何不同，安全性和有效性又如何？",
      "混油皮怎么选择补水产品？",
      "哪一种淡斑精华对祛除淡痘印有效？",
      "冬天和夏天的护肤品选择有什么不同？",
      "氨基洗面奶和皂基洗面奶应该如何选择？",
      "帮我推荐一款能够除皱和去黑眼圈的眼霜。",
      "敷面膜补水的频率在几天一次比较好？",
      "根据这张图片评判我的肤质和皮肤状态，并为我制定一个为期21天的护肤计划。",
      "卸妆油、卸妆水和卸妆膏该如何选择？哪种卸妆产品既能卸干净又不会过度清洁导致皮肤干燥？",
      "酸类护肤品中，水杨酸、果酸、杏仁酸该怎么选？",
      "我是敏感肌且容易出汗，请推荐一款防晒产品。",
      "护肤品的种类有哪些？",
      "怎么判断自己的肤质属于那种？",
      "干皮、油皮适合哪种护肤品？",
      "国内品牌的护肤品种类有哪些？",
      "这些护肤品都含有什么成分？",
      "化妆之前适合使用什么护肤品？",
      "请给我几个推荐的护肤品品牌？",
      "哪些护肤品的性价比较高？",
      "哪些护肤品适合小孩使用？",
      "男生适合的护肤品有哪些？",
      "长痘期是否适合刷酸？",
      "什么产品对换季导致的过敏最适用。",
      "请为我推荐一款不油腻的防晒。",
      "兰蔻小黑瓶和雅诗兰黛小棕瓶哪一款更适合我的肤质？",
      "请为我推荐祛黑眼圈的眼霜。",
      "微针精华是否适合我的皮肤。",
      "判断我的皮肤的状态，并指出瑕疵，规划进一步的护肤指南。",
      "为我设计一套护肤产品，并贴出各网站当前购买价格。",
      "功效类似海蓝之谜青春乳霜的产品。",
      "大豆是我的过敏源，希思黎全能乳中是否含有我的过敏源？",
      "不同肤质应该怎么选择护肤品？",
      "油痘肌应该用什么成分的护肤品？",
      "美白精华应该选择含有什么成分的？请举几个例子。",
      "防晒霜为什么会闷痘啊？应该怎样看防晒霜的成分表",
      "请帮我推荐几个成分安全、价格实惠的国产爽肤水",
      "护肤品能去除黑眼圈吗？",
      "早C晚A护肤应该怎么做？",
      "请告诉我怎样选择抗初老、去皱的面部精华",
      "面膜应该敷多久之后洗脸呢",
      "护肤品里含酒精的话是不是会刺激皮肤？"
    ];
    
    // 从本地存储加载历史对话记录
    const chatHistory = wx.getStorageSync('recentChats') || [];
    this.globalData.recentChats = chatHistory;
  },
  
  globalData: {
    questions: [],
    pendingMessage: null,
    recentChats: [], 
    maxRecentChats: 3
  },
  
  // 添加新的对话记录
  addRecentChat: function(chat) {
    let recentChats = this.globalData.recentChats;
    
    // 检查是否已存在相同sessionId的对话
    const existingIndex = recentChats.findIndex(item => item.sessionId === chat.sessionId);
    if (existingIndex !== -1) {
      // 如果存在，更新该对话
      recentChats[existingIndex] = chat;
    } else {
      // 如果不存在，添加新对话
      recentChats.unshift(chat);
      // 保持最多3条记录
      if (recentChats.length > this.globalData.maxRecentChats) {
        recentChats = recentChats.slice(0, this.globalData.maxRecentChats);
      }
    }
    
    this.globalData.recentChats = recentChats;
    // 保存到本地存储
    wx.setStorageSync('recentChats', recentChats);
  }
});