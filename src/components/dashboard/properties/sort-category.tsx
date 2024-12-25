"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProperties } from "@/context/property-context";
import { SortFieldType } from "@/lib/types";

export function SortCategory() {
  const { state, dispatch } = useProperties();

  const handleSortFieldChange = (value: SortFieldType) => {
    dispatch({ type: "SET_SORT_FIELD", payload: value });
  };

  return (
    <div className="flex flex-wrap justify-end space-x-2 xxs:space-y-2 xs:space-y-0">
      <Select value={state.sortField} onValueChange={handleSortFieldChange}>
        <SelectTrigger className="xs:w-[140px] md:w-[160px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="address">Address</SelectItem>
          <SelectItem value="checkInDate">Check-in Date</SelectItem>
          <SelectItem value="type">Type</SelectItem>
          <SelectItem value="status">Status</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
