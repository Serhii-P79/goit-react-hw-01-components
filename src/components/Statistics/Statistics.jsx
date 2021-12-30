import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsITitle, StatisticsCss } from 'components';
import { getRandomHexColor } from 'function/function';

export function Statistics({ title = 'Upload stats', stats }) {
  // console.log(stats);
  return (
    <StatisticsCss>
      <StatisticsITitle title={title} />

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem
              key={id}
              label={label}
              percentage={percentage}
              color={getRandomHexColor()}
            />
          );
        })}
      </ul>
    </StatisticsCss>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
