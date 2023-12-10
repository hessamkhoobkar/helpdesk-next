export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 text-zinc-950 dark:text-white">
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl">{children}</div>
    </div>
  );
}
