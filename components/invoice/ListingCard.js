import Date from "@/components/Date";
import Status from "./Status";
import Currency from "@/components/Currency";
import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";

export default function ListingCard({ invoice }) {
  return (
    <Link href={`/invoices/${invoice.id}`}>
      <a className="inline-block w-full group transition ease-in-out duration-300">
        <div className="flex items-center justify-between pl-8 pr-6 py-4 rounded-lg bg-white border border-transparent shadow-theme text-xs group-hover:border-theme-primary dark:bg-theme-navy-blue">
          <div>
            <span className="font-bold text-theme-indigo">
              #
              <span className="text-theme-black dark:text-white">
                {invoice.id}
              </span>
            </span>

            <span className="ml-[43px] text-theme-gray dark:text-theme-light-blue">
              Due&nbsp;&nbsp;
              <span className="text-theme-indigo dark:text-theme-light-blue">
                <Date dateString={invoice.paymentDue} />
              </span>
            </span>

            <span className="ml-[45px] text-theme-indigo dark:text-white">
              {invoice.clientName}
            </span>
          </div>

          <div className="flex items-center">
            <span className="font-bold text-base text-theme-black mr-10">
              <Currency amount={invoice.total} />
            </span>

            <div className="w-26 mr-5">
              <Status status={invoice.status} />
            </div>

            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      </a>
    </Link>
  );
}
