"use client";

import { Input } from "@/components/ui/input";
import { useProperties } from "@/context/property-context";
import { Search } from "lucide-react";

export function SearchBar() {
  const { state, dispatch } = useProperties();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <div className="relative xxs:w-[120px] xs:w-[140px] md:w-auto mt-2">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search properties..."
        value={state.searchQuery}
        onChange={handleSearch}
        className="pl-8"
      />
    </div>
  );
}
