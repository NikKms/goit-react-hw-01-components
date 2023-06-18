import styled from '@emotion/styled';

export const FriendItem = styled.li`
  width: 160px;
  padding: ${props => props.theme.spacing(2)};

  display: flex;
  gap: ${props => props.theme.spacing(2.5)};
  align-items: center;
  justify-content: ;

  background-color: ${props => props.theme.colors.primaryBgc};

  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryColor};
`;
