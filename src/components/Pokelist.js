import React, {Component} from 'react'
import { CardColumns, Col, ButtonGroup, Button,
   Spinner, Navbar, Nav, Form, FormControl,
   ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Pokemon from './Pokemon'

class Pokelist extends Component {
    state = {
        offset: 0,
        limit: 10,
        error: null,
        isLoaded: false,
        items: [],
        search: ""
    };

    componentDidMount() {
        this.fetchData()
      }

    fetchData = () => {
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=&limit=1000")
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
      this.setState({ offset: this.state.offset - this.state.limit });
    }

    nestPage = () => {
      this.setState({ offset: this.state.offset + this.state.limit });  
    }

    pageLimit = (limit) => {
      this.setState(
        {
          offset: 0,
          limit: limit
        });  
    }
    manageItems = (items) => {
      let search = this.state.search === ""? items.results : items.results.filter(item => item.name.includes(this.state.search));
      let newItems = search.slice(this.state.offset,this.state.offset + this.state.limit);
      newItems.maxValue = search.length;
      return newItems;
    }
    handleChange = (event) => {
      const input = event.target;
      this.setState({ [input.name]: input.value });
    };
    handleFormSubmit = (event) => {
      event.preventDefault();
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
          let managedItems = this.manageItems(items);
          const handleChange = val => this.pageLimit(val);
            return (
                <Col>
                  <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                    <Navbar.Brand href="#">Pokedex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <ToggleButtonGroup type="radio" onChange={handleChange} name="option" defaultValue={10}>
                          <ToggleButton value={10}>Option 1</ToggleButton>
                          <ToggleButton value={20}>Option 2</ToggleButton>
                          <ToggleButton value={50}>Option 3</ToggleButton>
                        </ToggleButtonGroup>
                        <ButtonGroup className="ml-3">
                        <Button variant="primary" disabled> Page: {this.state.offset / this.state.limit + 1} </Button>
                        {this.state.offset !== 0? <Button variant="primary" onClick={this.previousPage}>Previous page</Button>:""}
                        {this.state.offset + this.state.limit < managedItems.maxValue? <Button variant="primary" onClick={this.nestPage}>Next page</Button>:""}
                      </ButtonGroup>
                      </Nav>
                      <Form inline onSubmit={this.handleFormSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" value={this.state.search} onChange={this.handleChange}/>
                      </Form>
                    </Navbar.Collapse>
                  </Navbar>
                  <CardColumns className="mt-6">
                  {managedItems.map(item => (
                      <Pokemon url={item.url} key={item.name}/>
                  ))}
                  </CardColumns>
                </Col>
            );
        }
    }
 }
export default Pokelist