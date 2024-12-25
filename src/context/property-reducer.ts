import {
  Property,
  PropertyAction,
  SortFieldType,
  SortOrderType,
} from "@/lib/types";
import properties from "@/lib/properties.json";

export interface PropertyState {
  properties: Property[];
  filterType: string;
  filterStatus: string;
  sortField: SortFieldType;
  sortOrder: SortOrderType;
  searchQuery: string;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
  itemsPerPage: number;
}

export const initialState: PropertyState = {
  properties: properties as Property[],
  filterType: "all",
  filterStatus: "all",
  sortField: "price",
  sortOrder: "desc",
  searchQuery: "",
  currentPage: 1,
  isLoading: true,
  error: null,
  itemsPerPage: 6,
};

export function propertyReducer(
  state: PropertyState,
  action: PropertyAction
): PropertyState {
  switch (action.type) {
    case "SET_PROPERTIES":
      return { ...state, properties: action.payload };

    case "ADD_PROPERTY":
      const updatedProperties = [...state.properties, action.payload];
      localStorage.setItem("properties", JSON.stringify(updatedProperties));
      return { ...state, properties: updatedProperties };

    case "UPDATE_PROPERTY":
      const updatedProps = state.properties.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
      localStorage.setItem("properties", JSON.stringify(updatedProps));
      return { ...state, properties: updatedProps };

    case "DELETE_PROPERTY":
      const filteredProperties = state.properties.filter(
        (p) => p.id !== action.payload
      );
      localStorage.setItem("properties", JSON.stringify(filteredProperties));
      return { ...state, properties: filteredProperties };

    case "SET_FILTER_TYPE":
      return { ...state, filterType: action.payload, currentPage: 1 };

    case "SET_FILTER_STATUS":
      return { ...state, filterStatus: action.payload, currentPage: 1 };

    case "SET_SORT_FIELD":
      return { ...state, sortField: action.payload };

    case "SET_SORT_ORDER":
      return { ...state, sortOrder: action.payload };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload, currentPage: 1 };

    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
