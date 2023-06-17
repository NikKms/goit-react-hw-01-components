import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 240px;
  padding: ${props => props.theme.spacing(4)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
  text-align: center;

  background-color: ${props => props.theme.colors.primaryBgc};

  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Discription = styled.div``;

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.primaryColor};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const UserTag = styled.p`
  font-size: 14px;
  font-weight: bold;

  color: ${props => props.theme.colors.secondaryColor};
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const UserLocation = styled.p`
  font-size: 14px;
  font-weight: bold;

  color: ${props => props.theme.colors.secondaryColor};
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const UserStatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: ${props => props.theme.spacing(0.5)};
`;

export const UserStatsItem = styled.li`
  height: 46px;
  width: 70px;

  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing()};

  background-color: ${props => props.theme.colors.secondaryBgc};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.secondaryColor};

  font-size: 14px;
  font-weight: bold;
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.primaryColor};

  font-size: 14px;
  font-weight: bold;
`;
