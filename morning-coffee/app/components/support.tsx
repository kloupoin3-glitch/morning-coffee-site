export default function Support() {
  const SUPPORT_URL = "" // 비워두면 버튼 숨김

  return (
    <section id="support" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-6 text-2xl font-bold">후원</h2>

      <div className="rounded-2xl border p-8">
        <p className="text-zinc-700">
          모닝커피 음악은 유튜브를 통해 무료로 감상하실 수 있습니다.
          <br />
          시청과 구독만으로도 충분히 큰 힘이 됩니다.
        </p>

        <p className="mt-4 text-zinc-700">
          조용히 응원의 마음을 전하고 싶으신 분들을 위해
          작은 후원 공간을 마련했습니다.
          <br />
          참여는 언제나 <strong>선택</strong>이며, 부담 없이 이용해주세요.
        </p>

        <div className="mt-6">
          {SUPPORT_URL ? (
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800"
            >
              조용히 응원하기
            </a>
          ) : (
            <span className="text-sm text-zinc-500">
              후원 안내는 준비 중입니다. (유튜브 시청이 가장 큰 응원입니다 ☕)
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
