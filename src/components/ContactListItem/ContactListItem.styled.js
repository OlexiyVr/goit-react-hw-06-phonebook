import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background-color: #FFD233;
    color: #5218fa;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  margin-right: 24px;

  display: flex;
  align-items: center;
`;

export const ContactName = styled.span`
  flex-grow: 1;
  text-transform: capitalize;
  font-size: 22px;
  padding-left: 10px;
`;

export const ContactNumber = styled.span`
  margin-right: 25px;
  font-size: 22px;
  padding-left: 10px;
`;
