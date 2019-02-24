import React, { Component, Fragment } from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

import {Route, Switch, NavLink as RouterNavLink} from "react-router-dom";

import AddPost from "./containers/AddPost/AddPost";
import ReadMore from "./components/ReadMore/ReadMore";
import Edit from "./components/Edit/Edit";

import PostList from "./containers/PostList/PostList";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar color="info" light expand="md">
                    <NavbarBrand>My Blog</NavbarBrand>
                    <NavbarToggler />
                    <Collapse isOpen navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/" exact>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/add">Add</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container>
                    <Switch>
                        <Route path="/" exact component={PostList}/>
                        <Route path="/Add" exact component={AddPost}/>
                        <Route path='/posts/:id/edit' component={Edit}/>
                        <Route path='/posts/:id' component={ReadMore}/>
                        <Route render={() => <h1>Not found</h1>}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

export default App;