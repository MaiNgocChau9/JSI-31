//! Các dữ liệu -> Convert bollean -> return false (Còn lại là true)
/*
    * "" (Chỗi rỗng)
    * 0
    * false
    * null (typeof null -> 'object')
    * undefined
    * NaN
*/

//! VD1: Danh sách / Object rỗng -> false
const empty_list = []
if (empty_list.length){
    console.log('Empty list had length > 0')
} else if (empty_list){
    console.log('Had empty list')
}

//! VD2: Kiểm tra có biến tồn tại (load API) - Sử dụng toán tử 3 ngôi
const none_list = undefined;

const none_var = none_list ? none_list : "None list is not defined";
console.log(none_var);

// Sử dụng câu lệnh `if`
if (none_list) {
    console.log(none_list);
} else {
    console.log("None list is not defined");
}

// Sử dụng so sánh
const ss = none_list || null;
console.log(ss);

//! KIỂU DỮ LIỆU
console.log(typeof 0); // number
console.log(typeof NaN); // number
 
console.log(parseInt("123.6")); //* Chuyển thành number

//* Chuyển thành string
console.log(String(123)); 
console.log(String(true));
console.log(String(undefined));
console.log("90" + 1); //* 901
console.log("90" - 1); //* 89 (Vì `String` không có toán tử trừ)

//* typeof
console.log(typeof ""); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined

//* Chuyển thành boolean
console.log(Boolean(0)); // false
console.log(Boolean([])); // true

console.log(typeof []); // object
console.log(typeof {}); // object

//* Cách kiểm tra array [] | Phân biệt với object {}
console.log(Array.isArray([])); // true

//! Toán tử LOGIC
//* `&&` (and) -> Trả về giá trị flase gần nhất. Nếu không có giá trị false -> Trả về giá trị true cuối cùng
console.log(1 && 2 && 3); // 3
console.log(true && true && 1); // 1
console.log("" && true && []); // ""

//* `||` (or) -> Trả về giá trị true gần nhất. Nếu không có giá trị true -> Trả về giá trị false cuối cùng
console.log(true || null || undefined); // true
console.log(null || 0 || "1"); // 1