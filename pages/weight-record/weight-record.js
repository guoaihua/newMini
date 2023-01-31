// pages/weight-record/weight-record.js
import uCharts from '../../ucharts/u-charts.min';
import  { getCurrentTimeline }  from '../../utils/util'


var uChartsInstance = {};
Page({
  data: {
    cWidth: 750,
    cHeight: 500,
    currentWeight: 0,
    showWeightModal: false
  },
  onReady() {
    //这里的第一个 750 对应 css .charts 的 width
    const cWidth = 750 / 750 * wx.getSystemInfoSync().windowWidth;
    //这里的 500 对应 css .charts 的 height
    const cHeight = 500 / 750 * wx.getSystemInfoSync().windowWidth;
    this.setData({ cWidth, cHeight });
    this.getServerData();
  },
  getServerData() {
    //模拟从服务器获取数据时的延时
    setTimeout(() => {
    const data = [
        {
            data: '2022-01-23',
            weight: '60'
        },
        {
            data: '2022-01-24',
            weight: '61'
        },
        {
            data: '2022-01-25',
            weight: '62'
        },
        {
            data: '2022-01-26',
            weight: '61'
        },
        {
            data: '2022-01-27',
            weight: '62'
        },
        {
            data: '2022-01-28',
            weight: '61'
        },
        {
            data: '2022-01-30',
            weight: '62'
        },
    ]


      //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
      let res = {
            categories: data.map(i=>i.data),
            series: [
              {
                name: "当前体重",
                linearColor: [
                  [
                    0,
                    "#1890FF"
                  ],
                  [
                    0.25,
                    "#00B5FF"
                  ],
                  [
                    0.5,
                    "#00D1ED"
                  ],
                  [
                    0.75,
                    "#00E6BB"
                  ],
                  [
                    1,
                    "#90F489"
                  ]
                ],
                data: data?.map(i=>i?.weight)
              },
            ]
          };
      this.drawCharts('myCharts', res);
    }, 500);
  },
  drawCharts(id,data){
    const ctx = wx.createCanvasContext(id, this);
    uChartsInstance[id] = new uCharts({
        type: "line",
        context: ctx,
        width: this.data.cWidth,
        height: this.data.cHeight,
        categories: data.categories,
        series: data.series,
        animation: true,
        background: "#FFFFFF",
        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [15,10,0,15],
        dataLabel: false,
        dataPointShape: false,
        enableScroll: false,
        legend: {},
        xAxis: {
          disableGrid: true,
          fontSize: 8,
          lineHeight: 8
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2,
          data: [
            {
              min: 60,
              max: 65
            }
          ]
        },
        extra: {
          line: {
            type: "curve",
            width: 2,
            activeType: "hollow",
            linearType: "custom"
          }
        }
      });
  },
  tap(e){
    uChartsInstance[e.target.id].touchLegend(e);
    uChartsInstance[e.target.id].showToolTip(e);
  },
  addWeight(){
      this.setData({
        showWeightModal: true
      })
    },
  confirm(){
    console.log(this.data);
    this.setData({
        showWeightModal: false
      })
  },
  inputWeight(e){
    console.log(e.detail.value);
    this.setData({
        inputWeight: parseInt(e.detail.value)
    })
  }
})