const express = require('express'); //Строка 1
const app = express(); //Строка 2
const port = process.env.PORT || 5000; //Строка 3

// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6

// Создание GET маршрута
app.get('/api', (req, res) => { //Строка 9
  res.send({ data: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Строка 10
}); //Строка 11