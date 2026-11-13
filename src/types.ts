export type FoodProduct = { code: string; product_name?: string; brands?: string; ingredients_text?: string; allergens?: string; image_url?: string; categories?: string; serving_size?: string; nutriments?: Record<string, number | string>; };
export type Retailer = { id: string; name: string; address: string; distanceKm: number; lat: number; lng: number; };
