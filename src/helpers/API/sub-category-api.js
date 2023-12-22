const mainURL = process.env.REACT_APP_BASE_URL

export async function getSubCategoryByID(ID) {
    const response = await fetch(`${mainURL}/subcategory.json`)

    if (!response.ok) {
        throw new Error('Cannot find subcategory')
    }

    return response.json()
}