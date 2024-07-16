import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Tab from "./components/Tab.jsx";

function User() {

    return (
        <>
            <header>
                <Header/>
            </header>

            <section>
                <Tab/>
            </section>


            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default User;