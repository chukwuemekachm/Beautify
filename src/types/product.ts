export interface IProduct {
  id: number,
  brand: string,
  name: string,
  price: number,
  price_sign: string,
  currency: string,
  image_link: string,
  product_link: string,
  website_link: string,
  description: string,
  rating: number | null,
  category: string,
  product_type: string,
  tag_list: TAG_LIST | [],
  created_at: string,
  updated_at: string,
  product_api_url: string,
  api_featured_image: string,
  product_colors: PRODUCT_COLORS,
};

export interface IProductColor {
  hex_value: string,
  colour_name: string,
};

export type TAG = string;

export type TAG_LIST = TAG[];

export type PRODUCT_COLORS = IProductColor[];
