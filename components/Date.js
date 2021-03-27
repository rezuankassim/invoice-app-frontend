import { DateTime } from "luxon";

export default function Date({ dateString }) {
  const date = DateTime.fromISO(dateString);

  return (
    <time className="text-theme-black dark:text-white" dateTime={date}>
      {date?.toFormat("dd LLL yyyy")}
    </time>
  );
}
