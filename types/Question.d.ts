export type DailyFact = {
  dailyFact: {
    fact: string;
  };
};

export type Answer = {
  text: string;
  id: number;
  isValidAnswer: boolean;
};

export type Question = {
  question: string;
  explanation: string;
  answers: Answer[];
};
