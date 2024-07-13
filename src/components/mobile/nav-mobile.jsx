import { Avatar, Tooltip } from "flowbite-react";

function NavMobile() {
    return (
        <>
            <div className="py-5 px-3">
                <Tooltip content="Roleta da picanha 🥩">
                    <Avatar img={"src/assets/img/roleta_da_picanha.jpeg"} placeholderInitials="" rounded
                            className={"w-20"}/>
                </Tooltip>
            </div>
        </>
    )
}

export default NavMobile;