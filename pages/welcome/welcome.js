Page({

  onTapJump:function(event){
      wx.navigateTo({
        url: '../post/post',

        success:function(){
          console.log("Jump success")
        },

        fail:function(){
          console.log("Jump fail")
        },

        complete:function(){
          console.log("Jump complete")
        }
      })
  },
  onUnload:function(){
    console.log("page is unload")
  },
  onHide:function(){
    console.log("page id hide")
  },
})