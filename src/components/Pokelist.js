import React, {Component} from 'react'
import { CardColumns, Col } from 'react-bootstrap';
import Pokemon from './Pokemon'

class Pokelist extends Component {
    state = {
        offset: 0,
        limit: 10,
        error: null,
        isLoaded: false,
        items: []
    };

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=" + this.state.offset + "&limit=" + this.state.limit)
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
            return (
                <Col>
                  <CardColumns>
                  {items.results.map(item => (
                      <Pokemon url={item.url} key={item.name}/>
                  ))}
                  </CardColumns>
                </Col>
            );
        }
    }
 }
export default Pokelist