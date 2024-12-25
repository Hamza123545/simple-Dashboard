import { PropertyProvider } from "@/context/property-context";
import AddPropertyForm from "./properties/add-property-form";
import React from "react";
import { FiltersCategory } from "./properties/filters-category";
import { FiltersStatus } from "./properties/filters-status";
import { SearchBar } from "./properties/search-bar";
import PropertyList from "./properties/property-list";
import { SortCategory } from "./properties/sort-category";
import { SortOrder } from "./properties/sort-order";

export default function PropertiesSection() {
  return (
    <PropertyProvider>
      <div className="flex xxs:flex-col sm:flex-row items-start justify-between space-x-2">
        <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
        <div className="flex flex-wrap justify-end items-center space-x-2 space-y-2">
          <SearchBar />
          <SortCategory />
          <SortOrder />
          <FiltersCategory />
          <FiltersStatus />
          <AddPropertyForm />
        </div>
      </div>
      <PropertyList />
    </PropertyProvider>
  );
}
