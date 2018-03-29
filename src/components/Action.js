import React from 'react';

export default (props)=>{
    return(
        <div>
        <button disabled={props.hasOption} onClick={props.handlePick}>What sould I Do?</button>
        </div>
    )
}

// class Action extends React.Component{
   
//     render(){
//         return(
//             <div>
//             <button disabled={this.props.hasOption} onClick={this.props.handlePick}>What sould I Do?</button>
//             </div>
//         )
//     }
// }