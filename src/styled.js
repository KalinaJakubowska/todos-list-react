import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
        font-size: 20px;
        text-decoration: none;
        background-color: ${({ theme }) => theme.color.buttonBackground};
        color: ${({ theme }) => theme.color.sectionBackground};
        padding: 10px;

        &.${activeClassName} {
            filter: brightness(90%);
        }
    `
export const Nav = styled.ul`
    background-color: ${({ theme }) => theme.color.buttonBackground};
    width: 1100px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
`
export const NavItem = styled.li`
    list-style: none;
    padding: 20px;
`
