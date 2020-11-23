

$('#load').on('click', loadFriends);
$('#profile').on('click', loadProfile);

function getUrl(method, params){
    if (!method) throw new Error('Вы не указали метод!');
    params = params || {};
    params['access_token'] = '799120251fcc97e3be5778944ff78d8e23a18c6dd04f5c698111a0ddeaa68d79a7d129b148a99c2a43f32';
    return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.62';
}

function sendRequest(method, params, func){
    $.ajax({
        url: getUrl(method, params),
        method: 'GET',
        dataType: 'JSONP',
        success: func
    })
}

function loadFriends(){
    sendRequest('friends.search', {count: 60, fields: 'photo_100'}, function(data){
        drawFriends(data.response.items);
        console.log(data);
    });
}

function loadProfile(){
    sendRequest('users.get', {user_ids: 'morti_sunset', fields: 'photo_100'}, function(data){
        console.log(data);
        drawProfile(data.response);
    });
}

function drawFriends(friends){
    var html = '';
    var title = 
        '<li>'
        +'<div>'
            +'<h4>' + 'Список 60 друзей данного пользователя:' + '</h4>'
        +'</div>'
        +'</li>';

    $('ul').html(title);

    for (var i = 0; i < friends.length; i++) {
        var f = friends[i];

        var img = $('<img>')
        .attr('width', 100)
        .attr('height', 100)
        .attr('src', f.photo_100)
        ;

        html = 
            '<li>'+ 
            '<a target="_blank" href="vk.com/id' + f.id + '">'
                +'<div>'
                     +'<h4>' + f.first_name + ' ' + f.last_name + '</h4>'
                +'</div>'
            +'</a>'
            +'</li>';


        $('ul').append(img);
        $('ul').append(html);
    }

}

function drawProfile(profile){
    var html = '';

    var p = profile[0];
    var img = $('<img>')
        .attr('width', 100)
        .attr('height', 100)
        .attr('src', p.photo_100)
        ;

        html = 
            '<li>'+ 
            '<a target="_blank" href="vk.com/id' + p.id + '">'
                +'<div>'
                     +'<h4>' + p.first_name + ' ' + p.last_name + '</h4>'
                +'</div>'
            +'</a>'
            +'</li>';

    $('ul').html(img);
    $('ul').append(html);


}