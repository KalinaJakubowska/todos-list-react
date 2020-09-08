import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin: 0;
`;
export const Item = styled.li`
    border-bottom: 3px solid ${({ theme }) => theme.color.background};
    display: grid;
    grid-template-columns: auto 1fr auto ;
    grid-gap: 10px;
    padding: 10px;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;
export const Content = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;
export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    transition: 0.3s;
    color: ${({ theme }) => theme.color.interactionButtonText};
    font-size: 22px;
    padding: 0px;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.check};
    `}
    ${({ edit }) => edit && css`
        background-color: ${({ theme }) => theme.color.edit};
    `}
    ${({ save }) => save && css`
        background-color: ${({ theme }) => theme.color.edit};
        font-size: unset;
        width: unset;
        padding: 0px 10px;
    `}
    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.remove};
    `}

    &:hover {
        filter: brightness(120%);
    }
    &:active {
        filter: brightness(140%);
    }
`
export const EditableContent = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
`
export const ContentInput = styled.input`
    width: 100%;
`
