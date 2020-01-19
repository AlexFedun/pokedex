import React, {Component} from 'react'
import { Card } from 'react-bootstrap';
import Types from './Types';
import Pokeinfo from './Pokeinfo';

class Pokemon extends Component {
  state = {
      error: null,
      isLoaded: false,
      items: [],
      modalShow: false
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

    capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render() {
        const { error, isLoaded, items } = this.state;
        let modalClose = () => this.setState({ modalShow: false }, () => console.log(this.state));
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
              <div>
                <Card onClick={() => this.setState({modalShow: true})}>
                  <Card.Header>
                    <h5>
                      {this.capitalize(items.name)}
                      <small> #{items.id}</small>
                    </h5>
                  </Card.Header>
                  <Card.Img variant="top" src={items.sprites.front_default} style={{imageRendering: "pixelated"}}/>
                  <Card.Footer>
                      {
                        items.types.map( (item, index) => (
                          <Types name={item.type.name} key={index}/>
                        ))
                      }
                  </Card.Footer>
                </Card>
              <Pokeinfo show={this.state.modalShow} onHide={modalClose} item={items}/>
              </div>
            )
        }
    }
}

export default Pokemon