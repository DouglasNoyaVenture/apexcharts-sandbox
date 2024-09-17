'use client';

import { ActiveMatters } from './Charts/ActiveMatters/ActiveMatters';
import { CurrentLeads } from './Charts/CurrentLeads/CurrentLeads';
import { NewLeads } from './Charts/NewLeads/NewLeads';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CurrentLeads />
      <NewLeads />
      <ActiveMatters />
    </main>
  );
}
