import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

export const MeetupHeader = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 41px;
  padding: 40px 0;

  strong {
    font-weight: normal;
    font-size: 32px;
  }

  a {
    background: #f94d6a;
    text-decoration: none;
    color: #fff;
    padding: 0 18px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }
`;

export const Meetups = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  padding: 20px 30px;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
