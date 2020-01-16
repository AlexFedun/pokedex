import React, {Component} from 'react'
import { Card} from 'react-bootstrap';
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
                    <Card.Body>
                        <Card.Title> {items.name}</Card.Title>
                        <Card.Text>
                            Base experience: { items.base_experience } <br/>
                            Height: { items.height } <br/>
                            Weight: { items.weight } <br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            )
        }
    }
}

export default Pokemon