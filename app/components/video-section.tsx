const VIDEOS = [
  {
    title: "☕ Morning Coffee Music Live #71",
    desc: "하루 종일 틀어놓기 좋은 감미로운 감성팝",
    href: "https://www.youtube.com/",
    tag: "LIVE",
  },
  {
    title: "Morning Regular (1H) • Soft Pop for a Peaceful Day",
    desc: "새벽에 조용히 시작하는 1시간 정규 플레이리스트",
    href: "https://www.youtube.com/",
    tag: "1H",
  },
  {
    title: "Cozy Café Mood • Soft Pop Mix",
    desc: "작업·공부·휴식에 어울리는 잔잔한 분위기",
    href: "https://www.youtube.com/",
    tag: "MIX",
  },
];

export default function VideoSection() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Latest Videos</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            최신 업로드/라이브를 빠르게 확인하세요.
          </p>
        </div>
        <a
          className="text-sm font-medium hover:underline"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          채널로 이동 →
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {VIDEOS.map((v) => (
          <a
            key={v.title}
            href={v.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border bg-white p-5 transition hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold">
                {v.tag}
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-black">
                열기 →
              </span>
            </div>

            <h3 className="mt-4 line-clamp-2 text-base font-semibold">
              {v.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {v.desc}
            </p>

            <div className="mt-4 rounded-xl bg-zinc-50 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-zinc-700">추천 사용 상황</p>
              <p className="mt-1">아침 준비 / 집중 작업 / 카페 BGM</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
