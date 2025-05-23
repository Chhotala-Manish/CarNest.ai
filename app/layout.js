import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "carnest.ai",
  description: "Find your dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
