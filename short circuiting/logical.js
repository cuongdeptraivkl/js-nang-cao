
console.log('----------------AnD-----------------');

//l thường thường khi so sánh nó sẽ trả ra kiểu bolem
// nhưng toán tử logic sẽ không trả về kiểu bolem

// có 6 giá trị trong JS nó sẽ trả về false
/*
    0
    ''
    false
    undefined
    NaN
    null
*/

var result = 'a' && 'b'&& 'c';
console.log(result);//c

//======> khi dùng toán tử AND, ní sẽ đọc từ về trái sang. Nếu gặp 1 trong 6 giá trị nêu trên, nó sẽ nhận và gán vào biến đang gọi với giá trị đó, đuồng nghĩa sẽ ngưng xét các giá trị đnagwf sau 
// VD:

var test = 'a' && 'b'&& null & 'cường đẹp trai';
console.log(test);// null 


console.log('----------------OR-----------------');
//=====> OR sẽ ngược lại so với AND, 
//---- nó sẽ lấy giá trị đầu tiên và bỏ qua các giá trị đằng sau dù có 1 trong 6 giá trị false nêu trên

var resultOr = 'cuong' || undefined || 'c';
console.log(resultOr);// cuong

//----nó sẽ lấy giá trị tiếp theo, bỏ qua gái trị đầu tiên nếu giá trị đó thuộc 1 trong 6 giá trị trả về false 
var resultOR2 = NaN || 'a'||'b'||'c'
console.log(resultOR2);// a
//----- trường hợp nó báo sai tất cả khi các giá trị thuộc trong 6 giá trị trả về false
var result_Or_False = NaN|| 0|| null|| false || undefined||"";
console.log(result_Or_False);//====>> false