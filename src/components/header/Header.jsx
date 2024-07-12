import { Navbar } from "flowbite-react";

function Header() {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand href="">
                    <img src="src/assets/img/roleta_da_picanha.jpeg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Probissimo Bet
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">Criar Conta</Navbar.Link>
                    <Navbar.Link href="#">Entrar</Navbar.Link>
                    <Navbar.Link href="#">Sair</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;