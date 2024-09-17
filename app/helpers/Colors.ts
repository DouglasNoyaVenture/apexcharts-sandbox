// Función auxiliar para convertir hexadecimal a RGB
const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

// Función auxiliar para convertir RGB a hexadecimal
const rgbToHex = (r: number, g: number, b: number) => {
  const toHex = (value: number) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Función para aclarar u oscurecer el color
const shadeColor = (color: string, percent: number) => {
  const { r, g, b } = hexToRgb(color);

  const newR = Math.min(Math.max(0, r + (r * percent) / 100), 255);
  const newG = Math.min(Math.max(0, g + (g * percent) / 100), 255);
  const newB = Math.min(Math.max(0, b + (b * percent) / 100), 255);

  return rgbToHex(Math.round(newR), Math.round(newG), Math.round(newB));
};

// Función principal para generar el array de colores
export const generateColorPalette = (baseColor: string, numColors: number) => {
   const palette: string[] = [];

  // Rango de variación dinámico: cuanto más colores, más pequeño será el rango
  const maxRange = 100; // Mayor diferencia entre colores (pocos colores)
  const minRange = 20;  // Menor diferencia entre colores (muchos colores)

  // Calcula el rango dinámico basado en la cantidad de colores
  const range = Math.max(minRange, maxRange - numColors * 4); 
  const step = Math.floor(range / Math.max(1, numColors / 2));

  for (let i = 0; i < numColors; i++) {
    const percentage = i < numColors / 2 ? -i * step : (i - numColors / 2) * step;
    palette.push(shadeColor(baseColor, percentage));
  }

  return palette;
};
