import React, { Component } from 'react'
import {Container,Row, Col} from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <div>
               <div className="flex_box header">
                   <h1>
                        Toss a coin
                   </h1>
               </div>
               <div className="flex_box board">
                   <Container>
                       <Row>
                           <Col>
                                <div className="flex_box">
                                        <h5>
                                            Observe : <input type="text" value={this.props.obverse} readOnly="readonly"/>
                                        </h5>
                                </div>
                            </Col>
                            <Col>
                                <div className="flex_box">
                                        <h5>
                                             Reverse : <input type="text" value={this.props.reverse} readOnly="readonly"/>
                                        </h5>
                                </div>
                            </Col>
                       </Row>
                   </Container>
               </div>
            </div>
        )
    }
}

export default Header
