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
        const option=e.target.elements.option.value.trim();
        // this.props.handleAddOption(option)
        const error=this.props.handleAddOption(option);
        this.setState(()=>{
            return {error:error}
        })
            if(!error){
                e.target.elements.option.value=''
            }
          
           
        
    }
    render(){
        return(
            <div>
            {this.state.error&&<p className='add-option-error'>{this.state.error}</p>}
            <form className='add-option' onSubmit={this.handlerAddOption}>
            <input className='add-option__input' type='text' name='option' />
            <button className='button'>Add Option</button>
            </form>
            </div>
        )
    }
}