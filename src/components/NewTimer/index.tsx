import { createTimer } from "@/actions/actions";

export default function NewTimer() {
  return (
    <form
      action={createTimer}
      className="flex flex-col gap-2 w-full"
      autoComplete="off"
    >
      <input
        required
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
      <div className="flex gap-2">
        <input
          required
          className="bg-gray-50 w-full rounded px-4 py-2 border border-gray-200"
          type="datetime-local"
          name="timestamp"
        />
        <button
          className="bg-green-300 hover:bg-green-400 w-full rounded p-4 border border-green-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
