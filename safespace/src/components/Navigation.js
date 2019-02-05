import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';

// background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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
        a:visited {
            text-decoration: none;
            color: white;
        }
    }

`;





const Navigation = props => {

    const navSwap = () => (props.token === null 
        ? <Link to='/'>Log In</Link>
        : <h2 onClick={props.logout}>Log Out</h2>
    );

    return(
        <NavBar>
            <h1>safe space</h1>
            <div>
                <Link to='/'>Home</Link>
                {props.navSwap}              
                <NavLink to='/signup' activeClassName='inUse'>Sign Up</NavLink>
                {props.displayName}
            </div>
        </NavBar>
    )
}

export default Navigation;