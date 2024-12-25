import { Target } from "lucide-react";
import { BadgeInfo } from "lucide-react";
import React from "react";
import propertiesData from "@/lib/properties.json";
import Image from "next/image";

export default function BookingsSection() {
  return (
    <div className="space-y-4">
      {/* next steps section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Your next steps</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="xxs:col-span-2 sm:col-span-1 flex flex-wrap items-center p-4 border rounded-lg">
            <div className="mr-4 p-3 bg-red-100 rounded-full">
              <BadgeInfo className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <h3 className="font-medium">Set up your calendar</h3>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 mt-2 bg-red-200 rounded-full">
                  <div className="w-3/4 h-full bg-red-500 rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">4/6</p>
              </div>
            </div>
          </div>
          <div className="xxs:col-span-2 sm:col-span-1 flex flex-wrap items-center p-4 border rounded-lg">
            <div className="mr-4 p-3 bg-green-100 rounded-full">
              <Target className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium">Increase your bookings</h3>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 mt-2 bg-green-200 rounded-full">
                  <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">2/6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bookings section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          New bookings
          <span className="text-sm font-medium px-2.5 py-1 mt-2 bg-green-100 text-green-700 rounded-full">
            4
          </span>
        </h2>
        <div className="space-y-2 grid grid-cols-2 gap-4">
          {propertiesData
            .filter((booking) => Number(booking.id) <= 4)
            .map((booking) => (
              <div
                key={booking.id}
                className="xxs:col-span-2 sm:col-span-1 lg:col-span-2 flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 bg-gray-200 rounded-lg">
                    <Image
                      src={booking.imageUrl}
                      alt={booking.address}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{booking.address}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.checkInDate} - {booking.checkOutDate}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {Math.ceil(Math.random() * 10000)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {(() => {
                      const start = new Date(booking.checkInDate);
                      const end = new Date(booking.checkOutDate);
                      const days = Math.ceil(
                        (end.getTime() - start.getTime()) /
                          (1000 * 60 * 60 * 24)
                      );
                      return `${days} days`;
                    })()}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
