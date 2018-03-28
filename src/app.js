class IndecisionsApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            options:[]
           
        }

    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{ options:[]}
        })
    }
   handlePick(){
      const random=Math.floor(Math.random()*this.state.options.length);
      const option=this.state.options[random];
      alert(option)
   }
   handleAddOption(option){
       if(!option){
           return 'Entrer option value'
       }else if(this.state.options.indexOf(option)>-1){
           return 'This option already entrerd,Please Enter new option '
       }
       this.setState((prevState)=>{
           return{
               options:prevState.options.concat(option)
           }
       })
   }
    render(){
    const title="Indecisions App" ;
    const subTitle="Put your life in the hands of computer";
        return(
        <div>
            <Header title={title} subTitle={subTitle}/>
            <Action hasOption={this.state.options.length===0} handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption handleAddOption={this.handleAddOption}/>
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
   
    render(){
        return(
            <div>
            <button disabled={this.props.hasOption} onClick={this.props.handlePick}>What sould I Do?</button>
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
  
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            {this.props.options.map((option)=><Option key={option} optionText={option} />)}
            </div>
        )
    }
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handlerAddOption=this.handlerAddOption.bind(this)
        this.state={
            error:undefined
        }
    }
    handlerAddOption(e){
        e.preventDefault();
        const option=(e.target.elements.option.value).trim();
        // this.props.handleAddOption(option)
        const error=this.props.handleAddOption(option);
            if(error){
                this.setState(()=>{
                    return {error:error}
                })
            }
          
           e.target.elements.option.value=''
        
    }
    render(){
        return(
            <div>
            {this.state.error&&<p>{this.state.error}</p>}
            <form onSubmit={this.handlerAddOption}>
            <input type='text' name='option' />
            <button type='submit'>Add Option</button>
            </form>
            </div>
        )
    }
}




ReactDOM.render(<IndecisionsApp/>,document.getElementById('app'))