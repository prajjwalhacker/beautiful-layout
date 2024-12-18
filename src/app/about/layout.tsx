import type { Metadata } from "next";
import '../../app/globals.scss';
import '../../app/styles/_dashboard.scss';
import '../../app/styles/_navbar.scss';
import '../../app/styles/_footer.scss';
import '../../app/styles/_mode-toggle.scss';
import '../../app/styles/_content-component.scss';
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Prajjwal Soni Senior Software Engineer",
  description: "Generated by create next app",
  openGraph: {
    title:"Prajjwal Soni, Senior Software Engineer",
    description: "More than three year experience working in high paced startups and build complex products from scrarch",
    images: "public\images\prajjwal-soni123.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
      <SpeedInsights/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  </>
  );
}
