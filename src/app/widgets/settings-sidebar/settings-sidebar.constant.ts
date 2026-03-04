import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconFolder,
  IconListDetails,
  IconReport,
} from '@tabler/icons-react';

export const sidebarData = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Questions',
      url: '/dashboard/questions',
      icon: IconListDetails,
    },
    {
      title: 'Analytics',
      url: '/dashboard/analytics',
      icon: IconChartBar,
    },
    {
      title: 'Settings',
      url: '/dashboard/settings',
      icon: IconFolder,
    },
  ],
  documents: [
    {
      name: 'Appearance',
      url: '/dashboard/appearance',
      icon: IconDatabase,
    },
    {
      name: 'Security',
      url: '/dashboard/security',
      icon: IconReport,
    },
  ],
};
