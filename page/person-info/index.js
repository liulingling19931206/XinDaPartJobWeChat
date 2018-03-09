/************个人中心页面详情****************/
var P = require('../../lib/wxpage')
P('index', {
  data: {
    headImg:'',
  },

  onLaunch: function () {
  },

  /**
   * 初次加载页面配置
   * **/
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#37383b',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    }),
    wx.setNavigationBarTitle({
      title: '个人中心'
    }),
    wx.showShareMenu({
      withShareTicket: true
    }),
    
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            var simpleUser = res.userInfo;
            console.log(simpleUser);
            that.setData({
              headImg: simpleUser.avatarUrl
            })
          }
        });
      }
    });
  },

  

})
