"use client";

type DailyFact = {
  fact: {
    fact: string;
  };
};

import { useEffect, useState } from "react";

export default function Home() {
  const [dailyFact, setDailyFact] = useState<DailyFact>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/daily_fact").then((response) =>
      response.json().then((dailyFact: DailyFact) => {
        setDailyFact(dailyFact);
        setLoading(false);
      })
    );
  }, []);
  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200 shadow-sm p-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Freudy</a>
        </div>
        <div className="flex-none">
          <a
            className="btn btn-secondary"
            href="https://github.com/ghosts-arch/Freudy"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Github
          </a>
        </div>
      </div>
      <div className="hero min-h-[80vh]">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Dites bonjour à Freudy !</h1>
            <p className="py-6 text-lg text-base-content/70">
              Freudy est un bot discord qui propose un quiz de 100 questions et
              des anecdotes journalières basées sur la psychologie !
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <h2 className="text-center text-3xl card-lg font-bold mb-10">
          Fonctionalités
        </h2>
        <div className="grid gap-6 md:grid-cols-3 px-8">
          <div className="card card-lg shadow-lg bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Quiz</h2>
              <p>Un quiz de 100 questions à propos de la psychologie.</p>
            </div>
          </div>
          <div className="card card-lg shadow-lg bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Anecdotes Journalières</h2>
              <p>
                Chaque jour, une anecdote sur le thème de la psychologie comme
                celle ci !
              </p>
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <span className="bg-accent text-accent-content p-4 rounded-lg mt-4 italic">
                  {dailyFact?.fact.fact}
                </span>
              )}
            </div>
          </div>
          <div className="card card-lg shadow-lg bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Systeme de niveau (coming soon)</h2>
              <p>
                Une histoire ou le joueur est un étudiant qui devra devenir le
                meilleur grace aux enseignements de Freudy !
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-8">
        <aside>
          <p>Site crée par _blue_angels</p>
        </aside>
      </footer>
    </div>
  );
}
