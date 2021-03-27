import Head from "next/head";
import { getInvoicesSortedByPaymentDue } from "@/lib/api";
import ListingCard from "@/components/invoice/ListingCard";
import Plus from "@/components/icons/Plus";
import ArrowDown from "@/components/icons/ArrowDown";
import IllustrationEmpty from "@/components/icons/IllustrationEmpty";
import { Menu, Transition } from "@headlessui/react";
import PrimaryButton from "@/components/PrimaryButton";
import { useQuery } from "react-query";
import { useState } from "react";
import AddSlideModal from "@/components/AddSlideModal";

export default function Home({ allInvoicesData }) {
  const [statusFilter, setStatusFilter] = useState([]);
  const [showingAddModal, setShowingAddModal] = useState(false);
  const { data, status } = useQuery(
    ["invoices", { status: statusFilter }],
    getInvoicesSortedByPaymentDue,
    {
      initialData: allInvoicesData,
    }
  );

  const toggleStatusFilter = (statusString) => {
    if (statusFilter.includes(statusString)) {
      return setStatusFilter(
        statusFilter.filter((status) => status != statusString)
      );
    }

    return setStatusFilter([...statusFilter, statusString]);
  };

  return (
    <div>
      <Head>
        <title>Invoices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-18">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-3xl text-theme-black dark:text-white">
              Invoices
            </h1>
            <p className="text-xs text-theme-gray dark:text-theme-light-blue">
              {data.length
                ? `There are ${data.length} total invoices`
                : "No Invoices"}
            </p>
          </div>

          <div className="flex items-center space-x-10">
            <div className="relative">
              <Menu>
                {({ open }) => {
                  let css = open
                    ? "transform rotate-180 transition ease-in-out duration"
                    : "transition ease-in-out duration";

                  return (
                    <div>
                      <Menu.Button className="flex items-center space-x-4 focus:outline-none">
                        <span className="text-xs text-bold text-theme-black dark:text-white">
                          Filter by status
                        </span>

                        <ArrowDown className={css} />
                      </Menu.Button>

                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="absolute origin-bottom left-1/2 transform -translate-x-1/2 p-6 mt-[23px] w-48 bg-white rounded-lg shadow-theme-lg outline-none text-xs space-y-4 dark:bg-theme-light-navy-blue dark:shadow-theme-dark"
                        >
                          <label className="block items-center">
                            <input
                              type="checkbox"
                              className="border rounded-sm border-transparent bg-theme-light-blue text-theme-primary hover:border-theme-primary"
                              checked={statusFilter.includes("draft")}
                              onChange={(event) => toggleStatusFilter("draft")}
                            />

                            <span className="ml-[13px] font-bold text-xs">
                              Draft
                            </span>
                          </label>

                          <label className="block items-center">
                            <input
                              type="checkbox"
                              className="border rounded-sm border-transparent bg-theme-light-blue text-theme-primary hover:border-theme-primary"
                              checked={statusFilter.includes("pending")}
                              onChange={(event) =>
                                toggleStatusFilter("pending")
                              }
                            />

                            <span className="ml-[13px] font-bold text-xs">
                              Pending
                            </span>
                          </label>

                          <label className="block items-center">
                            <input
                              type="checkbox"
                              className="border rounded-sm border-transparent bg-theme-light-blue text-theme-primary hover:border-theme-primary"
                              checked={statusFilter.includes("paid")}
                              onChange={(event) => toggleStatusFilter("paid")}
                            />

                            <span className="ml-[13px] font-bold text-xs">
                              Paid
                            </span>
                          </label>
                        </Menu.Items>
                      </Transition>
                    </div>
                  );
                }}
              </Menu>
            </div>

            <PrimaryButton
              icon={<Plus />}
              className="bg-black"
              onClick={() => setShowingAddModal(true)}
            >
              New Invoice
            </PrimaryButton>
          </div>
        </div>

        <div>
          {data.length ? (
            <div className="mt-[65px] space-y-4 pb-18">
              {data.map((invoice) => (
                <ListingCard invoice={invoice} key={invoice.id} />
              ))}
            </div>
          ) : (
            <div className="container mx-auto max-w-[242px] pt-[141px] pb-[187px] text-center">
              <IllustrationEmpty />

              <p className="pt-16 font-bold text-xl">There is nothing here</p>

              <p className="max-w-[220px] pt-6 font-medium text-xs text-theme-gray dark:text-theme-light-blue">
                Create an invoice by clicking the{" "}
                <span className="font-bold">New Invoice</span> button and get
                started
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <AddSlideModal show={showingAddModal} setShow={setShowingAddModal} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allInvoicesData = await getInvoicesSortedByPaymentDue({
    pageParam: undefined,
    queryKey: ["invoices", { status: "all" }],
  });

  return {
    props: {
      allInvoicesData,
    },
  };
}
