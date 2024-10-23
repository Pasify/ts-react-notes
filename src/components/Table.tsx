type TableType = {
  heading: string;
  value: string | number;
};

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableRow = ({ heading, value }: TableType) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
