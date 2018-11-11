import React from 'react'
// import firebase from 'firebase'

import "./firebaseinit"






class Sroce extends React.Component{
    constructor(props){
        super(props)
        this.state= {
        winner:this.props.value

    }}
     


    render(){
        return(
            <div className='time' ><p className='word'>TO win</p>
{this.props.value}

            </div>
        )
    }
}

export default Sroce;