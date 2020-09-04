import styled from "styled-components";

export const FormSheet = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`
export const Input = styled.input`
    height: 55px;
    border: 3px solid ${({ theme }) => theme.color.background};
    padding: 10px;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
`
export const Button = styled.button`
    height: 55px;
    font-size: 20px;
    background-color: ${({ theme }) => theme.color.buttonBackground};
    color: ${({ theme }) => theme.color.sectionBackground};
    border: none;
    padding: 15px;
    transition: background 0.3s, transform 0.3s;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }
`