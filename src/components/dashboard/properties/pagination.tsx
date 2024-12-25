import { Button } from "@/components/ui/button";
import { useProperties } from "@/context/property-context";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  const { state, dispatch, totalPages } = useProperties();

  const previousPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: state.currentPage - 1 });
  };
  const nextPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: state.currentPage + 1 });
  };
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="icon"
        onClick={previousPage}
        className="disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        disabled={state.currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="text-sm">
        Page {state.currentPage} of {totalPages}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={nextPage}
        className="disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        disabled={state.currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
