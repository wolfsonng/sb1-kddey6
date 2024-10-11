interface TableInfoProps {
  tableInfo: {
    table: string;
    columns: string[];
  };
}

export default function TableInfo({ tableInfo }: TableInfoProps) {
  return (
    <div className="bg-card p-4 rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Table: {tableInfo.table}</h2>
      <p className="mb-2">Columns: {tableInfo.columns.join(', ')}</p>
    </div>
  )
}