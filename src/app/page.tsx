import { getTimers } from "@/actions/actions";
import NewTimer from "@/components/NewTimer";
import TimerRow from "@/components/TimerRow";
import React from "react";

export default async function Home() {
  const timers = await getTimers();
  return (
    <main className="container mx-auto max-w-screen-lg p-6 flex flex-col gap-8">
      <h1 className="font-bold text-2xl text-center">Timers</h1>
      <div className="flex flex-col gap-4">
        {timers.map((timer) => (
          <TimerRow timer={timer} key={timer.id} />
        ))}
      </div>
      <NewTimer />
    </main>
  );
}
