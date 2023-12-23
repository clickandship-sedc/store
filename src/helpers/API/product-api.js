const mainURL = process.env.REACT_APP_BASE_URL

export async function getProductByID(ID) {
    return {
        "description": "The Google Pixel 6 Pro is a high-end Android smartphone with a beautiful 6.7-inch OLED display and the latest Google Tensor processor.",
        "subcategory": {
            "id": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "name": "Smartphones"
        },
        "category": {
            "id": "technology",
            "name": "Technology"
        },
        "manufacturer": {
            "id": "techlg",
            "name": "LG",
            "image": "/store/assets/imgs/manufacturers/lg.jpg"
        },
        "productSizes": [
            {
                "id": "0862f3bb-30d9-41e8-9192-41f3471f1612",
                "stock": 40,
                "size": "6.4",
                "color": "orange"
            },
            {
                "id": "aaf1af4b-e8c5-4de0-b874-f43954760bbc",
                "stock": 28,
                "size": "5.4",
                "color": "gray"
            }
        ],
        "ratings": [
            {
                "id": "0cbdbc17-3590-492c-851b-e8175d967f50",
                "rate": 3,
                "date": "2023-12-12T02:56:22.4464312",
                "review": "Disappointing battery life despite the promising features.",
                "pros": "Good performance, nice design.",
                "cons": "Poor battery optimization.",
                "userFullName": "Luna Swift",
                "userId": "5"
            },
            {
                "id": "ad6103e7-b382-4ba9-9fa4-9ba96c977eab",
                "rate": 5,
                "date": "2023-12-12T02:56:22.446431",
                "review": "Incredible camera capabilities and a smooth user experience.",
                "pros": "Outstanding camera, clean UI.",
                "cons": "Slightly expensive.",
                "userFullName": "Maximus Power",
                "userId": "4"
            }
        ],
        "id": "5f0f89ae-2136-4509-a334-951cfe495cd7",
        "name": "Google Pixel 6 Pro",
        "price": 1099,
        "discountPercentage": 0,
        "discountedPrice": 1099,
        "image": "/store/assets/imgs/products/Phone-Google-6-pro.jpg",
        "rating": 4
    }
}

export async function getPopularProducts() {
    return [
        {
            "id": "9020264a-3348-4e4b-97c1-3463074c5e5f",
            "name": "Mechanical Keyboard Switches",
            "price": 49,
            "discountPercentage": 5,
            "discountedPrice": 47,
            "image": "",
            "rating": 1
        },
        {
            "id": "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
            "name": "Water Bottle",
            "price": 12,
            "discountPercentage": 0,
            "discountedPrice": 12,
            "image": "",
            "rating": 0
        },
        {
            "id": "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
            "name": "Fitness Tracker",
            "price": 79,
            "discountPercentage": 0,
            "discountedPrice": 79,
            "image": "",
            "rating": 5
        },
        {
            "id": "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
            "name": "HP Color LaserJet Pro MFP M283fdw",
            "price": 499,
            "discountPercentage": 0,
            "discountedPrice": 499,
            "image": "",
            "rating": 0
        },
        {
            "id": "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
            "name": "Fujitsu ScanSnap iX1600",
            "price": 449,
            "discountPercentage": 0,
            "discountedPrice": 449,
            "image": "",
            "rating": 0
        },
        {
            "id": "fe1a49f9-36a1-477b-be87-edb573326e03",
            "name": "Camera Tripod",
            "price": 59,
            "discountPercentage": 0,
            "discountedPrice": 59,
            "image": "",
            "rating": 0
        },
        {
            "id": "03b07a62-e987-4544-90b8-5955bc6051a3",
            "name": "Waterproof Car Cover",
            "price": 89,
            "discountPercentage": 0,
            "discountedPrice": 89,
            "image": "",
            "rating": 0
        },
        {
            "id": "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
            "name": "Carpeted Floor Mats",
            "price": 39,
            "discountPercentage": 16,
            "discountedPrice": 33,
            "image": "",
            "rating": 0
        },
        {
            "id": "69cee78d-ba2e-4f14-ac65-6c50ea481778",
            "name": "Rolling Duffel Bag",
            "price": 89,
            "discountPercentage": 4,
            "discountedPrice": 85,
            "image": "",
            "rating": 0
        },
        {
            "id": "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
            "name": "Men's Compression Shorts",
            "price": 39,
            "discountPercentage": 0,
            "discountedPrice": 39,
            "image": "",
            "rating": 0
        },
        {
            "id": "8173d005-a54a-4589-9775-ef8e7eb88a7d",
            "name": "Women's Sports Bra",
            "price": 29,
            "discountPercentage": 0,
            "discountedPrice": 29,
            "image": "",
            "rating": 0
        },
        {
            "id": "60003e1d-68de-4f7a-937c-f636ab2b798d",
            "name": "Men's Athletic Shorts",
            "price": 49,
            "discountPercentage": 0,
            "discountedPrice": 49,
            "image": "",
            "rating": 0
        },
        {
            "id": "88e8459e-4d19-4386-bce5-84b901685bb5",
            "name": "Resistance Bands Set",
            "price": 29,
            "discountPercentage": 0,
            "discountedPrice": 29,
            "image": "",
            "rating": 0
        },
        {
            "id": "16a06882-a2f4-43e5-afda-590971c6152e",
            "name": "Foam Roller",
            "price": 34,
            "discountPercentage": 0,
            "discountedPrice": 34,
            "image": "",
            "rating": 4
        }
    ]
}

