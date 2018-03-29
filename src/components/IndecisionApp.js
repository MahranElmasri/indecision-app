import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
        this.handleClearSelectedOption=this.handleClearSelectedOption.bind(this)
        this.state={
            options:[],
            selectedOption:undefined
           
        }

    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{ options:[]}
        })
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option
            })
        }))
    }
   handlePick(){
      const random=Math.floor(Math.random()*this.state.options.length);
      const option=this.state.options[random];
    //   alert(option)
      this.setState(()=>({
        selectedOption:option
      }))
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
   handleClearSelectedOption(){
    this.setState(() => ({ selectedOption: undefined }));
   }
 
    render(){
    const title="Indecisions App" ;
    const subTitle="Put your life in the hands of computer";
        return(
        <div>
            <Header title={title} subTitle={subTitle}/>
            <Action hasOption={this.state.options.length===0} handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
            <AddOption handleAddOption={this.handleAddOption}/>
            <OptionModal selectedOption={this.state.selectedOption } handleClearSelectedOption={this.handleClearSelectedOption}/>
    </div>
        )
    }
}

export default IndecisionApp;