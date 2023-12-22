const mainURL = process.env.REACT_APP_BASE_URL

export async function getManufacturerByID(ID) {
    const response = await fetch(`${mainURL}/Manufacturer.json`)

    if (!response.ok) {
        throw new Error('Cannot find manufacturer')
    } 
    
    return response.json()
}

