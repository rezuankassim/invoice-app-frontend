import { getInvoice, getInvoices } from "../../lib/api";
import Link from "next/link";
import ArrowLeft from "@/components/icons/ArrowLeft";
import Status from "@/components/invoice/Status";
import PrimaryButton from "@/components/PrimaryButton";
import DangerButton from "@/components/DangerButton";
import SecondaryButton from "@/components/SecondaryButton";
import Date from "@/components/Date";
import Currency from "@/components/Currency";
import Head from "next/head";

export default function Invoice({ invoice }) {
  return (
    <div>
      <Head>
        <title>Invoices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-16 pb-13.5">
        <Link href="/">
          <a className="flex items-center font-bold text-xs group hover:text-theme-indigo transition ease-in-out duration-300">
            <ArrowLeft className="text-theme-primary group-hover:text-theme-secondary" />

            <span className="ml-6">Go Back</span>
          </a>
        </Link>

        <div className="flex items-center justify-between mt-8 px-8 py-5 bg-white rounded-lg shadow-theme dark:bg-theme-navy-blue">
          <div className="flex items-center space-x-4 h-10 text-xs text-theme-gray">
            <span>Status</span>

            <Status status={invoice.status} />
          </div>

          <div className="flex items-center space-x-2">
            <SecondaryButton padding="pl-6 pr-[23px] pt-[17px] pb-4">
              Edit
            </SecondaryButton>

            <DangerButton padding="pl-6 pr-[23px] pt-[17px] pb-4">
              Delete
            </DangerButton>

            <PrimaryButton padding="pl-6 pr-[23px] pt-[17px] pb-4">
              Mark as Paid
            </PrimaryButton>
          </div>
        </div>

        <div className="p-12 mt-6 bg-white rounded-lg shadow-theme dark:bg-theme-navy-blue">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-bold text-theme-gray">
                #
                <span className="text-theme-black dark:text-white">
                  {invoice.id}
                </span>
              </h1>

              <p className="mt-2 font-medium text-xs text-theme-indigo dark:text-theme-light-blue">
                {invoice.description}
              </p>
            </div>

            <address className="font-medium text-2xs text-theme-indigo not-italic text-right dark:text-theme-light-blue">
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </address>
          </div>

          <div className="flex mt-[21px]">
            <div>
              <div>
                <p className="font-medium text-xs text-theme-indigo dark:text-theme-light-blue">
                  Invoice Date
                </p>

                <p className="mt-3 font-bold text-sm text-theme-black dark:text-white">
                  <Date dateString={invoice.createdAt} />
                </p>
              </div>

              <div className="mt-8">
                <p className="font-medium text-xs text-theme-indigo dark:text-theme-light-blue">
                  Payment Due
                </p>

                <p className="mt-3 font-bold text-sm text-theme-black dark:text-white">
                  <Date dateString={invoice.paymentDue} />
                </p>
              </div>
            </div>

            <div className="ml-25">
              <p className="font-medium text-xs text-theme-indigo dark:text-theme-light-blue">
                Bill To
              </p>

              <p className="mt-3 font-bold text-sm text-theme-black dark:text-white">
                {invoice.clientName}
              </p>

              <address className="mt-2 font-medium text-2xs text-theme-indigo not-italic text-left dark:text-theme-light-blue">
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </address>
            </div>

            <div className="ml-27.5">
              <p className="font-medium text-xs text-theme-indigo dark:text-theme-light-blue">
                Sent To
              </p>

              <p className="mt-3 font-bold text-sm text-theme-black dark:text-white">
                {invoice.clientEmail}
              </p>
            </div>
          </div>

          <div className="mt-[45px] px-8 pt-8 pb-6 bg-theme-lighter-gray rounded-t-lg dark:bg-theme-light-navy-blue">
            <table>
              <tr className="text-2xs text-theme-indigo dark:text-theme-light-blue">
                <th className="font-medium w-full text-left py-4">Item Name</th>
                <th className="font-medium px-5 py-4">QTY.</th>
                <th className="font-medium px-8 py-4 text-right">Price</th>
                <th className="font-medium pl-16 py-4 text-right">Total</th>
              </tr>

              {invoice.items.map((item) => (
                <tr className="font-bold text-xs" key={item.name}>
                  <td className="text-left py-4 dark:text-white">
                    {item.name}
                  </td>
                  <td className="text-center text-theme-indigo px-1 py-4 dark:text-theme-light-blue">
                    {item.quantity}
                  </td>
                  <td className="text-right text-theme-indigo px-8 py-4 whitespace-nowrap dark:text-theme-light-blue">
                    <Currency amount={item.price} />
                  </td>
                  <td className="text-right pl-10 py-4 whitespace-nowrap dark:text-white">
                    <Currency amount={item.total} />
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <div className="flex items-center justify-between px-8 py-6 bg-theme-dark-gray rounded-b-lg font-medium text-white dark:bg-theme-black">
            <span className="text-2xs">Amount Due</span>

            <span className="font-bold text-2xl">
              <Currency amount={invoice.total} className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const invoices = await getInvoices();

  const paths = invoices.map((invoice) => ({
    params: { id: invoice.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const invoice = await getInvoice(params.id);

  return {
    props: { invoice },
  };
}
