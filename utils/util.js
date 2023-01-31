import moment from 'moment'
moment.locale('zh-cn')

const getCurrentTimeline = function(timeType){
    let now = moment.now()
    let resRange = [];
    // 获取最近一周、7周、7个月
    let step = 7;
    if(timeType === 'days'){
        for(let i = 1; i <= step; i++){
            resRange.push(moment().subtract('days', step-i).format('MM-DD'))
        }
    }
    if(timeType === 'weeks'){
        for(let i = 1; i <= step; i++){
            resRange.push(moment().subtract('weeks', step-i).format('MM-DD'))
        }
    }
    if(timeType === 'months'){
        for(let i = 1; i <= step; i++){
            resRange.push(moment().subtract('months', step-i).format('MM-DD'))
        }
    }
    return resRange
}



const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/** 饿了么红包 */
const ele_take_out = {
  appId: 'wxece3a9a4c82f58c9',
  path: 'taoke/pages/shopping-guide/index?scene=54oBmMu'
}

const ele_fruits_take_out = {
  appId: 'wxece3a9a4c82f58c9',
  path: 'pages/sharePid/web/index?scene=s.click.ele.me%2FJi3RuZu'
}

/** 美团红包 */
const mt_take_out = {
  appId: 'wxde8ac0a21135c07d',
  path: 'index/pages/h5/h5?f_token=0&weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3D2Aa0Vb5z-IrP&f_openId=0&noshare=1&f_userId=0'
}

module.exports = {
  formatTime,
  ele_take_out,
  mt_take_out,
  ele_fruits_take_out,
  getCurrentTimeline
}
