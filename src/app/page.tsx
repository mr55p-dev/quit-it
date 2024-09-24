import TimerRow, { Timer } from "@/components/TimerRow";

function getTimers(): Timer[] {
  return [
    {
      id: "1",
      name: "Stop nicotine",
      description: "No more nicotine intake for Ellis.",
      timestamp: 1726852105 * 1000,
    },
  ];
}

export default function Home() {
  const timers = getTimers();
  return (
    <div className="container mx-auto p-6 flex flex-col gap-4">
      {timers.map((timer) => (
        <TimerRow timer={timer} key={timer.id} />
      ))}
    </div>
  );
}
