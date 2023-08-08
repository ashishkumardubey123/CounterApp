let counter= document.querySelector('#vlue')

let increment = ()=>{
    
let countVlaue= parseInt(counter.innerText)
countVlaue= countVlaue+1;
counter.innerText= countVlaue

}

let decrement=()=>{
    let countVlaue= parseInt(counter.innerText)
countVlaue= countVlaue - 1;
counter.innerText= countVlaue;


}
