var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

var authData = {
    email: 'younhong@kakao.com',
    password: '77777',
    nickname: 'younhong'
}

router.get('/login', function(request, response) {
    var title = 'WEB - login';
        
    var list = template.list(request.list);
    var html = template.html(title, list, 
      `
        <form action="/auth/login_process" method="POST">
          <p><input type="text" name="email" placeholder="email"></p>
          <p><input type="password" name="pwd" placeholder="password"></p>
          <p><input type="submit" value="login"></p>
        </form>
      `, '');
      
    response.send(html);
});

// router.post('/login_process', function(request, response) {
//     var post = request.body;
//     var email = post.email;
//     var password = post.pwd;

//     if (email === authData.email && password === authData.password) {
//       request.session.is_logined = true;
//       request.session.nickname = authData.nickname;
//       request.session.save(function(){
//         response.redirect('/');
//       });
//     } else {
//         response.send("Who?");
//     }
// });

router.get('/logout', function(request, response) {
  request.session.destroy(function(err) {
    response.redirect('/');
  });
});

module.exports = router;