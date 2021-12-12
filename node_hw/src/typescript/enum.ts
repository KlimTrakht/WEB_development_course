// Enum вспомогательная сущность, которая помогает лучше структурировать код если в нем    присутствуюткаккие нибудь однотипные элементы
// Существует два типа записи enum

// 1 способ
// создаем с помощью ключевого слова enum и его имя, после в фигурных скобках указываем какие значения будут у данного enumа
enum Membership {
  Simple,
  Standart,
  Premium,
}

// после создадим переменную и запишем в нее одно из значений нашего enum
const membership = Membership.Standart
console.log(membership)
// в консоль вернётся 1
// по умолчанию если мы создаем enum таким образом то они присваивают значения 0, 1, 2
// однако у нас есть возможность получить строковое значение нашего enum, это называется revers enum, записываем в перемен. и получам значение по ключю вот так:
const membershipRevers = Membership[2]
console.log(membershipRevers)
// получим строку Premium

// так же можно в enum записывать более внятные значения, явно:
enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
}
const social = SocialMedia.FACEBOOK
console.log(social)
// получим строку FACEBOOK
