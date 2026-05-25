"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { useChatStore } from "../../lib/store/useChatStore";
import { api } from "../../lib/api";
import { useAuthStore } from "../../lib/store";

export default function ChatWindow() {
  const [inputText, setInputText] = useState("");
  const { activeConversationId, conversations, messages, addMessage, setMessages } = useChatStore();
  const { user: currentUser } = useAuthStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConvo = conversations.find(c => c.id === activeConversationId);
  const activeMessages = activeConversationId ? (messages[activeConversationId] || []) : [];
  const otherUser = activeConvo?.users.find(u => u.id !== currentUser?.id);

  // Load messages from API when conversation changes
  useEffect(() => {
    if (activeConversationId) {
      api.getMessages(activeConversationId)
        .then(data => setMessages(activeConversationId, data))
        .catch(console.error);
    }
  }, [activeConversationId, setMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeMessages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeConversationId || !currentUser) return;

    try {
      const msgText = inputText;
      setInputText("");
      
      const sentMsg = await api.sendMessage(activeConversationId, msgText);
      addMessage(sentMsg);
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      alert("Falha ao enviar a mensagem.");
    }
  };

  if (!activeConversationId) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-bg p-6 text-center text-fg-muted">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bg-elevated text-2xl shadow-xl shadow-rose-500/10">
          💬
        </div>
        <h2 className="text-xl font-bold text-fg">Suas Mensagens</h2>
        <p className="mt-2 text-sm max-w-sm">
          Selecione uma conversa na lateral para continuar conversando ou inicie um novo chat a partir do perfil de um artista.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col bg-bg overflow-hidden min-h-0">
      {/* Header */}
      <div className="flex shrink-0 items-center gap-3 border-b border-border bg-bg/80 px-6 py-4 backdrop-blur-md">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-600 font-bold text-white">
          {otherUser?.name.substring(0, 2).toUpperCase() || "U"}
        </div>
        <div>
          <h2 className="font-semibold text-fg leading-tight">{otherUser?.name || "Usuário"}</h2>
          <p className="text-xs text-fg-muted capitalize">{otherUser?.tipo_usuario || "Artista"}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {activeMessages.map((msg) => {
          const isMe = msg.senderId === currentUser?.id;
          return (
            <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              <div 
                className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                  isMe 
                    ? "bg-rose-500 text-white rounded-br-sm" 
                    : "bg-bg-elevated border border-border text-fg rounded-bl-sm"
                }`}
              >
                <p>{msg.content}</p>
                <span className={`mt-1 block text-[9px] ${isMe ? "text-rose-200" : "text-fg-subtle"}`}>
                  {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="shrink-0 border-t border-border bg-bg p-4">
        <form onSubmit={handleSend} className="relative flex items-center">
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full rounded-full border border-border bg-bg-input py-3 pl-4 pr-12 text-sm text-fg outline-none transition-all focus:border-rose-500 focus:bg-bg focus:ring-1 focus:ring-rose-500"
          />
          <button 
            type="submit"
            disabled={!inputText.trim()}
            className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send size={16} className="-ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
