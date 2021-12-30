import PropTypes from 'prop-types';
import { StatisticsItemCss } from 'components';

export function StatisticsItem({ label, percentage, color }) {
  return (
    <StatisticsItemCss color={color}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticsItemCss>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
