import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Meetups, MeetupHeader } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <MeetupHeader>
        <strong>Meus meetups</strong>
        <Link to="/">Novo meetup</Link>
      </MeetupHeader>
      <Meetups>
        <Link to="/">Meetup de React Native</Link>
        <p>24 de junho, ás 20h</p>
      </Meetups>
    </Container>
  );
}
