import { Container, Navbar } from "react-bootstrap";

export interface IHeaderProps {
}
//tsrpfc
export function Header (props: IHeaderProps) {
    return (
    <Container>
      <Navbar expand="lg" variant="light" className="header-navbar mb-5">
        <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#" className="text-white">REMINDERS</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};