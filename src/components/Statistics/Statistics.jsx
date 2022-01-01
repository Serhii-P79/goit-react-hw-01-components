import PropTypes from 'prop-types';
import {
  StatisticsItem,
  StatisticsITitle,
  StatisticsCss,
  StatisticsItemCss,
} from 'components';
import { getRandomHexColor } from 'function/function';

export function Statistics({ title = '', stats }) {
  // console.log(stats);
  return (
    <StatisticsCss>
      {title && <h2 className="title">{title}</h2>}

      {/* {title && <StatisticsITitle title={title} />} */}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItemCss color={getRandomHexColor()} key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatisticsItemCss>
          );

          // return (
          //   <StatisticsItem
          //     key={id}
          //     label={label}
          //     percentage={percentage}
          //   />
          // );
        })}
      </ul>
    </StatisticsCss>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
