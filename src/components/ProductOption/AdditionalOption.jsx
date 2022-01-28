import { Input } from 'components';
import React from 'react';
import styled from 'styled-components';
export const AdditionalOption = () => {
  return (
    <AddOptBox>
      <li>
        <Input placeholder={'추가 옵션명 (필수)'} fontS />
      </li>
      <li>
        <Input placeholder={'추가 옵션 정상가 (필수)'} fontS />
        <span>원</span>
      </li>
      <button>삭제</button>
    </AddOptBox>
  );
};

const AddOptBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  li {
    display: flex;
    align-items: center;
  }
  li:first-child {
    width: 35%;
    margin-right: 1rem;
  }
  li:nth-child(2) {
    width: 35%;
  }
  span {
    margin-left: 0.5rem;
  }
`;
