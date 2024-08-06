export type Product = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: any[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
};
