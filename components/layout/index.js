
import Navbar from '../Navbar'
import Footer from '../Footer'
import Container from '@mui/material/Container';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <Container maxWidth="">
          <main>{children}</main>
        </Container>
      <Footer />
    </>
  )
}