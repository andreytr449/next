export interface QuestionsStats {
  total: number;
  answered: number;
  thisWeek: number;
  avgPerDay: string;
  months: MonthActivity[];
}

export interface MonthActivity {
  month: string;
  desktop: number;
}
