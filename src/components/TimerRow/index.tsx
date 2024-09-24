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
      <div className={style.lhs}>
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex gap-2">
            <h3 className={style.title}>{timer.title}</h3>
            <Delete id={timer.id} />
          </div>
          <p>{timer.description}</p>
        </div>
        <p className="text-sm text-gray-700">
          Started on <span>{startDate.toLocaleString()}</span>
        </p>
      </div>
      <div className={style.rhs}>
        <div>
          <Ticker ts={timer.timestamp} />
        </div>
      </div>
    </div>
  );
}
