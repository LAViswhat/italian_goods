import axios from "axios";

// Создание экземпляра axios с базовым URL
const apiClient = axios.create({
  baseURL: "https://fc2b78302474e03f.mokky.dev/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Функция для получения всех элементов
export const fetchAllItems = async () => {
  try {
    const { data } = await apiClient.get("items");
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// Функция для фильтрации элементов
export const fetchFiltredItems = async (category, subcategory) => {
  try {
    const queryParams = new URLSearchParams({
      "details.category": category + "*",
      "details.subcategory": subcategory + "*",
    }).toString();

    const { data } = await apiClient.get(`items?${queryParams}`);
    return data;
  } catch (error) {
    console.error("Error fetching filtred items:", error);
    throw error;
  }
};

export default apiClient;
