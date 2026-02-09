export default function DailyQuote() {
  const quotes = [
    "오늘도 조용히, 천천히—커피처럼 따뜻하게.",
    "작은 리듬 하나가 하루의 분위기를 바꿉니다.",
    "서두르지 않아도 괜찮아요. 천천히 가도 충분합니다.",
    "마음이 복잡한 날엔, 음악을 낮게 틀어두세요.",
  ];

  const q = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border bg-white p-8 md:p-10">
        <p className="text-sm font-semibold">오늘의 한 문장</p>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {q}
        </p>
      </div>
    </section>
  );
}