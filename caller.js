var ua = require('./rps_ua.js').createUA('caller@disuo.onsip.com');

ua.invite('callee@disuo.onsip.com', {
  media: {
    gesture: 'rock'
  }
});
