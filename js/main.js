new Vue({
  el: '#app',
  data: {
    message: '中午吃什么?',
    weatherText: '',
    descText: '',
    typeText: '',
    detailText: '',
    eatHotType: {
      desc: '出去吃概率: 20% ',
      data: [
        { idx: '0', text: '出去吃' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' }
      ],
    },
    eatSunshineType: {
      desc: '出去吃概率: 70% ',
      data: [
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' }
      ],
    },
    eatCloudyType: {
      desc: '出去吃概率: 50% ',
      data: [
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '0', text: '出去吃' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' },
        { idx: '1', text: '点外卖' }
      ],
    },
    eatWorstType: {
      desc: '出去吃概率: 0% ',
      data: [
        { idx: '1', text: '点外卖' }
      ],
    },
    eatDetail: [
      [
        { text: '冠山食堂' },
        { text: '冠山拉面' },
        { text: '兰溪手擀面' },
        { text: '重庆小面' },
        { text: '冠山沙县' },
        { text: '冠山骨头饭' },
      ],
      [
        { text: '商家A' },
        { text: '商家B' },
        { text: '商家C' },
        { text: '商家D' },
        { text: '商家E' },
        { text: '商家F' },
      ]
    ]
  },
  methods: {
    hot: function () {
      typeNum = this.eatHotType.data.length
      typeSelected = Math.floor(Math.random()*typeNum)
      typeIdx = this.eatHotType.data[typeSelected].idx
      detailNum = this.eatDetail[typeIdx].length
      detailIdx = Math.floor(Math.random()*detailNum)
      this.weatherText = '燥热'
      this.descText = this.eatHotType.desc
      this.typeText = this.eatHotType.data[typeSelected].text
      this.detailText = this.eatDetail[typeIdx][detailIdx].text
    },
    sunshine: function () {
      typeNum = this.eatSunshineType.data.length
      typeSelected = Math.floor(Math.random()*typeNum)
      typeIdx = this.eatSunshineType.data[typeSelected].idx
      detailNum = this.eatDetail[typeIdx].length
      detailIdx = Math.floor(Math.random()*detailNum)
      this.weatherText = '阳光明媚'
      this.descText = this.eatSunshineType.desc
      this.typeText = this.eatSunshineType.data[typeSelected].text
      this.detailText = this.eatDetail[typeIdx][detailIdx].text
    },
    cloudy: function () {
      typeNum = this.eatCloudyType.data.length
      typeSelected = Math.floor(Math.random()*typeNum)
      typeIdx = this.eatCloudyType.data[typeSelected].idx
      detailNum = this.eatDetail[typeIdx].length
      detailIdx = Math.floor(Math.random()*detailNum)
      this.weatherText = '阴天'
      this.descText = this.eatCloudyType.desc
      this.typeText = this.eatCloudyType.data[typeSelected].text
      this.detailText = this.eatDetail[typeIdx][detailIdx].text
    },
    worst: function () {
      typeNum = this.eatWorstType.data.length
      typeSelected = Math.floor(Math.random()*typeNum)
      typeIdx = this.eatWorstType.data[typeSelected].idx
      detailNum = this.eatDetail[typeIdx].length
      detailIdx = Math.floor(Math.random()*detailNum)
      this.weatherText = '极端恶劣天气'
      this.descText = this.eatWorstType.desc
      this.typeText = this.eatWorstType.data[typeSelected].text
      this.detailText = this.eatDetail[typeIdx][detailIdx].text
    },
  }
})
