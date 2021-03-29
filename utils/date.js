import { DateTime } from "luxon";

export function format(dateString, format = "dd LLL yyyy") {
  if (!dateString) {
    return "";
  }

  let dateStringISO = new Date(dateString).toISOString();

  const date = DateTime.fromISO(dateStringISO);

  return date?.toFormat(format);
}
