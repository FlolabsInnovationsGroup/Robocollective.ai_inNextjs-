import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <section className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-theme-muted">
          Contact Us
        </p>
        <h1 className="mb-6 text-3xl font-bold text-theme-heading sm:text-4xl">
          Contact Us RoboCollective.ai
        </h1>
        <p className="mb-6 text-theme-body">
          Questions? We&apos;ve got answers! We make it easy to find the perfect robot or
          accessories for your home or business. Whether you&apos;re curious about products,
          orders, shipping, or new innovations, we are here to help.
        </p>
        <h3 className="mb-2 text-xl font-semibold text-theme-heading">Use the contact form</h3>
        <p className="mb-6 text-theme-body">
          Please fill out the form below with as much detail as possible so we can respond
          quickly and accurately.
        </p>
        <h3 className="mb-2 text-xl font-semibold text-theme-heading">
          Why contact RoboCollective.ai?
        </h3>
        <ul className="mb-6 list-inside list-disc space-y-2 text-theme-body">
          <li>Expert guidance: Choose the right robots and accessories for your needs</li>
          <li>Friendly support: Assistance with orders, returns, and shipping inquiries</li>
          <li>Stay updated: Learn about our latest products, offers, and robotics news</li>
        </ul>
        <h3 className="mb-2 text-xl font-semibold text-theme-heading">What happens next?</h3>
        <ul className="mb-6 list-inside list-disc space-y-2 text-theme-body">
          <li>Our team typically responds within 24 to 48 business hours.</li>
          <li>
            You&apos;ll receive an automatic confirmation email letting you know we have received
            your message.
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-theme bg-theme-card p-6 shadow-sm sm:p-8">
        <h2 className="mb-2 text-2xl font-bold text-theme-heading">Use the contact form</h2>
        <p className="mb-8 text-theme-body">
          Please share the details of your question so we can route you to the right specialist.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
