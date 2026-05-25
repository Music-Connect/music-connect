"use client";

import { useEffect, useState } from "react";
import { BarChart3, Users, Eye, FileText } from "lucide-react";

export default function AnalyticsDashboard() {
  const [data, setData] = useState({
    visitas30dias: 0,
    seguidores30dias: 0,
    propostas30dias: 0,
    engajamento30dias: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando fetch API enquanto o backend sobe
    setTimeout(() => {
      setData({
        visitas30dias: 1254,
        seguidores30dias: 142,
        propostas30dias: 15,
        engajamento30dias: 432,
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-73px)] items-center justify-center bg-bg">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg">Dashboard de Analytics</h1>
        <p className="mt-2 text-sm text-fg-muted">
          Acompanhe o desempenho do seu perfil nos últimos 30 dias.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Visitas */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
              <Eye size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-fg-muted">Visitas no Perfil</p>
              <h3 className="text-2xl font-bold text-fg">{data.visitas30dias}</h3>
            </div>
          </div>
          <div className="mt-4 text-xs font-medium text-emerald-500">
            +12% desde o mês passado
          </div>
        </div>

        {/* Seguidores */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-fg-muted">Novos Seguidores</p>
              <h3 className="text-2xl font-bold text-fg">{data.seguidores30dias}</h3>
            </div>
          </div>
          <div className="mt-4 text-xs font-medium text-emerald-500">
            +34 novos essa semana
          </div>
        </div>

        {/* Propostas */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-fg-muted">Propostas Recebidas</p>
              <h3 className="text-2xl font-bold text-fg">{data.propostas30dias}</h3>
            </div>
          </div>
          <div className="mt-4 text-xs font-medium text-fg-subtle">
            3 pendentes de resposta
          </div>
        </div>

        {/* Engajamento */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-fg-muted">Engajamento Total</p>
              <h3 className="text-2xl font-bold text-fg">{data.engajamento30dias}</h3>
            </div>
          </div>
          <div className="mt-4 text-xs font-medium text-rose-500">
            -2% em relação à média
          </div>
        </div>
      </div>
    </div>
  );
}
