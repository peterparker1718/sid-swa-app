"use client";

import { useEffect, useMemo, useRef } from "react";
import { useChat } from "ai/react";
import {
  Bot,
  Loader2,
  MessageCircle,
  SendHorizonal,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

const SUGGESTED_PROMPTS = [
  "Summarize the latest funding activity between Indonesia and the US.",
  "Draft a warm introduction email between a US investor and an Indonesian startup.",
  "Highlight three emerging sectors Indonesian founders should watch.",
  "Outline key due diligence questions for a cross-border investment."
];

export default function Home() {
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    status,
    error,
  } = useChat({ api: "/api/chat" });
  const listRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const isStreaming = status === "streaming";
  const disableSend = input.trim().length === 0 || isStreaming;
  const showSuggestions = messages.length === 0;

  const statusLabel = useMemo(() => {
    switch (status) {
      case "streaming":
        return "Generating";
      case "error":
        return "Unavailable";
      default:
        return "Ready";
    }
  }, [status]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_65%)]" />
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-4 pb-12 pt-10 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-4 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
            <div className="flex items-center gap-3 text-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  SID Copilot
                </p>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Indonesia–America Investor Connector
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              <span>OpenAI gpt-4o-mini • {statusLabel}</span>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-balance text-sm text-slate-300 sm:mx-0 sm:text-base">
            Ask investment, policy, or market questions to surface insights that connect US investors with Indonesian founders. Responses stream live using the OpenAI Realtime APIs powered by the <code className="rounded bg-slate-900/80 px-1.5 py-0.5 font-mono text-xs text-sky-200">ai</code> SDK.
          </p>
        </header>

        <main className="flex flex-1 flex-col gap-6">
          <section className="flex min-h-[480px] flex-1 flex-col overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/70 shadow-2xl shadow-slate-900/70 backdrop-blur">
            <div
              ref={listRef}
              className="flex-1 space-y-6 overflow-y-auto px-5 py-6 sm:px-8"
            >
              {showSuggestions ? (
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
                  <div className="flex items-center gap-3 rounded-full border border-slate-800/60 bg-slate-950/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                    <Sparkles className="h-4 w-4 text-sky-300" />
                    <span>Try asking about</span>
                  </div>
                  <p className="text-balance text-base text-slate-200">
                    Tap a prompt to start, or craft your own question about capital flows, regulatory context, or investor-founder matchmaking.
                  </p>
                  <div className="grid w-full gap-3 sm:grid-cols-2">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => setInput(prompt)}
                        className="group flex h-full flex-col justify-between gap-3 rounded-2xl border border-transparent bg-slate-950/60 px-4 py-4 text-left text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-slate-900/70"
                      >
                        <span>{prompt}</span>
                        <span className="flex items-center gap-1 text-xs font-medium text-sky-300 opacity-0 transition group-hover:opacity-100">
                          <Sparkles className="h-3 w-3" />
                          Use prompt
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message) => {
                    if (message.role === "system") {
                      return null;
                    }
                    const isUser = message.role === "user";
                    return (
                      <article
                        key={message.id}
                        className={`flex gap-3 ${isUser ? "flex-row-reverse text-right" : ""}`}
                      >
                        <div
                          className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border ${
                            isUser
                              ? "border-sky-400/50 bg-sky-500/10 text-sky-200"
                              : "border-slate-800/80 bg-slate-900/80 text-sky-200"
                          }`}
                        >
                          {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                        </div>
                        <div
                          className={`flex max-w-2xl flex-col gap-2 ${
                            isUser ? "items-end" : "items-start"
                          }`}
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                            {isUser ? "You" : "SID Copilot"}
                          </span>
                          <div
                            className={`w-full rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-lg shadow-slate-950/50 ${
                              isUser
                                ? "border-sky-400/40 bg-sky-500/15 text-slate-100"
                                : "border-slate-800/70 bg-slate-950/70 text-slate-200"
                            }`}
                          >
                            <p className="whitespace-pre-wrap">{message.content}</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                  {isStreaming && (
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                      <Loader2 className="h-4 w-4 animate-spin text-sky-300" />
                      Streaming response…
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="border-t border-slate-800/80 bg-slate-950/60 px-5 py-4 sm:px-6">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row sm:items-end"
              >
                <label className="flex-1">
                  <span className="sr-only">Message</span>
                  <textarea
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        if (!disableSend) {
                          formRef.current?.requestSubmit();
                        }
                      }
                    }}
                    placeholder="Ask about investors, markets, partnerships, or upcoming opportunities…"
                    rows={1}
                    className="min-h-[56px] w-full resize-none rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 shadow-inner shadow-slate-950/50 placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                  />
                </label>
                <div className="flex items-center justify-end gap-2 sm:justify-start">
                  {isStreaming ? (
                    <button
                      type="button"
                      onClick={stop}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:border-rose-400/60 hover:text-rose-300"
                    >
                      Stop
                    </button>
                  ) : null}
                  <button
                    type="submit"
                    disabled={disableSend}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 hover:bg-sky-400"
                  >
                    {isStreaming ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <SendHorizonal className="h-4 w-4" />
                    )}
                    <span>Send</span>
                  </button>
                </div>
              </form>
              {error ? (
                <p className="mt-3 text-xs text-rose-300">
                  {error.message ?? "We couldn’t reach the chat service. Try again in a moment."}
                </p>
              ) : null}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
