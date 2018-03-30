// import React from 'react';
// import Modal from 'react-modal';

// const OptionModal=(props)=>{
// <Modal 
// isOpen={!!props.selectedOption}
// contentLabel='Selected Option'
// >
//     <h3>Selected Option</h3>
// </Modal>
// }

// export default OptionModal;

import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='option__title'>Selected Option</h3>
    {props.selectedOption && <p className='option__body'>{props.selectedOption}</p>}
    <button className='button' onClick={props.handleClearSelectedOption}>OK</button>
  </Modal>
);

export default OptionModal;
