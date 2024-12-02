import type { Metadata } from "next";
import '../../../app/globals.scss';
import '../../styles/_dashboard.scss';
import '../../styles/_navbar.scss';
import '../../styles/_footer.scss';
import '../../styles/_mode-toggle.scss';
import '../../styles/_content-component.scss';
import { ThemeProvider } from "@/app/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Prajjwals soni blog Page",
  description: "Here i will post everything related to tech and how can you reach to the next level in tech",
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
