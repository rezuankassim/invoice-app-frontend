import { useState, useEffect, useContext, createRef } from "react";
import { Transition } from "@headlessui/react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import ScrollContext from "../context/ScrollContext";

export default function AddSlideModal({ show, setShow }) {
  const { scroll, setScroll } = useContext(ScrollContext);

  useEffect(() => {
    if (show === true) {
      setScroll("h-screen overflow-y-hidden");
      document.querySelector("#slideOverModal").classList.add("inset-0");
    } else {
      setScroll("");

      setTimeout(() => {
        document.querySelector("#slideOverModal").classList.remove("inset-0");
      }, 500);
    }
  }, [show]);

  return (
    <section
      id="slideOverModal"
      className="fixed overflow-hidden"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Transition
          show={show}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-[0.4984] transition-opacity"
            aria-hidden="true"
          ></div>
        </Transition>

        <div>
          <Transition
            show={show}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="absolute inset-y-0 left-0 max-w-full flex"
          >
            <div className="relative w-screen max-w-[719px]">
              <div className="relative w-full h-screen flex flex-col pl-[159px] pr-14 pt-14 pb-6 bg-white rounded-r-2.5xl shadow-xl">
                <div className="px-4 sm:px-6">
                  <h2
                    className="text-2xl font-bold text-theme-black"
                    id="slide-over-title"
                  >
                    New Invoice
                  </h2>
                </div>

                <div className="mt-6 relative flex-1 px-4 max-h-[778px] overflow-y-scroll sm:px-6">
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div
                      className="h-[1137px] border-2 border-dashed border-gray-200"
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-end space-x-2 w-full px-14 py-[31px] rounded-r-2.5xl bg-white">
                  <SecondaryButton
                    padding="pl-[25.5px] pr-[26.5px] pt-[17px] pb-4"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </SecondaryButton>

                  <PrimaryButton padding="px-6 pt-[17px] pb-4">
                    Save Changes
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
}
