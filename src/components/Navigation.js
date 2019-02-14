import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

// background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    h1 {
        font-size: 4rem;
        line-height: 5rem;
        background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 10%;
    }
    div {
        border-bottom: 1px solid white;
        background-color: #666;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        color: white;
        a {text-decoration: none;};
        a:visited {
            
            color: white;
        }
        a:hover, h2:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

`;





const Navigation = props => {

    const navSwap = props.loggedIn === false 
        ? <Link to='/'>log in</Link>
        : <><Link to='/'>home</Link> <h2 onClick={props.logout}>log out</h2></>

    const signSwap = props.loggedIn === false
        && <NavLink to='/signup' activeClassName='inUse'>sign up</NavLink>
    
    return(
        <NavBar>
            <h1>safe space</h1>
            <div>
                {navSwap}              
                {signSwap}
            </div>
        </NavBar>
    )
}

export default Navigation;