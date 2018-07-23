// 配置
var envir = 'online',
  CONFIG = {},
  configMap = {
    test: {
      appkey: 'fe416640c8e8a72734219e1847ad2547',
      url: 'https://apptest.netease.im',
      baseUrl: 'https://designerapp.1sju.com/yishuju-back-end/'
    },

    pre: {
      appkey: '45c6af3c98409b18a84451215d0bdd6e',
      url: 'http://preapp.netease.im:8184',
      baseUrl: 'https://designerapp.1sju.com/yishuju-back-end/'
    },
    online: {
      appkey: '6cd099fa00e6c288656c9722922a6999',
      url: 'https://app.netease.im',
      baseUrl: 'https://designerapp.1sju.com/yishuju-back-end/'
    }
  };
CONFIG = configMap[envir];
// 是否开启订阅服务
CONFIG.openSubscription = true

module.exports = CONFIG