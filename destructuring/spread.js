var array = ['javascript','ruby','php','css','python'];
var array2 =['reacjs','dart'];
var array3 =[...array,...array2];// cách gọi này:"...arry" có nghĩa là lấy tất cả phần tử của array và array2
console.log(array3); // chú ý: khi dùng spread operator với mảng thì các phần tử giống nhau sẽ không bị loại bỏ 
// test mỗi thằng 
// chức năng này là của spread, khác với rest đó là không dùng destructuring, thông qua vòng lặp để lấy các phần tử trong mảng array và arrry
function logger(...rest){
    for(i=0;i<rest.length;i++){
        console.log(rest[i]);
    }
}logger(...array)


// ====object=======
var object = {
    name: 'javascript'
};
var object2 = {
    price:'1000',
    name: 'javascript',
    
};
var object3 = {
    ...object,...object2

}
console.log(object3);

//chú ý:
// spread với mảng giống nhau thì sẽ không bị loại bỏ, còn với object thì nó sẽ lấy giá trị đứng sau( đồng nghĩa loại bỏ thằng đứng trước)