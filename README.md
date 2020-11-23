# Lab2_Web_OAuth_VK

Для того, чтобы воспользоваться программой, нужно получить access_token. Для этого:
1) переходим по ссылке <https://oauth.vk.com/authorize?client_id=7664884&display=page&redirect_uri=&scope=friends&response_type=token&v=5.52>
2) копируем адрес страницы, на которую мы перешли
3) из того адреса нам нужно содержание только одного поля это access_token. Ссылка будет примерно такой (токен здесь не настоящий):
https://oauth.vk.com/blank.html#**access_token**=799120251fccgggg97e3be5778944ff78d8e23a18c6dd04f5c698111a0ddeaa68d79a7d129b148a99c2a43f32&expires_in=86400&user_id=106131559
4) копируем содержание access_token и вставляем в script.js в функцию в пустое поле params['access_token'] =:

```html
function getUrl(method, params){
    if (!method) throw new Error('Вы не указали метод!');
    params = params || {};
    params['access_token'] = '';
    return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.62';
}
```

5) сохраняем и можно запускать программу

В программе вы увидите две кнопки "Показать аккаунт" и "Показать друзей". Первая выводит фото и имя моего аккаунта. Вторая выводит список моих первых 60ти друзей.
