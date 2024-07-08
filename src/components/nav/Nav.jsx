import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";

function Nav() {

    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);

  return (
      <>
          <Sidebar aria-label="Sidebar with multi-level dropdown example">
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