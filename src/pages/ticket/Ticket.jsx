import Nav from "../../components/nav/Nav.jsx";
import NavMobile from "../../components/mobile/nav-mobile.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
import {FormSearchTicket} from "../../components/form-search-ticket/form-search-ticket.jsx";

export function Ticket() {
    return (
        <>
            <header>
                <Header/>
            </header>

            <div className="grid grid-cols-12">
                <nav className="col-span-2 hidden 2xl:block py-3 px-3">
                    <Nav/>
                </nav>

                <div className="col-span-12 block 2xl:hidden py-3 px-3">
                    <div className="overflow-x-auto flex flex-row">
                        <NavMobile/>
                    </div>
                </div>

                <section className="col-span-12 md:col-span-8 py-3 px-3">
                    <FormSearchTicket />
                </section>
            </div>



            <footer>
                <Footer />
            </footer>
        </>
    )
}