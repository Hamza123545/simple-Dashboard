"use client";

import { useProperties } from "@/context/property-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FiltersStatus() {
  const { state, dispatch } = useProperties();

  const handleFilterStatusChange = (value: string) => {
    dispatch({ type: "SET_FILTER_STATUS", payload: value });
  };

  return (
    <div className="flex flex-wrap justify-end items-center space-x-2 xxs:space-y-2 xs:space-y-0 ">
      <Select
        value={state.filterStatus}
        onValueChange={handleFilterStatusChange}
      >
        <SelectTrigger className="xs:w-[140px] md:w-[160px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="available">Available</SelectItem>
          <SelectItem value="rented">Rented</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