export async function getNewArrivalsProducts() {
    return [
        {
            "id": "9020264a-3348-4e4b-97c1-3463074c5e5f",
            "name": "Mechanical Keyboard Switches",
            "price": 49,
            "discountPercentage": 5,
            "discountedPrice": 47,
            "image": "",
            "rating": 1
        },
        {
            "id": "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
            "name": "Water Bottle",
            "price": 12,
            "discountPercentage": 0,
            "discountedPrice": 12,
            "image": "",
            "rating": 0
        },
        {
            "id": "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
            "name": "Fitness Tracker",
            "price": 79,
            "discountPercentage": 0,
            "discountedPrice": 79,
            "image": "",
            "rating": 5
        },
        {
            "id": "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
            "name": "HP Color LaserJet Pro MFP M283fdw",
            "price": 499,
            "discountPercentage": 0,
            "discountedPrice": 499,
            "image": "",
            "rating": 0
        },
        {
            "id": "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
            "name": "Fujitsu ScanSnap iX1600",
            "price": 449,
            "discountPercentage": 0,
            "discountedPrice": 449,
            "image": "",
            "rating": 0
        },
        {
            "id": "fe1a49f9-36a1-477b-be87-edb573326e03",
            "name": "Camera Tripod",
            "price": 59,
            "discountPercentage": 0,
            "discountedPrice": 59,
            "image": "",
            "rating": 0
        },
        {
            "id": "03b07a62-e987-4544-90b8-5955bc6051a3",
            "name": "Waterproof Car Cover",
            "price": 89,
            "discountPercentage": 0,
            "discountedPrice": 89,
            "image": "",
            "rating": 0
        },
        {
            "id": "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
            "name": "Carpeted Floor Mats",
            "price": 39,
            "discountPercentage": 16,
            "discountedPrice": 33,
            "image": "",
            "rating": 0
        },
        {
            "id": "69cee78d-ba2e-4f14-ac65-6c50ea481778",
            "name": "Rolling Duffel Bag",
            "price": 89,
            "discountPercentage": 4,
            "discountedPrice": 85,
            "image": "",
            "rating": 0
        },
        {
            "id": "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
            "name": "Men's Compression Shorts",
            "price": 39,
            "discountPercentage": 0,
            "discountedPrice": 39,
            "image": "",
            "rating": 0
        },
        {
            "id": "8173d005-a54a-4589-9775-ef8e7eb88a7d",
            "name": "Women's Sports Bra",
            "price": 29,
            "discountPercentage": 0,
            "discountedPrice": 29,
            "image": "",
            "rating": 0
        },
        {
            "id": "60003e1d-68de-4f7a-937c-f636ab2b798d",
            "name": "Men's Athletic Shorts",
            "price": 49,
            "discountPercentage": 0,
            "discountedPrice": 49,
            "image": "",
            "rating": 0
        },
        {
            "id": "88e8459e-4d19-4386-bce5-84b901685bb5",
            "name": "Resistance Bands Set",
            "price": 29,
            "discountPercentage": 0,
            "discountedPrice": 29,
            "image": "",
            "rating": 0
        },
        {
            "id": "16a06882-a2f4-43e5-afda-590971c6152e",
            "name": "Foam Roller",
            "price": 34,
            "discountPercentage": 0,
            "discountedPrice": 34,
            "image": "",
            "rating": 4
        },
        {
            "id": "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
            "name": "Carpeted Floor Mats",
            "price": 39,
            "discountPercentage": 16,
            "discountedPrice": 33,
            "image": "",
            "rating": 0
        },
        {
            "id": "69cee78d-ba2e-4f14-ac65-6c50ea481778",
            "name": "Rolling Duffel Bag",
            "price": 89,
            "discountPercentage": 4,
            "discountedPrice": 85,
            "image": "",
            "rating": 0
        },
    ]
}

