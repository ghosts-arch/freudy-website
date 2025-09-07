"use client";

type DailyFact = {
  dailyFact: {
    fact: string;
  };
};

type Answer = {
  text: string;
  id: number;
  isValidAnswer: boolean;
};

type Question = {
  question: string;
  explanation: string;
  answers: Answer[];
};

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import QuizPlayground from "@/components/quizPlayground";
import { useEffect, useState } from "react";

export default function Home() {
  const [dailyFact, setDailyFact] = useState<DailyFact>();
  const [question, setQuestion] = useState<Question>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/daily_fact").then((response) =>
      response.json().then((dailyFact: DailyFact) => {
        setDailyFact(dailyFact);
        setLoading(false);
      })
    );
    fetch("api/question").then((response) => {
      response.json().then((question: Question) => {
        setQuestion(question);
      });
    });
  }, []);

  if (!question) return;

  return (
    <>
      <div className="hero min-h-[80vh]">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Dites bonjour à Freudy !</h1>
            <p className="py-6 text-lg text-base-content/70">
              Freudy est un bot discord qui propose un quiz de 100 questions et
              des anecdotes journalières basées sur la psychologie !
            </p>
            <a href="#playground" className="btn btn-primary">
              Essayer
            </a>
          </div>
        </div>
      </div>
      <QuizPlayground question={question} />
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
                  {dailyFact?.dailyFact.fact}
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
    </>
  );
}
