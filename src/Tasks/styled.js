import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin: 0;
`;
export const Item = styled.li`
    border-bottom: 3px solid #eee;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;
export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;
export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    transition: background 0.3s;
    color: white;
    font-size: 22px;
    padding: 0px;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
        &:active {
            background-color: hsl(120, 100%, 45%);
        }
    `}
    ${({ remove }) => remove && css`
        background-color: red;

        &:hover {
            background-color: hsl(0, 100%, 65%);
        }
        &:active {
            background-color: hsl(0, 100%, 75%);
        }
    `}
`