// pages/myself/myself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    wxid:'',
    wxdata:{},
    wxgender:''
  },
  Compile(){
wx.navigateTo({
  url: '/pages/introduce/introduce',
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: (data) => {
        if (data.userInfo.gender = 1){
          data.userInfo.gender = '男'
        }else{
          data.gender = '女'
        }
        console.log(data)
        this.setData({
          userInfo: data.userInfo,
          id: data.signature
        },()=>{
          wx.request({
            url: 'https://yayaya.online/data',
            method: 'POST',
            data: {          //参数为json格式数据
              wxid: this.data.id,
              wxname: this.data.userInfo.nickName,
              wxgender: this.data.userInfo.gender,
              wximg: this.data.userInfo.avatarUrl
            },
            header: {
              //设置参数内容类型为json
              'content-type': 'application/json'
            }, success: (data) => {
              this.setData({
                wxdata: data.data
              }),
                console.log(data.data)
            }
          })
        })
      }
    })
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