"use client";

import { useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import { BarChart2, FileText, Search, User, Settings, ArrowUpRight, Newspaper, MessageSquare } from "lucide-react";

interface SidebarProps {
  isArtist: boolean;
  activePage?: string;
  onLogout: () => void;
}

export default function Sidebar({
  isArtist,
  activePage,
  onLogout,
}: SidebarProps) {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <aside className="relative hidden w-72 md:flex flex-col px-6 py-7 border-r border-border bg-bg/80 backdrop-blur-xl overflow-y-auto [&::-webkit-scrollbar]:hidden">
        {/* Top gradient glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-rose-500/[0.07] via-transparent to-transparent" />

        {/* Brand */}
        <div className="relative mb-10 px-2">
          <div className="text-[22px] font-black tracking-tight">
            <span className="bg-linear-to-r from-amber-300 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
              Music Connect
            </span>
          </div>
          <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-fg-subtle">
            {isArtist ? "Artist Hub" : "Hiring Desk"}
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-bg-card px-3 py-2 border border-border">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-semibold text-fg-muted">
              {isArtist ? "Perfil Artista" : "Perfil Contratante"}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative flex flex-col gap-8 text-sm font-medium text-fg-muted flex-1">
          <div className="space-y-1.5">
            <p className="mb-3 px-3 text-[10px] font-bold text-fg-subtle uppercase tracking-[0.3em]">
              Painel
            </p>

            <div onClick={() => navigate("/feed")}>
              <NavItem icon={<Newspaper size={16} />} active={activePage === "feed"}>
                Feed
              </NavItem>
            </div>

            <div onClick={() => navigate("/dashboard")}>
              <NavItem
                icon={<BarChart2 size={16} />}
                active={activePage === "dashboard" || !activePage}
              >
                Visão Geral
              </NavItem>
            </div>

            <div onClick={() => navigate("/proposals")}>
              <NavItem icon={<FileText size={16} />} active={activePage === "proposals"}>
                {isArtist ? "Propostas" : "Minhas Contratações"}
              </NavItem>
            </div>

            <div onClick={() => navigate("/messages")}>
              <NavItem icon={<MessageSquare size={16} />} active={activePage === "messages"}>
                Mensagens
              </NavItem>
            </div>

            <div onClick={() => navigate("/explore")}>
              <NavItem icon={<Search size={16} />} active={activePage === "explore"}>
                Explorar
              </NavItem>
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="mb-3 px-3 text-[10px] font-bold text-fg-subtle uppercase tracking-[0.3em]">
              {isArtist ? "Perfil" : "Organização"}
            </p>
            <div onClick={() => navigate("/profile")}>
              <NavItem icon={<User size={16} />} active={activePage === "profile"}>
                {isArtist ? "Meu Perfil" : "Minha Empresa"}
              </NavItem>
            </div>
            <div onClick={() => navigate("/settings")}>
              <NavItem icon={<Settings size={16} />} active={activePage === "settings"}>
                Configurações
              </NavItem>
            </div>
          </div>
        </nav>

        {/* Logout */}
        <div className="relative pt-6">
          <div className="mb-4 h-px bg-linear-to-r from-transparent via-border-strong to-transparent" />
          <button
            onClick={onLogout}
            className="group flex w-full items-center justify-between rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-semibold text-fg-muted transition-all duration-200 hover:border-border-strong hover:bg-bg-elevated hover:text-fg"
          >
            Sair da conta
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <MobileNav activePage={activePage} />
    </>
  );
}

/* ── NavItem ── */
interface NavItemProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  active?: boolean;
}

function NavItem({ children, icon, active }: NavItemProps) {
  return (
    <div
      className={`group flex items-center gap-3 cursor-pointer rounded-xl px-3 py-2.5 transition-all duration-200 ${
        active
          ? "bg-fg/[0.06] text-fg shadow-[inset_0_0_0_1px_rgba(127,127,127,0.12)]"
          : "hover:bg-fg/[0.03] hover:text-fg"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-elevated transition-colors group-hover:bg-border-strong">
        {icon}
      </span>
      <span className="flex-1 text-[13px]">{children}</span>
      {active && (
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]" />
      )}
    </div>
  );
}
