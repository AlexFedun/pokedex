import React, {Component} from 'react';
import { Modal, Row, Container, Col, Button, Form } from 'react-bootstrap';

class TypeModal extends Component {
    state = {
        selected: null
    }

    formChange = (event) => {
        let inputs = event.currentTarget.elements;
        let res = [];
        [...inputs].forEach(function(element) {
            if (element.checked) {
                res.push(element.id);
            }
        });
        this.setState({selected:res})
    }

    render() {
        return (
            <Modal {...{show:this.props.show, onHide:this.props.onHide}} aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Selected types
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Form onChange={this.formChange}>
                        <Row>
                            <Col>
                                <Form.Check type="radio" id="normal" label="Normal" name="type"/>
                                <Form.Check type="radio" id="fighting" label="Fighting" name="type"/>
                                <Form.Check type="radio" id="flying" label="Flying" name="type"/>
                                <Form.Check type="radio" id="poison" label="Poison" name="type"/>
                                <Form.Check type="radio" id="ground" label="Ground" name="type" />
                                <Form.Check type="radio" id="rock" label="Rock" name="type"/>
                                <Form.Check type="radio" id="bug" label="Bug" name="type"/>
                                <Form.Check type="radio" id="ghost" label="Ghost" name="type"/>
                                <Form.Check type="radio" id="steel" label="Steel" name="type"/>
                                <Form.Check type="radio" id="fire" label="Fire" name="type"/>
                            </Col>
                            <Col>
                                <Form.Check type="radio" id="water" label="Water" name="type" />
                                <Form.Check type="radio" id="grass" label="Grass" name="type"/>
                                <Form.Check type="radio" id="electric" label="Electric" name="type"/>
                                <Form.Check type="radio" id="psychic" label="Psychic" name="type"/>
                                <Form.Check type="radio" id="ice" label="Ice" name="type"/>
                                <Form.Check type="radio" id="dragon" label="Dragon" name="type"/>
                                <Form.Check type="radio" id="dark" label="Dark" name="type"/>
                                <Form.Check type="radio" id="fairy" label="Fairy" name="type"/>
                                <Form.Check type="radio" id="shadow" label="Shadow" name="type"/>
                                <Form.Check type="radio" id="unknown" label="Unknown" name="type"/>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.setType(this.state.selected)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TypeModal