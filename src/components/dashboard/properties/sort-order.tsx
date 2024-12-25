"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProperties } from "@/context/property-context";
import { SortOrderType } from "@/lib/types";

export function SortOrder() {
  const { state, dispatch } = useProperties();

  const handleSortOrderChange = (value: SortOrderType) => {
    dispatch({ type: "SET_SORT_ORDER", payload: value });
  };

  return (
    <div className="flex flex-wrap justify-end space-x-2 xxs:space-y-2 xs:space-y-0">
      <Select value={state.sortOrder} onValueChange={handleSortOrderChange}>
        <SelectTrigger className="xs:w-[140px] md:w-[160px]">
          <SelectValue placeholder="Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
