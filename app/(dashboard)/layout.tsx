import AppNavbar from "./_components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 text-zinc-950 dark:text-white">
      <AppNavbar />
      {children}
    </div>
  );
}
