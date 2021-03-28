import { Listbox, Transition } from "@headlessui/react";
import ArrowDown from "../icons/ArrowDown";
import { useState } from "react";

export default function Select({
  options,
  stateValue,
  setStateOnChange,
  ...props
}) {
  return (
    <Listbox
      as="div"
      className="space-y-2"
      value={stateValue}
      onChange={setStateOnChange}
      {...props}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <span className="inline-block w-full h-[50px] rounded">
              <Listbox.Button className="cursor-pointer relative w-full h-full rounded border border-theme-light-blue bg-white pl-5 pr-10 pt-[17px] pb-4 text-left text-xs focus:outline-none focus:ring-1 focus:ring-inset focus:ring-theme-primary transition ease-in-out duration-150">
                <span className="block truncate font-bold">
                  {stateValue?.label}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ArrowDown />
                </span>
              </Listbox.Button>
            </span>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute mt-2 w-full rounded-lg bg-white shadow-theme-lg"
            >
              <Listbox.Options
                static
                className="max-h-[191px] list-none rounded-lg divide-y divide-theme-light-blue font-bold text-xs text-theme-black overflow-auto focus:outline-none"
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option}
                    className="outline-none"
                  >
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active ? "text-theme-primary" : "text-theme-black"
                        } cursor-default select-none relative px-6 py-4`}
                      >
                        <span
                          className={`${
                            selected ? "text-theme-primary" : ""
                          } font-bold block truncate`}
                        >
                          {option.label}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
