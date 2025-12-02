export function LayoutPlan() {
  return (
    <section className="py-14 bg-[#f5f1e8]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex items-end justify-between mb-5.5">
          <h2 className="text-[28px] m-0">Layout Plan</h2>
          {/* <span className="inline-flex items-center gap-2 bg-[#fde7e8] text-[#922e30] rounded-full px-3 py-1.5 font-bold text-xs">
            For indicative purpose
          </span> */}
        </div>
        <img
          src="/3bhk-builder-floor-faridabad-2/Plan.jpg"
          alt="Gokulam Layout Plan"
          className="rounded-2xl border border-[#e5e7eb] w-full"
        />
        {/* <div className="text-[#64748b] text-xs mt-3">
          Replace <code className="bg-gray-100 px-1.5 py-0.5 rounded">Plan.jpg</code> with the actual layout plan image
          path when deploying.
        </div> */}
      </div>
    </section>
  )
}
