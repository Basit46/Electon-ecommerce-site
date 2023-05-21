import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthContextProvider from "@/context/auth.context";
import CartContextProvider from "@/context/cart.context";
import FavouriteContextProvider from "@/context/favourite.context";
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
        <AuthContextProvider>
          <FavouriteContextProvider>
            <CartContextProvider>
              <FilterContextProvider>
                <Navbar />

                {children}
                <Footer />
              </FilterContextProvider>
            </CartContextProvider>
          </FavouriteContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
