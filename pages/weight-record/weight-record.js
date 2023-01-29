// pages/weight-record/weight-record.js
import uCharts from '../../ucharts/u-charts.min';
const moment = require('moment')

console.log(moment.format('YYYY-MM-DD'), moment.subtract('days',6).format('YYYY-MM-DD'))
var uChartsInstance = {};
Page({
  data: {
    cWidth: 750,
    cHeight: 500
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
      //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
      let res = {
            categories: ["2018","2019","2020","2021","2022","2023"],
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
                data: [60,65,64,63,60,61]
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
          disableGrid: true
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2,
          splitNumber: 10,
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
  }
})