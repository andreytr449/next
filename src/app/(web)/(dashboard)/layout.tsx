import { SettingSidebar } from '@/app/widgets/settings-sidebar/';
import { SidebarProvider, SidebarTrigger } from '@/app/shared/ui';

import React from 'react';
import { Footer } from '@/app/widgets';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <SettingSidebar />
        <main className="flex flex-col items-center justify-center w-full">
          {children}
          <Footer />
        </main>
      </SidebarProvider>
    </>
  );
}
