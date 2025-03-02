const arr = [1, "123", "abc", 1.3, [1, 2, 3]];

//* [POP] Xóa phần từ cuối cùng của danh sách => phần tử đã xóa
console.group ("Pop");
console.log("Pop:", arr.pop());
console.log("After change:", arr);
console.groupEnd();

//* [PUSH] Thêm 1 phần tử vào cuối danh sách => độ dài mảng mới nhất
console.group ("Push");
console.log("Push:", arr.push());
console.log("After change:", arr);
console.groupEnd();

//* [SHIFT] Xóa phần tử đầu tiên trong danh sách => phần tử đã xóa
console.group ("Shift");
console.log("Shift:", arr.shift());
console.log("After change:", arr);
console.groupEnd();

//* [UNSHIFT] Thêm phân tử vào đầu danh sách => độ dài mảng mới nhất
console.group("Unshift");
console.log("Unshift:", arr.unshift(1));
console.log("After change:", arr);
console.groupEnd();

//* [LENGTH] property/thuộc tính => độ dài mảng
console.log("Độ dài mảng:", arr.length);