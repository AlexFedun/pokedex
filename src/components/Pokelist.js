import React, {Component} from 'react'
import { CardColumns, Col, ButtonGroup, Button,
   Spinner, Navbar, Nav, Form, FormControl,
   ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Pokemon from './Pokemon'
import TypeModal from './TypeModal'

class Pokelist extends Component {
    state = {
        offset: 0,
        limit: 10,
        error: null,
        isLoaded: false,
        items: [],
        search: "",
        typesModal: false,
        slectedTypes: null
    };

    componentDidMount() {
        this.fetchData()
      }

    fetchData = () => {
      let link = "https://pokeapi.co/api/v2/pokemon/?offset=&limit=1000";
      let st = 0;
      if (this.state.slectedTypes != null) {
        link = "https://pokeapi.co/api/v2/type/" + this.state.slectedTypes[0];
        st = 1;
      } 
      fetch(link)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: st === 0 ? result.results : result.pokemon
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
      let search = this.state.search === ""? items : items.filter(item =>
        this.state.slectedTypes == null ? item.name.includes(this.state.search):item.pokemon?.name.includes(this.state.search) );
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
                          <ToggleButton value={10}>10</ToggleButton>
                          <ToggleButton value={20}>20</ToggleButton>
                          <ToggleButton value={50}>50</ToggleButton>
                        </ToggleButtonGroup>
                        <ButtonGroup className="ml-3">
                        <Button variant="primary" disabled> Page: {this.state.offset / this.state.limit + 1} </Button>
                        {this.state.offset !== 0? <Button variant="primary" onClick={this.previousPage}>Previous page</Button>:""}
                        {this.state.offset + this.state.limit < managedItems.maxValue? <Button variant="primary" onClick={this.nestPage}>Next page</Button>:""}
                      </ButtonGroup>
                      </Nav>
                      <Form inline onSubmit={this.handleFormSubmit}>
                      <Button variant="primary mr-2" onClick={() => this.setState({typesModal: true})}> Types </Button>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" value={this.state.search} onChange={this.handleChange}/>
                      </Form>
                    </Navbar.Collapse>
                  </Navbar>

                  <TypeModal show={this.state.typesModal} onHide={() => this.setState({typesModal: false})}
                    setType={
                      (types) => this.setState({slectedTypes: types},
                        () => this.setState({typesModal: false},
                          this.fetchData)
                        )
                    }/>

                  <CardColumns className="mt-6">
                  {managedItems.map(item => (
                      <Pokemon url={this.state.slectedTypes == null ? item.url : item.pokemon?.url}
                        key={(this.state.slectedTypes == null ? item.name : item.pokemon?.name)}
                      />
                  ))}
                  </CardColumns>
                </Col>
            );
        }
    }
 }
export default Pokelist