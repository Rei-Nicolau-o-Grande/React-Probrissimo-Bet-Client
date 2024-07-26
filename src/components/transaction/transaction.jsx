import {Tabs} from "flowbite-react";
import {HiUserCircle} from "react-icons/hi";
import {MdDashboard} from "react-icons/md";
import FormTransactionDeposit from "../form-transaction-deposit/form-transaction-deposit.jsx";
import FormTransactionWithDraw from "../form-transaction-withdraw/form-transaction-withdraw.jsx";

function Transaction({walletData, setOpenModal, fetchWalletData}) {
    return (
        <Tabs aria-label="Default tabs" variant="default">
            <Tabs.Item active title="Deposito" icon={HiUserCircle}>
                <FormTransactionDeposit
                    walletData={walletData}
                    setOpenModal={setOpenModal}
                    fetchWalletData={fetchWalletData}
                />
            </Tabs.Item>
            <Tabs.Item title="Saque" icon={MdDashboard}>
                <FormTransactionWithDraw
                    walletData={walletData}
                    setOpenModal={setOpenModal}
                    fetchWalletData={fetchWalletData}
                />
            </Tabs.Item>
        </Tabs>
    );
}

export default Transaction;
