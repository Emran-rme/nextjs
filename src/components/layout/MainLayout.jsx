import Footer from "../common/Footer";
import Nav from "../common/Nav";

export default function MainLayout({ children }) {
  return (
    <div className="pt-4 " dir="rtl">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
