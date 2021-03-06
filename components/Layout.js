import Container from "./Container";
import Footer from "./FooterSection";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
