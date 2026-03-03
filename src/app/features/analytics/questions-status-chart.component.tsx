'use client';
import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  CardTitle,
} from '@/app/shared/ui';
import { questionsStatusConfig } from './analytics.constant';

export const description = 'A pie chart with a label';

export function QuestionsStatusChart({
  answeredQuestionsCount,
  pendingQuestionsCount,
}: {
  answeredQuestionsCount: number;
  pendingQuestionsCount: number;
}) {
  const chartData = [
    { questionStatus: 'Answered', value: answeredQuestionsCount, fill: 'var(--color-chrome)' },
    { questionStatus: 'Pending', value: pendingQuestionsCount, fill: 'var(--color-safari)' },
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Questions Status</CardTitle>
        <CardDescription>Answered vs Pending</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={questionsStatusConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="value" label nameKey="questionStatus" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 justify-start text-sm">
        <div className="flex items-start gap-2 leading-none font-medium">
          Keep answering your questions <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Answered and pending questions for all time
        </div>
      </CardFooter>
    </Card>
  );
}
