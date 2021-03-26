import Image from 'next/image'

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex flex-col items-center justify-between pb-6 w-[103px] h-screen rounded-r-2.5xl bg-theme-dark-gray">
      <div className="relative flex flex-col items-center justify-end h-[103px] w-[103px] bg-theme-primary rounded-r-2.5xl">
        <div className="w-full h-1/2 rounded-tl-2.5xl rounded-br-2.5xl bg-theme-secondary"></div>

        <svg className="absolute m-auto inset-0" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6942 0.292255L20 19L29.3058 0.292255C35.6645 3.64081 40 10.3141 40 18C40 29.0457 31.0457 38 20 38C8.9543 38 0 29.0457 0 18C0 10.3141 4.33546 3.64081 10.6942 0.292255Z" fill="white"/>
        </svg>
      </div>

      <div className="flex flex-col w-full h-[117px] items-center justify-between">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z" fill="#7E88C3" fill-rule="nonzero"/></svg>

        <div className="w-full h-px bg-theme-grayer"></div>

        <div className="relative w-10 h-10 rounded-full">
          <Image src="/assets/image-avatar.jpg" layout="fill" objectFit="contain" className="rounded-full" />
        </div>
      </div>
    </aside>
  )
}