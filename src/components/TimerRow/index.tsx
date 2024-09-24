import { Ticker } from "./Ticker";
import style from "./TimerRow.module.css";
import Delete from "./Delete";

export type Timer = {
  id: number;
  title: string;
  description: string;
  timestamp: number;
};

export default function TimerRow({ timer }: { timer: Timer }) {
  const startDate = new Date(timer.timestamp);
  return (
    <div className={style.wrapper}>
      <div className="flex gap-2">
        <h3 className={style.title}>{timer.title}</h3>
      </div>
      <p>{timer.description}</p>
      <div className="absolute top-4 right-6">
        <Delete id={timer.id} />
      </div>
      <Ticker ts={timer.timestamp} />
      <p className="text-sm text-gray-700">
        Started on <span>{startDate.toLocaleString()}</span>
      </p>
    </div>
  );
}
