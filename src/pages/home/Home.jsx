import Header from "../../components/header/Header.jsx";
import Nav from "../../components/nav/Nav.jsx";
import Content from "../../components/content/Content.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Home() {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <div className="grid grid-cols-12">
                <nav className="col-span-2">
                    <Nav/>
                </nav>

                <section className="col-span-8">
                    <Content/>
                </section>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home;