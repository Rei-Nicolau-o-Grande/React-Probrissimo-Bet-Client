import { Avatar, Tooltip } from "flowbite-react";

function NavMobile() {
    return (
        <>
            <div className="py-5 px-3">
                <Tooltip content="Roleta da picanha 🥩">
                    <Avatar placeholderInitials="RR" rounded/>
                </Tooltip>
            </div>
        </>
    )
}

export default NavMobile;