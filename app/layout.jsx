import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SecondNav from "@/components/SecondNav";
import FilterContextProvider from "@/context/FilterContext";
import "./globals.css";

export const metadata = {
  title: "Electon Store",
  description: "Shop your electronics here. Ecommerce store by Basit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Poppins">
        <FilterContextProvider>
          <Header />
          <Navbar />
          <SecondNav />
          {children}
          <Footer />
        </FilterContextProvider>
      </body>
    </html>
  );
}
