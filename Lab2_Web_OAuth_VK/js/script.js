
// const { request } = require("express");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
var url = '';
var code = '';
var token = '';
var profile_html = '';
var friends_html = '';
var user_id = '';
var my_id = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile("D:/Visual Studio Code Projects/Lab2_Web_OAuth_VK/index.html");
});

app.get("/auth", function (req, res) {
    res.redirect("https://oauth.vk.com/authorize?client_id=7664884&display=popup&redirect_uri=http://localhost:3000/callback&scope=friends&response_type=code&v=5.126");
});

app.get("/callback", function (req, res) {
    code = req.query['code'];
    url = "https://oauth.vk.com/access_token?client_id=7664884&client_secret=rM6OZK4ptegrRBj98UTf&redirect_uri=http://localhost:3000/callback&code=" + code;
    request(url, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        token = JSON.parse(body)['access_token'];
        user_id = JSON.parse(body)['user_id'];
        my_id = "morti_sunset";
        console.log(user_id);
    });
    res.redirect('http://localhost:3000');
});

app.get("/profile", function (req, res) {
    profile_url = "https://api.vk.com/method/users.get?user_ids=" + user_id + "&fields=photo_100&access_token=" + token + "&v=5.62"
    request(profile_url, (err, result, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        profile_html = drawProfile(JSON.parse(body)['response']);
        console.log(profile_html);
        res.send(profile_html);
    });
});

app.get("/friends", function (req, res) { 
    friends_url = "https://api.vk.com/method/friends.search?count=60&fields=photo_100&access_token=" + token + "&v=5.62"
    request(friends_url, (err, result, body) => {
        if (err) { return console.log(err); }
        //console.log(body);
        console.log(JSON.parse(body)['response']['items']);
        friends_html = drawFriends(JSON.parse(body)['response']['items']);
        console.log(friends_html);
        res.send(friends_html);
    });
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

function drawFriends(friends){
    var result = '';
    var html = '';
    var title = 
        '<li>'
        +'<div>'
            +'<h4>' + 'Список 60 друзей данного пользователя:' + '</h4>'
        +'</div>'
        +'</li>';

    var button = 
        '<li>'
        +'<a href="/"><button>Обратно</button></a>'
        +'</li>';

    for (var i = 0; i < friends.length; i++) {
        var f = friends[i];

        // var img = $('<img>')
        // .attr('width', 100)
        // .attr('height', 100)
        // .attr('src', f.photo_100)
        // ;

        html += 
            '<li>'+ 
            '<a target="_blank" href="vk.com/id' + f.id + '">'
                +'<img src="'+f.photo_100+'" height="100" width="100" />'
                +'<div>'
                     +'<h4>' + f.first_name + ' ' + f.last_name + '</h4>'
                +'</div>'
            +'</a>'
            +'</li>';

    }
    
    result = button + title + html;
    return result
}

function drawProfile(profile){
    var html = '';
    var button = '';
    var result = '';

    var p = profile[0];
    // var img = $('<img>')
    //     .attr('width', 100)
    //     .attr('height', 100)
    //     .attr('src', p.photo_100)
    //     ;

        button = 
            '<li>'
            +'<a href="/"><button>Обратно</button></a>'
            +'</li>';

        html = 
           '<li>'+ 
            '<a target="_blank" href="vk.com/id' + p.id + '">'
                +'<img src="'+p.photo_100+'" />'
                +'<div>'
                     +'<h4>' + p.first_name + ' ' + p.last_name + '</h4>'
                +'</div>'
            +'</a>'
            +'</li>';

    result = button + html;    
    return result;
}

// function getUrl(method, params){
//     if (!method) throw new Error('Вы не указали метод!');
//     params = params || {};
//     params['access_token'] = token;
//     return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.62';
// }

// function loadFriends(){
//     sendRequest('friends.search', {count: 60, fields: 'photo_100'}, function(data){
//         drawFriends(data.response.items);
//         console.log(data);
//     });
// }

// function loadProfile(){
//     sendRequest('users.get', {user_ids: 'morti_sunset', fields: 'photo_100'}, function(data){
//         console.log(data);
//         drawProfile(data.response);
//     });
// }