import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  background: #d9d4d4;
`;
