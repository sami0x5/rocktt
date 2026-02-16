import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-950 text-center">
      <h1 className="font-oswald text-9xl font-black text-zinc-800">404</h1>
      <h2 className="mb-4 font-oswald text-4xl font-bold uppercase text-white">
        Lost on the <span className="text-accent">Road?</span>
      </h2>
      <p className="mb-8 max-w-md text-zinc-400">
        The page you are looking for seems to have gone off-route. Let's get you
        back on track.
      </p>
      <div className="flex gap-4">
        <Button size="lg" variant="industrial" asChild>
          <Link href="/">RETURN HOME</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/inventory">VIEW INVENTORY</Link>
        </Button>
      </div>
    </div>
  );
}
