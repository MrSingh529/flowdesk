import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#6366F1] text-sm font-medium mb-10 hover:underline">
          ← Back to FlowDesk
        </Link>
        <h1 className="font-display text-4xl font-800 text-[#0F172A] mb-6">Privacy Policy</h1>
        <p className="text-[#64748B] mb-4 text-sm">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-slate max-w-none space-y-6 text-[#334155]">
          <section>
            <h2 className="font-display text-xl font-700 text-[#0F172A] mb-2">1. What we collect</h2>
            <p>When you join the FlowDesk waitlist, we collect your email address. That&apos;s it. We do not collect any other personal information at this stage.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-700 text-[#0F172A] mb-2">2. How we use it</h2>
            <p>Your email is used solely to contact you about FlowDesk early access, product updates, and your waitlist status. We will never sell or share your email with third parties.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-700 text-[#0F172A] mb-2">3. Data storage</h2>
            <p>Your email is stored securely in Supabase, a GDPR-compliant database platform with servers in the EU. We apply standard security practices to protect your data.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-700 text-[#0F172A] mb-2">4. Your rights</h2>
            <p>You can request deletion of your data at any time by emailing us at <a href="mailto:hello@flowdesk.in" className="text-[#6366F1]">hello@flowdesk.in</a>. We&apos;ll remove your data within 7 business days.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-700 text-[#0F172A] mb-2">5. Contact</h2>
            <p>Questions? Reach us at <a href="mailto:hello@flowdesk.in" className="text-[#6366F1]">hello@flowdesk.in</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
