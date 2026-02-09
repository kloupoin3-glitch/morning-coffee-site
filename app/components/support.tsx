export default function Support() {
  return (
    <section id="support" className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border bg-white p-8 md:p-10">
        <h2 className="text-2xl font-bold">Support</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          응원은 큰 힘이 됩니다. 댓글/좋아요/공유만으로도 충분해요.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <p className="text-sm font-semibold">💬 댓글</p>
            <p className="mt-2 text-sm text-muted-foreground">
              “오늘도 편안했어요” 한 줄이 가장 큰 응원이에요.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-sm font-semibold">👍 좋아요</p>
            <p className="mt-2 text-sm text-muted-foreground">
              알고리즘에 긍정 신호가 돼요.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-sm font-semibold">🔁 공유</p>
            <p className="mt-2 text-sm text-muted-foreground">
              필요한 사람에게 조용히 전달해 주세요.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-zinc-50 p-6">
          <p className="text-sm font-semibold">라이브 → VOD 전환 고정 멘트</p>
          <p className="mt-2 text-sm text-muted-foreground">
            라이브로 함께해주셔서 감사합니다. 지금은 VOD로 편안히 이어집니다 ☕
          </p>
        </div>
      </div>
    </section>
  );
}
