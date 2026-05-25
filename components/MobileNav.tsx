"use client";

import { useRouter } from "next/navigation";
import { Newspaper, Search, BarChart2, MessageSquare, User } from "lucide-react";

interface MobileNavProps {
  activePage?: string;
}

export default function MobileNav({ activePage }: MobileNavProps) {
  const router = useRouter();
  const navigate = (path: string) => router.push(path);

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 h-[68px] bg-bg/90 backdrop-blur-2xl border-t border-border flex items-center justify-around px-2 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <MobileNavItem icon={<Newspaper size={22} />} active={activePage === "feed"} onClick={() => navigate("/feed")} label="Feed" />
      <MobileNavItem icon={<Search size={22} />} active={activePage === "explore"} onClick={() => navigate("/explore")} label="Buscar" />
      <div className="relative -top-5">
        <div 
          onClick={() => navigate("/dashboard")}
          className="w-14 h-14 bg-linear-to-tr from-amber-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30 cursor-pointer active:scale-95 transition-transform"
        >
          <BarChart2 size={24} className="text-white" />
        </div>
      </div>
      <MobileNavItem icon={<MessageSquare size={22} />} active={activePage === "messages"} onClick={() => navigate("/messages")} label="Chat" />
      <MobileNavItem icon={<User size={22} />} active={activePage === "profile"} onClick={() => navigate("/profile")} label="Perfil" />
    </nav>
  );
}

function MobileNavItem({ icon, active, onClick, label }: { icon: React.ReactNode, active?: boolean, onClick: () => void, label: string }) {
  return (
    <div onClick={onClick} className={`flex flex-col items-center justify-center w-14 h-full cursor-pointer transition-colors ${active ? "text-amber-400" : "text-fg-muted hover:text-fg"}`}>
      <div className={`flex items-center justify-center mb-1 ${active ? "animate-bounce" : ""}`}>
        {icon}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  );
}
