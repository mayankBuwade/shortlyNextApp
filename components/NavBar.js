import Nav, { Div, Link, Wrapper } from "../styles/styleNavBar";
import theme from "../colors/theme";

function NavBar() {
  return (
    <Nav>
      <h1>Shortly</h1>
      <Div color={theme.colors.gray}>
        <Link>Features</Link>
        <Link>Pricing</Link>
        <Link>Resources</Link>
      </Div>
      <Wrapper>
        <button>
          <img
            width={"25px"}
            src="https://img.icons8.com/color/48/000000/menu--v1.png"
          />
        </button>
        <div>
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
        </div>
      </Wrapper>
    </Nav>
  );
}

export default NavBar;
