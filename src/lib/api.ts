import { z } from 'zod';
import { env } from './env';

const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string()),
  brand: z.string(),
  category: z.string(),
  rating: z.number(),
  stock: z.number(),
  discountPercentage: z.number(),
});

const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${env.PUBLIC_API_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const parsed = ProductsResponseSchema.parse(data);
    return parsed.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${env.PUBLIC_API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return ProductSchema.parse(data);
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export type LoginCredentials = {
  username: string;
  password: string;
};

const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  image: z.string(),
  token: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export async function login(credentials: LoginCredentials): Promise<User> {
  const response = await fetch(`${env.PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  const data = await response.json();
  return UserSchema.parse(data);
}