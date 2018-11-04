// pages/introduce/introduce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  ret(e) {
    wx.request({
      url: 'https://yayaya.online/introduce',
      method: 'POST',
      data: { //参数为json格式数据
        introduce: e.detail.value.introduce
      },
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json'
      }
    })
    wx.switchTab({
      url: '/pages/myself/myself',
      success: function(e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})