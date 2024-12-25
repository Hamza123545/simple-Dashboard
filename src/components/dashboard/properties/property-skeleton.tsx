import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PropertySkeleton() {
  return (
    <Card>
      <CardHeader className="relative h-48 p-0">
        <Skeleton className="h-full w-full rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-4">
        <Skeleton className="h-6 w-3/4 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </CardContent>
    </Card>
  );
}

export function PropertyListSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <PropertySkeleton key={i} />
      ))}
    </div>
  );
}
