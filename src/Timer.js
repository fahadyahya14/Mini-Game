import React from 'react';
import Button from './App'
import HigScore from './higscore'
import Sroce from './sroce'
import Level from './level1'



class App extends React.Component {
constructor(){
super()
this.state= {
 TimeLeft:60,   
timecomp:false,
sroce:0,
towiner:45,
level:1,
start:false
}

}
componentDidMount(){
    this.timer = setInterval(()=>{
    this.state.timecomp?this.complete():this.TimeLeft();
    },1000)
  }
  componentWillUnmount() {
      clearInterval(this.timer);
  }

TimeLeft = () =>{
    if(this.state.TimeLeft === 1){
this.complete()    
    }
    this.setState({TimeLeft : this.state.TimeLeft - 1 })
}

complete = () =>{
    this.setState({timecomp : !this.state.timecomp})
    clearInterval(this.timer);
}
handleOpen = () => {
    this.setState({ sroce:this.state.sroce + 1 })
    this.levelcomp()
    ;
  };

levelcomp=()=>{
    if(this.state.sroce===this.state.towiner){
       alert("You win")
        alert("Level"+this.state.level + 1+" start") 
    this.setState({ towiner:this.state.towiner + 10 , level : this.state.level + 1 , TimeLeft : 60 - ( 5 * this.state.level)   , sroce : 0 })

    }
}



change=()=>{
window.location.reload(false)
}


    render(){
        
    return(
        
        <div>

            <p className='timer' ><b className='word'>Level : </b> {this.state.level}</p>
  <span className="timer" >
  <div>
  00:00:
{this.state.TimeLeft}

  </div>
  </span>

<span>
<Sroce value={this.state.sroce} />
<HigScore value={this.state.towiner} />
</span>


<div>
{this.state.timecomp?<Level {...this.state} onClick={this.change} />:<Button onClick={this.handleOpen} />}
</div>
   
    </div>)
}
}  
export default App    