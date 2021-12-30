import PropTypes from 'prop-types';
import { TransactionItem, TransactionHistoryCss } from 'components';

export function TransactionHistory({ items }) {
  return (
    <TransactionHistoryCss>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(element => {
          return <TransactionItem key={element.id} item={element} />;
        })}
      </tbody>
    </TransactionHistoryCss>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
