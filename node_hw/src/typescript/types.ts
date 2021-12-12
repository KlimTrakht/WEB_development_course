/* eslint-disable @typescript-eslint/no-inferrable-types */
// Base types

// тип boolean
// название типа указываем после имени переменной через двоеточие
const isFetching: boolean = true
const isLoading: boolean = false

// тип number
const int: number = 40
const float: number = 4.2
const num: number = 3e10

// тип string
const message: string = 'Hello TS'

// типы и массывы
// (1 способ) для создания массива состоящего:
// из чисел, переменной в которую будет записан этот массив нужно так же указывать тип number и литерал массива
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]

// из строк
const stringArray: string[] = ['Hello', 'World']

// (2 способ) указать глобальный класс Array<number> и в треугольных скобках указать из чего этот Array состоит, название такой записи типов - Generic (по сути такая запись в треугольных скобках, указывает из чего состоит данный класс или объект)
const numberArrayGeneric: Array<number> = [1, 1, 2, 3, 5, 8, 13]

// тип Tuple
// особенный тип данных присутствующий в TS, для хранения в массиве различных типов данных
const contact: [string, number] = ['Mitya', 1234567]

// тип Any
// используют если на этапе разработки нам все же нужно переопределить тип данных
let changeVariable: any = 40
// ...
// указав тип any можно переобределять значения этой переменной значениями любого другого типа
changeVariable = 'new value'
changeVariable = []

// тип Void
// можно явно указать, к примеру у функции возвращаеммый тип данных, если она ничего не вернет
// 1. указали тип у принимаемого параметра name
// 2. указали тип void после круглых скобок, что значит что функция ничего не возвращает

function sayMyName(name: string): void {
  console.log(name)
}
// вызовем функцию
sayMyName('Mitya')
// скомпилируем и увидим в консоли строку Mitya (npm run dev)

// тип Never
// указывают в 2 случаях
// 1 если функция возвращает ощибку и никогда не заканчивает свое выполнение
// 2 если функция постоянно что либо делает
function throwError(message: string): never {
  throw new Error(message)
}
// сейчас компилятор явно видит в этой функции буде выброшена ошибка он принимает тип данных never
function infinity(): never {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log()
  }
}
// эта функция никогда не остановиться

// конструкция Type
// создание собственных типов
// создание алиасов для примитивных типов
type Login = string
// создали тип Login (именнованный тип) со значением string, теперь его можно указывать при создании, допустим переменных
const login: Login = 'admin'

// так же можно указывать потенциально различные типы данных для одной и той же переменной, допустим, есть переменная ID в которой может храниться или string, или number
type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// ошибки нe будет

// тип Null и Undefined
// эти типы так же зачастую используют в конструкции Type для определения типов
type SomeTypes = string | null | undefined
