import { Workflow } from "lucide-react";

function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 shadow-lg shadow-emerald-600/25">
        <Workflow
          size={22}
          className="text-white"
          strokeWidth={2.2}
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`text-xl font-bold tracking-tight ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          FlowCRM
        </span>

        <span
          className={`text-xs ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Sales • Customers • Growth
        </span>
      </div>
    </div>
  );
}

export default Logo;