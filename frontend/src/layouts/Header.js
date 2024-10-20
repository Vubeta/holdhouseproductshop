import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import routes from "../routes/routes";

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid style={{ margin: '1%' }}>
                <Navbar.Brand as={Link} to={routes.home}>Đồ gia dụng</Navbar.Brand>
                {/*<Navbar.Brand href="#home">*/}
                {/*    <img*/}
                {/*        alt=""*/}
                {/*        src={logo}*/}
                {/*        width="30"*/}
                {/*        height="30"*/}
                {/*        className="d-inline-block align-top"*/}
                {/*    />{' '}*/}
                {/*    HoldHouse*/}
                {/*</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={routes.introduce}>Giới thiệu</Nav.Link>
                        <Nav.Link as={Link} to={routes.product}>Tất cả sản phẩm</Nav.Link>
                        <NavDropdown title="Loại sản phẩm" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Chiếu sáng</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Nấu nướng
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Khác
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={routes.promotion}>Khuyến mãi</Nav.Link>
                        <Nav.Link as={Link} to={routes.contact}>Liên hệ</Nav.Link>
                        {/*<Nav.Link href="#" disabled>*/}
                        {/*    Link*/}
                        {/*</Nav.Link>*/}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Tìm kiếm..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Tìm</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;