// định nghĩa key :value cho object
// đuinhj nghĩa method cho object
// định nghĩa key cho object dưới dạng biến



//  1. định nghĩa ekey :value cho object,
// ở đây, thằng name định nghĩa luôn cho biến name lấy giá trị javascript và price lấy giá trị 1000
var name ="javascript";
var price = 1000;
var course ={
    name,
   price
}
console.log(course);
//2. định nghĩa method cho object
// method là phương thức
 var method ={
    getName(){
        return name;
    }
 }
 console.log(method.getName());

//  3.định nghĩa key cho object
var fieldName = 'name';
var fieldPrice = 'price';
const courseMethod ={
    [fieldName]:'javascript',
    [fieldPrice]:1000
}
console.log(courseMethod);

// thực hànhh
// để chuyển từ array sang object ta dùng reduce
// vd: 
const people = [
    {
      area: "GTZ",
      name: "ABC",
      age: 30,
    },
    {
      area: "SZR",
      name: "DEF",
      age: 29,
    }
  ];
  
  function arrToObj(arr) {
    return arr.reduce((obj, val) => {
  obj[val[0]] = val[1]
  return obj;
}, {})
}