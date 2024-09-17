import dynamic from "next/dynamic";
import ApexCharts, { ApexOptions } from "apexcharts";
import { getTooltipHtml } from "./Tooltip/Tooltip";
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

interface ITooltipCustom {
    series: number[][]; // Matriz de números para las series
    seriesIndex: number; // Índice de la serie activa
    dataPointIndex: number; // Índice del punto de datos activo
}

const LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const COLORS = ['#FCAA0B', '#AD2D1B', '#3497F3']

export const MatterRelatedRevenue = () => {
    const seriesExample = [{
        name: 'Fees and Soft Expenses',
        data: [36, 10, 51, 19, 46, 117]
    },
    {
        name: 'Contingent Share',
        data: [87, 64, 55, 72, 106, 25]
    },
    {
        name: 'Referral Fees Paid',
        data: [15, 85, 45, 79, 106, 10]
    }
    ]

    const chartOptions: ApexOptions = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            },
        },
        labels: LABELS, // Etiquetas para las secciones
        plotOptions: {
            bar: {
                columnWidth: '28px',
            }
        },
        colors: COLORS, // Colores de los segmentos
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        stroke: {
            show: false
        },
        tooltip: {
            custom: ({ series, dataPointIndex }: ITooltipCustom) => {

                const month = LABELS[dataPointIndex]; // Obtener el mes
                const dataForMonth = series.map((value, i) => ({
                    label: seriesExample[i].name,
                    value: value[dataPointIndex],
                    color: COLORS[i],
                }));

                // Sumar los valores de todas las series para obtener el total
                const total = dataForMonth.reduce((acc, cur) => acc + cur.value, 0);

                return getTooltipHtml({
                    dataForMonth,
                    month,
                    total
                })
            },
        },
    };

    return (
        <div className="relative">
            <ReactApexChart
                options={chartOptions}
                series={seriesExample}
                type="bar"
                width={360}
                height={270}
            />
        </div>
    )
}