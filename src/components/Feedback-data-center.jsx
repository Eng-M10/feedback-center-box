import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Feedback() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalComentarios, setTotalComentarios] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/estatistica");
                const result = await response.json();

                const sentimentos = result.sentimento;

                // Calcular o total de comentários
                setTotalComentarios(sentimentos.length);

                // Agrupar os valores por sentimento (POSITIVE e NEGATIVE)
                const aggregatedData = sentimentos.reduce(
                    (acc, item) => {
                        if (item.sentiment === "POSITIVE") acc.positivos += item.value;
                        if (item.sentiment === "NEGATIVE") acc.negativos += item.value;
                        return acc;
                    },
                    { positivos: 0, negativos: 0 }
                );

                setData([
                    { label: "Positivos", value: aggregatedData.positivos },
                    { label: "Negativos", value: aggregatedData.negativos },
                ]);

                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const chartData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                label: "Total de Valores",
                data: data.map((item) => item.value),
                backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Distribuição de Sentimentos por Valor",
            },
        },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Estatísticas de Sentimentos
                </h1>
                {isLoading ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                ) : (
                    <>
                        <div className="mb-6 text-center">
                            <p className="text-lg font-semibold text-black">
                                Total de comentários analisados: {totalComentarios}
                            </p>
                        </div>
                        <Bar data={chartData} options={options}/>
                    </>
                )}
            </div>




            <div className="bg-gray-900 p-8 mb-4 w-full">
                <p>Copyright &#169; Muvimbene Maposse - Todos os direitos reservados </p>
            </div>
        </div>
    );
}
