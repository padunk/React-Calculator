var React = require('react');

function PickCountry(props){
  return(
    <div className='country'>
      <h3 className='radio-title'>Choose your Country</h3>
      <form className='country-form'>
        <label className="radio-inline"><input type="radio" name="country" value="en-US" onClick={props.onClick} defaultChecked/>USA</label>
        <label className="radio-inline"><input type="radio" name="country" value="de-DE" onClick={props.onClick}/>German</label>
        <label className="radio-inline"><input type="radio" name="country" value="ar-EG" onClick={props.onClick}/>Arabic</label>
        <label className="radio-inline"><input type="radio" name="country" value="en-IN" onClick={props.onClick}/>India</label>
        <label className="radio-inline"><input type="radio" name="country" value="zh-Hans-CN-u-nu-hanidec" onClick={props.onClick}/>China</label>
      </form>
    </div>
  )
}

class OutputScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pickedCountry: 'en-US',
    }
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick(event){
    const newCountry = event.target.value;
    this.setState({
      pickedCountry: newCountry,
    })
  }
  
  render() {
    const output = this.props.output;
    const language = this.state.pickedCountry;
    let uniqValue = parseFloat(output).toLocaleString(language,{
      maximumFractionDigits: 14});
    return(
      <div className='screen'>
        <PickCountry onClick={this.handleClick} />
        <hr />
        <div className='output-screen'>
          <div className='history'>
            <p>{this.props.history}</p>
            <p>{this.props.operatorOutput}</p>
          </div>
          <h3 style={language === 'zh-Hans-CN-u-nu-hanidec'? {fontSize: 25} : null}>{uniqValue}</h3>
        </div>
      </div>
    )
  }
}

module.exports= OutputScreen;