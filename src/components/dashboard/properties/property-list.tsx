"use client";

import { useProperties } from "@/context/property-context";
import { PropertyListSkeleton } from "./property-skeleton";
import { Pagination } from "./pagination";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyList() {
  const { state, dispatch, filteredProperties } = useProperties();

  const deleteProperty = (id: string) => {
    dispatch({ type: "DELETE_PROPERTY", payload: id });
  };
  if (state.isLoading) {
    return <PropertyListSkeleton />;
  }

  if (state.error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{state.error}</AlertDescription>
      </Alert>
    );
  }
  if (filteredProperties.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-40">
        <p className="text-muted-foreground">No properties found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence>
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardHeader className="relative h-60 p-0">
                  <Image
                    src={property.imageUrl || "/placeholder.png"}
                    alt={property.address}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16.5vw"
                    className="object-cover rounded-t-lg"
                    // loading="lazy"
                    priority={false}
                    quality={60}
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => deleteProperty(property.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">
                    {property.address}
                  </CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div>
                      <p>Type: {property.type}</p>
                      <p>Status: {property.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${property.price}</p>
                      <p>
                        {property.checkInDate} - {property.checkOutDate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Pagination />
    </div>
  );
}
