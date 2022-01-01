import styled from '@emotion/styled';

export const TransactionHistoryCss = styled.table`
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid white;

  th {
    padding: 10px;
    background-color: #009c9c;
    color: white;
  }

  td {
    width: 250px;
    text-align: center;
    padding: 15px;
    /* background-color: fuchsia; */
  }

  tr:nth-of-type(2n) {
    background-color: #a5a4a4;
  }
`;
