export function generateUniqueTitle(): string {
    return `Product_${Math.random().toString(36).slice(2, 11)}`;
  }
  