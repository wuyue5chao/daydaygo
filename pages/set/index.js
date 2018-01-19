
const util = require('../../utils/util.js');

var helloData = {
  name: 'wechat'
}

Page({
  data: helloData,
  changeName: function(e){
    this.setData({
      name: 'Mina'
    })
  }
})