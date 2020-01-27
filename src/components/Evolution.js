import React, {Component} from 'react';
import { Col, Image, Table } from 'react-bootstrap';

class Evolution extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };
    componentDidMount() {
        fetch(this.props.url)
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let evolutionId = [], evo = items.chain;
            while (evo) {
                evolutionId.push(evo.species.url.slice(42));
                evo = evo.evolves_to[0];
            }
            let link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
            return (
                <Col>
                    <Table responsive>
                        <caption style={{captionSide:"top"}}>Pokemon evolution</caption>
                        <tbody>
                            <tr>
                            {evolutionId.map( item => 
                                (<td><Image src={link + item.substring(0, item.length - 1) + ".png"} thumbnail
                                    style={{imageRendering: "pixelated", width: "100%"}}/></td>)
                            )}
                            </tr>
                        </tbody>
                    </Table>         
                </Col>
            );
        }
    }
}
export default Evolution;