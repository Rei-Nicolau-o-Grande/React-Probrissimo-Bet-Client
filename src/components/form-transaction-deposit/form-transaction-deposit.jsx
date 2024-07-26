import {Alert, Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import validator from "validator";
import axiosInstance from "../../helper/axios-instance.js";
import {useCookies} from "react-cookie";

function FormTransactionDeposit({walletData, setOpenModal, fetchWalletData}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [data, setData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

    const onSubmitTransactionDeposit = async (formData) => {
        setLoading(true);
        setApiError(null);

        if (cookies.accessToken && confirm("Você deseja depositar ?")) {
            await axiosInstance.post(`/transactions/deposit/${walletData.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${cookies.accessToken}`
                }
            })
        .then(
                response => {
                    setData(response.data);
                    setLoading(false);
                    fetchWalletData();
                    handleClose();
                }
            )
                .catch(
                    error => {
                        setApiError(error.response.data.message);
                        setLoading(false);
                    }
                );
        } else {
            setLoading(false);
            handleClose();
        }
    };

    function handleClose() {
        setOpenModal(false);
        setApiError(null);
        reset();
    }

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmitTransactionDeposit)}>
            {loading && <Alert color={"cyan"}>Loading...</Alert>}
            {apiError && <Alert color={"failure"}>{apiError}</Alert>}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Deposit" value="Valor" />
                </div>
                <TextInput
                    id="Deposit"
                    type="number"
                    placeholder="0.00"
                    color={`${errors.value ? 'failure' : ''}`}
                    {...register("value", {
                        required: "Campo obrigatório",
                        validate: value => validator.isFloat(value) || "Valor inválido"
                    })}
                    helperText={
                        errors.value && errors.value.message
                    }
                />
            </div>
            <Button type="submit">Enviar</Button>
        </form>
    );
}

export default FormTransactionDeposit;