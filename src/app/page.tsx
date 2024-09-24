import { createTimer, getTimers } from "@/actions/actions";
import TimerRow from "@/components/TimerRow";

export default async function Home() {
  const timers = await getTimers();
  return (
    <main className="container mx-auto p-6 flex flex-col gap-8">
      <h1 className="font-bold text-2xl text-center">You can quit!</h1>
      <div className="flex flex-col gap-4">
        {timers.map((timer) => (
          <TimerRow timer={timer} key={timer.id} />
        ))}
      </div>

      <form action={createTimer} className="flex flex-col gap-2 w-full">
        <input
          className="bg-gray-50 w-full rounded px-4 py-2 border border-gray-200"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          className="bg-gray-50 w-full rounded px-4 py-2 border border-gray-200"
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          className="bg-gray-50 w-full rounded px-4 py-2 border border-gray-200"
          type="datetime-local"
          name="timestamp"
        />
        <button
          className="bg-gray-50 hover:bg-gray-100 rounded p-4 w-full border border-gray-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
