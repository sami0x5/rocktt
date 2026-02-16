export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-zinc-800 border-t-accent" />
        <p className="mt-4 animate-pulse font-oswald text-lg font-bold uppercase tracking-widest text-zinc-500">
          Loading...
        </p>
      </div>
    </div>
  );
}
