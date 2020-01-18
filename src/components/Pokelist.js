import React, {Component} from 'react'
import { CardColumns, Col, ButtonToolbar, Button, Spinner } from 'react-bootstrap';
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
        this.fetchData()
      }

      fetchData = () => {
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
    
      previousPage = () => {
        this.setState({ offset: this.state.offset - this.state.limit }, this.fetchData);
      }

      nestPage = () => {
        this.setState({ offset: this.state.offset + this.state.limit }, this.fetchData);  
      }

      pageLimit = (limit) => {
        this.setState(
          {
            offset: 0,
            limit: limit
          },
            this.fetchData
          );  
      }
    
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            );
        } else {
            return (
                <Col>
                  Items per page 
                  <ButtonToolbar>
                    <Button variant="primary" onClick={(e) => this.pageLimit(10, e)}>10</Button>
                    <Button variant="primary" onClick={(e) => this.pageLimit(20, e)}>20</Button>
                    <Button variant="primary" onClick={(e) => this.pageLimit(50, e)}>50</Button>
                  </ButtonToolbar>
                  Page: {this.state.offset / this.state.limit + 1} 
                  <ButtonToolbar>
                    {items.previous != null? <Button variant="primary" onClick={this.previousPage}>Previous page</Button>:""}
                    {items.next != null? <Button variant="primary" onClick={this.nestPage}>Next page</Button>:""}
                  </ButtonToolbar>
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