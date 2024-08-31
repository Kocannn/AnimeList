import { Gabarito } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar";
import "@smastrom/react-rating/style.css";
import Provider from "../../context/Provider";
const gabarito = Gabarito({ subsets: ["latin"] });
import Footer from "../components/Footer";

export const metadata = {
  title: "Anime List",
  description: "Website anime indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
      <body className={`${gabarito.className} bg-color-dark`}>
        <NavBar />
        {children}
        <Footer />
      </body>
      </Provider>
    </html>
  );
}
