export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl">{children}</div>
  );
}
