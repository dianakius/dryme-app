// api.js

const BASE_URL = "https://fakestoreapi.com";

// Get all products (you can pretend they are towels)
export const getAllTowels = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch towels");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching towels:", error);
    return [];
  }
};

// Get a single towel by ID
export const getTowelById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch towel");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching towel:", error);
    return null;
  }
};

// (Optional) Get towels by category (pretend categories are types of towels)
export const getTowelsByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error("Failed to fetch towels by category");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching towels by category:", error);
    return [];
  }
};
