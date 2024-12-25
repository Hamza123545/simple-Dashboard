import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between space-x-2 py-4 xxs:px-4 md:px-8 border-t">
      <p className="xxs:text-sm md:text-base">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <p className="xxs:text-sm md:text-base text-end">
        Developed by{" "}
        <Link
          href="https://github.com/Hamza123545"
          className="font-bold text-green-500"
        >
          Muhammad Hamza
        </Link>
      </p>
    </footer>
  );
}
