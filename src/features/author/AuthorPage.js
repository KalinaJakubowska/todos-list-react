import React from 'react';
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

const AuthorPage = () => {

  return (
    <Container>
      <Header title="O Autorze" />
      <Section
        title="Kalina Jakubowska"
        body="Hej! Jak zapewne się domyślasz, lubię miziać koty.
        Nie lubię za to pisać o sobie, także ten... miłego dnia!
        A jeżeli masz jakiegoś kota pod ręką - wiesz co robić 😁"
      />
    </Container>
  );
};
export default AuthorPage;