import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

export const ActiveMatters = () => {
    const series = [{
        name: 'New Leads',
        data: [36, 10, 51, 19, 46, 117]
    }, {
        name: 'Active Matters',
        data: [87, 64, 55, 72, 106, 25]
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
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Etiquetas para las secciones
        plotOptions: {
            bar: {
                columnWidth: '28px',
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            color: '#718EBF',
                            fontSize: '13px',
                            fontWeight: 400
                        }
                    }
                }
            }
        },
        colors: ['#36628B', '#5DA9EE'], // Colores de los segmentos
        dataLabels: {
            enabled: true,
        },
        legend: {
            show: false,
        },
        stroke: {
            show: false
        }
    };


    return (
        <div>
            <ReactApexChart
                options={chartOptions}
                series={series}
                type="bar"
                width={500}
                height={270}
            />
        </div>
    )
}