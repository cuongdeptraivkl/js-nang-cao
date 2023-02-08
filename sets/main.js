/*
 CÁCH KHỞ TẠO : let setObject = new Set([iterable]);


    1. add(value): thêm phần tử vào tập hợp
    2. clear() : xóa hết các phàn tử trong sets
    3.delete(value) xóa 1 phần tử trong tập hợp
    4.entries(): trả về 1 Iterator chứa các giá trị của một tập hợp
    5.has(value): kiểm tra xem giá trị có tồn tại trong tập hợp không, trả về true nếu tồn tại

*/
 let text = new Set((['a','b','c','a']));
 console.log(text ); //a,b,c( bỏ a vfi trùng)
 console.log(text.size); //3
 // thêm 2 phần tử mới bằng add

 console.log( text.add('cuong').add('deptrai') ); 
 //check phần tử đã tồn tại chưa
 
 console.log(text.has('cuong'))// true


 console.log( text.delete('cuong')); // xóa phần tử cuong
 // ========console.log(text.clear());// xóa toàn bộ text;
  for(let [item] of text.entries()){
    console.log(item);// lấy từng phần tử trong text
  }



