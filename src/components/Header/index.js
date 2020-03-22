import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Profile, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Profile>
          <div>
            <strong>João Alves</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="submit">Sair</button>
        </Profile>
      </Content>
    </Container>
  );
}
