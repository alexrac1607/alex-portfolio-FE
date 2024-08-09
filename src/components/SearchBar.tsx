interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder: string;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  placeholder,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
    />
  );
}
