import { Oswald } from "next/font/google";
import "./globals.css";

const inter = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Resort Heaven - One Tap away Food",
  description: "All the items you're looking for in this wolrd to eat we have all the things you like to eat so just get your account and be a part of this team and order whatever you want .✨💖",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
