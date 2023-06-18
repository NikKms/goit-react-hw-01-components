import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 320px;

  color: ${props => props.theme.colors.secondaryColor};

  background-color: ${props => props.theme.colors.primaryBgc};

  border-collapse: collapse;
  border: ${props => props.theme.border};

  box-shadow: ${props => props.theme.boxShadow};
`;

export const TransactionTr = styled.tr`
  font-size: 12px;
  font-weight: bold;
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.secondaryBgc};
  }
`;

export const TransactionTh = styled.th`
  color: ${props => props.theme.colors.white};

  background-color: ${props => props.theme.colors.blue};
  padding: ${props => props.theme.spacing(2)};
  text-align: center;
  border: ${props => props.theme.border};
`;

export const TransactionTd = styled.td`
  padding: ${props => props.theme.spacing(2)};
  border: ${props => props.theme.border};

  text-align: center;
`;
