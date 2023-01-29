// index.js
// 获取应用实例
const app = getApp()

const healthList = [
  {
    title: '科学地洗脸',
    context: `　每天早晨起床之后，我们最好洗一个冷水脸，不仅能够洗去我们睡眠中粘在脸上的尘埃，还能够提高我们一天的精神状态。对于一些每天都要化妆的女生们，每天晚上下班之后的第一件事，最好就是洗脸，把脸上淡去的妆与污垢洗去。

    　　洁面的水温以30℃左右为宜。不可用太热的水，热气会吸收肌肤内过多的油脂，令肌肤干燥，破坏了原有的弹性和光泽，容易出皱纹;也不可用太冷的水，冷水虽然能清洁表面的污垢，但无法清洁毛孔里的尘垢和过剩油脂。而用30℃左右的温水洗脸，可以使毛孔张开，清洁更彻底，对肌肤也不会造成伤害。`
  },
]


Page({
  data: {
    healthInfo: healthList[0]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log(this.data.healthInfo)
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchToPacket(){
    wx.navigateTo({
      url: '../packet/packet',
    })
  },
  switchToWeightRecord(){
    wx.navigateTo({
      url: '../weight-record/weight-record',
    })
  }
})
