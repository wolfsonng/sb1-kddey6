import { users, workOrders } from '@/data/seedData';

type Table = 'users' | 'workOrders';

export async function executeQuery(query: string): Promise<any> {
  // This is a very simple SQL parser. In a real application, you'd use a proper SQL parser.
  const lowerQuery = query.toLowerCase();
  let result: any[] = [];

  if (lowerQuery.includes('select')) {
    const table: Table = lowerQuery.includes('from users') ? 'users' : 'workOrders';
    result = table === 'users' ? users : workOrders;

    // Very basic WHERE clause handling
    if (lowerQuery.includes('where')) {
      const whereClause = lowerQuery.split('where')[1].trim();
      const [field, value] = whereClause.split('=').map(s => s.trim());
      result = result.filter(item => String(item[field]) === value.replace(/'/g, ''));
    }
  }

  return result;
}

export function getTableInfo(table: Table): { columns: string[], data: any[] } {
  const data = table === 'users' ? users : workOrders;
  const columns = Object.keys(data[0]);
  return { columns, data };
}