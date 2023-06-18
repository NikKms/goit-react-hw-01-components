import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(0.5)};

  list-style-type: none;
  padding: 0;
  margin: 0;
`;
