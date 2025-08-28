import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Kaushiki Mishra | Portfolio",
  description:
    "Personal portfolio of Kaushiki Mishra – C++, Python, DSA, AI/ML projects and experience.",
  openGraph: {
    title: "Kaushiki Mishra | Portfolio",
    description:
      "C++ | Python | DSA Enthusiast | Competitive Programmer. Projects, experience, and contact.",
    type: "website",
    url: "https://your-portfolio-url.example/",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
