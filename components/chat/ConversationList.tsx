"use client";

import { useChatStore } from "../../lib/store/useChatStore";
import { useAuthStore } from "../../lib/store";
import { MessageSquare } from "lucide-react";

export default function ConversationList() {
  const { conversations, activeConversationId, setActiveConversationId } = useChatStore();
  const { user: currentUser } = useAuthStore();

  return (
    <div className="flex h-full flex-col border-r border-border bg-bg-card/50">
      <div className="border-b border-border p-5">
        <div className="flex items-center gap-2">
          <MessageSquare size={20} className="text-rose-400" />
          <h2 className="text-lg font-bold text-fg">Mensagens</h2>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-fg-muted">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-bg-elevated">
              <MessageSquare size={24} className="text-zinc-600" />
            </div>
            <p className="text-sm font-medium text-zinc-400">Nenhuma conversa</p>
            <p className="mt-1 text-xs text-zinc-600">
              Inicie um chat pelo perfil de um artista ou contratante.
            </p>
          </div>
        ) : (
          conversations.map((convo) => {
            // Find the OTHER user, not ourselves
            const users = convo.users || [];
            const otherUser = users.find(u => u.id !== currentUser?.id) || users[0];
            const lastMessage = convo.messages?.[0];
            const isActive = activeConversationId === convo.id;

            return (
              <div 
                key={convo.id}
                onClick={() => setActiveConversationId(convo.id)}
                className={`cursor-pointer border-b border-border/50 p-4 transition-all duration-200 hover:bg-bg-elevated ${
                  isActive 
                    ? "bg-bg-elevated border-l-2 border-l-rose-500 pl-3.5" 
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-amber-400 via-rose-400 to-fuchsia-500 text-sm font-bold text-white">
                      {otherUser?.name ? otherUser.name.substring(0, 2).toUpperCase() : "U"}
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="truncate text-sm font-semibold text-fg">
                        {otherUser?.name || "Usuário"}
                      </h3>
                      {lastMessage && (
                        <span className="shrink-0 text-[10px] text-fg-subtle tabular-nums">
                          {new Date(lastMessage.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 truncate text-xs text-fg-muted">
                      {lastMessage ? lastMessage.content : "Inicie a conversa..."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
