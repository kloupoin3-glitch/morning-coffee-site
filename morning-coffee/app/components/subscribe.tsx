export default function Subscribe() {
  return (
    <section id="subscribe" className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border bg-white p-8 md:p-10">
        <h2 className="text-2xl font-bold">Subscribe</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          구독하면 매일 아침, 더 편안한 플레이리스트로 찾아갈게요.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            유튜브 채널로 이동 →
          </a>

          <a
            href="#videos"
            className="inline-flex items-center rounded-full border bg-white px-6 py-3 text-sm font-semibold hover:bg-zinc-50"
          >
            먼저 영상 보기
          </a>
        </div>

        <div className="mt-6 rounded-2xl bg-zinc-50 p-6">
          <p className="text-sm font-semibold">고정 멘트(라이브 → VOD)</p>
          <p className="mt-2 text-sm text-muted-foreground">
            라이브로 함께해주셔서 감사합니다. 지금은 VOD로 편안히 이어집니다 ☕
          </p>
        </div>
      </div>
    </section>
  );
}