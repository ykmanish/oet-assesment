import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Oetology",
  description: "Oetology is a platform for learning and teaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
