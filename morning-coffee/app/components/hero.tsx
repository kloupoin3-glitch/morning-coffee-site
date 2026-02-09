export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <div className="rounded-3xl border bg-white p-8 md:p-10">
        <p className="text-sm font-medium text-muted-foreground">
          Soft Pop for a Peaceful Day
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Morning Coffee Music ☕
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          아침을 준비할 때도, 집중이 필요할 때도—조용히 틀어두기 좋은 감성 팝을
          모았습니다. 라이브와 정규 플레이리스트로 하루의 흐름을 편안하게
          이어가요.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
  <a
    href="https://youtu.be/XkTgg11OXp8"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800"
  >
    처음 오신 분께 추천드리는 영상
  </a>

  <a
    href="#subscribe"
    className="rounded-xl border px-5 py-3 text-sm hover:bg-zinc-50"
  >
    구독 안내
  </a>
</div>


        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#videos"
            className="inline-flex items-center rounded-full border bg-white px-5 py-2 text-sm font-semibold hover:bg-zinc-50"
          >
            Videos 보기 →
          </a>
          <a
            href="#subscribe"
            className="inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            구독하기
          </a>
        </div>
      </div>
    </section>
  );
}