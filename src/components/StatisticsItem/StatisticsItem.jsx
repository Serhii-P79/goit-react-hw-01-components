import PropTypes from 'prop-types';
import { StatisticsItemCss } from 'components';
import { getRandomHexColor } from 'function/function';

export function StatisticsItem({ label, percentage }) {
  return (
    <StatisticsItemCss color={getRandomHexColor()}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticsItemCss>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
