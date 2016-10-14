// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/todos': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [{
          id: 1,
          text: 'Learn antd',
          isComplete: true,
        }, {
          id: 2,
          text: 'Learn ant-tool',
        }, {
          id: 3,
          text: 'Learn dora',
        }, ],
      });
    }, 500);
  },
  '/ApiSaler/salerHome': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "user": {
            "username": "Jana",
            "job": "总监",
            "chief": "李敬元",
            "teamNum": "10",
            "headImg": "http://XXXXXX/img/XXXX.png"
          },
          "income": {
            "week": "2000",
            "train": "3000",
            "retail": "2000",
            "yesterday": "1200",
            "charts": [{
              "date": "12.11",
              "revenue": "200"
            }, {
              "date": "12.12",
              "revenue": "300"
            }, {
              "date": "12.13",
              "revenue": "250"
            }, {
              "date": "12.14",
              "revenue": "210"
            }, {
              "date": "12.15",
              "revenue": "290"
            }, {
              "date": "12.16",
              "revenue": "350"
            }, {
              "date": "12.17",
              "revenue": "180"
            }]
          }
        }
      });
    }, 500);
  },
  '/ApiSaler/getOrder': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
        "total": 3,
        "orderList": [{
          "orderID": "2016112232392007897",
          "state": "已完成",
          "consignee": "刘梦如",
          "orderTime": "2016-07-22 11:20",
          "goodsNum": "2",
          "totalPrice": "1786.00",
          "rebate": "28.00",
          "goodsList": [{
              "img": "http://XXXXX/XXXX.jpg",
              "title": "新升级 IPSA茵芙纱自律循环美肌液R2补水保湿乳液",
              "price": "1180.00",
              "num": "1",
              "unit": "瓶"
          },{
              "img": "http://XXXXX/XXXX.jpg",
              "title": "AHC玻尿酸修复气垫BB霜 #21 12克+替换装12克",
              "price": "1180.00",
              "num": "1",
              "unit": "瓶"
            }]
        }, {
            "orderID": "2016112232392007897",
            "state": "已完成",
            "consignee": "张三",
            "orderTime": "2016-07-22 11:20",
            "goodsNum": "2",
            "totalPrice": "1786.00",
            "rebate": "28.00",
            "goodsList": [{
                "img": "http://XXXXX/XXXX.jpg",
                "title": "新升级 IPSA茵芙纱自律循环美肌液R2补水保湿乳液",
                "price": "1180.00",
                "num": "1",
                "unit": "瓶"
            }, {
              "img": "http://XXXXX/XXXX.jpg",
              "title": "新升级 IPSA茵芙纱自律循环美肌液R2补水保湿乳液",
              "price": "1180.00",
              "num": "1",
              "unit": "瓶"
            }, {
                "img": "http://XXXXX/XXXX.jpg",
                "title": "AHC玻尿酸修复气垫BB霜 #21 12克+替换装12克",
                "price": "1180.00",
                "num": "1",
                "unit": "瓶"
            }]
        }, {
            "orderID": "2016112232392007897",
            "state": "已完成",
            "consignee": "李四",
            "orderTime": "2016-07-22 11:20",
            "goodsNum": "2",
            "totalPrice": "1786.00",
            "rebate": "28.00",
            "goodsList": [{
                "img": "http://XXXXX/XXXX.jpg",
                "title": "新升级 IPSA茵芙纱自律循环美肌液R2补水保湿乳液",
                "price": "1180.00",
                "num": "1",
                "unit": "瓶"
            }, {
              "img": "http://XXXXX/XXXX.jpg",
              "title": "新升级 IPSA茵芙纱自律循环美肌液R2补水保湿乳液",
              "price": "1180.00",
              "num": "1",
              "unit": "瓶"
          }, {
              "img": "http://XXXXX/XXXX.jpg",
              "title": "新升级 IPSA茵芙纱自律循环美肌液R2补水保湿乳液",
              "price": "1180.00",
              "num": "1",
              "unit": "瓶"
          }, {
                "img": "http://XXXXX/XXXX.jpg",
                "title": "AHC玻尿酸修复气垫BB霜 #21 12克+替换装12克",
                "price": "1180.00",
                "num": "1",
                "unit": "瓶"
            }]
         }]
        }
      });
    }, 500);
  },
  '/ApiSaler/custList': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "customerTotal": "4",
          "customerList": [{
              "img": "http://XXXX/XXX.jpg",
              "name": "星星",
              "phone": "137****777",
              "orderNum": "1",
              "total": "248"
          }, {
              "img": "http://XXXX/XXX.jpg",
              "name": "王星星",
              "phone": "137****777",
              "orderNum": "1",
              "total": "259"
          }, {
              "img": "http://XXXX/XXX.jpg",
              "name": "月月",
              "phone": "138****888",
              "orderNum": "3",
              "total": "300"
          }, {
              "img": "http://XXXX/XXX.jpg",
              "name": "多多",
              "phone": "139****999",
              "orderNum": "10",
              "total": "259"
          },{
              "img": "http://XXXX/XXX.jpg",
              "name": "星星",
              "phone": "137****777",
              "orderNum": "1",
              "total": "248"
          }, {
              "img": "http://XXXX/XXX.jpg",
              "name": "王星星",
              "phone": "137****777",
              "orderNum": "1",
              "total": "259"
          }, {
              "img": "http://XXXX/XXX.jpg",
              "name": "月月",
              "phone": "138****888",
              "orderNum": "3",
              "total": "300"
          }, {
              "img": "http://XXXX/XXX.jpg",
              "name": "多多",
              "phone": "139****999",
              "orderNum": "10",
              "total": "259"
          },{
              "img": "http://XXXX/XXX.jpg",
              "name": "星星",
              "phone": "137****777",
              "orderNum": "1",
              "total": "248"
          }, {
              "img": "http://XXXX/XXX.jpg",
              "name": "王星星",
              "phone": "137****777",
              "orderNum": "1",
              "total": "259"
          }]
        }
      });
    }, 500);
  },
  '/ApiSaler/getHpMoney': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "hpmoney":"100.0",
        }
      });
    }, 500);
  },
  '/ApiSaler/qCode': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "popularize":"http://wap.hpg.com/index/index/sek/c95a3c31391",
          "QRCode":"http://imgfx.hipaygo.cn/qrcode/31391.png",
          "img":"http://wx.qlogo.cn/mmopen/heM2WWhGTKFvF0nbrJQnxeswiceuVxaaxzvq2DBnzHGxOP9Bicby8GJH5hUdAUCCc83DymQZsq0Prv79Jn3Jol5PmlaYrGdOOh/0"
        }
      });
    }, 500);
  },
  '/ApiSaler/cardList': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "cardList": [{
            "id": "1",
            "username": "刘梦茹",
            "cardnum": "1233****6677",
            "bank": "招商银行",
            "branch": "杭州西湖区支行"
        },{
            "id": "2",
            "username": "张三",
            "cardnum": "1287****2798",
            "bank": "中国建设银行",
            "branch": "杭州西湖区支行"
        },{
            "id": "3",
            "username": "李四",
            "cardnum": "6330****3390",
            "bank": "中国农业银行",
            "branch": "杭州西湖区支行"
        }]
        }
      });
    }, 500);
  },
  '/ApiSaler/addCard': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0
      });
    }, 500);
  },
  '/ApiSaler/editCard': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0
      });
    }, 500);
  },
  '/ApiSaler/getIncomeInfo': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "allow":"100.00",
          "settlement":"0.00",
          "process":"0.00",
          "history":"0.00"
        }
      });
    }, 500);
  },
  '/ApiSaler/getCashedInfo': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "list":[
            {"date":"16-08-10","money":"3.44","card":"23456"},
            {"date":"16-08-10","money":"3.44","card":"23456"},
            {"date":"16-08-10","money":"3.44","card":"23456"},
            {"date":"16-08-10","money":"3.44","card":"23456"}
          ]
        }
      });
    }, 500);
  },
  '/ApiSaler/getBonusInfo': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "bonusList": [{
            "form": "嗨呗总监团队销售业绩利润...",
            "money": "3.44",
            "date": "16-07-28"
          }, {
              "form": "嗨呗总监团队销售业绩利润...",
              "money": "3.44",
              "date": "16-07-28"
          }, {
              "form": "嗨呗总监团队销售业绩利润...",
              "money": "3.44",
              "date": "16-07-28"
          }, {
              "form": "嗨呗总监团队销售业绩利润...",
              "money": "3.44",
              "date": "16-07-28"
          }]
        }
      });
    }, 500);
  },
  '/ApiSaler/getShopInfo': function(req, res) {
    setTimeout(function() {
      res.json({
        "code": 0,
        "data": {
          "user": {
            "username": "李静",
            "phone": "13568697882",
            "headImg": "http://wx.qlogo.cn/mmopen/heM2WWhGTKFvF0nbrJQnxeswiceuVxaaxzvq2DBnzHGxOP9Bicby8GJH5hUdAUCCc83DymQZsq0Prv79Jn3Jol5PmlaYrGdOOh/0"
          },
          "shop":{
            "shopName":"FKUSH",
            "wechat":"jana860"
          },
          "slogan":"嗨呗公主，百分百正品"
        }
      });
    }, 500);
  },
};
