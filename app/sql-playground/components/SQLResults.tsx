import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SQLResultsProps {
  sqlQuery: string;
  queryResult: any[];
}

export default function SQLResults({ sqlQuery, queryResult }: SQLResultsProps) {
  return (
    <div className="bg-card p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Query:</h2>
      <SyntaxHighlighter language="sql" style={vscDarkPlus} className="text-sm md:text-base lg:text-lg">
        {sqlQuery}
      </SyntaxHighlighter>
      <h2 className="text-lg font-semibold my-4">Result:</h2>
      <pre className="bg-muted p-2 rounded overflow-x-auto text-sm md:text-base lg:text-lg">
        {JSON.stringify(queryResult, null, 2)}
      </pre>
    </div>
  )
}