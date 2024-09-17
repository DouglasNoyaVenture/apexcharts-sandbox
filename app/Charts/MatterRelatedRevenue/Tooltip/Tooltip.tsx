import ReactDOMServer from 'react-dom/server';

interface IProps {
    month: string
    dataForMonth: { label: string; value: number; color: string }[];
    total: number
}

const TooltipTemplate = ({ month, dataForMonth, total }: IProps) => (
    <div className="p-2 font-sans border border-gray-300 rounded-lg">
        <strong className="text-sm">{month} 2024</strong>
        <div className="pt-1">
            {dataForMonth.map((data) => (
                <div key={data.label} className="flex items-center py-1">
                    <span
                        className="w-3 h-3 rounded-full mr-1.5"
                        style={{ backgroundColor: data.color }}
                    ></span>
                    <span>{data.label}:</span>
                    <span className="ml-auto">
                        {data.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </span>
                </div>
            ))}
        </div>
        <div className="pt-2 border-t border-gray-300 font-bold">
            Total: {total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </div>
    </div>
);

// Función para convertir el componente a un string HTML
export const getTooltipHtml = (props: IProps) => {
    return ReactDOMServer.renderToString(<TooltipTemplate {...props} />);
};