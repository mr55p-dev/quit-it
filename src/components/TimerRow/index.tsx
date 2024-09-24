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
        <h3 className={style.title}>{timer.title}</h3>
        <p>{timer.description}</p>
        <Delete id={timer.id} />
      </div>
      <div className={style.rhs}>
        <div>
          Started on <span>{startDate.toLocaleString()}</span>
        </div>
        <div>
          <Ticker ts={timer.timestamp} />
        </div>
      </div>
    </div>
  );
}
