// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// result.push(arr)
// console.log(result)


// const arr1 = [3, 5, 8, 16, 20, 23, 50];
//     const result2 = [];

//     for (let i = 0; i < arr1.length; i++) {
//         result2[i] = arr1[i];
//     }

//     console.log(result2);


//     // Пишем решение вот тут
    
//     var start = 5;
//     var result1 = [];
//     while (start < 11) {
//         result1.push(start++);
//     }
//     console.log(result1)



    


//     var start = 5;
//     const arrayOfNumbers = [];
//     while (start < 11) {
//         arrayOfNumbers.push(start++);
//     }
//     console.log(arrayOfNumbers)

//     const arrayOfNumbers1 = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers1[i - 5] = i;
//     }

//     console.log(arrayOfNumbers1);
//     return arrayOfNumbers1;


//     //////////////////////
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
///////////
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);