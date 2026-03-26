import { User } from "lucide-react";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-brand-gray-100 flex items-center justify-center overflow-hidden">
        <User className="w-5 h-5 text-brand-gray-600" />
      </div>
      <span className="hidden sm:block text-sm font-medium text-brand-gray-900">
        John Doe
      </span>
    </div>
  );
}
