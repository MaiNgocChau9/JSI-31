//! Tạo hàm trả về số lượng giá trị "true" có trong một mảng.
//* 1. countTrue([true, false, false, true, false]) ➞ 2
//* 2. countTrue([false, false, false, false]) ➞ 0 
//* 3. countTrue([]) ➞ 0

//! Cách 1: Sử dụng `for` loop
function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true && typeof arr[i] === 'boolean') {
            count++;
        }
    }
    return count;
}

countTrue([true, false, false, true, false]);

//! Cách 2: Sử dụng `forEach`
//* VD: Tạo 1 arr có độ dài là 10, tuy nhiên không có phần tử thực tế
const empty_items = new Array(10);
console.log(empty_items); // [ <10 empty items> ]
empty_items.forEach((item) => console.log(item)); // Không có kết quả

function countTrue_forEach(arr) {
    let countTrue = 0;
    // Sử dụng toán tử 3 ngôi để so sánh
    arr.forEach((item) =>
    String(item) === "true" && typeof item === "boolean"? countTrue++: 0
    );
    return countTrue;
}
countTrue_forEach([true, false, false, true, false]); // 2

//! Cách 3: Sử dụng `while` loop
function countTrue_while(arr) {
    let countTrue = 0;
    let n = 0;
    while (n < arr.length) {
        if (String(arr[n]) === true && typeof arr[n] === 'boolean') {
            countTrue++;
        }
        n++;
    }
    return countTrue;
}

console.log(countTrue_while([true, false, false, true, false])); // 2

//! Cách 4: ES6 array functions
//* Sử dụng `map`
const countTrue_map = (arr) => {
    let countTrue = 0;
    arr.map((item) => {
        String(item) === "true" && typeof item === "boolean" ? countTrue++ : 0;
    });
    return countTrue;
}
countTrue_map([true, false, false, true, false]); // 2

//* Sử dụng `filter`
const countTrue_filter = (arr) => {
    const countTrue = arr.filter(
        (item) => String(item) === "true" && typeof item === "boolean"
    ); // return array
    return countTrue.length;
}
countTrue_filter([true, false, false, true, false]); // 2