var React = require('react');
var OutputScreen = require('./Screen');
var NumberButtons = require('./Button').NumberButtons;
var OtherButtons = require('./Button').OtherButtons;
var OperatorButtons = require('./Button').OperatorButtons;
var DecimalAdjust = require('./calculate').DecimalAdjust;
var ComputeOp = require('./calculate').ComputeOp;

class Calculator extends React.Component {
  constructor(){
    super();
    
    this.state = {
      output: 0,
      operatorOutput: '',
      storeValue: [],
      history: '',
      type: 'round',
      maxLength: 10,
    }
    this.enterDigit=this.enterDigit.bind(this);
    this.enterDot=this.enterDot.bind(this);
    this.clearDisplay=this.clearDisplay.bind(this);
    this.toggleSign=this.toggleSign.bind(this);
    this.inputPercent=this.inputPercent.bind(this);
    this.squareRoot=this.squareRoot.bind(this);
    this.operate=this.operate.bind(this);
  }
    
  clearDisplay(event){
    let value = event.target.value;
    const {output, operatorOutput} = this.state;
    
    if(value === 'AC'){
      this.setState({
        output: 0,
        operatorOutput: '',
        storeValue: [],
        history: '',
      })
    } else if(operatorOutput === ''){
      this.setState({
        output: output.length === 1 ? 0 : output.substring(0, output.length-1)
      })
    }
  }
  
  toggleSign(){
    const {output, operatorOutput} = this.state;
    if(operatorOutput === ''){
      this.setState({
        output: String(output * -1)
      })
    }
  }
  
  inputPercent(){
    const {output, operatorOutput, type, maxLength} = this.state;
    if(operatorOutput === ''){
      this.setState({
        output: String(DecimalAdjust(type, (output / 100), -maxLength)),
        operatorOutput: '',      
      })
    }
  }
  
  squareRoot(){
    const {output, operatorOutput, maxLength} = this.state;
    const sqrt = String(Math.sqrt(output));
    
    if(operatorOutput === ''){
      this.setState({
        output: sqrt.length > maxLength ? sqrt.substr(0, maxLength) : sqrt,
        operatorOutput: '',
      })
    }
  }
  
  enterDot(event){
    let dot = event.target.value;
    const {output, operatorOutput} = this.state;
    
    if(operatorOutput === ''){
      if(output.indexOf(dot) === -1){
        this.setState({
          output: output + dot,
        })
      }
    }
  }
  
  enterDigit(event){//if length > 15, can not input. how?
    let value = event.target.value;
    const {output, operatorOutput, storeValue, history, maxLength} = this.state;
    
    if(operatorOutput !== ''){
      this.setState(function(prevState){
        storeValue.push(operatorOutput);
        return {
          output: value,
          operatorOutput: '',
        }
      })
    } else if(String(output).length <= maxLength) {
      this.setState({
        output: output === 0 ? value : output + value,
      })
    } else {
      this.setState({
        output: output,
      })
    }
    this.setState({
      history: history + operatorOutput,
    })
  }
  
  operate(event){
    let operator = event.target.value;
    let {storeValue} = this.state;
    const {output, history, type, maxLength} = this.state;
    
    if(storeValue.length === 0){
      storeValue.push(Number(output));
    } else {
      const newVal = ComputeOp(storeValue, Number(output));
      this.setState({
        output: newVal.length > maxLength ?
        DecimalAdjust(type, newVal, -(newVal.length-maxLength)) :
        newVal,
        storeValue: [newVal],
      })
    }
    
    this.setState({
      operatorOutput: operator,
      history: history === '' || history.indexOf('=') > -1 ? output : history + output,
    })
  }
  
  render() {
    return(
      <div className='calculator'>
        <OutputScreen
          history={this.state.history}
          output={this.state.output}
          operatorOutput={this.state.operatorOutput}
        />
        <div className='calc-buttons'>
          <OtherButtons
            clearDisplay={this.clearDisplay}
            toggleSign={this.toggleSign}
            />
          <NumberButtons
            enterDigit={this.enterDigit}
            enterDot={this.enterDot}
            />
          <OperatorButtons
            inputPercent={this.inputPercent}
            squareRoot={this.squareRoot}
            operate={this.operate}
            />
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    )
  }
}

module.exports = App;