import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        background-color: ${({ theme }) => theme.color.buttonBackground};
        color: ${({ theme }) => theme.color.sectionBackground};
        padding: 10px;

        &.${activeClassName} {
            filter: brightness(90%);
        }
    `
export const Navigation = styled.ul`
    background-color: ${({ theme }) => theme.color.buttonBackground};
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mini}px) {
        flex-direction: column;
        align-items: center
    }
`
export const NavItem = styled.li`
    list-style: none;
    padding: 20px;
`
