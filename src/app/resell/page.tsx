import Link from "next/link";

export default function ResellPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-theme-heading sm:text-4xl">Resell Program</h1>
      <p className="mt-6 text-lg leading-relaxed text-theme-body">
        Resell your underused robots to trusted buyers. Unlock capital and keep your fleet up to
        date. We connect sellers with vetted buyers and facilitate the transition of robotics
        equipment to new homes.
      </p>
      <ul className="mt-6 space-y-3 text-theme-body">
        <li>• Fair valuation and transparent process</li>
        <li>• Connect with qualified buyers</li>
        <li>• Simplify upgrades and fleet refresh</li>
      </ul>
      <div className="mt-10">
        <Link
          href="/contact?subject=resell"
          className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Learn more about reselling
        </Link>
      </div>
    </div>
  );
}
