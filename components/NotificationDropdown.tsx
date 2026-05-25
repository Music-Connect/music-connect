"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Check, Trash2 } from "lucide-react";
import { useNotificationStore } from "../lib/store/useNotificationStore";
import Link from "next/link";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationStore();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg-card text-fg-muted transition-all hover:border-border-strong hover:text-fg"
      >
        <Bell size={16} />
        {unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white ring-2 ring-bg">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-xl z-50">
          <div className="flex items-center justify-between border-b border-border p-4">
            <h3 className="font-semibold text-fg">Notificações</h3>
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-xs font-medium text-rose-500 hover:text-rose-400 transition-colors flex items-center gap-1"
              >
                <Check size={14} />
                Marcar lidas
              </button>
            )}
          </div>
          
          <div className="max-h-[300px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-sm text-fg-muted">
                Nenhuma notificação por enquanto.
              </div>
            ) : (
              notifications.map((notification) => (
                <div 
                  key={notification.id}
                  onClick={() => {
                    if (!notification.isRead) markAsRead(notification.id);
                  }}
                  className={`cursor-pointer border-b border-border p-4 transition-colors hover:bg-bg-card ${
                    !notification.isRead ? "bg-bg-card/50" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-2 w-2 shrink-0 rounded-full">
                      {!notification.isRead && <div className="h-full w-full rounded-full bg-rose-500" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-fg leading-tight">
                        {notification.title}
                      </p>
                      <p className="text-xs text-fg-muted line-clamp-2">
                        {notification.content}
                      </p>
                      <p className="text-[10px] text-fg-subtle">
                        {new Date(notification.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="border-t border-border p-2">
            <Link 
              href="/messages" 
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-lg py-2 text-center text-xs font-medium text-fg-muted hover:bg-bg-card hover:text-fg transition-colors"
            >
              Ver todas
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
