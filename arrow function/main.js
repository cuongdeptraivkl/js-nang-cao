// function thoong thuonwgf

const logger= function(log){
    console.log(log);
}
logger('hello world');


// function kieu arrow function
const arrowFun= (log)=>{
    console.log(log);
}
arrowFun('arrow function');
// kieu ngan gon hon 
const sum =(a,b)=>{
    return a+b;
}
console.log(sum(2,2));
// cach viet cua arrow 

const sumArr =(a,b)=> a+b 

console.log(sumArr(2,3));

const course ={
    name: 'js basic',
    getName: function(){
        return this.name;
    }
}
console.log(course.name);