import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col, Image, Table} from 'react-bootstrap';
import Types from './Types';
import StatsAndSpecies from './StatsAndSpecies';

class Pokeinfo extends Component {

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    render() {
        const { item } = this.props;
        return (
            <Modal {...this.props} size="lg"
            aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {this.capitalize(item.name) + " #" + item.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <Image src={item.sprites.front_default} thumbnail style={{imageRendering: "pixelated", width: "100%"}}/>
                    </Col>
                    <Col xs={12} md={7}>
                        <Table responsive>
                            <tbody>
                            <tr>
                                <td>Height</td>
                                <td>{item.height}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{item.weight}</td>
                            </tr>
                            <tr>
                                <td>Base experience</td>
                                <td>{item.base_experience}</td>
                            </tr>
                            <tr>
                                <td>Types</td>
                                <td>
                                {
                                    item.types.map( (item, index) => (
                                    <Types name={item.type.name} key={index}/>
                                    ))
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>Abilities</td>
                                <td>
                                {
                                    item.abilities.map( (item, index) => (
                                        <div key={index}>{this.capitalize(item.ability.name)}</div>
                                    ))
                                }
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>                    
                </Row>
                <StatsAndSpecies stats={item.stats} species={item.species.url} />
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        )
    }
}
export default Pokeinfo