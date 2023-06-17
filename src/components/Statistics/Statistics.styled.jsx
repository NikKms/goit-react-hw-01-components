import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.primaryBgc};

  padding: 20px;

  box-shadow: ${props => props.theme.boxShadow};

  border: ${props => props.theme.border};
  border-radius: 4px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.colors.primaryColor};

  margin-bottom: 10px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  gap: 2px;

  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  border: 1px solid grey;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const StatisticsLabel = styled.span`
  color: ${props => props.theme.colors.white};

  font-weight: bold;

  margin-right: 10px;
`;

export const StatisticsPercentage = styled.span`
  color: ${props => props.theme.colors.white};

  font-weight: bold;
`;
