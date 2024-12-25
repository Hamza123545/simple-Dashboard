"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import { Property, PropertyAction } from "@/lib/types";
import {
  PropertyState,
  initialState,
  propertyReducer,
} from "./property-reducer";

type PropertyContextType = {
  state: PropertyState;
  dispatch: React.Dispatch<PropertyAction>;
  filteredProperties: Property[];
  totalPages: number;
};

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(propertyReducer, initialState);

  const filteredAndSortedProperties = state.properties
    .filter((property) => {
      const matchesType =
        state.filterType === "all" ||
        property.type.toLowerCase() === state.filterType;
      const matchesStatus =
        state.filterStatus === "all" ||
        property.status.toLowerCase() === state.filterStatus;
      const matchesSearch =
        property.address
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        property.status.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchesType && matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      const aValue = a[state.sortField];
      const bValue = b[state.sortField];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return state.sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return state.sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

  const totalPages = Math.ceil(
    filteredAndSortedProperties.length / state.itemsPerPage
  );

  const paginatedProperties = filteredAndSortedProperties.slice(
    (state.currentPage - 1) * state.itemsPerPage,
    state.currentPage * state.itemsPerPage
  );

  useEffect(() => {
    const loadProperties = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const stored = localStorage.getItem("properties");
        if (stored) {
          dispatch({ type: "SET_PROPERTIES", payload: JSON.parse(stored) });
        }
      } catch (err) {
        console.log(err);
        dispatch({ type: "SET_ERROR", payload: "Failed to load properties" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    loadProperties();
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        state,
        dispatch,
        filteredProperties: paginatedProperties,
        totalPages,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error("useProperties must be used within a PropertyProvider");
  }
  return context;
}
