// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NameData: []
  },
 posts(e){
   let wxid = this.data.NameData[e.currentTarget.dataset.index]._id
   wx.navigateTo({
     url: '/pages/posts/posts?wxid='+wxid,
   })
   console.log(this.data.NameData[e.currentTarget.dataset.index]._id)
 },
  Article(){
    wx.navigateTo({
      url: '/pages/article/article',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://yayaya.online/article',
      success: (data) => {
        this.setData({
          NameData: data.data
        }),
          console.log(data.data)
      }
    })
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