import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axiosInstance from "../../helper/axios-instance.js";

export function FormSearchTicket() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [cookies] = useCookies(["accessToken"]);

    const onSubmitSearchTicket = async (formData) => {
        setLoading(true);
        setApiError(null);

        try {
            const response = await axiosInstance.post(
                "/ticket/generate-pdf",
                formData,
                {
                    responseType: "blob",
                    headers: {
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                    validateStatus: () => true
                }
            );


            if (response.status >= 400) {
                const errorText = await response.data.text();
                const errorJson = JSON.parse(errorText);
                setApiError(errorJson.message || "Erro ao gerar PDF.");
                return;
            }


            const pdfBlob = new Blob([response.data], { type: "application/pdf" });
            const pdfUrl = URL.createObjectURL(pdfBlob);
            window.open(pdfUrl);

        } catch (error) {
            setApiError("Erro inesperado ao gerar o PDF.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmitSearchTicket)} className="space-y-4 p-4 bg-white shadow rounded max-w-xl mx-auto">
            <h2 className="text-xl font-semibold">🔎 Buscar Tickets</h2>

            <div>
                <label className="block text-sm font-medium">Nome do Jogo</label>
                <select {...register("nameGame")} className="w-full mt-1 border rounded p-2">
                    <option value="">Todos</option>
                    <option value="BURRINHO_FORTUNE">Burrinho Fortune</option>
                    <option value="RODA_RODA_PICANHA">Roda Roda Picanha</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium">Resultado</label>
                <select {...register("resultBet")} className="w-full mt-1 border rounded p-2">
                    <option value="">Todos</option>
                    <option value="WINNER">Ganhou</option>
                    <option value="LOSER">Perdeu</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium">Multiplicador</label>
                <input type="text" {...register("multiplier")}
                       className="w-full mt-1 border rounded p-2"
                       autoComplete="off"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">Data Inicial</label>
                    <input type="datetime-local" {...register("startDate")}
                           className="w-full mt-1 border rounded p-2"
                           autoComplete="off"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Data Final</label>
                    <input type="datetime-local" {...register("endDate")}
                           className="w-full mt-1 border rounded p-2"
                           autoComplete="off"
                    />
                </div>
            </div>

            {apiError && <p className="text-red-500">{apiError}</p>}

            <div className="flex gap-2">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Gerando..." : "Gerar PDF"}
                </button>
                <button
                    type="button"
                    onClick={() => reset()}
                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                >
                    Limpar
                </button>
            </div>
        </form>
    );
}
