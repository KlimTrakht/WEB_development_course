// после круглых скобок при объявлении функций, мы можем указать тип возвращаемый этой функциией
// создали функция, которая принимает два числа и возвращает число
function add(a: number, b: number): number {
  return a + b
}
// т.е. мы указываем при передаче параметров у каждого параметра его тип и после указания входящих параметров, закрыв скобки через двоеточие мы можем указать тип который должна возвращать данныя функция

// пример со строкой
function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

// еще один интересный функционал который присутствует у функций в TS
// когда мы можем перегружать определенные параметры и перегружать функцию
// т.е. вызывать функцию с разными параметрами и получать разные значения
// создадим ф-ю position и если эта ф-я ничего не будет получать (в параметры ), то тогда она будет возвращать interface Position
// создадим ф-ю и интерфейс

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string // просто поле с именем default и типом string
}

function position(): MyPosition
// это первая перегрузка данной ф-и
function position(a: number): MyPositionWithDefault
// вторая перегрузка ф-и position которая если принимает один параметр, тогда будет возвращать другой тип (интерфейс MyPositionWithDefault), так же создадим его и к примеру унаследуем его от интерфейса MyPosition
function position(a: number, b: number): MyPosition
// третья перегрузка ф-и, если она принимает два параметра, тогда просто возвращает интерфейс MyPosition

// определив варианты перегрузок, теперь определим саму ф-ю position
// эта ф-я может принимать максимум два необязательных параметра, укажем это со знаком ?
function position(a?: number, b?: number): any {
  // и теперь выполняем простейшие проверки передаваемых параметров
  // для первого случая если (не а и не b), т.е  нет параметров тогда возвращаем интерфейс MyPosition (т.е возвращаем то что указали в полях при определении интерфейса)
  // и далее описываем каждую пергрузку
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() }
  }
  // для третьей перегрузки, если эти if не сработали возвращаем MyPosition
  return { x: a, y: b }
}

// проверим вывод
console.log('Empty: ', position())
console.log('One param: ', position(40))
console.log('Two params: ', position(5, 10))
