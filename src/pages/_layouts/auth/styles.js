import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 325px;
  text-align: center;

  img {
    margin-bottom: 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 315px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
    }
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #f94d6a;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }

  a {
    display: flex;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
  }
`;
