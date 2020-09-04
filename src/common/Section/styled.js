import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.sectionBackground};
    margin-bottom: 15px;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.shadow};
`;
export const Title = styled.h2`
    padding: 20px;
    margin: 0;
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;
export const Body = styled.div`
    padding: 20px;
    border-top: 3px solid ${({ theme }) => theme.color.background};
`;