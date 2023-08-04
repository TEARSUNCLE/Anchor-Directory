const books = [
  { id: 1, bookType: '小说', parentId: 0 },
  { id: 2, bookType: '科幻', parentId: 0 },
  { id: 3, bookType: '历史', parentId: 0 },
  { id: 4, bookType: '哲学', parentId: 0 },
  { id: 5, bookType: '心理学', parentId: 0 },
  { id: 6, bookType: '自助发展', parentId: 0 },
  { id: 7, bookType: '文学经典', parentId: 0 },
  { id: 8, bookType: '悬疑/推理', parentId: 0 },
  { id: 9, bookType: '科学与自然', parentId: 0 },

  { id: 10, bookType: '百年孤独', author: '加夫列尔·加西亚·马尔克斯', parentId: 1, content: '摘录："很久很久以前，布恩迪亚家族曾经遭受过这样一个惩罚，他们所有的东西都带有类似的名字，以致于常有人弄不清谁是谁–因为这是一个富有的家族，世世代代以同一个名字传给后代。”' },
  { id: 11, bookType: '1984', author: '乔治·奥威尔', parentId: 1, content: '摘录：“如果自由意味着什么都可以选择，那么真正的奴役就意味着被迫选择自己的命运。”' },
  { id: 12, bookType: '战争与和平', author: '列夫·托尔斯泰', parentId: 1, content: '摘录：“伟大的军事活动和万物的规模一样，取决于无数个微小的因素的相互作用。”' },

  { id: 13, bookType: '银河系漫游指南', author: '道格拉斯·亚当斯', parentId: 2, content: '摘录：“对于穿越了宇宙的生活形式来说，宇宙是个无边无际、无边无止的惊人之地，但只对，宇宙充满了浩翰的孤独。”' },
  { id: 14, bookType: '三体 三部曲', author: '刘慈欣', parentId: 2, content: '摘录：“这个世界从来都不是个公平的世界，谁要是奢望公平，谁就是愚蠢的。”' },
  { id: 15, bookType: '机械生灵', author: '伊恩·姆.班克斯', parentId: 2, content: '摘录: “生命的意义并不在于长久的存在，而在于我们对世界的影响和我们创造的意义。”' },

  { id: 16, bookType: '福尔摩斯探案全集', author: '阿瑟·柯南·道尔', parentId: 8, content: '摘录：“唉，华生，我们只是演奏着一段古老而复杂的乐曲。生命是一种弦乐器，而犯罪是它共鸣的乐音。”' },
  { id: 17, bookType: '尘埃落定', author: '阿加莎·克里斯蒂', parentId: 8, content: '摘录: “当时光倒流时，我们只能从中勉强找到一点安慰，不断询问自己如果事与愿违，我们能否利用知识和智慧来改变结果。”' },
  { id: 18, bookType: '失踪的13岁女孩', author: '本·戴维斯', parentId: 8, content: '摘录：“过去的事情怎么能拉住我们的脚步？不管它们多么残酷，在黑暗中决定它们的不是我们。”' },

  { id: 17, bookType: '人类简史', author: '尤瓦尔·赫拉利', parentId: 3, content: '摘录：“在我们继续下一步动作之前，我们应该认真审视我们将以何种方式对待生活、死亡和苦难。我们决不能指望真理和幸福从天而降。”' },
  { id: 18, bookType: '明朝那些事儿', author: '当年明月', parentId: 3, content: '摘录: “历史就像一面镜子，让我们看见过去的影像，也能让我们思考现在和未来的选择。”' },
  { id: 19, bookType: '史记', author: '司马迁', parentId: 3, content: '摘录: "不学礼义而无所观，则近闻一善而即乐生其心；近闻一恶而即妒生其心。”' },

  { id: 20, bookType: '思考，快与慢', author: '丹尼尔·卡尼曼', parentId: 6, content: '摘录：“大部分时候，短路是很有价值的，但是它的问题在于，它不能真正地分辨情况。”' },
  { id: 21, bookType: '富爸爸穷爸爸', author: '罗伯特·清崎', parentId: 6, content: '摘录: “不要为工作而工作，要让资产为你工作，成为投资者而不是被投资者。”' },
  { id: 22, bookType: '原则', author: '瑞·达利欧', parentId: 6, content: '摘录: “现实是我们必须面对的，而不是我们所希望的。只有通过充分认识现实，我们才能有效地应对挑战并取得成功。”' },

  { id: 23, bookType: '论持久和变化', author: '班尼迪克·斯宾诺莎', parentId: 4, content: '摘录: “纯粹的爱是一种超越个人欲望和私利的力量，它可以带来共同体和谐与和平。”' },
  { id: 24, bookType: '存在与时间', author: '马丁·海德格尔', parentId: 4, content: '摘录: "时间有着过去、现在和未来，但它在本质上是一种无法捉摸和变幻莫测的存在。”' },
  { id: 25, bookType: '人的技艺', author: '福柯', parentId: 4, content: '摘录: "技艺是一种根植于传统和创意的表达方式，通过它，我们保持了对手工艺和古老技术的珍视和传承。”' },

  { id: 26, bookType: '傲慢与偏见', author: '简·奥斯汀', parentId: 7, content: '摘录：“我们常常通过对别人的善意和容忍，才能真正认识自己。”' },
  { id: 27, bookType: '追风筝的人', author: '卡勒德·胡赛尼', parentId: 7, content: '摘录：“你可以一直逃避很久，但你无法摆脱你曾经遭受过的一切。”' },
  { id: 28, bookType: '麦田里的守望者', author: 'J·D·塞林格', parentId: 7, content: '摘录：“人真正的成熟，是渐渐认识到自己可能永远无法拥有到底属于自己的东西。”' },

  { id: 27, bookType: '影响力', author: '罗伯特·西奥迪尼', parentId: 5, content: '摘录：“我们对别人的看法，经常大于我们对自己的认知。”' },
  { id: 28, bookType: '思维的乐趣', author: '丹尼尔·卡尼曼', parentId: 5, content: '摘录：“我们在回忆时并不回忆整个事件，而是某些片断；我们在经历一个事件时也并不经历整个事件，而是某些片断。”' },
  { id: 29, bookType: '孤独或自由：选择是我们自己的', author: '基思·坎贝尔', parentId: 5, content: '摘录: “生命就是一段神秘的旅程，我们每个人都是英雄，都有机会超越困境，获得成长与启示。”' },

  { id: 30, bookType: '宇宙简史', author: '斯蒂芬·霍金', parentId: 9, content: '摘录：“知识是一种力量，探索宇宙的渴望是人类的本质。”' },
  { id: 31, bookType: '生命之书', author: '理查德·道金斯', parentId: 9, content: '摘录: “我们应该以科学的思维方式来看待世界，以证据为依据，以理性为准则。”' },
  { id: 32, bookType: '精进：如何成为一个很厉害的人', author: '卡洛琳·李夫', parentId: 9, content: '摘录: “时刻保持学习的状态，追求知识与技能的广度和深度，才能不断提升自己的能力。”' },
]

