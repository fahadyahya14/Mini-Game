import React from 'react'
import Button from './retry'
class Sroce extends React.Component{
    constructor(props){
        super(props)
        this.state= {
        user:this.props.sroce,
        sroce:this.props.towiner
        }
    }

    componentDidMount(){
        this.winner()
            }   


                winner=()=>{
                    if(this.state.sroce < this.state.user){
            this.setState({ Winorloss : "You Win" })
        }
           else if(this.state.sroce > this.state.user){
                this.setState({ Winorloss : "You Loss" })
        }
    

    }


    render(){
        return(
      
<div className='main'>
{this.props.timecomp?this.state.Winorloss:"null"}
<br />
<Button onClick={this.props.onClick} />

</div>



)
    }
}

export default Sroce;