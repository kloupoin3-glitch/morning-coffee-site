export default function VideoSection() {
  const videos = [
    {
      title: "Morning Live",
      desc: "장시간 라이브 음악을 모아두었습니다.\n편한 시간에 이어서 들으실 수 있어요.",
      href: "https://www.youtube.com/playlist?list=PL2WCVxQKi_GV4VaEtgUpNRIdNM5EmaHit",
    },
    {
      title: "Morning Regular (1H)",
      desc: "많은 분들이 편안하게 들으신\n1시간 정규 음악입니다.",
      href: "https://youtu.be/fJA2hmT-OCc",
    },
    {
      title: "Soft Pop Playlist",
      desc: "아침과 작업 시간에 잘 어울리는\n대표 플레이리스트입니다.",
      href: "https://youtu.be/XkTgg11OXp8",
    },
  ]

  return (
    <section id="videos" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-2xl font-bold">영상</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((v) => (
          <a
            key={v.title}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border p-6 transition hover:bg-zinc-50"
          >
            <h3 className="text-lg font-semibold">{v.title}</h3>
            <p className="mt-3 whitespace-pre-line text-sm text-zinc-600">
              {v.desc}
            </p>
            <div className="mt-4 text-sm font-medium text-zinc-800">
              유튜브에서 보기 →
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
