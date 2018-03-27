let count=0;
const addOne=()=>{
    count++;
    console.log(count);
    renderCounter()
}
const minOne=()=>{
    count--;
    renderCounter()
    console.log(count)
}
const reset=()=>{
    count=0;
    renderCounter()
    console.log(count)
}


const renderCounter=()=>{
    const counter=(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(counter,document.getElementById('app'))
}

renderCounter()