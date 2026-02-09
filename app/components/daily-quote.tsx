export default function DailyQuote() {
  const quotes = [
    "오늘도 조용히, 천천히—커피처럼 따뜻하게.",
    "작은 리듬 하나가 하루의 분위기를 바꿉니다.",
    "서두르지 않아도 괜찮아요. 천천히 가도 충분합니다.",
    "마음이 복잡한 날엔, 음악을 낮게 틀어두세요.",
  ];

  const q = quotes[new Date().getDay() % quotes.length];

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border bg-zinc-900 p-8 text-white md:p-10">
        <p className="text-sm text-white/70">Daily Quote</p>
        <p className="mt-3 text-2xl font-semibold leading-relaxed md:text-3xl">
          “{q}”
        </p>
        <p className="mt-4 text-sm text-white/70">
          오늘의 분위기를 잔잔하게 만들어 줄 한 줄.
        </p>
      </div>
    </section>
  );
}
