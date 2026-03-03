import { type ChartConfig } from '@/app/shared/ui';

export const questionsStatusConfig = {
  visitors: {
    label: 'Questions',
  },
  chrome: {
    label: 'Chrome',
    color: 'var(--chart-1)',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-2)',
  },
  firefox: {
    label: 'Firefox',
    color: 'var(--chart-3)',
  },
  edge: {
    label: 'Edge',
    color: 'var(--chart-4)',
  },
  other: {
    label: 'Other',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig;

export const userActivityChartConfig = {
  desktop: {
    label: 'Questions',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;
