const mainURL = process.env.REACT_APP_BASE_URL

export async function getUser(ID, tokens) {
    return {
        "image": "/store/assets/imgs/user/image.jpg",
        "userRatings": [
            {
                "id": "7c802810-637a-4f35-b8f2-9fb49452a11a",
                "rate": 1,
                "date": "2023-12-22T20:05:52.7043764",
                "review": "This is a very critical review of this product.",
                "pros": "",
                "cons": "bad screen, bad battery",
                "productId": "9020264a-3348-4e4b-97c1-3463074c5e5f",
                "productName": "Mechanical Keyboard Switches",
                "productImage": "",
                "productAvgRating": 1
            },
            {
                "id": "b8a47335-daba-42dd-8d64-d58d9209203d",
                "rate": 5,
                "date": "2023-12-22T20:06:03.169169",
                "review": "",
                "pros": "",
                "cons": "",
                "productId": "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                "productName": "Fitness Tracker",
                "productImage": "",
                "productAvgRating": 5
            },
            {
                "id": "f8028950-5e40-4165-87bf-720d55bba28b",
                "rate": 4,
                "date": "2023-12-22T20:06:53.6940671",
                "review": "This is a very positive review.",
                "pros": "good screen, good battery",
                "cons": "expensive",
                "productId": "16a06882-a2f4-43e5-afda-590971c6152e",
                "productName": "Foam Roller",
                "productImage": "",
                "productAvgRating": 4
            }
        ],
        "cards": [
            {
                "id": "0e84d685-928a-4608-8447-fb2fb523ba12",
                "type": 2,
                "cardStatus": 2,
                "number": "5105131531230351",
                "holder": "John Doe",
                "date": "05/27",
                "cvc": 123
            }
        ],
        "userOrders": [
            {
                "id": "389e64da-dc83-474a-92e6-61d705455861",
                "orderItems": [
                    {
                        "id": "d1f28ae7-6013-4f76-bd49-d15b582bfee2",
                        "quantity": 3,
                        "productId": "9020264a-3348-4e4b-97c1-3463074c5e5f",
                        "productName": "Mechanical Keyboard Switches",
                        "productImage": "",
                        "size": "5.4",
                        "color": "gold",
                        "price": 47,
                        "total": 141
                    }
                ],
                "recepient": "Dimitar Dimeski",
                "email": "dime@dime.dime",
                "purchasedTime": "2023-12-22T19:06:06.0933482",
                "address": "Adressa 2 d",
                "postalCode": "1111",
                "city": "Debar",
                "phoneNumber": "059942059",
                "note": null,
                "courier": null,
                "totalPrice": 141,
                "shipping": 150,
                "status": "Purchased",
                "paymentStatus": "PayingOnDelivery"
            },
            {
                "id": "1ddc3924-3cbc-450d-9791-97f17f8181c9",
                "orderItems": [
                    {
                        "id": "c48932b2-6fbd-41d3-bc08-f8ffde6369a8",
                        "quantity": 6,
                        "productId": "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                        "productName": "Fitness Tracker",
                        "productImage": "",
                        "size": "small",
                        "color": "green",
                        "price": 79,
                        "total": 474
                    }
                ],
                "recepient": "Dimitar Dimeski",
                "email": "dime@dime.dime",
                "purchasedTime": "2023-12-22T20:02:59.9149837",
                "address": "Adressa 2 d",
                "postalCode": "1111",
                "city": "Debar",
                "phoneNumber": "045345343",
                "note": "Some special message. A special request by me.",
                "courier": null,
                "totalPrice": 474,
                "shipping": 150,
                "status": "Delivered",
                "paymentStatus": "Paid"
            }
        ],
        "id": "f852f25b-9191-4368-8fdd-c5b627b7f502",
        "firstName": "Dimitar",
        "lastName": "Dimeski",
        "email": "dime@dime.dime",
        "role": "User",
        "phoneNumber": "045345343",
        "address": "Adressa 2 d",
        "postalCode": "1111",
        "city": "Debar",
        "username": "mike1234"
    }
}

/// LOGIN
export async function logInApi(credentials) {
    return {
        "id": "f852f25b-9191-4368-8fdd-c5b627b7f502",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJLcmlzS29zdCIsIkZ1bGxOYW1lIjoiS3Jpc3RpamFuIEtvc3RvdiIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTcwMzI3NDE3OCwiZXhwIjoxNzAzMzYwNTc4LCJpYXQiOjE3MDMyNzQxNzh9.UeOZ6q-JAYNE-g41D_Gd4gPQOcjc2QzSWJm30kqex0M"
    }
}

// /// LOGOUT
// export async function logOutApi(userId, tokens) {
//     const url = `${mainURL}/auth/logout/${useriId}`
//     const response = await fetch(url, {
//         method: 'POST',
// headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${tokens.accessToken}`,
// },
//     })

//     const textResponse = await response.text()  ////////////// ?????????????
//     return textResponse
// }

/// REGISTER
export async function registerApi(credentials) {
    const url = `${mainURL}/User/Register`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function deleteUserApi({ ID, tokens }) {
    const url = `${mainURL}/User/${ID}`

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
    })

    const data = await response.text()
    return data
}

export async function updateUserApi({ updatedData, tokens }) {
    const url = `${mainURL}/User/UpdateUser/${updatedData.id}`

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

export async function deleteCardApi({ ID, tokens }) { // api/Card/${ID}
    const url = `${mainURL}/Card/${ID}`

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

export async function updateCardApi({ updatedData, tokens }) { // api/Card/UpdateCard
    const url = `${mainURL}/Card/UpdateCard`
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

export async function createCardApi({ cardData, userID, tokens }) { // api/Card/AddCard/${ID}
    const url = `${mainURL}/Card/AddCard/${userID}`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(cardData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function subscribeApi(subscriberData) {
    const url = `${mainURL}/Subscriber/AddSubscriber`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriberData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}