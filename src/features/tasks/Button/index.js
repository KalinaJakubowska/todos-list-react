import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.transparent};
    border: none;
    padding: 20px;
    color: ${({ theme }) => theme.color.buttonBackground};
    transition: 0.3s;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 15px;
    }

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(140%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.shadow};
        cursor: unset;
        filter: none;
    }
`;