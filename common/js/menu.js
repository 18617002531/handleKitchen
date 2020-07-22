/* 背景颜色一览：
red:嫣红  orange:桔橙 yellow:明黄 olive:橄榄  green:森绿；
cyan:天青  blue:海蓝  purple:姹紫  mauve:木槿 pink:桃粉；
brown:棕褐 grey:玄灰  gray:草灰  black:墨黑 white:雅白 */

var agentMenus = {
  activeUrl: 'home',
  list:[{
    currentUrl:"home",
    unCheckImgUrl:"/images/home.png",
    checkedImgUrl:"/images/homeSelect.png",
    btnType: 0,
    title:"首页"
  },{
    currentUrl:"mine",
    unCheckImgUrl:"/images/mine.png",
    checkedImgUrl:"/images/mineSelect.png",
    btnType: 0,
    title:"我的"
  }]
}

var masterMenus = {
  activeUrl: 'completed',
  list:[{
    currentUrl:"completed",
    unCheckImgUrl:"/images/home.png",
    checkedImgUrl:"/images/homeSelect.png",
    btnType: 0,
    title:"已完成"
  },{
    currentUrl:"nodone",
    unCheckImgUrl:"/images/mine.png",
    checkedImgUrl:"/images/mineSelect.png",
    btnType: 0,
    title:"未完成"
  }]
}

module.exports = {
  agentMenuData: agentMenus,
  masterMenuData: masterMenus
}
