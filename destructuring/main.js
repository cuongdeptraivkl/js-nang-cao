

// destrucring với mảng
var array = ['javsscript','php','css'];
// cách gọi cũ :
// var a= array[0];
// var b= array[1];
// var c= array[2];
// cách gọi theo destrucring
var [a,b,c]= array;
console.log(a,b,c);
// tương tự, nếu muốn lấy mỗi a,c thì dùng cú pháp sau:
var [a, ,c]=array;
console.log(a,c);
//  trong trường hợp chỉ muốn lấy phần tử còn lại trừ phần tử đã gọi ra
var[a,...rest]=array;
console.log(rest);
// nó là toán tử rest khi dùng destrucring
//mếu muốn lấy 1 mảng trong 1 mảng. ta làm tương tư: gán destructuring mảng con vào 1 [] mới.



//  sử dụng destrucring với object
var course={
    name:'javascript',
    price:1000,
    image:'địa chỉ ảnh',
    children:{
        name:'reacjs'
    },
    description:'description value',
};
// nếu không dùng destrucring
console.log(course.name);
// còn nếu dùng destrucring
var {price}=course;
console.log(price);
// nếu muốn gọi cái nào(33), phải gọi nó ra trong dòng 32


// tương tụe dùng toán tử rest 
var {name,...rest}=course; // gọi tất cả thằng khác trừ thằng name
console.log(rest);
//các hỏi khác khi dùng rest : mày hẫy xoá 1 key của object mà không dùng delete
var {name,... newobject}=course;
console.log(newobject);  

// cách lấy con của thằng chidren
// cách lấy ra thằng children :
var {name,children:{name}}=course;
console.log(name);
//  lấy ra 1 ông không có trong object kia
var {name,description='defaul description'}=course;// khi thằng description không có ở trong course thì nó log ra hàng này
console.log(description);
// còn nếu có thì nó sẽ hiển thị ra description value



function logger(...params){ // có 3 chấm kết hợp description nó vẫn là táon tử rest
    console.log(params);
    console.log(arguments);
}
console.log(logger(1,2,3,4,5,6,7,8));

