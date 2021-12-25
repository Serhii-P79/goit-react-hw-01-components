import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsITitle } from 'components';

export function Statistics({ title = 'Upload stats', stats }) {
  // console.log(stats);
  return (
    <section className="statistics">
      <StatisticsITitle title={title} />

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
