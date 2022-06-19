export interface Product {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly category: string;
  readonly rating: { rate: number; count: number };
  readonly image: string;
  readonly longDescription: string;
}
