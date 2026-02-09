// app/components/hero.tsx
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
      <div className="rounded-3xl border bg-white p-8 md:p-12">
        <p className="text-sm text-muted-foreground">Soft Pop for a Peaceful Day</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Morning Coffee Music ☕
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          아침을 준비할 때, 집중이 필요할 때—조용히 틀어두기 좋은 감성 팝을 모았습니다.
          <br className="hidden md:block" />
          라이브와 정규 플레이리스트로 하루의 흐름을 편안하게 이어가세요.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {/* 1) 대표 플레이리스트 */}
          <a
            href="https://youtu.be/XkTgg11OXp8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800"
          >
            처음 오신 분께 추천드리는 영상 →
          </a>

          {/* 2) 라이브 모아보기(플레이리스트) */}
          <a
            href="https://www.youtube.com/playlist?list=PL2WCVxQKi_GV4VaEtgUpNRIdNM5EmaHit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-5 py-3 text-sm hover:bg-zinc-50"
          >
            라이브 모아보기 →
          </a>

          {/* 3) 정규 1시간 대표 영상 */}
          <a
            href="https://youtu.be/fJA2hmT-OCc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-5 py-3 text-sm hover:bg-zinc-50"
          >
            정규 1시간 대표 영상 →
          </a>

          {/* 4) 구독 섹션으로 이동 */}
          <a
            href="#subscribe"
            className="rounded-xl border px-5 py-3 text-sm hover:bg-zinc-50"
          >
            구독 안내
          </a>
        </div>

        {/* 작은 안내 문구 (신뢰 + 친절) */}
        <p className="mt-4 text-xs text-muted-foreground">
          ※ 모든 버튼은 새 창으로 열립니다. 편하게 둘러보세요.
        </p>
      </div>
    </section>
  )
}
