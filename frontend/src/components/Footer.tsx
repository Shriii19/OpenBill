import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary-600 text-[10px] font-bold text-white">
              O
            </div>
            <span className="text-sm font-semibold text-gray-900">OpenBill</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-700">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-700">Privacy Policy</Link>
            <span>&copy; {new Date().getFullYear()} OpenBill</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
