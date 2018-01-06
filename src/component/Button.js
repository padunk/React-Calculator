var React = require('react');

function Buttons(props){
  return(
    <button 
      value={props.value}
      className={`btn ${props.className}`}
      onClick={props.onClick}
      >
      {props.value}
    </button>
  )
}

function OtherButtons(props){
  return(
    <div className='other-buttons'>
      <Buttons value='AC' className='tombol-lain' onClick={props.clearDisplay} />
      <Buttons value='+/-' className='tombol-lain' onClick={props.toggleSign} />
      <Buttons value='C' className='tombol-lain  allclear' onClick={props.clearDisplay} />
    </div>
  )
}

function NumberButtons(props){
  return(
    <div className='number-buttons'>
      <Buttons value='7' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='8' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='9' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='4' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='5' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='6' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='1' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='2' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='3' className='tombol-angka' onClick={props.enterDigit} />
      <Buttons value='0' className='tombol-angka nol' onClick={props.enterDigit} />
      <Buttons value='.' className='tombol-angka' onClick={props.enterDot} />
    </div>
  )
}

function OperatorButtons(props){
  return(
    <div className='operator-buttons'>
      <Buttons value='%' className='tombol-operator' onClick={props.inputPercent} />
      <Buttons value='√' className='tombol-operator' onClick={props.squareRoot} />
      <Buttons value='x' className='tombol-operator' onClick={props.operate} />
      <Buttons value='÷' className='tombol-operator' onClick={props.operate} />
      <Buttons value='+' className='tombol-operator' onClick={props.operate} />
      <Buttons value='-' className='tombol-operator' onClick={props.operate} />
      <Buttons value='=' className='equal-button' onClick={props.operate} />
    </div>
  )
}

module.exports = {
  OtherButtons: OtherButtons,
  NumberButtons: NumberButtons,
  OperatorButtons: OperatorButtons};