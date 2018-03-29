import React from 'react';

export default class AddOption extends React.Component{
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