// 处理源数据
function listToTree(list) {
  if (!Array.isArray(list)) return list

  const treeData = []

  list.map(item => item.children = [])

  list.map(item => {
    if (item.parentId !== 0) {
      const parentNode = list.find(key => item.parentId === key.id)
      parentNode.children.push(item)
    } else {
      treeData.push(item)
    }
  })
  return treeData
}

const finalBooks = listToTree(books)

const doms = {
  // 书籍类型列表
  bookTypes: document.querySelector('.module .bookTypeList'),
  // 书籍列表
  bookList: document.querySelector('.bookList ul'),
  // 书籍内容 名称、作者、内容
  bookInfo: document.querySelector('.contents .bookInfo'),
  bookContent: document.querySelector('.contents .content')
}

function createPage() {
  finalBooks.map((item, index) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = '#'
    a.className = 'block commonHover'
    a.innerHTML = item.bookType

    if (index === 0) a.classList.add('titleActive1')

    li.appendChild(a)
    doms.bookTypes.append(li)

    a.addEventListener('click', () => {
      const previousActive = document.querySelector('.titleActive1')
      previousActive.classList.remove('titleActive1')

      // 添加 active 类名到当前点击的链接
      a.classList.add('titleActive1')
      createBooks(item)
    })
  })
}

createPage()

function createBooks(row) {
  doms.bookList.innerHTML = ''

  row.children.map((item, index) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = '#'
    a.className = 'block commonHover'
    a.innerHTML = `《${item.bookType}》- ${item.author}`

    if (index === 0) a.classList.add('titleActive2')

    li.appendChild(a)
    doms.bookList.append(li)

    a.addEventListener('click', () => {
      const previousActive = document.querySelector('.titleActive2')
      previousActive.classList.remove('titleActive2')
      a.classList.add('titleActive2')

      createContent(item)
    })
  })
}

createBooks(finalBooks[0])

function createContent(item) {
  doms.bookInfo.innerHTML = ''
  doms.bookContent.innerHTML = ''

  const nameSpan = document.createElement('span')
  nameSpan.className = 'bookName'
  nameSpan.innerHTML = `《${item.bookType}》- `

  const authorSpan = document.createElement('span')
  authorSpan.className = 'author'
  authorSpan.innerHTML = item.author

  const contentP = document.createElement('p')
  contentP.className = 'content'
  contentP.innerHTML = item.content

  doms.bookInfo.append(nameSpan, authorSpan)
  doms.bookContent.append(contentP)
}

createContent(finalBooks[0].children[0])