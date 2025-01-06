// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler,
// } from "chart.js";
//
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);
//
// export default function Feedback() {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         // Dados fictícios
//         const fakeData = [
//             { name: "Produto A", value: 200 },
//             { name: "Produto B", value: 300 },
//             { name: "Produto C", value: 500 },
//             { name: "Produto D", value: 100 },
//         ];
//
//         // Simular tempo de carregamento e calcular percentagens
//         const simulateLoading = () => {
//             setTimeout(() => {
//                 const total = fakeData.reduce((sum, item) => sum + item.value, 0);
//                 const percentageData = fakeData.map((item) => ({
//                     name: item.name,
//                     value: ((item.value / total) * 100).toFixed(2), // Calcular percentagem
//                 }));
//                 setData(percentageData);
//                 setIsLoading(false);
//             }, 1000); // Simula 1 segundo de carregamento
//         };
//
//         simulateLoading();
//     }, []);
//
//     // Configuração do gráfico
//     const chartData = {
//         labels: data.map((item) => item.name),
//         datasets: [
//             {
//                 label: "Percentagem",
//                 data: data.map((item) => item.value),
//                 backgroundColor: [
//                     "rgba(75, 192, 192, 0.6)",
//                     "rgba(255, 159, 64, 0.6)",
//                     "rgba(54, 162, 235, 0.6)",
//                     "rgba(153, 102, 255, 0.6)",
//                 ],
//                 borderColor: [
//                     "rgba(75, 192, 192, 1)",
//                     "rgba(255, 159, 64, 1)",
//                     "rgba(54, 162, 235, 1)",
//                     "rgba(153, 102, 255, 1)",
//                 ],
//                 borderWidth: 2,
//                 hoverBackgroundColor: [
//                     "rgba(75, 192, 192, 0.8)",
//                     "rgba(255, 159, 64, 0.8)",
//                     "rgba(54, 162, 235, 0.8)",
//                     "rgba(153, 102, 255, 0.8)",
//                 ],
//             },
//         ],
//     };
//
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top",
//                 labels: {
//                     font: {
//                         size: 14,
//                         weight: "bold",
//                     },
//                 },
//             },
//             title: {
//                 display: true,
//                 text: "Gráfico de Barras (Percentual)",
//                 font: {
//                     size: 20,
//                     weight: "bold",
//                 },
//             },
//         },
//         animation: {
//             duration: 1500,
//             easing: "easeInOutQuart",
//         },
//         scales: {
//             x: {
//                 ticks: {
//                     color: "#4B5563", // Cinza escuro
//                     font: {
//                         size: 14,
//                     },
//                 },
//                 grid: {
//                     display: false,
//                 },
//             },
//             y: {
//                 ticks: {
//                     color: "#4B5563",
//                     font: {
//                         size: 14,
//                     },
//                 },
//                 grid: {
//                     color: "rgba(200, 200, 200, 0.3)",
//                 },
//             },
//         },
//     };
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
//                 <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//                     Feedback de Produtos
//                 </h1>
//                 {isLoading ? (
//                     <div className="flex items-center justify-center h-64">
//                         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
//                     </div>
//                 ) : (
//                     <Bar data={chartData} options={options} />
//                 )}
//             </div>
//         </div>
//     );
// }
