import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CartContextProvider from "@/context/cart.context";
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
        <CartContextProvider>
          <FilterContextProvider>
            <Navbar />

            {children}
            <Footer />
          </FilterContextProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
