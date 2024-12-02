import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prajjwal's Soni Blog App",
  description: "Here i will post everything related to Tech and software engineering and how to reach to the top 1 % of software engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
