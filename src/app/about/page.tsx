export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <article className="space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-theme-heading sm:text-4xl">
            About Us RoboCollective.ai
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-theme-body">
            RoboCollective.ai, founded in 2024, was created with a simple belief: robotics should
            feel natural, useful, and supportive in everyday life.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-theme-heading">Who We Are</h2>
          <p className="mt-3 leading-relaxed text-theme-body">
            We are a team of innovators, engineers, and creators passionate about bringing robotics
            out of the future and into the present. Our founder, John Hazlewood, started
            RoboCollective.ai to make robotics practical, accessible, and designed for real people,
            not just industries or labs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-heading">Mission & Vision</h2>
          <ul className="mt-3 space-y-3 text-theme-body">
            <li className="flex gap-2">
              <span className="font-semibold text-theme-heading">Mission:</span>
              Free people and teams from repetitive tasks so they can focus on what really matters.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-theme-heading">Vision:</span>
              A world where everyday robotics naturally fits into home, work, and life.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-heading">What We Offer</h2>
          <p className="mt-3 leading-relaxed text-theme-body">
            From industrial arms to service and educational robots, we provide end-to-end support:
            selection, deployment, and ongoing maintenance. We also offer rental programs and resale
            services for underused equipment.
          </p>
        </section>

        <section id="privacy">
          <h2 className="text-2xl font-bold text-theme-heading">Privacy</h2>
          <p className="mt-3 leading-relaxed text-theme-body">
            We respect your privacy and handle your data responsibly. For full details, please
            contact us.
          </p>
        </section>
      </article>
    </div>
  );
}
