import { Link } from "react-router-dom";
import { StyledNavbar, StyledNav } from "./Navbar.styled";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <StyledNav>
        <h1>Movie App</h1>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movie/create">Add Movie</StyledLink>
          </li>
          <li>
            <StyledLink to="/movie/popular">Popular</StyledLink>
          </li>
          <li>
            <StyledLink to="/movie/now">Now Playing</StyledLink>
          </li>
          <li>
            <StyledLink to="/movie/top">Top Rated</StyledLink>
          </li>
        </ul>
      </StyledNav>
    </StyledNavbar>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default Navbar;
