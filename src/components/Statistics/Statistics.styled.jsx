import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.primaryBgc};

  padding: ${props => props.theme.spacing(5)};

  box-shadow: ${props => props.theme.boxShadow};

  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.spacing()};
`;

export const StatisticsTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.colors.primaryColor};

  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(0.5)};

  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${props => props.theme.spacing(2)};

  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const StatisticsLabel = styled.span`
  color: ${props => props.theme.colors.white};

  font-weight: bold;

  margin-right: ${props => props.theme.spacing(2)};
`;

export const StatisticsPercentage = styled.span`
  color: ${props => props.theme.colors.white};

  font-weight: bold;
`;
