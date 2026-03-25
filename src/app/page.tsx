"use client";

import { useState } from "react";
import { apps, categories } from "./apps";
import type { App } from "./apps";

function StatusBadge({ status }: { status: App["status"] }) {
  const styles = {
    live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    beta: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "coming-soon": "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  };
  const labels = { live: "Live", beta: "Beta", "coming-soon": "Coming Soon" };

  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full border ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function AppCard({
  app,
  onClick,
}: {
  app: App;
  onClick: (app: App) => void;
}) {
  return (
    <button
      onClick={() => onClick(app)}
      className="group text-left bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-2xl shadow-lg`}
        >
          {app.icon}
        </div>
        <StatusBadge status={app.status} />
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">
        {app.name}
      </h3>
      <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
        {app.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {app.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </button>
  );
}

function AppModal({
  app,
  onClose,
}: {
  app: App;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-3xl shadow-lg`}
            >
              {app.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{app.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-zinc-400">{app.category}</span>
                <StatusBadge status={app.status} />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-300 transition-colors text-2xl leading-none cursor-pointer"
          >
            x
          </button>
        </div>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          {app.longDescription}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {app.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {app.url && (
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-xl bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition-colors"
            >
              Open App
            </a>
          )}
          {app.github && (
            <a
              href={app.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-xl border border-zinc-700 text-zinc-300 font-semibold hover:bg-zinc-800 transition-colors"
            >
              Source Code
            </a>
          )}
          {!app.url && !app.github && (
            <div className="flex-1 text-center py-3 rounded-xl bg-zinc-800 text-zinc-500 font-semibold">
              {app.status === "coming-soon" ? "Coming Soon" : "Not Yet Deployed"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? apps.filter((a) => a.category === activeCategory)
    : apps;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Rootsler
            </h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              Apps by Roots Collective
            </p>
          </div>
          <div className="text-sm text-zinc-600">
            {apps.length} apps
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-8 w-full">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === null
                ? "bg-white text-zinc-900"
                : "bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-zinc-900"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} onClick={setSelectedApp} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No apps in this category yet.
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-800/50 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-600">
          Roots Collective &middot; Built with Claude
        </div>
      </footer>

      {selectedApp && (
        <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
}
