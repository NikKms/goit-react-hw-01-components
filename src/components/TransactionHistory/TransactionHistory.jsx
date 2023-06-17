import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionTr,
  TransactionTh,
  TransactionTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <section>
      {' '}
      <TransactionTable>
        <thead>
          <tr>
            <TransactionTh>Type</TransactionTh>
            <TransactionTh>Amount</TransactionTh>
            <TransactionTh>Currency</TransactionTh>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TransactionTr key={id}>
                <TransactionTd>{type}</TransactionTd>
                <TransactionTd>{amount}</TransactionTd>
                <TransactionTd>{currency}</TransactionTd>
              </TransactionTr>
            );
          })}
        </tbody>
      </TransactionTable>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
