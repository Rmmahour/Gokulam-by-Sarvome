export function FAQ() {
  const faqs = [
    {
      question: "What is the configuration?",
      answer:
        "Premium 3BHK builder floors with lift & covered parking. Exact unit sizes and availability can be shared on enquiry.",
    },
    {
      question: "Is the project RERA-registered?",
      answer:
        "Yes, Gokulam by Sarvome follows applicable RERA norms. Please request the latest RERA details & ID via the brochure.",
    },
    {
      question: "Do you offer home loan assistance?",
      answer: "Yes, loan assistance is available through leading banking partners subject to eligibility.",
    },
    {
      question: "Can I schedule a site visit?",
      answer: "Absolutely. Share your preferred date/time and we will confirm your appointment.",
    },
  ]

  return (
    <section className="py-14 bg-[#f5f1e8]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex items-end justify-between mb-5.5">
          <h2 className="text-[28px] m-0">FAQs</h2>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white border border-[#e5e7eb] rounded-[14px] p-3.5 group">
              <summary className="font-bold cursor-pointer list-none">{faq.question}</summary>
              <p className="mt-2 text-[#64748b]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
