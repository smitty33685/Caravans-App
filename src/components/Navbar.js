import { Container } from "../components/styles/LayoutComponents";
import { StyledNavbar, Image } from "../components/styles/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Image src="logo.png" alt="Prague labs logo" />
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
