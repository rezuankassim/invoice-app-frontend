export default function Layout({ children }) {
  return (
    <div className="bg-theme-light-gray h-screen font-sans text-base">
      <main className="container mx-auto max-w-2.5xl">
        {children}
      </main>
    </div>
  )
}