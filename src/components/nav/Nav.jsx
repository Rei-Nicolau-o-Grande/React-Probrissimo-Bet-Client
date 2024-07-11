import { Sidebar } from "flowbite-react";

function Nav() {

  return (
      <>
          <Sidebar aria-label="Sidebar with multi-level dropdown example" className="py-3 px-3">
              <Sidebar.Items>
                  <Sidebar.ItemGroup>
                      <Sidebar.Item href="#">
                          Roleta da picanha 🥩
                      </Sidebar.Item>
                  </Sidebar.ItemGroup>
              </Sidebar.Items>
          </Sidebar>
      </>
  );
}

export default Nav;