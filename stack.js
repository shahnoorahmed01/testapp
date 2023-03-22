const stack = (size) => {
    let arr = Array(size).fill(0)
    let t = -1;
    console.log(arr)
    
    function push(e){
        t++
        arr[t] = e
    }
    function pop(){
        t--
    }
    function print(){
        for(let i=t;i>=0;i--){
        	console.log(arr[i])
        }
    }
    push(10)
    push(20)
    push(10)
    print();
    push(30)
    pop(10)
    print();

}

module.exports = stack