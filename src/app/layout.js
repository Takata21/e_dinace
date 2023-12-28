import { Inter, Bellefair } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import { Footer } from "./ui/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dirección Nacional de Ciencias Espaciales",
  description: "",
  icons: {
    icon: "/images/dinace_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <body className={inter.className}>
          <div className="t-container">
            {/* <Link href="/not-existing-route">Not Found</Link> */}
            <Navbar />
            <main className="wrapper">{children}</main>
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
