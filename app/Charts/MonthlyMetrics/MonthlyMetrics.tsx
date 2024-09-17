import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});


export const MonthlyMetrics = () => {
    const series = [
        {
            name: "Balance Due",
            data: [12000, 19000, 15000, null, null, null],
        },
        {
            name: "In-Draft Fees and Expenses",
            data: [10000, 22000, 17000, null, null, null],
        },
    ];

    const chartOptions: ApexOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false, // Ocultar la barra de herramientas
            },
        },
        stroke: {
            width: 3, // Ancho de las líneas
        },
        markers: {
            size: 8, // Tamaño de los puntos
            colors: ['#ffffff'], // Color de relleno del punto
            strokeColors: ['#FFC107', '#0091EA'], // Colores del borde del punto por serie
            strokeWidth: 3, // Ancho del borde del punto
            hover: {
                size: 10, // Tamaño cuando el cursor está sobre el punto
            },
        },
        grid: {
            borderColor: "#e0e0e0", // Color de las líneas de la cuadrícula
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Categorías del eje X
        },
        yaxis: {
            labels: {
                formatter: (value: number) => `$${value.toLocaleString()}`, // Formato con símbolo de $
            },
        },
        colors: ['#FCAA0B', '#0DAAED'], // Colores de las series
        legend: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: (value: number) => value ? `$${value?.toLocaleString()}` : '', // Formato del tooltip con $
            },
        },
    };

    return (
        <div>
            <ReactApexChart
                options={chartOptions}
                series={series}
                type="line"
                width={360}
                height={270}
            />
        </div>
    )
}