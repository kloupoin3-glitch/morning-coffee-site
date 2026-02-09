export default function Subscribe() {
  return (
    <section id="subscribe" className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border bg-white p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold">Subscribe</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          새로운 음악과 라이브 소식을 받아보세요.
        </p>

        <a
          href="https://www.youtube.com/@YOUR_CHANNEL"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          유튜브 구독하기 ☕
        </a>
      </div>
    </section>
  );
}
