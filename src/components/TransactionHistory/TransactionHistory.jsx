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
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
          // return <TransactionItem key={element.id} item={element} />;
        })}
      </tbody>
    </TransactionHistoryCss>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
