# Lab2_Web_OAuth_VK

Для того, чтобы воспользоваться программой, нужно получить access_token. Для этого:
1) в терминале переходим в путь Visual Studio Code Projects\Lab2_Web_OAuth_VK\js
2) пишем команду "node script.js"
3) мы запустили сервер,
4) теперь в браузере ввожим адрес http://localhost:3000 или просто localhost:3000
5) на появившейся странице нажимаем кнопку "Войти", чтобы авторизоваться
6) вводим свои данные вк,
поздравляю, вы получили токен

```html
    <"Молодцы!">
```
Дальше можно тыкать по кнопкам Показать аккаунт и Показать друзей сколько влезет.
Первая выводит фото и имя вашего аккаунта. Вторая выводит список ваших первых 60ти друзей.


# Lab3_Web_CreateServer

К имеющимся программам стоит загрузить postman

Для проверки работоспособности нужно:
1) в postman создать новый request
2) ввести url: http://localhost:2000
3) меняя тип запроса делать запросы

Для добавления тела запроса можно пользоваться разными методами, я пользовалась x-www-form-urlencoded

Не забудьте перед этим запустить сервер (node Lab3_Web/js/lab3_script.js)

Скриншоты:
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\post1.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\post1console.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\post2.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\post2console.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\put1.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\put1console.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\patch1.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\patch1console.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\get1.png
D:\Visual Studio Code Projects\Lab3_Web\scrinshots\get1console.png