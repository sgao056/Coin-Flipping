import React, { Component } from 'react'
import reverse from '../image/reverse.png'
import obverse from '../image/obverse.png'
import {Container,Row, Col} from 'react-bootstrap'

export class Instruction extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <div className="flex_box">
                            <div className="image_box2">
                                <img className="obverse" src={obverse} alt="1" />
                            </div>
                        </div>
                        <div className="flex_box">
                            <h5>Obverse</h5>
                        </div>
                        </Col>
                        <Col>
                        <div className="flex_box">
                            <div className="image_box2">
                                <img className="obverse" src={reverse} alt="1" />
                            </div>
                        </div>
                        <div className="flex_box">
                            <h5>Reverse</h5>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Instruction
