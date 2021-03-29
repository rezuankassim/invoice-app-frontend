import Dayzed, { useDayzed } from "dayzed";
import Text from "./Text";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import { format } from "../../utils/date";
import CalendarIcon from "@/components/icons/Calendar";

const monthNamesShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekdayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar({
  calendars,
  getBackProps,
  getForwardProps,
  getDateProps,
  open,
  setOpen,
}) {
  if (calendars.length) {
    return (
      <Transition show={open}>
        <div className="absolute origin-bottom mt-2 w-60 z-20 pt-[25px] pb-8 pl-[19px] pr-[18px] bg-white rounded shadow-theme-lg">
          <div className="relative w-full">
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                {...getBackProps({ calendars })}
                className="text-theme-primary"
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                {...getForwardProps({ calendars })}
                className="text-theme-primary"
              >
                <ArrowRight />
              </button>
            </div>

            {calendars.map((calendar) => (
              <div
                key={`${calendar.month}${calendar.year}`}
                className="mt-8 grid grid-cols-7 gap-x-[15px] gap-y-[17px]"
              >
                <div className="absolute top-0 mx-[66px] text-center">
                  {monthNamesShort[calendar.month]} {calendar.year}
                </div>

                {calendar.weeks.map((week, weekIndex) =>
                  week.map((dateObj, index) => {
                    let key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
                    if (!dateObj) {
                      return <div key={key} className="w-full" />;
                    }
                    let { date, selected, selectable, today } = dateObj;
                    let background = today ? "cornflowerblue" : "";
                    background = selected ? "purple" : background;
                    background = !selectable ? "teal" : background;
                    return (
                      <button
                        className="w-full font-bold text-xs text-theme-black hover:text-theme-primary focus:outline-none focus:text-theme-primary"
                        key={key}
                        {...getDateProps({ dateObj })}
                      >
                        {selectable ? date.getDate() : "X"}
                      </button>
                    );
                  })
                )}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    );
  }
}

export default function Date({ date, setDate }) {
  const [open, setOpen] = useState(false);

  const setDateCustom = (date) => {
    setDate(date);
    setOpen(false);
  };

  return (
    <div className="relative font-bold text-xs text-theme-black">
      <Text
        readOnly
        onClick={() => setOpen(!open)}
        value={format(date?.date)}
        iconRight={true}
        onKeyDown={(e) => e.keyCode === 32 && setOpen(!open)}
        className="cursor-pointer"
      />

      <Dayzed
        onDateSelected={setDateCustom}
        render={(dayzedData) => (
          <Calendar {...dayzedData} open={open} setOpen={setOpen} />
        )}
      />
    </div>
  );
}
