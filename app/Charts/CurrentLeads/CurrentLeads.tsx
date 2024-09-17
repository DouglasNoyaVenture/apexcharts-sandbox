import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

export const CurrentLeads = () => {
  const series = [13, 40, 37, 20];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Blue', 'Light Blue', 'Dark Blue', 'Very Light Blue'], // Etiquetas para las secciones
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Leads Total',
              formatter: () => `${series.reduce((acc, val) => acc + val, 0)}`, // Muestra el total calculado
            },
          },
        },
      },
    },
    colors: ['#2196F3', '#64B5F6', '#0D47A1', '#BBDEFB'], // Colores de los segmentos
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Current Leads',
      align: 'left',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#1565C0',
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="donut"
        height={320}
      />
    </div>
  );
};
