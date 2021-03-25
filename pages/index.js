import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Invoices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-18">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-3xl text-theme-black">Invoices</h1>
            <p className="text-xs text-theme-gray">There are 7 total invoices</p>
          </div>

          <div className="flex items-center space-x-10">
            <button className="flex items-center space-x-4">
              <span className="text-xs">Filter by status</span>

              <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </button>
            

            <button className="flex items-center space-x-4 pl-2 py-2 pr-[15px] rounded-3xl bg-theme-primary font-bold text-xs text-white">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg>
              </div>

              <span>New Invoice</span>
            </button>
          </div>
        </div>

        <div className="mt-[65px] space-y-4">
          <div className="flex items-center justify-between pl-8 pr-6 py-4 rounded-lg bg-white shadow-theme text-xs">
            <div>
              <span className="font-bold text-theme-indigo">#<span className="text-theme-black">RT3080</span></span>

              <span className="ml-[43px] text-theme-gray">Due <span className="text-theme-indigo">19 Aug 2021</span></span>

              <span className="ml-[45px] text-theme-indigo">Jensen Huang</span>
            </div>

            <div className="flex items-center">
              <span className="font-bold text-base text-theme-black mr-10">£ 1,800.90</span>

              <div className="w-26 mr-5">
                <span className="pl-4.5 pr-[17px] pt-[13px] pb-3 w-full flex items-center justify-center space-x-2 rounded-md bg-theme-green bg-opacity-[0.0571] text-theme-green">
                  <div className="w-2 h-2 bg-theme-green rounded-full"></div>

                  <span className="font-bold">Paid</span>
                </span>
              </div>

              <button>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
