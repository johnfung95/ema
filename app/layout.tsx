import type { Metadata } from "next";
import { LoadingProvider } from "../contexts/LoadingContext";
import { EmaProvider } from "@/contexts/EmaContext";
import "../styles/globals.css";
import Background from "../components/UI/Background";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "EMA - Wishes",
  description: "Write your own EMA",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <LoadingProvider>
        <EmaProvider>
          <body>
            <Background>{children}</Background>
          </body>
        </EmaProvider>
      </LoadingProvider>
    </html>
  );
}
