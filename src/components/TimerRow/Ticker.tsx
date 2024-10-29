"use client";

import dynamic from "next/dynamic";
import React from "react";
import style from "./TimerRow.module.css";

/**
 * calculates date difference in milliseconds
 */
function dateDiff(from: Date, to: Date): number {
  return from.getTime() - to.getTime();
}

function plurlaise(value: number, text: string): string {
  if (value === 1) {
    return text;
  } else {
    return text + "s";
  }
}

function LabelRender({
  value,
  label,
  showZero,
  className,
}: {
  value: number;
  label: string;
  showZero?: boolean;
  className?: string;
}) {
  if (!value && !showZero) return null;
  return (
    <span className={className}>
      {value} {plurlaise(value, label)}
    </span>
  );
}

function TickerComponent({ ts }: { ts: string }) {
  const tsDate = React.useMemo(() => new Date(ts), [ts]);
  const [int, setInt] = React.useState(() => dateDiff(tsDate, new Date()));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setInt(dateDiff(new Date(), tsDate));
    }, 25);
    return () => clearInterval(timer);
  }, [tsDate]);

  const diff = new Date(int);
  const year = diff.getUTCFullYear() - 1970;
  const month = diff.getUTCMonth();
  const day = diff.getUTCDate() - 1;
  const hours = diff.getUTCHours();
  const minutes = diff.getUTCMinutes();
  const seconds = diff.getUTCSeconds();
  return (
    <div className={style.ticker}>
      <LabelRender className={style.years} value={year} label="year" />
      <LabelRender
        className={style.months}
        showZero={Boolean(year)}
        value={month}
        label="month"
      />
      <LabelRender
        className={style.days}
        showZero={Boolean(year + month)}
        value={day}
        label="day"
      />
      <LabelRender
        className={style.hours}
        showZero={Boolean(year + month + day)}
        value={hours}
        label="hour"
      />
      <LabelRender
        className={style.minutes}
        showZero={Boolean(year + month + day + hours)}
        value={minutes}
        label="minute"
      />
      <LabelRender
        className={style.seconds}
        showZero={Boolean(year + month + day + hours + minutes)}
        value={seconds}
        label="second"
      />
    </div>
  );
}

export const Ticker = dynamic(() => Promise.resolve(TickerComponent), {
  ssr: false,
});
