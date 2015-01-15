var ua = require('./rps_ua.js').createUA('callee@disuo.onsip.com');

ua.on('invite', function (session) {
  session.accept({
    media: {
      gesture: 'paper'
    }
  });
});
