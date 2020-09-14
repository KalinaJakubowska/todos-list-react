import styled from "styled-components";

export default styled.input`
    width: 100%;
    height: 55px;
    border: 3px solid ${({ theme }) => theme.color.background};
    padding: 10px;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    border: 1px solid ${({ theme }) => theme.color.shadow};
`