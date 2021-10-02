import React, { Component } from 'react'
import Buttons from './Buttons'
import Coin from './Coin'
import Header from './Header'
import Instruction from './Instruction'
export class App extends Component {
    state = {
        obverse : 0,
        reverse : 0,
        num : 1
    }

    handleToss = async ()=>{
        if(window.confirm("toss?")){
            await this.setState({
                num : Math.round(Math.random())
            })
    
            if( this.state.num === 1 ){
                this.setState({
                    obverse : this.state.obverse + 1
                })
            }
            else{
                this.setState({
                    reverse : this.state.reverse + 1
                })
            }
            window.alert(`It is ${this.state.num === 1 ? "obverse" : "reverse"}`)
        }
    }
    handleClear = ()=>{
        if(window.confirm("clear all?")){
            this.setState({
                reverse:0,
                obverse:0,
                num : 1
            })
        }
    }
    render() {
        return (
            <div className="app_box">
                <Header obverse={this.state.obverse} reverse={this.state.reverse}/>
                <Coin num={this.state.num}/>
                <Buttons handleToss={()=>this.handleToss()} handleClear={this.handleClear}/>
                <Instruction />
            </div>
        )
    }
}

export default App