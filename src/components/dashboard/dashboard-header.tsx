import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart3 } from "lucide-react";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between space-y-2">
      <div className="flex flex-wrap items-center justify-between md:space-x-3">
        <div className="relative h-16 w-16">
          <Image
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
            alt="Profile Picture"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="xxs:text-xl md:text-3xl font-bold tracking-tight">
            Good morning!
          </h1>
          <p className="xxs:text-sm text-muted-foreground">
            Here&apos;s an overview of your properties
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-end items-center space-x-2 xxs:space-y-2 md:space-y-0">
        <div className="xxs:hidden md:block">
          <Select defaultValue="lastMonth">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lastMonth">Last month</SelectItem>
              <SelectItem value="lastWeek">Last week</SelectItem>
              <SelectItem value="today">Today</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <BarChart3 className="h-4 w-4 md:mr-2" />
          <span className="xxs:hidden md:block">Analytics</span>
        </Button>
      </div>
    </div>
  );
}
