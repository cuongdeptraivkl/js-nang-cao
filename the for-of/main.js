const breakfast=['rice','humberger','noodle'];
const  lunch =['steak','seafood','salade'];

const Menu = [...breakfast,...lunch];
//console.log(Menu);
// for of với mảng=========
for(var value of Menu){
    console.log(value);
}
// NOTE: For-of sẽ không lấy bằng cách này với Oject được, thay vào đó sẽ có cách ở phái dưới//// 
// nếu muốn lấy các phần tử trong object thfi dùng cách sau :

var myInfo = {
    name : 'Cuong',
    age:'19'
}
//===========
console.log(Object.keys(myInfo)); // câu lệnh này giúp đưa object MyInfo trả về mảng. từ đó có thể dùng vòng lặp for qua thằng này

for(var value of Object.keys(myInfo)){
    console.log(value);//log ra name+ age
}
// nếu muốn lấy giá trị của name hay age, tdungf cách này :
for(var value of(Object.values(myInfo))){
    console.log(value);// log ra Cuong+ 19
}
//============================================