import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface SearchResultsProps {
  results: any[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Search Result</TableHead>
          <TableHead>Associated Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result, index) => (
          <TableRow key={index}>
            <TableCell>{result[0]}</TableCell>
            <TableCell>{result[1]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}