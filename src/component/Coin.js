import React, { Component } from 'react'
import reverse from '../image/reverse.png'
import obverse from '../image/obverse.png'
import '../css/style.css'

export class Coin extends Component {
    render() {
        console.log(this.props.num)
        return (
            <div className="flex_box_coin">
                <div className="image_box1">
                    <img className={this.props.num === 1 ? "obverse" : "obverse_none"} src={obverse} alt="1" />
                    <img className={this.props.num === 0 ? "obverse" : "obverse_none"} src={reverse} alt="1" />
                </div>
            </div>
        )
    }
}

export default Coin
