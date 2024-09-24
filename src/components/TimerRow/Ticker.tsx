"use client";

import dynamic from "next/dynamic";
import React from "react";
import style from "./Ticker.module.css";

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
  className,
}: {
  value: number;
  label: string;
  className?: string;
}) {
  if (!value) return null;
  return (
    <span className={className}>
      {value} {plurlaise(value, label)}
    </span>
  );
}

function TickerComponent({ ts }: { ts: number }) {
  const tsDate = React.useMemo(() => new Date(ts), [ts]);
  const [int, setInt] = React.useState(() => dateDiff(tsDate, new Date()));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setInt(dateDiff(new Date(), tsDate));
    }, 25);
    return () => clearInterval(timer);
  }, [tsDate]);

  const diff = new Date(int);
  return (
    <div className={style.wrapper}>
      <LabelRender
        className={style.years}
        value={diff.getUTCFullYear() - 1970}
        label="year"
      />
      <LabelRender
        className={style.months}
        value={diff.getUTCMonth()}
        label="month"
      />
      <LabelRender
        className={style.days}
        value={diff.getUTCDate()}
        label="day"
      />
      <LabelRender
        className={style.hours}
        value={diff.getUTCHours()}
        label="hour"
      />
      <LabelRender
        className={style.minutes}
        value={diff.getUTCMinutes()}
        label="minute"
      />
      <LabelRender
        className={style.seconds}
        value={diff.getUTCSeconds()}
        label="second"
      />
    </div>
  );
}

export const Ticker = dynamic(() => Promise.resolve(TickerComponent), {
  ssr: false,
});
