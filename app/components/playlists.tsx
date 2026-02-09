const LISTS = [
  {
    title: "Soft Pop for a Peaceful Day",
    desc: "하루 종일 틀어두기 좋은 감성 팝",
    items: ["Morning", "Work", "Study", "Relax"],
  },
  {
    title: "Morning Regular (1H)",
    desc: "새벽 4시—짧고 단정한 1시간 플레이리스트",
    items: ["1 Hour", "Clean Mood", "Focus"],
  },
  {
    title: "Cozy Café Mood",
    desc: "카페에서 흘러나오는 듯한 잔잔한 분위기",
    items: ["Café", "Warm", "Gentle"],
  },
];

export default function Playlists() {
  return (
    <section id="playlists" className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold">Playlists</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        목적에 맞게 골라 틀어두면 하루가 편해져요.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {LISTS.map((p) => (
          <div key={p.title} className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.items.map((x) => (
                <span
                  key={x}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium"
                >
                  {x}
                </span>
              ))}
            </div>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              재생목록 보기 <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
