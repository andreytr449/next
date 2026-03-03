'use client';

import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import { TrendingUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  ChartContainer,
  ChartTooltip,
  CardFooter,
  ChartTooltipContent,
  type ChartConfig,
  CardTitle,
} from '@/app/shared/ui';
import { MonthActivity } from './analytics.interface';

export const description = 'An interactive line chart';

const chartConfig = {
  desktop: {
    label: 'Questions',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export const UserActivityChart = ({ chartData }: { chartData: MonthActivity[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>January - December 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Questions activity over the year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total questions for the last 12 months
        </div>
      </CardFooter>
    </Card>
  );
};
