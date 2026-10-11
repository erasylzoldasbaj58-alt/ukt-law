"use client";

import { useState } from "react";

const questions = [
   {
    q: "Қазақстан Республикасының қазіргі Конституциясы қай жылы қабылданды?",
    options: ["2025", "2020", "2021", "2026"],
    correct: 3,
    explanation: "Қазіргі Конституция 2026 жылы 15 наурызда республикалық референдумда қабылданған.",
  },
  {
    q: "Қылмыстық жауапкершілік басталатын жас, әдетте, қанша?",
    options: ["12", "14", "16", "18"],
    correct: 2,
    explanation: "Жалпы ереже бойынша 16 жас, ал ауыр қылмыстар үшін 14 жас. Нақты бапты кодекстен тексеріңіз.",
  },
];

export default function TestPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === question.correct) setScore(score + 1);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  if (finished) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-blue-900">Нәтиже</h1>
          <p className="mt-4 text-xl">
            {score} / {questions.length} дұрыс жауап
          </p>
          <a href="/" className="mt-6 inline-block text-blue-700">← Басты бет</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-blue-700">← Басты бет</a>
        <p className="mt-4 text-sm text-gray-500">
          Сұрақ {current + 1} / {questions.length}
        </p>
        <h1 className="mt-2 text-2xl font-bold">{question.q}</h1>

        <div className="mt-6 space-y-3">
          {question.options.map((opt, i) => {
            let style = "bg-white hover:shadow-md";
            if (selected !== null) {
              if (i === question.correct) style = "bg-green-100 border-green-500";
              else if (i === selected) style = "bg-red-100 border-red-500";
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className={"block w-full rounded-xl border p-4 text-left shadow " + style}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="mt-6">
            <p className="text-gray-700">{question.explanation}</p>
            <button
              onClick={next}
              className="mt-4 rounded-xl bg-blue-900 px-6 py-3 text-white"
            >
              {current + 1 >= questions.length ? "Нәтижені көру" : "Келесі сұрақ"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}