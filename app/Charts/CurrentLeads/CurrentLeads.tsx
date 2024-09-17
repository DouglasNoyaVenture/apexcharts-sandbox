import fontsFamily from '@/app/fonts';
import { generateColorPalette } from '@/app/helpers/Colors';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // Esto desactiva el renderizado en el servidor (SSR)
});


export const CurrentLeads = () => {
  const [isClient, setIsClient] = useState(false);
  const series = [13, 40, 37, 20, 60, 80, 15, 66, 78];

  const baseColor = '#2191F8';

  const palette = generateColorPalette(baseColor, series.length);

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
              fontFamily: fontsFamily.lato,
              color: '#000000',
              fontSize: '14px',
              fontWeight: 600,
            },
          },
        },
      },
    },
    colors: palette, // Colores de los segmentos
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false
    }
  };

  useEffect(() => {
    setIsClient(true); // Marcar que estamos en el cliente
  }, []);

  if (!isClient) {
    // Si no estamos en el cliente, no renderizamos el gráfico
    return null;
  }

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
