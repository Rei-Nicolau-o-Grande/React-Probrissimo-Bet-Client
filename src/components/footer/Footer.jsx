import { Footer } from "flowbite-react";

function myFooter() {
  return (
    <>
        <Footer container className="bg-slate-800">
            <Footer.Copyright href="#" by="Probissimo Bet™" year={2024} className="text-white" />
            <Footer.LinkGroup>
                <Footer.Link href="#" className="text-white">About</Footer.Link>
                <Footer.Link href="#" className="text-white">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-white">Licensing</Footer.Link>
                <Footer.Link href="#" className="text-white">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    </>
  );
}

export default myFooter;