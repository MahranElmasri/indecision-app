class IndecisionsApp extends React.Component{
    
    render(){
    const title="Indecisions App" ;
    const subTitle="Put your life in the hands of computer";
    const options=[];
        return(
        <div>
            <Header title={title} subTitle={subTitle}/>
            <Action />
            <Options options={options}/>
            <AddOption/>
    </div>
        )
    }
}
class Header extends React.Component{
render(){
    return(
        <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.subTitle}</p>
        </div>
    )
}
}
class Action extends React.Component{
    handlerPick(){
        alert('Hello')
    }
    render(){
        return(
            <div>
            <button onClick={this.handlerPick}>What sould I Do?</button>
            </div>
        )
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                <li>{this.props.optionText}</li>
            </div>
        )
    }
}
class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this)
    }
    removeAll(){
        this.props.options=[]
        
    }
    render(){
        return(
            <div>
            <button onClick={this.removeAll}>Remove All</button>
            {this.props.options.map((option)=><Option key={option} optionText={option} />)}
            </div>
        )
    }
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handlerAddOption=this.handlerAddOption.bind(this)
    }
    handlerAddOption(e){
        e.preventDefault();
        var option=(e.target.elements.option.value).trim();
        if(option){
            console.log(this.props.options)
            this.props.options.push(option)
            alert(option);
            e.target.elements.option.value=''
        }
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handlerAddOption}>
            <input type='text' name='option' />
            <button type='submit'>Add Option</button>
            </form>
            </div>
        )
    }
}




ReactDOM.render(<IndecisionsApp/>,document.getElementById('app'))