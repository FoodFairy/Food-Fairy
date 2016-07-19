class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }

  inputChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return(
      <div className='home'>
        <Header />
        <input className="searchbox" type='text' value={this.state.value} onChange=this.inputChange.bind(this)/>
        <button className='submitButton'>Search</button>
      </div>
    )
  }
}

window.Home = Home;