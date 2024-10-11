import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SearchFormProps {
  searchParams: {
    database: string;
    keyword: string;
    wildcard: string;
    searchType: string;
  };
  setSearchParams: React.Dispatch<React.SetStateAction<{
    database: string;
    keyword: string;
    wildcard: string;
    searchType: string;
  }>>;
  handleSearch: (e: React.FormEvent) => Promise<void>;
}

export default function SearchForm({ searchParams, setSearchParams, handleSearch }: SearchFormProps) {
  return (
    <form onSubmit={handleSearch} className="space-y-4 mb-6">
      <div className="flex space-x-4">
        <Select
          value={searchParams.database}
          onValueChange={(value) => setSearchParams({...searchParams, database: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Database" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="oracle/MAdbtrain">Oracle DB1</SelectItem>
            <SelectItem value="oracle/AAIdbtrain">Oracle DB2</SelectItem>
            <SelectItem value="postgres/db1">PostgreSQL DB1</SelectItem>
            <SelectItem value="postgres/db2">PostgreSQL DB2</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Enter keyword"
          value={searchParams.keyword}
          onChange={(e) => setSearchParams({...searchParams, keyword: e.target.value})}
          required
        />
        <Select
          value={searchParams.wildcard}
          onValueChange={(value) => setSearchParams({...searchParams, wildcard: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Wildcard" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="%keyword%">%keyword%</SelectItem>
            <SelectItem value="%keyword">%keyword</SelectItem>
            <SelectItem value="keyword%">keyword%</SelectItem>
            <SelectItem value="keyword">Exact Match</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={searchParams.searchType}
          onValueChange={(value) => setSearchParams({...searchParams, searchType: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Search Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="column">Search by Column</SelectItem>
            <SelectItem value="table">Search by Table</SelectItem>
            <SelectItem value="wildcard_table">Wildcard Table Search</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Search</Button>
    </form>
  )
}