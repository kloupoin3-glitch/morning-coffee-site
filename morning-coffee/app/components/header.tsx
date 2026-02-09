export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">☕</span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Morning Coffee Music</p>
            <p className="text-xs text-muted-foreground">Soft Pop for a Peaceful Day</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a className="hover:underline" href="#videos">Videos</a>
          <a className="hover:underline" href="#playlists">Playlists</a>
          <a className="hover:underline" href="#subscribe">Subscribe</a>
          <a className="hover:underline" href="#support">Support</a>
        </nav>

        <a
          href="#subscribe"
          className="rounded-full border bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
