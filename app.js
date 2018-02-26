var d = new Date()
require('./lib/wxpage').A({
    data:{
      host: 'https://testapi.nbig.com.cn',
    },
    config: {
        route: '/pages/$page',
    },
    onLaunch: function(opts) {
      wx.showShareMenu({
        withShareTicket: true
      })
    },
    onShow: function () {
        // Do something
    },
})
