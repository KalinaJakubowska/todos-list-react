import styled from "styled-components";

export const FormSheet = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`
export const Input = styled.input`
    height: 55px;
    border: 3px solid #eee;
    padding: 10px;
`
export const Button = styled.button`
    height: 55px;
    font-size: 20px;
    background-color: teal;
    color: white;
    border: none;
    padding: 15px;
    transition: background 0.3s, transform 0.3s;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);
    }
`