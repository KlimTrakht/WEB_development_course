// Guard - это некие вспомогательные конструкции в TS которые помогают работать с типами
// для примера создадим ф-ю, принимающую параметр x который может быть типом string или number
function strip(x: string | number) {
  // и в зависимости от типа вх. параметра реализуем различный функционал
  // воспользуемся оператором typeof
  // пишем условие
  if (typeof x === 'number') {
    // если х число округлим его до второго знака
    return x.toFixed(2)
  }
  // иначе обрежем строку по краям от пустых символов
  // щсобенность TS тут в том что он уже понимает что на данном этапе при компиляции тут может быть только строка, и когда послк х.t... мы начинаем вводить название метода он автоматически подсказывает нам методы для строковых значений в всплывающем окне
  return x.trim()
}

// Оператор instanceof (так же существует в js) проверяет принадлежность какого либо объекта к классу
// создадим два класса с двумя полями в каждом
class MyResponse {
  header = 'response header'
  result = 'response result'
}
class MyError {
  header = 'error header'
  message = 'error message'
}
// теперь создадим ф-ю которая обрабвтывает одновременно и класс MyResponse и MyError
// эта ф-я получает некий объект res который може быть типом класса MyResponse илли MyError
function handle(res: MyResponse | MyError) {
  // пишем условие и проверяем входящий объект на принадлежность к определенному классу, используюя instanceof
  if (res instanceof MyResponse) {
    return {
      // создадим и вернем поле info
      info: res.header + res.result,
    }
  } else {
    return {
      // за счет оператора instanceof TS понимает что в первом условии res может иметь поля header и result, а уже во втором только header и message, и будет выводить соответствующие подсказки
      info: res.header + res.message,
    }
  }
}

// создадим тип
// который будет принимать в себя три значения
type AlertType = 'success' | 'danger' | 'warning'
// создадим ф-ю которая параметром принимает type: AlertType
function setAlertType(type: AlertType) {
  //...
}
// теперь в эту ф-ю можно передавать различные  значения
// вызовем ее с определенными значениями в type AlertType
setAlertType('success')
setAlertType('warning')
// ошибки нет, но если передать в нее другое значени тогда выдаст ошибку

// setAlertType('default')
