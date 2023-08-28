//fake store API integration
const API_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
