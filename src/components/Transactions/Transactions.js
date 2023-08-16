import {Table, Row, THead} from "./Transaction.styled"
export const TransactionHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
      <THead>
        <Row>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Row>
      </THead>
      {items.map(item => (
        <Row>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </Row>
      ))}
    </Table>
  );
};
