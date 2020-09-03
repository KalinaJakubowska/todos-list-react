import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
        margin-bottom: 20px;
    }
`;
export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.transparent};
    border: none;
    padding: 20px;
    color: ${({ theme }) => theme.color.main};
    transition: color 0.3s;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 15px;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:active {
        color: hsl(180, 100%, 45%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.shadow};
    }
`;