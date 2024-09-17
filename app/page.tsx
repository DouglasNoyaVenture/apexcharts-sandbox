'use client';

import { CurrentLeads } from './Charts/CurrentLeads/CurrentLeads';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CurrentLeads />
    </main>
  );
}
