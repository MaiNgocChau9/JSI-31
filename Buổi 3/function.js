// * Function thuong
function sum1() {
  const params = [];

  // ? fori: Lọc từ obj arg => Trả về 1 mảng
  for (let index = 0; index < arguments.length; index++) {
    if (typeof arguments[index] === "number") params.push(arguments[index]);
    else throw new Error("Please add item in number type"); // ! Xuất lỗi nếu không là phần tử số
  }

  // * reduce: Tính tổng mảng params
  const result = params.reduce(function (prevValue, curValue, curIndex, arr) {
    console.table({ prevValue, curValue, curIndex, arr });
    return prevValue + curValue;
  }, 0);

  console.log(result);
}
// sum1();

//! Function gọi và chạy luôn / No name / Chỉ chạy 1 lần
(function (a, b) {
  return a + b;
})(1, 2);

//! ES6: Arrow functions - KHÔNG CÓ CONTEXT => Lấy context cấp cha
this.name = "abc";

function hello1() {
  this.name = "xyz";
  this.getName = () => {
    // ? Cấp 2 => Lấy this cấp 1 (không có)
    () => console.log("1", this.name);
  };
}
const obj1 = new hello1();
obj1.getName();

const hello2 = () => {
  console.log(this);
};
hello2();

//! Các dạng function khác nhau
function hello(name) {
  return "hello" + name;
}
const h = (name) => "hello" + name;

//! Tính tổng bằng arrow function + spread operator
const sum = (...data) =>
  data.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum(1, 2, 3, 4, 5, 6));

//! Truy xuất giá trị trong object
obj1["name"];