export async function getDiscountedProducts() {
    return [
        {
            "id": "10c930ed-f326-48da-a571-6889262104ca",
            "name": "FootJoy Pro SL Golf Shoes",
            "price": 179,
            "discountPercentage": 21,
            "discountedPrice": 141,
            "image": "",
            "rating": 0
        },
        {
            "id": "16672559-004b-47c0-8a4f-9f55fc129785",
            "name": "Nintendo Game & Watch: Super Mario Bros",
            "price": 49,
            "discountPercentage": 17,
            "discountedPrice": 41,
            "image": "",
            "rating": 0
        },
        {
            "id": "1a275ab8-9dc3-45b1-a52e-533d5f37c21f",
            "name": "Solid Perfume",
            "price": 14,
            "discountPercentage": 6,
            "discountedPrice": 13,
            "image": "",
            "rating": 0
        },
        {
            "id": "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
            "name": "Acer Aspire 5",
            "price": 699,
            "discountPercentage": 6,
            "discountedPrice": 657,
            "image": "https://ibb.co/VVg4tKH",
            "rating": 5
        },
        {
            "id": "1eb4379a-a87b-441d-bd49-af2bea052b50",
            "name": "Fast Charging USB Car Charger",
            "price": 14,
            "discountPercentage": 6,
            "discountedPrice": 13,
            "image": "",
            "rating": 0
        },
        {
            "id": "1fd49222-be5c-442a-ba8d-6d0d902be8df",
            "name": "Heavy Duty Car Cover",
            "price": 99,
            "discountPercentage": 3,
            "discountedPrice": 96,
            "image": "",
            "rating": 0
        },
        {
            "id": "262c138c-f65d-4528-bd40-e54a28712b2a",
            "name": "Fleece Sherpa Jacket",
            "price": 44,
            "discountPercentage": 4,
            "discountedPrice": 42,
            "image": "",
            "rating": 0
        },
        {
            "id": "264db346-d6cd-42bd-8710-934d194ffe21",
            "name": "Hydrating Facial Moisturizer",
            "price": 24,
            "discountPercentage": 2,
            "discountedPrice": 24,
            "image": "",
            "rating": 0
        },
        {
            "id": "2a52ebff-9687-4309-8d9c-c32a585243d1",
            "name": "Nintendo 3DS XL",
            "price": 179,
            "discountPercentage": 13,
            "discountedPrice": 156,
            "image": "",
            "rating": 0
        },
        {
            "id": "2b7b4c0e-3b2c-4ddf-8907-ff352aad28a3",
            "name": "Hair Styling Pomade",
            "price": 11,
            "discountPercentage": 21,
            "discountedPrice": 9,
            "image": "",
            "rating": 0
        },
        {
            "id": "2d5268af-e732-42f1-8ae8-b6e91677bcd4",
            "name": "Hand Soap",
            "price": 4,
            "discountPercentage": 13,
            "discountedPrice": 3,
            "image": "",
            "rating": 0
        },
        {
            "id": "324b72d9-f597-4c3d-9490-a90225002406",
            "name": "Cashmere V-Neck Sweater",
            "price": 199,
            "discountPercentage": 8,
            "discountedPrice": 183,
            "image": "",
            "rating": 0
        },
        {
            "id": "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
            "name": "HP Pavilion 14",
            "price": 799,
            "discountPercentage": 11,
            "discountedPrice": 711,
            "image": "https://ibb.co/hCjWn7f",
            "rating": 4
        },
        {
            "id": "3bdb838f-1e89-40fe-85f4-61e978bd02d8",
            "name": "Denim Trucker Jacket",
            "price": 69,
            "discountPercentage": 13,
            "discountedPrice": 60,
            "image": "",
            "rating": 0
        },
        {
            "id": "42157d88-51ec-4a4a-a283-7951c56376ef",
            "name": "Makeup Brushes Set",
            "price": 24,
            "discountPercentage": 3,
            "discountedPrice": 23,
            "image": "",
            "rating": 0
        },
        {
            "id": "45784ea5-0041-4bf1-9c23-2e93657963fc",
            "name": "Denim Jacket",
            "price": 49,
            "discountPercentage": 21,
            "discountedPrice": 39,
            "image": "",
            "rating": 0
        },
        {
            "id": "457d29fc-301b-4aa1-9337-610cd0144a9d",
            "name": "Dell UltraSharp U2720Q",
            "price": 699,
            "discountPercentage": 4,
            "discountedPrice": 671,
            "image": "",
            "rating": 0
        },
        {
            "id": "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
            "name": "Apple iPhone SE (2020)",
            "price": 399,
            "discountPercentage": 8,
            "discountedPrice": 367,
            "image": "https://ibb.co/H7397yP",
            "rating": 2
        },
        {
            "id": "4909b5d1-d00d-44f9-9f2f-07b191e55ce9",
            "name": "Exfoliating Facial Scrub",
            "price": 19,
            "discountPercentage": 12,
            "discountedPrice": 17,
            "image": "",
            "rating": 0
        },
        {
            "id": "4ab262eb-a388-4218-a411-f7c0cbfbc083",
            "name": "Foam Roller",
            "price": 24,
            "discountPercentage": 14,
            "discountedPrice": 21,
            "image": "",
            "rating": 0
        },
        {
            "id": "4bbe25a4-60b5-47f1-8a09-34b5b98a10be",
            "name": "Bath Bombs",
            "price": 6,
            "discountPercentage": 7,
            "discountedPrice": 6,
            "image": "",
            "rating": 0
        },
        {
            "id": "56ae1e61-916f-4f02-87d3-f5220d0c2a0d",
            "name": "Spacious Closet Organizer",
            "price": 59,
            "discountPercentage": 21,
            "discountedPrice": 47,
            "image": "",
            "rating": 0
        },
        {
            "id": "5a17d26e-18fd-40d8-b487-1c8c7c699bcc",
            "name": "Ab Roller Wheel",
            "price": 19,
            "discountPercentage": 13,
            "discountedPrice": 17,
            "image": "",
            "rating": 0
        },
        {
            "id": "5a22f585-6379-4fcb-8059-736aee703ea3",
            "name": "Stainless Steel Watch Band",
            "price": 25,
            "discountPercentage": 4,
            "discountedPrice": 24,
            "image": "",
            "rating": 0
        },
        {
            "id": "5b6113ba-889a-4aac-b50a-2796fb2c3c2d",
            "name": "Oakley Flight Deck Snow Goggles",
            "price": 199,
            "discountPercentage": 3,
            "discountedPrice": 193,
            "image": "",
            "rating": 0
        },
        {
            "id": "5da8b5c6-ddf6-4034-b745-be7d95f123c6",
            "name": "Sun Shade Car Cover",
            "price": 69,
            "discountPercentage": 4,
            "discountedPrice": 66,
            "image": "",
            "rating": 0
        }
    ]
}

export async function deleteReviewApi({ ratingId, userId, tokens }) {
    const url = `${mainURL}/Rating/${ratingId}/user/${userId}`

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function updateReviewApi({ updatedData, tokens }) {
    const url = `${mainURL}/Rating/UpdateRating`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function createReviewApi({ reviewData, tokens }) {
    const url = `${mainURL}/Rating/AddRating`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(reviewData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}