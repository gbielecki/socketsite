import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import {Link} from 'react-router-dom';
    import { connect } from 'react-redux';

class NavBarClass extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false,
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          const {logged} =this.props;
          return (
            <div>
              <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Sockets ideas site</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  {logged ? 
                  <NavItem><Link to="/logout">Logout</Link></NavItem> 
                  : 
                  <NavItem>
                        <Link to="/register">Register</Link>
                    </NavItem> 
                  }
                    <NavItem>
                      <NavLink href="https://github.com/polarbits/socketsite">Github</NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown> */}
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }

      
const mapStateToProps = (state) => {
  return {logged: state.logged};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => dispatch({ type: 'LOGIN' }),
    onLogout: () => dispatch({ type: 'LOGOUT' })
  }
};

export default NavBarClass = connect( mapStateToProps, mapDispatchToProps)(NavBarClass)
