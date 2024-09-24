"use client";
import { deleteTimer } from "@/actions/actions";

export default function Delete({ id }: { id: number }) {
  return <button onClick={() => deleteTimer(id)}>Delete me</button>;
}
