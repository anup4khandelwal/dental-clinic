export function ContactForm() {
  return (
    <form className="grid gap-4" aria-label="Contact form">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="h-11 rounded-xl border border-slate-200 px-4 text-sm"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 9XXXXXXXXX"
          className="h-11 rounded-xl border border-slate-200 px-4 text-sm"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your concern"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(74,166,199,0.28)] transition hover:bg-[color:var(--brand-blue-strong)]"
      >
        Send Message
      </button>
      <p className="text-xs text-slate-500">
        This form is a demo. Hook it to your backend or a service like Formspree.
      </p>
    </form>
  );
}
