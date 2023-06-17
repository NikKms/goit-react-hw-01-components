import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsPercentage,
  StatisticsLabel,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem
              key={id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercentage>{percentage}</StatisticsPercentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
