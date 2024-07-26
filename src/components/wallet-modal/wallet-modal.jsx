import { Button, Modal, Alert } from "flowbite-react";
import { GiWallet } from "react-icons/gi";
import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import Transaction from "../transaction/transaction.jsx";
import {useCookies} from "react-cookie";
import axiosInstance from "../../helper/axios-instance.js";

function WalletModal() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors},
        reset
    } = useForm();
    const [walletData, setWalletData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

    const fetchWalletData = async () => {
        setLoading(true);
        if (cookies.accessToken) {
            await axiosInstance.get("/wallet/my-wallet", {
                headers: {
                    Authorization: `Bearer ${cookies.accessToken}`
                }
            })
                .then(
                    response => {
                        setLoading(false);
                        setWalletData(response.data);
                    }
                )
                .catch(
                    error => {
                        setLoading(false);
                        setApiError(error.response.data.message);
                    }
                );
        }
    };

    useEffect(() => {
        fetchWalletData();
    }, [cookies.accessToken]);

    return (
        <>
            <Button onClick={() => setOpenModal(true)} color={"success"} className={"my-3"} pill>
                <GiWallet className={"mr-2 h-5 w-5"} />
                {loading && <Alert>Loading...</Alert>}
                {apiError && <Alert>{apiError}</Alert>}
                {walletData && (
                    <span> {walletData.amount}</span>
                )}
            </Button>

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Saldo:
                    {loading && <div>Loading...</div>}
                    {walletData && (
                        <span> {walletData.amount}</span>
                    )}
                </Modal.Header>
                <Modal.Body>
                    <Transaction
                        walletData={walletData}
                        setOpenModal={setOpenModal}
                        fetchWalletData={fetchWalletData}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default WalletModal;