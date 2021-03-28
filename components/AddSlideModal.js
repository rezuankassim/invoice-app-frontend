import { useState, useEffect, useContext, createRef } from "react";
import { Transition } from "@headlessui/react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import ScrollContext from "../context/ScrollContext";
import Group from "./forms/Group";
import Text from "./forms/Text";
import Delete from "@/components/icons/Delete.js";
import Select from "./forms/Select";

export default function AddSlideModal({ show, setShow }) {
  const { scroll, setScroll } = useContext(ScrollContext);
  const [showGradient, setShowGradient] = useState(true);
  const [paymentTerms, setPaymentTerms] = useState();
  const [items, setItems] = useState([]);
  const slide = createRef();
  const paymentTermsOptions = [
    { value: 1, label: "Net 1 Day" },
    { value: 7, label: "Net 7 Days" },
    { value: 14, label: "Net 14 Days" },
    { value: 30, label: "Net 30 Days" },
  ];

  useEffect(() => {
    if (show === true) {
      setScroll("h-screen overflow-y-hidden");
      document.querySelector("#slideOverModal").classList.add("inset-0");
      console.log(slide.current.querySelector("#content"));
    } else {
      setScroll("");

      setTimeout(() => {
        document.querySelector("#slideOverModal").classList.remove("inset-0");
      }, 500);
    }
  }, [show]);

  const addItem = () => {
    const item = {
      name: "",
      quantity: "",
      price: "",
      total: "",
    };

    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    items.splice(index);

    setItems([...items]);
  };

  return (
    <section
      id="slideOverModal"
      className="fixed overflow-hidden"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      ref={slide}
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
            className="absolute overflow-hidden inset-y-0 left-0 max-w-full flex"
          >
            <div className="relative overflow-hidden w-screen max-w-[719px]">
              <div className="relative overflow-hidden w-full h-screen flex flex-col pl-[156px] pr-12 pt-14 pb-6 bg-white rounded-r-2.5xl shadow-xl">
                <div>
                  <h2
                    className="text-2xl font-bold text-theme-black"
                    id="slide-over-title"
                  >
                    New Invoice
                  </h2>
                </div>

                <div
                  className="mt-12 relative flex-1 pl-4 max-h-[550px] overscroll-auto overflow-auto"
                  onScroll={(event) =>
                    event.target.scrollTop > 0
                      ? setShowGradient(false)
                      : setShowGradient(true)
                  }
                >
                  <div className="mr-4 absolute inset-0 gap-y-12">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <p className="font-bold text-xs text-theme-primary">
                          Bill From
                        </p>
                      </div>

                      <div className="col-span-6">
                        <Group
                          forId="bill_from_street_address"
                          label="Street Address"
                        >
                          <Text
                            id="bill_from_street_address"
                            name="bill_from_street_address"
                          />
                        </Group>
                      </div>

                      <div className="col-span-2">
                        <Group forId="bill_from_city" label="City">
                          <Text id="bill_from_city" name="bill_from_city" />
                        </Group>
                      </div>

                      <div className="col-span-2">
                        <Group forId="bill_from_post_code" label="Post Code">
                          <Text
                            id="bill_from_post_code"
                            name="bill_from_post_code"
                          />
                        </Group>
                      </div>

                      <div className="col-span-2">
                        <Group forId="bill_from_country" label="Country">
                          <Text
                            id="bill_from_country"
                            name="bill_from_country"
                          />
                        </Group>
                      </div>
                    </div>

                    <div className="mt-12 grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <p className="font-bold text-xs text-theme-primary">
                          Bill To
                        </p>
                      </div>

                      <div className="col-span-6">
                        <Group forId="client_name" label="Client's Name">
                          <Text id="client_name" name="client_name" />
                        </Group>
                      </div>

                      <div className="col-span-6">
                        <Group forId="client_email" label="Client's Email">
                          <Text id="client_email" name="client_email" />
                        </Group>
                      </div>

                      <div className="col-span-6">
                        <Group
                          forId="bill_to_street_address"
                          label="Street Address"
                        >
                          <Text
                            id="bill_to_street_address"
                            name="bill_to_street_address"
                          />
                        </Group>
                      </div>

                      <div className="col-span-2">
                        <Group forId="bill_to_city" label="City">
                          <Text id="bill_to_city" name="bill_to_city" />
                        </Group>
                      </div>

                      <div className="col-span-2">
                        <Group forId="bill_to_post_code" label="Post Code">
                          <Text
                            id="bill_to_post_code"
                            name="bill_to_post_code"
                          />
                        </Group>
                      </div>

                      <div className="col-span-2">
                        <Group forId="bill_to_country" label="Country">
                          <Text id="bill_to_country" name="bill_to_country" />
                        </Group>
                      </div>
                    </div>

                    <div className="mt-12 grid grid-cols-6 gap-6">
                      <div className="col-span-3">
                        <Group forId="invoice_date" label="Invoice Date">
                          <Text id="invoice_date" name="invoice_date" />
                        </Group>
                      </div>

                      <div className="col-span-3">
                        <Group forId="payment_terms" label="Payment Terms">
                          <Select
                            id="payment_terms"
                            name="payment_terms"
                            options={paymentTermsOptions}
                            stateValue={paymentTerms}
                            setStateOnChange={setPaymentTerms}
                          />
                        </Group>
                      </div>
                    </div>

                    <div className="mt-8 pb-4">
                      <p className="font-bold text-lg text-theme-blueish-gray">
                        Item List
                      </p>

                      <table className="mt-2 w-full">
                        <thead>
                          <th className="pr-4 pt-2 pb-2 w-[231px] font-medium text-xs text-theme-indigo text-left">
                            Item Name
                          </th>

                          <th className="pr-4 pt-2 pb-2 w-[70px] font-medium text-xs text-theme-indigo text-left">
                            Qty.
                          </th>

                          <th className="pr-4 pt-2 pb-2 w-[117px] font-medium text-xs text-theme-indigo text-left">
                            Price
                          </th>

                          <th className="pr-4 pt-2 pb-2 w-[73px] font-medium text-xs text-theme-indigo text-left">
                            Total
                          </th>

                          <th className="pt-2 pb-2 w-[39px] font-medium text-xs text-theme-indigo text-right"></th>
                        </thead>

                        <tbody>
                          {items.map((item, index) => (
                            <tr>
                              <td className="pr-4 pt-2 pb-2">
                                <Text
                                  id={`item_name_${index}`}
                                  name={`item_name_${index}`}
                                />
                              </td>

                              <td className="pr-4 pt-2 pb-2">
                                <Text
                                  id={`item_quantity_${index}`}
                                  name={`item_quantity_${index}`}
                                />
                              </td>

                              <td className="pr-4 pt-2 pb-2">
                                <Text
                                  id={`item_price_${index}`}
                                  name={`item_price_${index}`}
                                />
                              </td>

                              <td className="pr-4 pt-2 pb-2 font-bold text-xs text-theme-gray">
                                {item.total}
                              </td>

                              <td className="pt-2 pb-2 text-right">
                                <button
                                  type="button"
                                  onClick={() => deleteItem(index)}
                                >
                                  <Delete />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <SecondaryButton
                        className="mt-2 w-full"
                        padding="pt-[17px] pb-4 pl-[166px] pr-[165px]"
                        onClick={() => addItem()}
                      >
                        <p className="w-[173px] text-center">+ Add New Item</p>
                      </SecondaryButton>
                    </div>
                  </div>
                </div>

                <Transition show={showGradient}>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-theme-transparent to-theme-transparent-darker w-full h-[200px] mb-[51px]"></div>
                </Transition>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between space-x-2 w-full pl-[159px] pr-16 py-[31px] rounded-r-2.5xl bg-white">
                  <SecondaryButton
                    padding="pl-[25.5px] pr-[26.5px] pt-[17px] pb-4"
                    onClick={() => setShow(false)}
                  >
                    Discard
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
