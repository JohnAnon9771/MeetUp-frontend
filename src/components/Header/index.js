import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import { Container, Profile, Content } from './styles';

export default function Header() {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Profile>
          <div>
            <strong>{user.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="submit" onClick={() => dispatch(signOut())}>
            Sair
          </button>
        </Profile>
      </Content>
    </Container>
  );
}
