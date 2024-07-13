import { Navbar} from "flowbite-react";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <Navbar fluid rounded>
                <NavLink to={"/"}>
                    <Navbar.Brand as={"div"}>
                        <img src={"src/assets/img/roleta_da_picanha.jpeg"} className="mr-3 h-6 sm:h-9" alt="Probissimo Bet Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Probissimo Bet
                        </span>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link>Criar Conta</Navbar.Link>
                    <Navbar.Link>Entrar</Navbar.Link>
                    <Navbar.Link as={"div"}>
                        <NavLink to={"/user"}>Perfil</NavLink>
                    </Navbar.Link>
                    <Navbar.Link className={"text-red-600"}>Sair</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;