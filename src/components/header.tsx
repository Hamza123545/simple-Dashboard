"use client";
import { Bell, User, Shell, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const isDashboard = pathname === "/";
  const isInvoices = pathname === "/invoices";
  const isAnalytics = pathname === "/analytics";

  return (
    <header className="flex items-center justify-between py-4 xxs:px-4 md:px-8 border-b">
      {/* logo section */}
      <div className="flex items-center justify-between space-x-3">
        <Shell className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Hamza</h1>
      </div>
      {/* navigation section */}
      <nav className="xxs:hidden md:block flex items-center justify-between space-x-6">
        <Link
          href="/"
          className={cn(
            "border-b-2 border-transparent hover:border-primary",
            isDashboard && "border-primary"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/invoices"
          className={cn(
            "border-b-2 border-transparent hover:border-primary",
            isInvoices && "border-primary"
          )}
        >
          Invoices
        </Link>
        <Link
          href="/analytics"
          className={cn(
            "border-b-2 border-transparent hover:border-primary",
            isAnalytics && "border-primary"
          )}
        >
          Analytics
        </Link>
      </nav>

      {/* theme toggle and notifications */}
      <div className="xxs:hidden md:block flex items-center justify-between space-x-3">
        <ThemeToggle />
        <Button variant="outline">
          <Bell className="w-4 h-4" />
        </Button>
        <Button variant="outline">
          <User className="w-4 h-4" />
        </Button>
      </div>

      {/* mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden border ">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={cn(
                  "text-lg hover:text-primary",
                  isDashboard && "text-primary font-semibold"
                )}
              >
                Dashboard
              </Link>
              <Link
                href="/invoices"
                className={cn(
                  "text-lg hover:text-primary",
                  isInvoices && "text-primary font-semibold"
                )}
              >
                Invoices
              </Link>
              <Link
                href="/analytics"
                className={cn(
                  "text-lg hover:text-primary",
                  isAnalytics && "text-primary font-semibold"
                )}
              >
                Analytics
              </Link>
            </nav>
            <div className="flex flex-col space-y-4">
              <Button variant="outline">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
