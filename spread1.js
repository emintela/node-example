let arr = [1,2,3,4]

let useSpread= (x,y,z,a)=>{
   console.log(x+y+z+a)
}

useSpread(...arr);