import React, {Component} from 'react'
import { Card, ListGroup} from 'react-bootstrap';
import Types from './Types';
class Pokemon extends Component {
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
            return (
                <Card>
                    <Card.Img variant="top" src={items.sprites.front_default} style={{imageRendering: "pixelated"}}/>
                    <Card.Header>{items.name}</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Base experience: { items.base_experience }</ListGroup.Item>
                      <ListGroup.Item>Height: { items.height }</ListGroup.Item>
                      <ListGroup.Item>Weight: { items.weight }</ListGroup.Item>
                      <ListGroup.Item>Id: { items.id }</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                        {
                          items.types.map( (item, index) => (
                            <Types name={item.type.name} key={index} />
                          ))
                        }
                    </Card.Footer>
                </Card>
            )
        }
    }
}

export default Pokemon