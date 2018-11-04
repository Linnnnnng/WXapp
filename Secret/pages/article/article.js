// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  article(e){
    console.log(e)
    wx.request({
      url: 'https://yayaya.online/article',
      method: 'POST',
      data: { //参数为json格式数据
        header: e.detail.value.header,
        content : e.detail.value.content
      },
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json'
      }
    })
    wx.switchTab({
      url: '/pages/home/home',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }

    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})