export async function getRecipes(query: string) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}`
    );
    if (!response.ok) {
      throw new Error("Recipes could not be loaded");
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error?.message}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
export async function getRecipe(id: string) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    if (!response.ok) {
      throw new Error("Recipe could not be loaded");
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error?.message}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
