// app/components/hero.tsx
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
      <div className="rounded-3xl border bg-white p-8 md:p-12">
        <p className="text-sm text-muted-foreground">
          처음 오신 분을 위한 안내
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Morning Coffee Music ☕
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          조용히 틀어두기 좋은 감성 팝 채널입니다.
          <br className="hidden md:block" />
          아래 순서대로 살펴보시면 가장 편합니다.
        </p>

        {/* 1-2-3 안내 카드 */}
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border p-4 text-sm">
            <p className="font-medium">① 처음이라면</p>
            <p className="mt-1 text-muted-foreground">
              채널 분위기를 가장 잘 느낄 수 있는 추천 영상
            </p>
          </div>

          <div className="rounded-xl border p-4 text-sm">
            <p className="font-medium">② 하루 종일 틀어두기</p>
            <p className="mt-1 text-muted-foreground">
              장시간 라이브 모아보기
            </p>
          </div>

          <div className="rounded-xl border p-4 text-sm">
            <p className="font-medium">③ 짧고 단정하게</p>
            <p className="mt-1 text-muted-foreground">
              1시간 정규 플레이리스트
            </p>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="mt-8 flex flex-wrap gap-3">
          {/* ① 대표 플레이리스트 */}
          <a
            href="https://youtu.be/XkTgg11OXp8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800"
          >
            ① 추천 영상 바로보기 →
          </a>

          {/* ② 라이브 모아보기 */}
          <a
            href="https://www.youtube.com/playlist?list=PL2WCVxQKi_GV4VaEtgUpNRIdNM5EmaHit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-5 py-3 text-sm hover:bg-zinc-50"
          >
            ② 라이브 모아보기 →
          </a>

          {/* ③ 정규 1시간 대표 */}
          <a
            href="https://youtu.be/fJA2hmT-OCc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-5 py-3 text-sm hover:bg-zinc-50"
          >
            ③ 정규 1시간 대표 →
          </a>

          {/* 구독 */}
          <a
            href="#subscribe"
            className="rounded-xl border px-5 py-3 text-sm hover:bg-zinc-50"
          >
            구독 안내
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          ※ 모든 영상은 새 창으로 열립니다. 편하게 둘러보세요.
        </p>
      </div>
    </section>
  )
}
