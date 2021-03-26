import Sidebar from "./Sidebar"

export default function Layout({ children }) {
  return (
    <div className="flex bg-theme-light-gray font-sans text-base">
      <Sidebar />

      <main className="flex-grow">
        <div className="w-full h-full">
          <div className="container mx-auto max-w-2.5xl h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}