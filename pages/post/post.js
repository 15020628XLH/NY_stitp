// pages/post/post.js
Page({

  data: {
  },

  onLoad() {
    var postList = [{
      TapJump:"onTapJump1",
      object: {
        date: "Nov 18 2017"
      },
      title: "数字电路与系统",
      postImg: "https://image-res.mzres.com/image/flyme-icon/ede03bc0834644569e0c605856a737c3z",
      avatar: "/images/avatar/avatar-2.jpg",
      content: "A B C...",
      readingNum: 92,
      collectNum: {
        array: [108]
      },
      commentNum: 7
    },

      {
        TapJump: "onTapJump2",
        object: {
          date: "Nov 16 2017"
        },
        title: "微机原理与接口技术",
        postImg: "https://image-res.mzres.com/image/flyme-icon/58630afb38404ed381e771d308858de3z",
        avatar: "/images/avatar/avatar-2.jpg",
        content: "A B C...",
        readingNum: 92,
        collectNum: {
          array: [108]
        },
        commentNum: 7
      },

      { 
        TapJump: "onTapJump3",
        object: {
          date: "Nov 17 2017"
        },
          title: "电磁场与电磁波理论",
          postImg: "https://image-res.mzres.com/image/flyme-icon/d7b3c0aad915416c878bc3a336e4505cz",
          avatar: "/images/avatar/avatar-2.jpg",
          content: "A B C...",
          readingNum: 92,
          collectNum: {
            array: [108]
          },
          commentNum: 7
      },
    
  ]
    this.setData({
      postList:postList
    })
    
  },
   onHide:function(){
     console.log("page-post is hide")
   },
   onUnload:function(){
     console.log("page-post is unlode")
   },
   
   onTapJump: function (event) {
     wx.navigateTo({
       url: '../web/web',
       success: function () {
         console.log("Jump success")
       },

       fail: function () {
         console.log("Jump fail")
       },

       complete: function () {
         console.log("Jump complete")
       }
     })
   },
  onTapJump1: function (event) {
    wx.navigateTo({
      url: '../web/web1',
      success: function () {
        console.log("Jump success")
      },

      fail: function () {
        console.log("Jump fail")
      },

      complete: function () {
        console.log("Jump complete")
      }
    })
  },
  onTapJump2: function (event) {
    wx.navigateTo({
      url: '../web/web2',
      success: function () {
        console.log("Jump success")
      },

      fail: function () {
        console.log("Jump fail")
      },

      complete: function () {
        console.log("Jump complete")
      }
    })
  },
  onTapJump3: function (event) {
    wx.navigateTo({
      url: '../web/web3',
      success: function () {
        console.log("Jump success")
      },

      fail: function () {
        console.log("Jump fail")
      },

      complete: function () {
        console.log("Jump complete")
      }
    })
  },
   
})