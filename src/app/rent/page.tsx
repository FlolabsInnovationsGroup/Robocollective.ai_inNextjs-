import Link from "next/link";

export default function RentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-theme-heading sm:text-4xl">Rent</h1>
      <p className="mt-6 text-lg leading-relaxed text-theme-body">
        Rent the robots you need for pilots, events, or seasonal peaks. Scale your automation
        without long-term commitments. Our flexible rental programs let you deploy cutting-edge
        robotics for short-term projects, demonstrations, or proof-of-concept trials.
      </p>
      <ul className="mt-6 space-y-3 text-theme-body">
        <li>• Short-term and extended rental options</li>
        <li>• Full setup and technical support included</li>
        <li>• Ideal for events, pilots, and research</li>
      </ul>
      <div className="mt-10">
        <Link
          href="/contact?subject=rent"
          className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Request rental info
        </Link>
      </div>
    </div>
  );
}
