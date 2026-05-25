"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ConversationList from "../../components/chat/ConversationList";
import ChatWindow from "../../components/chat/ChatWindow";
import { useChatStore } from "../../lib/store/useChatStore";
import { useAuthStore } from "../../lib/store";
import { authClient } from "../../lib/auth-client";
import { api } from "../../lib/api";

function MessagesContent() {
  const router = useRouter();
  const { user, sessionLoaded } = useAuthStore();
  const { setConversations, setActiveConversationId, activeConversationId } = useChatStore();
  const searchParams = useSearchParams();
  const targetUserId = searchParams.get("userId");

  useEffect(() => {
    if (sessionLoaded && !user) {
      router.push("/login");
    }
  }, [sessionLoaded, user, router]);

  const loadingRef = useRef(false);

  useEffect(() => {
    if (!user) return;
    if (loadingRef.current) return;
    
    const loadData = async () => {
      loadingRef.current = true;
      try {
        let convs = await api.getConversations();
        
        if (targetUserId) {
          const existing = convs.find(c => c.users.some(u => u.id === targetUserId));
          if (!existing) {
            const newConv = await api.createConversation(targetUserId);
            convs = [newConv, ...convs];
            setActiveConversationId(newConv.id);
          } else {
            setActiveConversationId(existing.id);
          }
        }
        setConversations(convs);
      } catch (e) {
        console.error("Erro ao carregar conversas:", e);
      } finally {
        loadingRef.current = false;
      }
    };
    loadData();
  }, [setConversations, setActiveConversationId, targetUserId, user]);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  if (!sessionLoaded || !user) return null;

  const isArtist = user.tipo_usuario === "artista";

  return (
    <div className="flex h-screen bg-bg text-white font-sans overflow-hidden">
      <Sidebar
        isArtist={isArtist}
        activePage="messages"
        onLogout={handleLogout}
      />

      <div className="flex flex-1 overflow-hidden h-full pb-16 md:pb-0">
        {/* Conversation list */}
        <div className={`w-full md:w-[320px] lg:w-[360px] shrink-0 h-full border-r border-border ${activeConversationId ? 'hidden md:block' : 'block'}`}>
          <ConversationList />
        </div>

        {/* Chat window */}
        <div className={`flex-1 h-full min-w-0 ${activeConversationId ? 'flex' : 'hidden md:flex'}`}>
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default function MessagesPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-bg">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />
      </div>
    }>
      <MessagesContent />
    </Suspense>
  );
}
