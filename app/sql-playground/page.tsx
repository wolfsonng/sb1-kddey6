"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { executeQuery, getTableInfo } from '@/lib/db'
import SQLResults from './components/SQLResults'
import TableInfo from './components/TableInfo'

export default function SQLPlayground() {
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM users')
  const [queryResult, setQueryResult] = useState<any[]>([])
  const [tableInfo, setTableInfo] = useState<{ table: string, columns: string[] } | null>(null)

  const handleExecuteQuery = async () => {
    try {
      const result = await executeQuery(sqlQuery)
      setQueryResult(result)

      // Extract table name from query (this is a simplification)
      const tableName = sqlQuery.toLowerCase().includes('from users') ? 'users' : 'workOrders'
      const { columns } = getTableInfo(tableName as 'users' | 'workOrders')
      setTableInfo({ table: tableName, columns })
    } catch (error) {
      console.error('Error executing query:', error)
      setQueryResult([])
      setTableInfo(null)
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SQL Playground</h1>
      <div className="mb-4">
        <Textarea
          value={sqlQuery}
          onChange={(e) => setSqlQuery(e.target.value)}
          placeholder="Enter your SQL query here"
          className="min-h-[100px]"
        />
      </div>
      <Button onClick={handleExecuteQuery} className="mb-4">Execute Query</Button>
      {tableInfo && <TableInfo tableInfo={tableInfo} />}
      <SQLResults sqlQuery={sqlQuery} queryResult={queryResult} />
    </div>
  )
}