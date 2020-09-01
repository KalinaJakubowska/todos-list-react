import React from "react";
import { Wrapper, Title, Container, Body } from "./styled.js";

const Section = ({ title, extraHeaderContent, body }) => (
    <Wrapper>
        <Container>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </Container>
        <Body>
            {body}
        </Body>
    </Wrapper>
)
export default Section;