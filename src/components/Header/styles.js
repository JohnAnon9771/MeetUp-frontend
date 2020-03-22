import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 20px;
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  text-align: right;

  div {
    text-align: right;
    margin-right: 20px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      text-decoration: none;
      color: #999;
    }
  }

  button {
    color: #fff;
    padding: 0 20px;
    background: #d44059;
    border-radius: 4px;
    line-height: 20px;
    border: 0;

    &:hover {
      cursor: pointer;
      background: ${darken(0.03, '#d44059')};
    }
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
