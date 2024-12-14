export interface ProductAvailabilityOptions {
  lowStockThreshold?: number;
}

export enum StockAvailability {
  InStock = 'in-stock',
  OutOfStock = 'out-of-stock',
  LowStock = 'low-stock',
}
