import Date from '@/components/Date'
import Status from './Status'
import Currency from '@/components/Currency'

export default function ListingCard({invoice}) {
  return (
    <div className="flex items-center justify-between pl-8 pr-6 py-4 rounded-lg bg-white shadow-theme text-xs">
      <div>
        <span className="font-bold text-theme-indigo">#<span className="text-theme-black">{invoice.id}</span></span>

        <span className="ml-[43px] text-theme-gray">
          Due&nbsp;&nbsp;<span className="text-theme-indigo"><Date dateString={invoice.paymentDue} /></span>
        </span>

        <span className="ml-[45px] text-theme-indigo">{invoice.clientName}</span>
      </div>

      <div className="flex items-center">
        <span className="font-bold text-base text-theme-black mr-10"><Currency amount={invoice.total} /></span>

        <div className="w-26 mr-5">
          <Status status={invoice.status} />
        </div>

        <button>
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </button>
      </div>
    </div>
  )
}