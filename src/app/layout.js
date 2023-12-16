import { Inter, Bellefair } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import { Footer } from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dirección Nacional de Ciencias Espaciales",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="t-container">
              <Navbar />
              <main className="wrapper">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
