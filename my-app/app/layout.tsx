import type { Metadata } from "next";
import Link from "next/link";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "CarMitra",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <header className="site-header">
          <div className="header-content">
            <Link className="brand" href="/" aria-label="Car Mitra home">
              <span className="brand-mark" aria-hidden="true">CM</span>
              <span className="brand-name">Car <strong>Mitra</strong></span>
            </Link>
            <nav className="main-navigation" aria-label="Main navigation">
              <Link className="navigation-link navigation-link-primary" href="/#free-pdi">Free PDI</Link>
              <Link className="navigation-link" href="/#finance-car">Finance Car</Link>
              <Link className="navigation-link" href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
