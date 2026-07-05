const API_URL = "https://dayalstock.com/api_v1";

export const getCategories = async (parentId) => {
const url = parentId
    ? `${API_URL}/categories/get_categories.php?parent_id=${parentId}`
    : `${API_URL}/categories/get_categories.php`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data;
};

export const getAllContents = async () => {
  const url = `${API_URL}/contents/getContents.php`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data;
};


export const getAllAuthor = async () => {
  const url = `${API_URL}/author/get_author.php`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data;
};