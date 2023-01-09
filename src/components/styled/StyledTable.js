import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  img {
    width: 32px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #7b67fe;
  }

  .username {
    display: flex;
    justify-content: left;
    gap: 8px;
    align-items: center;
  }

  thead > tr {
    background-color: ${(props) => props.backgroundColor};
    color: var(--accent-color);
    text-align: left;
  }

  th {
    padding: 12px 15px;
  }

  td {
    padding: 12px 15px;
  }

  tbody > tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #bab0ff;
  }
`;

export default StyledTable;
