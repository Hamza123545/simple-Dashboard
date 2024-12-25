import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InvoicesPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <h1 className="xxs:text-4xl md:text-6xl font-bold mb-4">
        Under Construction
      </h1>
      <p className="xxs:text-sm md:text-muted-foreground mb-8 max-w-lg">
        This{" "}
        <span className="text-2xl text-primary font-bold"> Analytics </span>{" "}
        page is currently under development. Please check back later.
      </p>
      <Link href="/">
        <Button>
          <Home className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
}
