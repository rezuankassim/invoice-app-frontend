import { DateTime } from "luxon";

export default function Date({ dateString }) {
  const date = DateTime.fromISO(dateString);

  return <time dateTime={date}>{date?.toFormat("dd LLL yyyy")}</time>;
}
