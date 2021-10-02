import React, { Component } from 'react'
import {Container,Row, Col, Button} from 'react-bootstrap'

export class Buttons extends Component {
    render() {
        return (
            <div className="button_component">
                <Container>
                    <Row>
                        <Col>
                            <div className="flex_box">
                                <Button className="button" variant="success" onClick={this.props.handleToss}>Toss</Button>
                            </div>
                        </Col>
                        <Col>
                            <div className="flex_box">
                                <Button className="button" variant="danger" onClick={this.props.handleClear}>Clear</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Buttons
