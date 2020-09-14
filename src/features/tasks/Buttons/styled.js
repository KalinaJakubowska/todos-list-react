import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
        margin-bottom: 20px;
    }
`;