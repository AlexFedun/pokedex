import React, {Component} from 'react';
import { Row, Col, Table, ProgressBar } from 'react-bootstrap';
import Evolution from './Evolution';

class StatsAndSpecies extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };
    componentDidMount() {
        fetch(this.props.species)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        const {stats} = this.props;
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Row>
                    <Col xs={12} md={6}>
                        <Table responsive>
                            <tbody>
                                <caption>Stats</caption>
                                <tr>
                                    <td style={{width: "150px"}}>HP</td>
                                    <td>
                                        <ProgressBar animated now={stats[5].base_stat}
                                        variant="info" label={stats[5].base_stat} max="200"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Attack</td>
                                    <td >
                                        <ProgressBar animated now={stats[4].base_stat}
                                        variant="info" label={stats[4].base_stat} max="200"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Defense</td>
                                    <td >
                                        <ProgressBar animated now={stats[3].base_stat}
                                        variant="info" label={stats[3].base_stat} max="200"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Special Attack</td>
                                    <td >
                                        <ProgressBar animated now={stats[2].base_stat}
                                        variant="info" label={stats[2].base_stat} max="200"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Special Defense</td>
                                    <td >
                                        <ProgressBar animated now={stats[1].base_stat}
                                        variant="info" label={stats[1].base_stat} max="200"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>
                                        <ProgressBar animated now={stats[0].base_stat}
                                        variant="info" label={stats[0].base_stat} max="200"/>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={12} md={6}>
                        <Table responsive>
                            <tbody>
                                <caption>Species</caption>
                                <tr>
                                    <td>Base Happiness:</td>
                                    <td>{items.base_happiness}</td>
                                </tr>
                                <tr>
                                    <td>Capture rate:</td>
                                    <td>{items.capture_rate}</td>
                                </tr>
                                <tr>
                                    <td>Hatch counter:</td>
                                    <td>{items.hatch_counter}</td>
                                </tr>
                                <tr>
                                    <td>Growth rate:</td>
                                    <td>{items.growth_rate.name}</td>
                                </tr>
                                <tr>
                                    <td>Generation:</td>
                                    <td>{items.generation.name}</td>
                                </tr>
                                <tr>
                                    <td>Shape:</td>
                                    <td>{items.shape.name}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Evolution url={items.evolution_chain.url}/>
                </Row>
            );
        }
    }
}
export default StatsAndSpecies;