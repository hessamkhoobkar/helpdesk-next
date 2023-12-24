import AppNavbar from "./_components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-content2 text-foreground dark:bg-background dark:text-foreground">
      <AppNavbar />
      <main className="w-full max-w-7xl mx-auto min-h-screen px-6 py-4">
        {children}
      </main>
    </div>
  );
}
