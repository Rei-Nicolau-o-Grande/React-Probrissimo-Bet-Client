import {Button} from "flowbite-react";
import {Link} from "react-router-dom";

export function TicketButton() {
    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Button as={Link} to="/tickets">
                    Ver seus Tickets
                </Button>
            </div>
        </>
    )
}