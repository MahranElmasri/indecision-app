class Counter extends  React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
        this.handlerAddOne=this.handlerAddOne.bind(this);
        this.handlerMinusOne=this.handlerMinusOne.bind(this);
        this.handlerReset=this.handlerReset.bind(this);

       
    }
    handlerAddOne(){
        this.setState((prevState,props)=>{
            return {count:prevState.count+1}
        })
    }
    handlerMinusOne(){
        this.setState({count:this.state.count-1})
    }
    handlerReset(){
        this.setState({count:0})
    }
    render(){
        return(
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.handlerAddOne}>+1</button>
                <button onClick={this.handlerMinusOne}>-1</button>
                <button onClick={this.handlerReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'))