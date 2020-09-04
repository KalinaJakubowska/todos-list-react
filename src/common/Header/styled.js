import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mini}px ) {
        flex-direction: column;
        margin-bottom: 20px;
    }
`

export const Button = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.second};
    color: ${({ theme }) => theme.color.text};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.shadow};
    font-size: 1em;
    display: block;
    padding: 10px;
    cursor: pointer;
`