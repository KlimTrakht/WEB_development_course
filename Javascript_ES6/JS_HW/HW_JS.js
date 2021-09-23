// HW_JS_1

// module.exports.returnArea = (n) => {

//   const x = 2;
//   const y = 1;

//   let result = x * Math.pow(n, x) - x * n + y;
//     return result;
//   };

// HW_JS_2

// module.exports.sortArray = (arr) => {
//   function getRandomElem(reportedArr) {
//     let elem = reportedArr[Math.floor(Math.random() * reportedArr.length)];
//     return reportedArr.indexOf(elem);
//   };
//   function getNewArray(arr) {
//     arr.splice(getRandomElem(arr), 1);
//     return arr;
//   };
//   let minValue = -Infinity;
//   let checkArr = getNewArray(arr);
//   console.log(checkArr);
//   for (var it of checkArr) {
//     if (it <= minValue) {
//       return false;
//     } if (it > minValue) {
//       minValue = it;
//     } 
//   };
//   return true;
// };

// HW_JS_3_Dmitry_Kovalkov.js

// module.exports.calculatePriceFlat = (arr) => {
//   function checkArr(checked) {
//     let checkedArray = [];
//     let flag = true;

//     if (1 <= checked.length && checked.length <= 5) {
//       checked.forEach((it, i, array) => {
//         if (1 <= it.length && it.length <= 5) {
//           checkedArray.push(array[i]);
//         } else {
//           flag = false;
//         }
//       });
//     } else {
//       flag = false;
//     }

//     if (flag) {
//       return checkedArray;
//     }
//     return console.log(`Дом не соответствует размерам!`);
//   };

//   function sumPrice(flats) {
//     let zero = 0;
//     let indexBedFlats = [];
//     let goodFlats = [];

//     for (let i = 0; i < flats.length; i++) {
//       flats[i].forEach((it, index) => {
//         if (it === zero || indexBedFlats[index] === index) {
//           if (indexBedFlats.includes(index)) {
//             return;
//           }
//           indexBedFlats.push(index)
//           indexBedFlats.sort((a, b) => a - b);
//         } else {
//           goodFlats.push(it);
//         }
//       });
//     }
//     return goodFlats;
//   };

//   let currentArr = checkArr(arr);
//   let totalPrice = sumPrice(currentArr);

//   let result = totalPrice.reduce((prevVal, it) => prevVal + it, 0);
//   console.log(`Общая стоимость пригодных для жизни квартир = ${result}`);
// };

// HW_JS_4_Dmitry_Kovalkov.js

module.exports.compareArrays = (arr1, arr2) => {
  // функция перемещения элементов
  function shiftElement(arr, pos1, pos2) {
    var temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
  };

  // функция поиска вариантов последовательностей в массиве
  function findAllSequences(arr1, arr2, outArr, el) {
    el = el || arr1.length;
    if (el === 1) {
      for(let j = 0; j < arr1.length; j++){
        if (arr1[j] !== arr2[j]) {
          return false;
        } else if (arr1[j] === arr2[j] && j === 0 || j <= arr1.length - 1) {
          listSequences.push(arr1[j]);
        }
      }
      outArr(arr1);
    } else {
      for (var i = 1; i <= el; i += 1) {
        findAllSequences(arr1, arr2, outArr, el - 1);
        if (el % 2) {
          var j = 1;
        } else {
          var j = i;
        }

        shiftElement(arr1, j - 1, el - 1);
      }
    }
  };

  // в цикле проверяем на абсолютное совпадение
  debugger

  if (arr1.length != arr2.length) return false;

  let listSequences = [];

  findAllSequences(arr1, arr2, (check) => {
    listSequences.push(check.slice());
  });

  // console.log(list);
  // debugger
  // listSequences.filter((it) => {
  //   for (let i = 0; i < it.length; i++) {
  //     if (it[i] !== arr2[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // });


  return true;

};