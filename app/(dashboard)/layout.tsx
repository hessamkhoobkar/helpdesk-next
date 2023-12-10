import AppNavbar from "./_components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 text-zinc-950 dark:text-white">
      <AppNavbar />

      <main className="w-full max-w-5xl mx-auto min-h-screen px-6 py-4">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl">
          {children}
        </div>
      </main>
    </div>
  );
}
