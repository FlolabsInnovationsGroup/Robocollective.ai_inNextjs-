import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/50 dark:border-white/10 dark:bg-gray-900/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/assets/dark/Logo 4 dark.png"
                alt="RoboCollective.ai logo"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/assets/light/Logo 4 light.png"
                alt="RoboCollective.ai logo"
                className="hidden h-10 w-auto dark:block"
              />
            </Link>
            <p className="mt-4 max-w-sm text-theme-body">
              Robots, automation, and experience design built for teams that demand reliability and
              velocity.
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div>
              <strong className="block text-theme-heading">Explore</strong>
              <Link href="/#services" className="mt-2 block text-theme-body hover:text-theme-heading">
                Services
              </Link>
              <Link href="/shop" className="block text-theme-body hover:text-theme-heading">
                Products
              </Link>
              <Link href="/#blog" className="block text-theme-body hover:text-theme-heading">
                Latest posts
              </Link>
            </div>
            <div>
              <strong className="block text-theme-heading">Company</strong>
              <Link href="/about" className="mt-2 block text-theme-body hover:text-theme-heading">
                About
              </Link>
              <Link href="/rent" className="block text-theme-body hover:text-theme-heading">
                Rent
              </Link>
              <Link href="/resell" className="block text-theme-body hover:text-theme-heading">
                Resell
              </Link>
              <Link href="/contact" className="block text-theme-body hover:text-theme-heading">
                Contact
              </Link>
              <a
                href="https://hephaestus.international/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-theme-body hover:text-theme-heading"
              >
                Internships
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-white/10 md:flex-row">
          <span className="text-theme-muted">© {new Date().getFullYear()} RoboCollective.ai</span>
          <div className="flex gap-6">
            <Link href="/about#privacy" className="text-theme-muted hover:text-theme-heading">
              Privacy
            </Link>
            <a href="mailto:sales@robocollective.ai" className="text-theme-muted hover:text-theme-heading">
              sales@robocollective.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
