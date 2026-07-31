import Logo from "../common/Logo";
import Container from "../common/Container";

function Footer() {
  const product = [
    "Features",
    "Pricing",
    "Security",
    "Roadmap",
  ];

  const company = [
    "About",
    "Blog",
    "Careers",
    "Contact",
  ];

  const resources = [
    "Documentation",
    "Help Center",
    "API Reference",
    "Status",
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-14 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo dark />

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              FlowCRM is a modern multi-tenant CRM platform built to help
              businesses manage customers, streamline sales, and scale with
              confidence.
            </p>

            <p className="mt-8 text-sm text-slate-500">
              Built with React, Node.js, Express, PostgreSQL & Prisma.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold">
              Product
            </h3>

            <div className="mt-6 space-y-4">
              {product.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {company.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold">
              Resources
            </h3>

            <div className="mt-6 space-y-4">
              {resources.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} FlowCRM. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;