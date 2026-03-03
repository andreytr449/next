export interface QuestionsStats {
  total: number;
  answered: number;
  thisWeek: number;
  avgPerDay: string;
  months: MonthActivity[];
  mostQuestionsDay: BestDay;
  streak: QuestionsStreak;
  longestQuestion: LongestQuestion;
  weekComparison: DayActivity[];
}

export interface MonthActivity {
  month: string;
  desktop: number;
}

export interface BestDay {
  count: number;
  date: string;
}

export interface QuestionsStreak {
  days: number;
  range: string;
}
export interface LongestQuestion {
  chars: number;
  date: string;
}

export interface DayActivity {
  day: string;
  current: number;
  prev: number;
}
