const mainURL = process.env.REACT_APP_BASE_URL

export async function getCategories() {
    return [
        {
            "id": "autoaccessories",
            "name": "Automobile Accessories",
            "image": "/assets/imgs/categories/autoacc.jpg",
            "icon": "/assets/imgs/categories/autoaccsmall.jpg",
            "subcategories": [
                {
                    "id": "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
                    "name": "Car Organizers",
                    "image": "/assets/imgs/subCategories/storage.jpg",
                    "description": "Storage solutions for cars, including trunk organizers, backseat organizers, and console organizers.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "10884d4e-343f-43f8-9094-2c2e12f072ef",
                    "name": "Floor Mats",
                    "image": "/assets/imgs/subCategories/mats.jpg",
                    "description": "Custom-fit floor mats to keep the interior of the car clean and tidy.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
                    "name": "Car Cleaning Kits",
                    "image": "/assets/imgs/subCategories/cleaningkit.jpg",
                    "description": "Kits containing everything needed to clean and detail the interior and exterior of a car.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
                    "name": "Car Styling",
                    "image": "/assets/imgs/subCategories/style.jpg",
                    "description": "Decorative and functional accessories to enhance the appearance and performance of a car, including spoilers, grilles, and rims.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
                    "name": "Car Lights",
                    "image": "/assets/imgs/subCategories/carlight.jpg",
                    "description": "LED lights and bulbs for headlights, taillights, interior lighting, and decorative lighting.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
                    "name": "Seat Covers",
                    "image": "/assets/imgs/subCategories/seatcover.jpg",
                    "description": "Protective covers for car seats to prevent wear and tear, stains, and damage.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "d3e3c11b-809b-4d22-98f8-58333377b784",
                    "name": "Car Covers",
                    "image": "/assets/imgs/subCategories/cover.jpg",
                    "description": "Protective covers for cars to shield them from the elements and other hazards.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
                    "name": "Car Fragrances",
                    "image": "/assets/imgs/subCategories/airfreshener.jpg",
                    "description": "Air fresheners and scents to keep the car smelling fresh and pleasant.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "dcc14cf4-623e-46a5-b993-06722b09a093",
                    "name": "Car Phone Mounts",
                    "image": "/assets/imgs/subCategories/mount.jpg",
                    "description": "Mounts and holders for smartphones and other devices to keep them secure and accessible while driving.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                },
                {
                    "id": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
                    "name": "Car Chargers",
                    "image": "/assets/imgs/subCategories/carcharger.jpg",
                    "description": "Chargers and adapters for charging phones, tablets, and other devices in the car.",
                    "category": {
                        "id": "autoaccessories",
                        "name": "Automobile Accessories"
                    }
                }
            ]
        },
        {
            "id": "beauty",
            "name": "Beauty",
            "image": "/assets/imgs/categories/beauty.jpg",
            "icon": "/assets/imgs/categories/beautysmall.jpg",
            "subcategories": [
                {
                    "id": "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
                    "name": "Sun Care",
                    "image": "/assets/imgs/subCategories/sun.jpg",
                    "description": "Find sun care productids like sunscreen, after-sun lotion, and self-tanning productids.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
                    "name": "Beauty Tools & Accessories",
                    "image": "/assets/imgs/subCategories/tools.jpg",
                    "description": "Shop for beauty tools like hair straighteners, curling irons, and makeup brushes.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
                    "name": "Wellness",
                    "image": "/assets/imgs/subCategories/wellness.jpg",
                    "description": "Shop for wellness productids like vitamins, supplements, and essential oils.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
                    "name": "Skincare",
                    "image": "/assets/imgs/subCategories/skin.jpg",
                    "description": "Get skincare productids like cleansers, moisturizers, and serums to keep your skin healthy and glowing.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "67447359-bb55-4510-a696-06207f11625b",
                    "name": "Men's Grooming",
                    "image": "/assets/imgs/subCategories/mensgroom.jpg",
                    "description": "Find grooming productids for men like razors, shaving cream, and aftershave.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "8d12a370-ad82-4c33-a99a-006b040abbe2",
                    "name": "Fragrances",
                    "image": "/assets/imgs/subCategories/fragrance.jpg",
                    "description": "Find perfumes and colognes from top brands for men and women.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
                    "name": "Personal Care",
                    "image": "/assets/imgs/subCategories/personal.jpg",
                    "description": "Get personal care productids like toothpaste, deodorant, and body powder.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
                    "name": "Makeup",
                    "image": "/assets/imgs/subCategories/makeup.jpg",
                    "description": "Find makeup productids like foundation, lipstick, and mascara for any occasion.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "c8e24060-a3cc-4909-a295-a20490698732",
                    "name": "Bath & Body",
                    "image": "/assets/imgs/subCategories/bath.jpg",
                    "description": "Get bath and body productids like soaps, body wash, and lotions for a relaxing spa experience at home.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                },
                {
                    "id": "f01b6cc6-1917-40ff-9344-184e978a68d8",
                    "name": "Hair Care",
                    "image": "/assets/imgs/subCategories/hair.jpg",
                    "description": "Shop for hair care productids like shampoo, conditioner, and styling tools for any hair type.",
                    "category": {
                        "id": "beauty",
                        "name": "Beauty"
                    }
                }
            ]
        },
        {
            "id": "homeandgarden",
            "name": "Home & Garden",
            "image": "/assets/imgs/categories/home.jpg",
            "icon": "/assets/imgs/categories/homesmall.jpg",
            "subcategories": [
                {
                    "id": "0fc1779f-8256-402b-bfce-aa7938a7dce0",
                    "name": "Cleaning & Laundry",
                    "image": "/assets/imgs/subCategories/homebath.jpg",
                    "description": "Get cleaning supplies and laundry essentials for your home.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
                    "name": "Bedding & Bath",
                    "image": "/assets/imgs/subCategories/beds.jpg",
                    "description": "Shop for bedding sets, towels, and other bath essentials for your home.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "21010f6a-2891-4fc9-969f-4886c993e95c",
                    "name": "Kitchen & Dining",
                    "image": "/assets/imgs/subCategories/kitchen.jpg",
                    "description": "Find kitchen appliances, cookware, and dining essentials for your home.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "7cf5b026-3725-4149-8602-1a0f65da4bd0",
                    "name": "Storage & Organization",
                    "image": "/assets/imgs/subCategories/homestorage.jpg",
                    "description": "Find storage solutions and organizational tools for your home or office.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "7d214c1c-09ac-4645-b389-16e146c4e9d2",
                    "name": "Lighting",
                    "image": "/assets/imgs/subCategories/lights.jpg",
                    "description": "Discover lighting solutions for your home, including lamps, light fixtures, and bulbs.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
                    "name": "Pet Supplies",
                    "image": "/assets/imgs/subCategories/pets.jpg",
                    "description": "Find pet food, toys, and other supplies for your furry friends.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "86f9eabb-c453-4c95-bef2-e7538df76294",
                    "name": "Home Decor",
                    "image": "/assets/imgs/subCategories/decor.jpg",
                    "description": "Shop for home decor items like curtains, rugs, wall art, and more.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
                    "name": "Furniture",
                    "image": "/assets/imgs/subCategories/furniture.jpg",
                    "description": "Shop for sofas, chairs, tables, and other furniture pieces for your home or office.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
                    "name": "Home Improvement",
                    "image": "/assets/imgs/subCategories/hometools.jpg",
                    "description": "Get tools and supplies for home improvement projects like painting, plumbing, and electrical work.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                },
                {
                    "id": "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
                    "name": "Gardening",
                    "image": "/assets/imgs/subCategories/garden.jpg",
                    "description": "Discover gardening tools, plants, and other essentials for your garden.",
                    "category": {
                        "id": "homeandgarden",
                        "name": "Home & Garden"
                    }
                }
            ]
        },
        {
            "id": "menswear",
            "name": "Men's Clothing",
            "image": "/assets/imgs/categories/mensWear.jpg",
            "icon": "/assets/imgs/categories/mens-Wearsmall.jpg",
            "subcategories": [
                {
                    "id": "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
                    "name": "Sweaters",
                    "image": "/assets/imgs/subCategories/sweater.jpg",
                    "description": "Warm and comfortable tops that come in a variety of styles, including pullovers, cardigans, and turtlenecks.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
                    "name": "Suits",
                    "image": "/assets/imgs/subCategories/suit.jpg",
                    "description": "Formal outfits that typically consist of a jacket and matching pants, worn for business or formal occasions.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "95448f8a-49ea-4930-b91f-193892a687e8",
                    "name": "T-Shirts",
                    "image": "/assets/imgs/subCategories/shirt.jpg",
                    "description": "Comfortable and versatile tops that come in a variety of styles, colors, and designs.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
                    "name": "Hoodies",
                    "image": "/assets/imgs/subCategories/hoodie.jpg",
                    "description": "Casual and comfortable tops that come with a hood and often feature a front pocket.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
                    "name": "Foot Wear",
                    "image": "/assets/imgs/subCategories/foot.jpg",
                    "description": "Boots, jordans, sketchers adidas, nike and everyhing inbetween.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
                    "name": "Dress Shirts",
                    "image": "/assets/imgs/subCategories/dressshirt.jpg",
                    "description": "Formal shirts that are typically worn with suits or dress pants for business or formal occasions.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
                    "name": "Head wear",
                    "image": "/assets/imgs/subCategories/cap.jpg",
                    "description": "Head wear, all kinds of hats. Stay protected in the summer and warm in the winter!",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
                    "name": "Jeans",
                    "image": "/assets/imgs/subCategories/jeans.jpg",
                    "description": "Casual and versatile pants that come in a variety of styles, cuts, and washes.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
                    "name": "Jackets",
                    "image": "/assets/imgs/subCategories/jacket.jpg",
                    "description": "Outerwear that provides warmth and protection from the elements, including leather jackets, denim jackets, and bomber jackets.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                },
                {
                    "id": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
                    "name": "Pants",
                    "image": "/assets/imgs/subCategories/pants.jpg",
                    "description": "Versatile pants that come in a variety of styles, including khakis, chinos, and cargo pants.",
                    "category": {
                        "id": "menswear",
                        "name": "Men's Clothing"
                    }
                }
            ]
        },
        {
            "id": "sports",
            "name": "Sports",
            "image": "/assets/imgs/categories/sports.jpg",
            "icon": "/assets/imgs/categories/sportssmall.jpg",
            "subcategories": [
                {
                    "id": "24ffe98a-3970-4226-9895-bc0267f73cef",
                    "name": "Outdoor Recreation",
                    "image": "/assets/imgs/subCategories/camping.jpg",
                    "description": "Find outdoor gear like camping equipment, backpacks, and hiking boots.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
                    "name": "Team Sports",
                    "image": "/assets/imgs/subCategories/teams.jpg",
                    "description": "Get gear for team sports like basketball, soccer, and football.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "413916b7-99d7-4d46-bd9b-86169ca97373",
                    "name": "Golf",
                    "image": "/assets/imgs/subCategories/golf.jpg",
                    "description": "Find golf clubs, bags, and accessories for your next round.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
                    "name": "Bikes",
                    "image": "/assets/imgs/subCategories/bicycle.jpg",
                    "description": "Find bikes for adults and kids, including road bikes, mountain bikes, and BMX bikes.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "8cec5cb9-b7ac-480d-9c60-899307478643",
                    "name": "Fitness Equipment",
                    "image": "/assets/imgs/subCategories/gym.jpg",
                    "description": "Shop for fitness equipment like treadmills, weights, and resistance machines.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
                    "name": "Athletic Accessories",
                    "image": "/assets/imgs/subCategories/accesories.jpg",
                    "description": "Find athletic accessories like water bottles, yoga mats, and resistance bands.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
                    "name": "Scooters",
                    "image": "/assets/imgs/subCategories/scooter.jpg",
                    "description": "Get electric and manual scooters for kids and adults.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
                    "name": "Athletic Apparel",
                    "image": "/assets/imgs/subCategories/apparel.jpg",
                    "description": "Shop for athletic apparel like workout clothes, running shoes, and more.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "d3022cd3-e081-41f5-a7a9-06375898811e",
                    "name": "Water Sports",
                    "image": "/assets/imgs/subCategories/water.jpg",
                    "description": "Shop for water sports gear like paddleboards, kayaks, and snorkeling equipment.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                },
                {
                    "id": "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
                    "name": "Winter Sports",
                    "image": "/assets/imgs/subCategories/winter.jpg",
                    "description": "Get gear for winter sports like skiing, snowboarding, and ice skating.",
                    "category": {
                        "id": "sports",
                        "name": "Sports"
                    }
                }
            ]
        },
        {
            "id": "technology",
            "name": "Technology",
            "image": "/assets/imgs/categories/technology.jpg",
            "icon": "/assets/imgs/categories/technologysmall.jpg",
            "subcategories": [
                {
                    "id": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
                    "name": "Personal Computers",
                    "image": "/assets/imgs/subCategories/pc.jpg",
                    "description": "Get PCs, the latest components, PC accesories and everything else related to PCs.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "1ba269cb-5d2b-4975-be75-0979930cb10e",
                    "name": "Wearable Technology",
                    "image": "/assets/imgs/subCategories/watches.jpg",
                    "description": "Explore the latest wearable tech devices like smartwatches, fitness trackers, and more.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
                    "name": "Office Electronics",
                    "image": "/assets/imgs/subCategories/printer.jpg",
                    "description": "Get office electronics like printers, scanners, and projectors to help you run your business.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "50292d51-a80b-40e0-ab12-47e7557cedb8",
                    "name": "Cameras & Photography",
                    "image": "/assets/imgs/subCategories/proffcamera.jpg",
                    "description": "Shop for cameras, lenses, and other photography equipment for amateurs and professionals.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "57dcef31-e8c0-429f-8dea-0089afcbf945",
                    "name": "HandHeld entertainment",
                    "image": "/assets/imgs/subCategories/handheld.jpg",
                    "description": "Tablets, and other stuff.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "58b31959-1232-453f-b631-6411be333ed3",
                    "name": "Virtual Reality",
                    "image": "/assets/imgs/subCategories/vr.jpg",
                    "description": "Explore virtual reality technology and accessories to enhance your gaming and entertainment experiences.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
                    "name": "Accessories & Parts",
                    "image": "/assets/imgs/subCategories/chargers.jpg",
                    "description": "Find accessories and replacement parts for your electronics, including chargers, cables, and batteries.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
                    "name": "Audio & Video Equipment",
                    "image": "/assets/imgs/subCategories/audiovideo.jpg",
                    "description": "Shop for speakers, headphones, TVs, projectors, and other audio & video equipment.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
                    "name": "Smartphones",
                    "image": "/assets/imgs/subCategories/phone.jpg",
                    "description": "Discover the latest smartphones from top brands like Apple, Samsung, and more.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                },
                {
                    "id": "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
                    "name": "Gaming Consoles & Accessories",
                    "image": "/assets/imgs/subCategories/consoles.jpg",
                    "description": "Find the latest gaming consoles and accessories from top brands like Playstation, Xbox, and Nintendo.",
                    "category": {
                        "id": "technology",
                        "name": "Technology"
                    }
                }
            ]
        },
        {
            "id": "womenswear",
            "name": "Women's Clothing",
            "image": "/assets/imgs/categories/womens-Wear.jpg",
            "icon": "/assets/imgs/categories/womens-Wearsmall.jpg",
            "subcategories": [
                {
                    "id": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
                    "name": "Carry-ons",
                    "image": "/assets/imgs/subCategories/purse.jpg",
                    "description": "All the purses you can think of at great prices.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "2986c60e-1876-4c73-84be-95855807a23e",
                    "name": "Foot wear",
                    "image": "/assets/imgs/subCategories/boots.jpg",
                    "description": "Every kind of shoe you can think of at great prices.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "4c9db19d-87b1-4380-846c-62547aeeb2de",
                    "name": "Tops",
                    "image": "/assets/imgs/subCategories/tops.jpg",
                    "description": "A range of styles, from casual to formal, including t-shirts, blouses, and crop tops.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
                    "name": "Jeans",
                    "image": "/assets/imgs/subCategories/fjeans.jpg",
                    "description": "A range of styles, including jeans, leggings, and dress pants, suitable for various occasions and seasons.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
                    "name": "Sweaters",
                    "image": "/assets/imgs/subCategories/fsweater.jpg",
                    "description": "Warm and comfortable tops that come in a variety of styles, including pullovers, cardigans, and turtlenecks.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
                    "name": "Professional Chic",
                    "image": "/assets/imgs/subCategories/work.jpg",
                    "description": "Dress to impress in the office with a selection of tailored suits and work-appropriate attire.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
                    "name": "Dresses",
                    "image": "/assets/imgs/subCategories/dress.jpg",
                    "description": "All kinds of dresses and in all the colors they come in. We even have wedding dresses!",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
                    "name": "Skirts",
                    "image": "/assets/imgs/subCategories/skirt.jpg",
                    "description": "A classic wardrobe staple that comes in a variety of lengths, styles, and materials, including pencil skirts, midi skirts, and maxi skirts.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "e666d9e6-3f05-410e-b93d-457a71cf0123",
                    "name": "Activewear",
                    "image": "/assets/imgs/subCategories/active.jpg",
                    "description": "Comfortable and functional clothing designed for athletic and sports activities, including yoga pants, sports bras, and workout shirts.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                },
                {
                    "id": "f641cfb0-5506-46ee-bb60-0c8150df3585",
                    "name": "Jackets",
                    "image": "/assets/imgs/subCategories/jackets.jpg",
                    "description": "Outerwear that provides warmth and protection from the elements, including leather jackets, denim jackets, and blazers.",
                    "category": {
                        "id": "womenswear",
                        "name": "Women's Clothing"
                    }
                }
            ]
        }
    ]
}

export async function getCategoryByID(ID) {
    return {
        "id": "technology",
        "name": "Technology",
        "image": "/assets/imgs/categories/technology.jpg",
        "icon": "/assets/imgs/categories/technologysmall.jpg",
        "subcategories": [
            {
                "products": [
                    {
                        "description": "The Acer Aspire 5 is an affordable and reliable laptop that is perfect for students and casual users.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "1c15eb0c-845c-4ea3-8476-5b42bc17811e",
                                "stock": 15,
                                "size": "5.8",
                                "color": "red"
                            },
                            {
                                "id": "335da163-9377-42ca-85c0-b8fdfa40ee63",
                                "stock": 15,
                                "size": "6.8",
                                "color": "silver"
                            },
                            {
                                "id": "e9f796d0-09fa-4dd5-9ef5-cbfc0fa8af9c",
                                "stock": 41,
                                "size": "5.4",
                                "color": "magenta"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "9f475849-6205-46d0-b227-dfea73af4591",
                                "rate": 5,
                                "date": "2023-12-12T02:56:22.44643",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Zdenko Ristovski",
                                "userId": "8"
                            }
                        ],
                        "id": "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
                        "name": "Acer Aspire 5",
                        "price": 699,
                        "discountPercentage": 6,
                        "discountedPrice": 657,
                        "image": "https://ibb.co/VVg4tKH",
                        "rating": 5
                    },
                    {
                        "description": "The HP Pavilion 14 is a slim and stylish laptop that is great for everyday use.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "c4f01cf4-5095-49bd-adfd-18c3e2e8ca14",
                                "stock": 47,
                                "size": "5.4",
                                "color": "orange"
                            },
                            {
                                "id": "ca00069e-ab2d-4c78-b608-bd4b4491d3f2",
                                "stock": 10,
                                "size": "5.4",
                                "color": "yellow"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "8f2177e2-8058-4d3b-8768-565bca2248a9",
                                "rate": 3,
                                "date": "2023-12-12T02:56:22.4464296",
                                "review": "Had high hopes, but disappointed with the heating issues.",
                                "pros": "Good display, responsive keyboard.",
                                "cons": "Overheats quickly, noisy fan.",
                                "userFullName": "Luna Swift",
                                "userId": "5"
                            },
                            {
                                "id": "cf6f0558-631a-4de5-a7a3-e841106679fd",
                                "rate": 5,
                                "date": "2023-12-12T02:56:22.4464294",
                                "review": "Love the design and performance. Works like a charm!",
                                "pros": "Sleek design, fast processing, lightweight.",
                                "cons": "Average battery life.",
                                "userFullName": "Maximus Power",
                                "userId": "4"
                            }
                        ],
                        "id": "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
                        "name": "HP Pavilion 14",
                        "price": 799,
                        "discountPercentage": 11,
                        "discountedPrice": 711,
                        "image": "https://ibb.co/hCjWn7f",
                        "rating": 4
                    },
                    {
                        "description": "The Apple MacBook Pro is a high-end laptop that is perfect for professionals who need a powerful and reliable computer.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "1219abaa-dd79-4550-95f8-f02d904dd370",
                                "stock": 26,
                                "size": "6.2",
                                "color": "green"
                            },
                            {
                                "id": "94561d41-91e7-4683-96e2-e487c8355dda",
                                "stock": 8,
                                "size": "5.8",
                                "color": "blue"
                            },
                            {
                                "id": "acfbb691-dc68-4877-9ea5-631e1d433f5c",
                                "stock": 38,
                                "size": "5.4",
                                "color": "navy"
                            },
                            {
                                "id": "b6acd224-78de-4131-b7a4-4ad717f5ee6d",
                                "stock": 19,
                                "size": "6.8",
                                "color": "cyan"
                            },
                            {
                                "id": "e998b0f5-0f9f-4138-bd00-c3574bee11b1",
                                "stock": 39,
                                "size": "5.8",
                                "color": "gold"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "4b4ddc86-b92a-4f34-ad63-1fc394509a11",
                                "rate": 4,
                                "date": "2023-12-12T02:56:22.4464299",
                                "review": "Top-notch quality as expected from Apple. Love the user experience.",
                                "pros": "Smooth performance, sleek design.",
                                "cons": "High price tag.",
                                "userFullName": "Dimitar Sarafiloski",
                                "userId": "7"
                            },
                            {
                                "id": "700bfbfa-30ba-47ed-9e4a-6181735694fe",
                                "rate": 1,
                                "date": "2023-12-12T02:56:22.4464297",
                                "review": "Absolute powerhouse! Great for creative work and heavy tasks.",
                                "pros": "Superb performance, stunning display, long-lasting battery.",
                                "cons": "Pricey, limited ports.",
                                "userFullName": "Phoenix Blaze",
                                "userId": "6"
                            }
                        ],
                        "id": "74bd7e24-0ac0-4414-918c-b1de0ac2a2df",
                        "name": "Apple MacBook Pro",
                        "price": 1499,
                        "discountPercentage": 0,
                        "discountedPrice": 1499,
                        "image": "https://ibb.co/8KZpKg5",
                        "rating": 2.5
                    },
                    {
                        "description": "The Dell Inspiron 15 is a powerful and reliable laptop that is perfect for both work and play.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "28d6c23e-d07b-4449-b00c-b8d074c3358e",
                                "stock": 50,
                                "size": "6.4",
                                "color": "lime"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "3478edbf-2cf5-4823-a260-e1f51a4ef538",
                                "rate": 4,
                                "date": "2023-12-12T02:56:22.4464277",
                                "review": "Great laptop overall. It runs smoothly and handles multitasking effortlessly.",
                                "pros": "Excellent performance, good battery life, sleek design.",
                                "cons": "Average display quality, a bit heavy to carry around.",
                                "userFullName": "Mark Grayson",
                                "userId": "1"
                            },
                            {
                                "id": "b0d52518-9312-4ebb-81a0-da494f5fd825",
                                "rate": 2,
                                "date": "2023-12-12T02:56:22.4464292",
                                "review": "Not impressed with this model. Slow processing and poor battery life.",
                                "pros": "",
                                "cons": "Laggy performance, below-average battery.",
                                "userFullName": "Eleanor Rutherford",
                                "userId": "3"
                            },
                            {
                                "id": "ca499a24-3b81-4834-b6cc-22b52e98a875",
                                "rate": 3,
                                "date": "2023-12-12T02:56:22.446429",
                                "review": "Decent laptop for everyday use. Gets the job done without any major issues.",
                                "pros": "Affordable price, decent performance.",
                                "cons": "Mediocre build quality, average speakers.",
                                "userFullName": "Aurora Skywalker",
                                "userId": "2"
                            }
                        ],
                        "id": "a1c18a4a-70dd-4314-b74f-c0772966a8c7",
                        "name": "Dell Inspiron 15",
                        "price": 999,
                        "discountPercentage": 0,
                        "discountedPrice": 999,
                        "image": "https://ibb.co/sbpSc9k",
                        "rating": 3
                    },
                    {
                        "description": "The Lenovo IdeaPad 3 is a budget-friendly laptop that is perfect for basic computing tasks.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "3cc20a61-baf0-4bbd-bd9c-a9b64d039bc1",
                                "stock": 21,
                                "size": "6.8",
                                "color": "gray"
                            },
                            {
                                "id": "3d3f09d3-bd58-45d1-a027-c9f36dc391e1",
                                "stock": 38,
                                "size": "5.8",
                                "color": "olive"
                            },
                            {
                                "id": "9f6137b7-e6fb-4ee1-b695-e51ec4a4020e",
                                "stock": 37,
                                "size": "6.4",
                                "color": "brown"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "8aea76f2-1b43-42ab-82ad-5a4cce0030a9",
                                "rate": 2,
                                "date": "2023-12-12T02:56:22.4464302",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Gabriela Kuzmanovska",
                                "userId": "9"
                            }
                        ],
                        "id": "b6891273-10bd-47ca-a139-27955175dfee",
                        "name": "Lenovo IdeaPad 3",
                        "price": 599,
                        "discountPercentage": 0,
                        "discountedPrice": 599,
                        "image": "https://ibb.co/52GbHN7",
                        "rating": 2
                    }
                ],
                "id": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
                "name": "Personal Computers",
                "image": "/assets/imgs/subCategories/pc.jpg",
                "description": "Get PCs, the latest components, PC accesories and everything else related to PCs.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "The Smart Ring V is a stylish and discreet way to stay connected, with features such as message notifications and mobile payments.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "dc77c749-dd37-4052-8c33-a1e46bb65120",
                                "stock": 45,
                                "size": "6.4",
                                "color": "magenta"
                            }
                        ],
                        "ratings": [],
                        "id": "47c2cef5-cfc4-4e6d-84e3-56d618701eac",
                        "name": "Smart Ring V",
                        "price": 129,
                        "discountPercentage": 0,
                        "discountedPrice": 129,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Smart Glasses Z are the perfect combination of fashion and technology, with features such as voice commands and AR capabilities.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "technokia",
                            "name": "Nokia",
                            "image": "/assets/imgs/manufacturers/nokia.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "68d66750-9f3b-4da6-9d35-032505bbf791",
                                "stock": 2,
                                "size": "6.2",
                                "color": "yellow"
                            }
                        ],
                        "ratings": [],
                        "id": "58a34f33-1e5f-4f93-bc0d-2b5d06d4287c",
                        "name": "Smart Glasses Z",
                        "price": 199,
                        "discountPercentage": 0,
                        "discountedPrice": 199,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Smartwatch X is a high-tech device that combines the best features of a fitness tracker and a smartwatch.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "technokia",
                            "name": "Nokia",
                            "image": "/assets/imgs/manufacturers/nokia.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "51f0384a-7dd8-4c45-90d8-696697c71575",
                                "stock": 21,
                                "size": "6.2",
                                "color": "magenta"
                            },
                            {
                                "id": "b4f0eb09-2e1a-4924-9cf4-17b6eb10202c",
                                "stock": 39,
                                "size": "5.4",
                                "color": "cyan"
                            },
                            {
                                "id": "d5cf5aff-d201-4b0c-afc7-b669f1aa3b87",
                                "stock": 9,
                                "size": "5.4",
                                "color": "lime"
                            },
                            {
                                "id": "ded906db-1539-4ff9-adf3-5130f51f7c90",
                                "stock": 40,
                                "size": "6.2",
                                "color": "gray"
                            },
                            {
                                "id": "f3d661b9-2e97-4825-ba6a-cd7ef451bf45",
                                "stock": 3,
                                "size": "5.8",
                                "color": "blue"
                            }
                        ],
                        "ratings": [],
                        "id": "8600635d-9264-4273-8906-75915a2396d0",
                        "name": "Smartwatch X",
                        "price": 149,
                        "discountPercentage": 0,
                        "discountedPrice": 149,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Fitness Tracker Y is the ultimate workout companion, with advanced features such as heart rate monitoring and GPS tracking.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "8705ce5a-b0c6-410a-8690-3b7170e8a2cb",
                                "stock": 28,
                                "size": "5.8",
                                "color": "green"
                            },
                            {
                                "id": "a62b56e7-212f-41c6-ab13-c9ef4aafde70",
                                "stock": 15,
                                "size": "6.2",
                                "color": "violet"
                            },
                            {
                                "id": "cb755992-c30d-4409-8528-7a988e6538d0",
                                "stock": 26,
                                "size": "5.4",
                                "color": "brown"
                            },
                            {
                                "id": "ebdf9262-4541-455d-9c7a-251f3cf1e378",
                                "stock": 6,
                                "size": "6.4",
                                "color": "olive"
                            },
                            {
                                "id": "f0e979ea-2ef0-45fe-a9ee-485bf09fa26c",
                                "stock": 24,
                                "size": "5.4",
                                "color": "lime"
                            }
                        ],
                        "ratings": [],
                        "id": "b69f3d89-1aea-4f5b-89a7-84a90a5c707d",
                        "name": "Fitness Tracker Y",
                        "price": 79,
                        "discountPercentage": 3,
                        "discountedPrice": 77,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Sleep Tracker W helps you get a better night's sleep by tracking your sleep patterns and providing personalized recommendations.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "9137ab34-6211-4ad5-a237-a7b56da5383a",
                                "stock": 15,
                                "size": "5.8",
                                "color": "magenta"
                            },
                            {
                                "id": "f607b009-6a44-4fcf-a703-44ceae2962e7",
                                "stock": 0,
                                "size": "6.4",
                                "color": "purple"
                            }
                        ],
                        "ratings": [],
                        "id": "bf0d288f-4a4d-4070-af7c-2256cb9e5586",
                        "name": "Sleep Tracker W",
                        "price": 59,
                        "discountPercentage": 0,
                        "discountedPrice": 59,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "1ba269cb-5d2b-4975-be75-0979930cb10e",
                "name": "Wearable Technology",
                "image": "/assets/imgs/subCategories/watches.jpg",
                "description": "Explore the latest wearable tech devices like smartwatches, fitness trackers, and more.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "The Sony WH-1000XM4 is a noise-cancelling Bluetooth headphone with exceptional sound quality and comfort.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "9ab64efd-a570-48de-b5b7-856035e9fe1a",
                                "stock": 10,
                                "size": "6.8",
                                "color": "magenta"
                            },
                            {
                                "id": "d66c8304-7c0f-4b11-b554-dc01db8d8bf6",
                                "stock": 28,
                                "size": "6.4",
                                "color": "green"
                            }
                        ],
                        "ratings": [],
                        "id": "081f8b76-f0a2-4172-a15d-07cbc7e33013",
                        "name": "Sony WH-1000XM4",
                        "price": 349,
                        "discountPercentage": 0,
                        "discountedPrice": 349,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Logitech MX Keys is a wireless keyboard with backlit keys and a comfortable typing experience.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "e545ac3c-778a-412d-9338-0eff150aa7cc",
                                "stock": 26,
                                "size": "5.8",
                                "color": "silver"
                            }
                        ],
                        "ratings": [],
                        "id": "370ff008-cbc0-4b3e-b8cb-687a246be0ea",
                        "name": "Logitech MX Keys",
                        "price": 99,
                        "discountPercentage": 0,
                        "discountedPrice": 99,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Fujitsu ScanSnap iX1600 is a high-speed document scanner with automatic document feeder and WiFi connectivity.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "16de67be-624c-4369-8216-a7160d6392ce",
                                "stock": 0,
                                "size": "6.2",
                                "color": "yellow"
                            },
                            {
                                "id": "18e29fad-d126-4ec6-a834-153510d6eb85",
                                "stock": 43,
                                "size": "6.8",
                                "color": "green"
                            },
                            {
                                "id": "60a8d0d5-0f5f-4685-9d8b-ff71bcc2dfdb",
                                "stock": 25,
                                "size": "6.2",
                                "color": "brown"
                            }
                        ],
                        "ratings": [],
                        "id": "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
                        "name": "Fujitsu ScanSnap iX1600",
                        "price": 449,
                        "discountPercentage": 0,
                        "discountedPrice": 449,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Dell UltraSharp U2720Q is a 27-inch 4K monitor with a wide color gamut and USB-C connectivity.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "cff96bae-e7a9-4b0f-b520-8dfdfd2794f2",
                                "stock": 20,
                                "size": "5.4",
                                "color": "navy"
                            }
                        ],
                        "ratings": [],
                        "id": "457d29fc-301b-4aa1-9337-610cd0144a9d",
                        "name": "Dell UltraSharp U2720Q",
                        "price": 699,
                        "discountPercentage": 4,
                        "discountedPrice": 671,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The HP Color LaserJet Pro MFP M283fdw is a multi-function color laser printer that can print, copy, scan, and fax.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "78dce249-04dd-46c5-aa61-6e211b76e14b",
                                "stock": 41,
                                "size": "5.8",
                                "color": "lime"
                            },
                            {
                                "id": "da22a270-bfa0-439f-a11a-136475c912d0",
                                "stock": 19,
                                "size": "6.8",
                                "color": "blue"
                            }
                        ],
                        "ratings": [],
                        "id": "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
                        "name": "HP Color LaserJet Pro MFP M283fdw",
                        "price": 499,
                        "discountPercentage": 0,
                        "discountedPrice": 499,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
                "name": "Office Electronics",
                "image": "/assets/imgs/subCategories/printer.jpg",
                "description": "Get office electronics like printers, scanners, and projectors to help you run your business.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "This action camera features a 23.6MP sensor and HyperSmooth 3.0 video stabilization, enabling you to capture smooth and steady footage in a variety of environments.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsamsung",
                            "name": "Samsung",
                            "image": "/assets/imgs/manufacturers/samsung.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "00f61fe9-f160-45e4-96a4-a97ccf0143a6",
                                "stock": 0,
                                "size": "6.2",
                                "color": "red"
                            }
                        ],
                        "ratings": [],
                        "id": "16fdfb87-f4ee-4567-9904-af3164f203d6",
                        "name": "GoPro HERO9 Black Action Camera",
                        "price": 449,
                        "discountPercentage": 0,
                        "discountedPrice": 449,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "With a 24.2 megapixel APS-C CMOS sensor and 45-point all cross-type AF system, this camera delivers stunning image quality and fast autofocus performance.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "469418c5-4a47-48de-9ea4-ef2b2d37440e",
                                "stock": 6,
                                "size": "5.4",
                                "color": "gray"
                            },
                            {
                                "id": "ba22e1ba-ee2b-49e4-9a24-cf7833312f6c",
                                "stock": 17,
                                "size": "6.8",
                                "color": "orange"
                            },
                            {
                                "id": "c5fe15c8-e3d0-4ac8-ad26-2b3dc1a4fc51",
                                "stock": 28,
                                "size": "5.4",
                                "color": "orange"
                            },
                            {
                                "id": "f0ff1bea-da8b-45d0-b2d1-6d077710c7e7",
                                "stock": 49,
                                "size": "6.2",
                                "color": "pink"
                            },
                            {
                                "id": "f3635204-0dae-4412-ac05-fe7ad28f99b3",
                                "stock": 2,
                                "size": "6.4",
                                "color": "lime"
                            }
                        ],
                        "ratings": [],
                        "id": "a2f9b791-952a-45a8-9306-14ff5bb6692e",
                        "name": "Canon EOS Rebel T8i DSLR Camera",
                        "price": 799,
                        "discountPercentage": 7,
                        "discountedPrice": 743,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "This mirrorless camera features a 24.2MP full-frame Exmor R BSI CMOS sensor and advanced autofocus system, delivering exceptional image quality and fast performance.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "1208880c-fc7d-48ea-ba44-90f3df9cd81a",
                                "stock": 13,
                                "size": "5.4",
                                "color": "brown"
                            },
                            {
                                "id": "c69d718f-28bf-4f34-b2bd-14165a1a9867",
                                "stock": 19,
                                "size": "6.2",
                                "color": "red"
                            },
                            {
                                "id": "ea120397-734b-4632-aeda-5644ae3db590",
                                "stock": 13,
                                "size": "6.8",
                                "color": "purple"
                            }
                        ],
                        "ratings": [],
                        "id": "c3179d21-1741-4d68-9281-62cb8eabf58b",
                        "name": "Sony Alpha a7 III Mirrorless Camera",
                        "price": 1999,
                        "discountPercentage": 0,
                        "discountedPrice": 1999,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "This mirrorless camera features a 26.1MP X-Trans CMOS 4 sensor, in-body image stabilization, and advanced video recording capabilities.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "technokia",
                            "name": "Nokia",
                            "image": "/assets/imgs/manufacturers/nokia.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "2e11c40d-f207-4171-a3b2-4b3a7055dc52",
                                "stock": 18,
                                "size": "6.2",
                                "color": "blue"
                            },
                            {
                                "id": "5651cb35-c4fc-4fd2-9b40-d54d5370322f",
                                "stock": 34,
                                "size": "5.8",
                                "color": "gold"
                            },
                            {
                                "id": "5bb6a12a-b96d-4e3a-ad20-245723cd26f7",
                                "stock": 28,
                                "size": "6.4",
                                "color": "purple"
                            }
                        ],
                        "ratings": [],
                        "id": "d81feb9d-338b-49aa-9f10-9581a6a24cd6",
                        "name": "Fujifilm X-T4 Mirrorless Camera",
                        "price": 1699,
                        "discountPercentage": 0,
                        "discountedPrice": 1699,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "This professional-level DSLR camera offers exceptional image quality, high-speed performance, and advanced features.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "f1aae460-3a7b-47d8-86f3-d14b1f0a77a4",
                                "stock": 20,
                                "size": "5.8",
                                "color": "purple"
                            }
                        ],
                        "ratings": [],
                        "id": "f4fff34e-0c3f-4044-8aa0-ab0483ac7304",
                        "name": "Nikon D850 DSLR Camera",
                        "price": 2999,
                        "discountPercentage": 0,
                        "discountedPrice": 2999,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "50292d51-a80b-40e0-ab12-47e7557cedb8",
                "name": "Cameras & Photography",
                "image": "/assets/imgs/subCategories/proffcamera.jpg",
                "description": "Shop for cameras, lenses, and other photography equipment for amateurs and professionals.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "Portable electronic game featuring Super Mario Bros, with a color LCD screen and modern features.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "3218eaca-9266-431e-81a5-4292c864f03d",
                                "stock": 11,
                                "size": "6.2",
                                "color": "pink"
                            },
                            {
                                "id": "3e3b58a6-ed7a-4dc3-82c5-59024191ef66",
                                "stock": 25,
                                "size": "6.4",
                                "color": "silver"
                            },
                            {
                                "id": "6d99c22f-a56e-4158-8d2f-99ec6feeeb3b",
                                "stock": 49,
                                "size": "5.4",
                                "color": "teal"
                            },
                            {
                                "id": "8cab3817-ecba-4cbb-abd6-3c640d28417c",
                                "stock": 50,
                                "size": "5.8",
                                "color": "brown"
                            },
                            {
                                "id": "bd7669e4-f211-4851-aa67-8a140276191c",
                                "stock": 28,
                                "size": "5.4",
                                "color": "violet"
                            }
                        ],
                        "ratings": [],
                        "id": "16672559-004b-47c0-8a4f-9f55fc129785",
                        "name": "Nintendo Game & Watch: Super Mario Bros",
                        "price": 49,
                        "discountPercentage": 17,
                        "discountedPrice": 41,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Dual-screen handheld gaming system with glasses-free 3D display, StreetPass and SpotPass communication, and built-in software.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "1935daf7-ce18-41dd-a1d0-0fcde0061ab6",
                                "stock": 32,
                                "size": "6.4",
                                "color": "olive"
                            },
                            {
                                "id": "285874e3-a4b1-4c1e-90e2-f3122271d4e7",
                                "stock": 48,
                                "size": "6.4",
                                "color": "magenta"
                            },
                            {
                                "id": "34e84bd7-9c32-4048-b44f-a19ac153f0c3",
                                "stock": 19,
                                "size": "6.4",
                                "color": "red"
                            },
                            {
                                "id": "8294463e-c515-448b-b3c9-5c8605ed93d9",
                                "stock": 49,
                                "size": "5.4",
                                "color": "violet"
                            }
                        ],
                        "ratings": [],
                        "id": "2a52ebff-9687-4309-8d9c-c32a585243d1",
                        "name": "Nintendo 3DS XL",
                        "price": 179,
                        "discountPercentage": 13,
                        "discountedPrice": 156,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Handheld gaming system with built-in controllers, HD rumble, and amiibo support.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "1d3785da-4efd-4ed8-834f-77f0ddaba67b",
                                "stock": 10,
                                "size": "6.8",
                                "color": "cyan"
                            },
                            {
                                "id": "9dbcba72-bdf1-4f8f-b802-2a7cb774f3cf",
                                "stock": 23,
                                "size": "6.4",
                                "color": "cyan"
                            }
                        ],
                        "ratings": [],
                        "id": "31d084b6-e885-4b46-b517-f2d9df72ab61",
                        "name": "Nintendo Switch Lite",
                        "price": 199,
                        "discountPercentage": 0,
                        "discountedPrice": 199,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Handheld game console with front and rear cameras, Wi-Fi, and Bluetooth capabilities.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "7ffb3c38-ab08-4dfa-a8f7-e2209fffe737",
                                "stock": 31,
                                "size": "5.4",
                                "color": "teal"
                            }
                        ],
                        "ratings": [],
                        "id": "d02ff2fc-a130-4060-bef3-ed1a27f0a94e",
                        "name": "PlayStation Vita",
                        "price": 199,
                        "discountPercentage": 0,
                        "discountedPrice": 199,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Portable gaming console with 4.3-inch LCD screen, Wi-Fi, and Bluetooth.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "07cfccb2-dc8f-4015-be60-ec58fd7180f1",
                                "stock": 5,
                                "size": "5.8",
                                "color": "gold"
                            },
                            {
                                "id": "4552af9b-a49f-410a-a770-3bf332955ce4",
                                "stock": 40,
                                "size": "6.2",
                                "color": "violet"
                            },
                            {
                                "id": "5de003f8-f117-44ed-aea3-4e906ffccb83",
                                "stock": 10,
                                "size": "5.4",
                                "color": "magenta"
                            },
                            {
                                "id": "f4e64a4b-5a7d-4fd1-9a2b-ce97167e9152",
                                "stock": 27,
                                "size": "5.4",
                                "color": "teal"
                            },
                            {
                                "id": "fb8786c8-544b-4a02-8eae-285e88dbd897",
                                "stock": 9,
                                "size": "6.4",
                                "color": "teal"
                            }
                        ],
                        "ratings": [],
                        "id": "f7021be2-2cc2-4720-bd6b-a9e534dd241a",
                        "name": "Sony PSP",
                        "price": 149,
                        "discountPercentage": 0,
                        "discountedPrice": 149,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "57dcef31-e8c0-429f-8dea-0089afcbf945",
                "name": "HandHeld entertainment",
                "image": "/assets/imgs/subCategories/handheld.jpg",
                "description": "Tablets, and other stuff.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "Experience virtual reality like never before with our ergonomic VR headset. Designed to fit comfortably on your head, it features high-quality lenses and an immersive audio system.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "8bcdb8aa-12dc-433d-971a-08825b9f1ec4",
                                "stock": 22,
                                "size": "6.4",
                                "color": "silver"
                            },
                            {
                                "id": "8cd5bcae-723a-4142-9763-5abed05ec821",
                                "stock": 9,
                                "size": "6.8",
                                "color": "gold"
                            }
                        ],
                        "ratings": [],
                        "id": "50160b96-d21a-453e-afbb-4e31cc0a6abf",
                        "name": "Ergonomic VR Headset",
                        "price": 249,
                        "discountPercentage": 0,
                        "discountedPrice": 249,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Get in shape while having fun with our VR fitness kit. It includes a VR headset, motion controllers, and a library of fitness games designed to get your heart pumping.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "technokia",
                            "name": "Nokia",
                            "image": "/assets/imgs/manufacturers/nokia.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "3030f8bf-6bc5-4ef5-9c42-c78465d45c0a",
                                "stock": 12,
                                "size": "6.2",
                                "color": "red"
                            },
                            {
                                "id": "32f3e76b-db6a-412e-821d-008ba76f892c",
                                "stock": 26,
                                "size": "6.2",
                                "color": "yellow"
                            },
                            {
                                "id": "8324d58b-5eab-4308-bebc-0e4a94d2c9b8",
                                "stock": 30,
                                "size": "5.8",
                                "color": "purple"
                            },
                            {
                                "id": "e3c168d3-a538-4a4d-b720-e7c0d388f540",
                                "stock": 50,
                                "size": "5.8",
                                "color": "green"
                            }
                        ],
                        "ratings": [],
                        "id": "826eb83a-7fd4-42c0-9b0c-bb04961ccd12",
                        "name": "VR Fitness Kit",
                        "price": 299,
                        "discountPercentage": 0,
                        "discountedPrice": 299,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Bring learning to life with our VR education kit. It includes a VR headset and a library of educational experiences designed to make learning fun and engaging.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "12e05445-c1ab-4d31-889e-50f3b27f6331",
                                "stock": 31,
                                "size": "5.8",
                                "color": "blue"
                            },
                            {
                                "id": "be8808c6-609b-4fa6-949f-823bbf1b613f",
                                "stock": 46,
                                "size": "5.8",
                                "color": "violet"
                            }
                        ],
                        "ratings": [],
                        "id": "c4c0a113-144d-4f61-8349-edbf046fb32a",
                        "name": "VR Education Kit",
                        "price": 199,
                        "discountPercentage": 0,
                        "discountedPrice": 199,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Get the ultimate gaming experience with our VR gaming chair. Equipped with built-in haptic feedback and motion tracking technology, it's the perfect addition to any VR setup.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "42cc943b-ac2c-4f39-b6ea-8b8ac27d3d6a",
                                "stock": 2,
                                "size": "6.2",
                                "color": "lime"
                            },
                            {
                                "id": "962c4453-447e-420a-bfc1-5d662cb35a56",
                                "stock": 0,
                                "size": "6.4",
                                "color": "purple"
                            },
                            {
                                "id": "a7737ca6-8612-4f55-a6fe-69e7a8cf78f1",
                                "stock": 21,
                                "size": "5.8",
                                "color": "blue"
                            },
                            {
                                "id": "dabb127b-030b-4238-8d29-c1a2ffc962fe",
                                "stock": 39,
                                "size": "6.2",
                                "color": "blue"
                            }
                        ],
                        "ratings": [],
                        "id": "dbfb7b60-b951-49d9-a194-f13cdd80fd1d",
                        "name": "VR Gaming Chair",
                        "price": 399,
                        "discountPercentage": 0,
                        "discountedPrice": 399,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Take control of your virtual world with our wireless VR controllers. They feature precision sensors and ergonomic design for a seamless experience.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "34b68857-f772-4447-a4f7-ffd4c20cac30",
                                "stock": 21,
                                "size": "6.4",
                                "color": "violet"
                            },
                            {
                                "id": "7119c00e-2e1c-411c-b79c-14be19481f57",
                                "stock": 4,
                                "size": "6.2",
                                "color": "magenta"
                            },
                            {
                                "id": "fe7c159d-2d00-4e5f-be9e-2a4253430277",
                                "stock": 0,
                                "size": "5.8",
                                "color": "gray"
                            }
                        ],
                        "ratings": [],
                        "id": "ea488074-4c36-47f4-b664-e9cda4250dde",
                        "name": "Wireless VR Controllers",
                        "price": 149,
                        "discountPercentage": 0,
                        "discountedPrice": 149,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "58b31959-1232-453f-b631-6411be333ed3",
                "name": "Virtual Reality",
                "image": "/assets/imgs/subCategories/vr.jpg",
                "description": "Explore virtual reality technology and accessories to enhance your gaming and entertainment experiences.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "This laptop cooling pad has 5 high-speed fans that keep your laptop cool and prevent overheating. It has adjustable height settings and a sleek design.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "e8f857de-bc2f-462c-ae6a-4c2b11b49da1",
                                "stock": 48,
                                "size": "5.4",
                                "color": "blue"
                            },
                            {
                                "id": "eade73a1-0e02-4de6-9b64-f5f4e27d2f91",
                                "stock": 39,
                                "size": "6.4",
                                "color": "teal"
                            }
                        ],
                        "ratings": [],
                        "id": "4833de13-c027-4f25-ae67-ba6a8117282a",
                        "name": "Laptop Cooling Pad",
                        "price": 39,
                        "discountPercentage": 0,
                        "discountedPrice": 39,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "This stainless steel watch band is compatible with Apple Watch Series 6, 5, 4, 3, 2, 1, SE. It is easy to install and has a stylish and durable design.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "0278886a-03e4-4369-b3c9-9bf19ec359c6",
                                "stock": 25,
                                "size": "5.4",
                                "color": "cyan"
                            }
                        ],
                        "ratings": [],
                        "id": "5a22f585-6379-4fcb-8059-736aee703ea3",
                        "name": "Stainless Steel Watch Band",
                        "price": 25,
                        "discountPercentage": 4,
                        "discountedPrice": 24,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "These mechanical keyboard switches have a tactile feel and a long lifespan. They are compatible with Cherry MX mechanical keyboards.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "08b2f8ec-90a1-407b-9d07-13efc175acb1",
                                "stock": 19,
                                "size": "5.4",
                                "color": "lime"
                            },
                            {
                                "id": "0b541658-54f7-4246-b8ce-e2f66bfafb90",
                                "stock": 34,
                                "size": "5.8",
                                "color": "pink"
                            },
                            {
                                "id": "870b4d79-f7d5-434a-8264-c2cc1fd07f92",
                                "stock": 30,
                                "size": "6.8",
                                "color": "purple"
                            },
                            {
                                "id": "8787aafb-d952-4b81-a376-0d4fce4e7fd6",
                                "stock": 44,
                                "size": "5.4",
                                "color": "gold"
                            },
                            {
                                "id": "f56383b8-c54b-43c9-9bd1-d6955db2167b",
                                "stock": 18,
                                "size": "5.8",
                                "color": "blue"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "7c802810-637a-4f35-b8f2-9fb49452a11a",
                                "rate": 1,
                                "date": "2023-12-22T20:05:52.7043764",
                                "review": "This is a very critical review of this product.",
                                "pros": "",
                                "cons": "bad screen, bad battery",
                                "userFullName": "Dimitar Dimeski",
                                "userId": "f852f25b-9191-4368-8fdd-c5b627b7f502"
                            }
                        ],
                        "id": "9020264a-3348-4e4b-97c1-3463074c5e5f",
                        "name": "Mechanical Keyboard Switches",
                        "price": 49,
                        "discountPercentage": 5,
                        "discountedPrice": 47,
                        "image": "",
                        "rating": 1
                    },
                    {
                        "description": "This phone case is made of durable TPU and has a convenient card holder on the back. It fits iPhone X, XS, and 11 Pro.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "8bdeb917-240b-4aaf-a607-e9bb782eea2e",
                                "stock": 47,
                                "size": "5.4",
                                "color": "navy"
                            }
                        ],
                        "ratings": [],
                        "id": "f3ee82c6-eb40-47cc-8738-4aab57b2200c",
                        "name": "Phone Case with Card Holder",
                        "price": 19,
                        "discountPercentage": 7,
                        "discountedPrice": 18,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "This camera tripod is made of lightweight aluminum and has adjustable height settings. It is compatible with most cameras and camcorders.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "technokia",
                            "name": "Nokia",
                            "image": "/assets/imgs/manufacturers/nokia.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "2f35f7cd-4224-4fcf-8d07-9b25a5a28c60",
                                "stock": 0,
                                "size": "6.2",
                                "color": "pink"
                            },
                            {
                                "id": "313094a2-eb56-4de2-8cee-332fc0046469",
                                "stock": 24,
                                "size": "6.4",
                                "color": "pink"
                            },
                            {
                                "id": "66df891e-24c7-424b-8333-5ba0711c33af",
                                "stock": 23,
                                "size": "6.4",
                                "color": "yellow"
                            }
                        ],
                        "ratings": [],
                        "id": "fe1a49f9-36a1-477b-be87-edb573326e03",
                        "name": "Camera Tripod",
                        "price": 59,
                        "discountPercentage": 0,
                        "discountedPrice": 59,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
                "name": "Accessories & Parts",
                "image": "/assets/imgs/subCategories/chargers.jpg",
                "description": "Find accessories and replacement parts for your electronics, including chargers, cables, and batteries.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "Keep an eye on your home with this wireless video doorbell. With motion detection and two-way audio, you can see and speak to anyone at your doorstep from your smartphone.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsamsung",
                            "name": "Samsung",
                            "image": "/assets/imgs/manufacturers/samsung.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "49d44eb0-7af1-4d26-9afc-fee0b94c9792",
                                "stock": 22,
                                "size": "6.8",
                                "color": "pink"
                            },
                            {
                                "id": "55a17047-1f92-40ec-bfcb-f88841cfa78a",
                                "stock": 10,
                                "size": "6.8",
                                "color": "pink"
                            },
                            {
                                "id": "8fcd552b-1de4-45a3-a779-e8085c2cf3ca",
                                "stock": 23,
                                "size": "6.4",
                                "color": "blue"
                            }
                        ],
                        "ratings": [],
                        "id": "7038fb12-03a9-4000-b94e-a25b85deb8f4",
                        "name": "Wireless Video Doorbell",
                        "price": 199,
                        "discountPercentage": 0,
                        "discountedPrice": 199,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Experience immersive sound without any distractions with these wireless noise-cancelling headphones.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "0caf49f0-583b-4db9-84da-c835cdca0557",
                                "stock": 50,
                                "size": "5.8",
                                "color": "violet"
                            },
                            {
                                "id": "57202612-eb8f-4846-b933-de0ba7abe559",
                                "stock": 18,
                                "size": "5.4",
                                "color": "orange"
                            },
                            {
                                "id": "c1dc4329-c973-4363-a471-cf52c810ed0b",
                                "stock": 43,
                                "size": "6.2",
                                "color": "cyan"
                            },
                            {
                                "id": "ef6d35e0-4c4c-4f4a-a793-3f42f2e4f8ab",
                                "stock": 49,
                                "size": "6.2",
                                "color": "lime"
                            }
                        ],
                        "ratings": [],
                        "id": "82cf8fdc-69af-4764-9466-3feaeb0edd3e",
                        "name": "Wireless Noise-Cancelling Headphones",
                        "price": 199,
                        "discountPercentage": 0,
                        "discountedPrice": 199,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Get the ultimate viewing experience with this 4K Ultra HD Smart TV. With built-in apps and voice control, you can easily access your favorite content.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "4cd87e60-f5fc-44a1-b19c-fbc47e5aee53",
                                "stock": 22,
                                "size": "6.2",
                                "color": "olive"
                            }
                        ],
                        "ratings": [],
                        "id": "a1872dcb-6d84-4185-aa18-508a8f2391bb",
                        "name": "4K Ultra HD Smart TV",
                        "price": 899,
                        "discountPercentage": 0,
                        "discountedPrice": 899,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Upgrade your home theater system with this Bluetooth soundbar. With high-quality sound and wireless connectivity, you can enjoy your favorite movies and shows like never before.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "ed7f926a-abe3-40f5-9690-e7e2e721f7b8",
                                "stock": 20,
                                "size": "6.8",
                                "color": "violet"
                            }
                        ],
                        "ratings": [],
                        "id": "a8764e34-1e34-46ce-9597-3add5a802a03",
                        "name": "Bluetooth Soundbar",
                        "price": 149,
                        "discountPercentage": 0,
                        "discountedPrice": 149,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "Take your music anywhere with this portable wireless speaker. With a compact design and long battery life, you can enjoy your tunes on the go.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "d00239df-39f1-4345-ac84-48b265b671a0",
                                "stock": 31,
                                "size": "5.8",
                                "color": "pink"
                            }
                        ],
                        "ratings": [],
                        "id": "c74e9cd9-8e2c-4fba-b981-384224c57174",
                        "name": "Portable Wireless Speaker",
                        "price": 79,
                        "discountPercentage": 20,
                        "discountedPrice": 63,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
                "name": "Audio & Video Equipment",
                "image": "/assets/imgs/subCategories/audiovideo.jpg",
                "description": "Shop for speakers, headphones, TVs, projectors, and other audio & video equipment.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "The iPhone SE (2020) is a budget-friendly iPhone with a 4.7-inch Retina display and the A13 Bionic chip.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "8e050a9a-201f-4a2e-8ec5-22a712dd92da",
                                "stock": 29,
                                "size": "6.8",
                                "color": "cyan"
                            },
                            {
                                "id": "d2a27e15-198c-4b44-a142-0fe0c36fed2c",
                                "stock": 19,
                                "size": "5.8",
                                "color": "magenta"
                            },
                            {
                                "id": "fd9c4231-bc30-4085-8e7c-aa178ef42906",
                                "stock": 44,
                                "size": "5.4",
                                "color": "cyan"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "d76f6fb3-d6b0-4bd4-8fa9-14c184f823aa",
                                "rate": 2,
                                "date": "2023-12-12T02:56:22.4464316",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Zdenko Ristovski",
                                "userId": "8"
                            }
                        ],
                        "id": "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
                        "name": "Apple iPhone SE (2020)",
                        "price": 399,
                        "discountPercentage": 8,
                        "discountedPrice": 367,
                        "image": "https://ibb.co/H7397yP",
                        "rating": 2
                    },
                    {
                        "description": "The OnePlus 9 Pro is a premium Android smartphone with a 6.7-inch Fluid AMOLED display and a Snapdragon 888 processor.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techapple",
                            "name": "Apple",
                            "image": "/assets/imgs/manufacturers/apple.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "0eaec7bd-d6a2-4e21-b3c1-cfc2eb6ac721",
                                "stock": 33,
                                "size": "6.8",
                                "color": "teal"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "2086eea3-a885-494d-a7b4-a62f7bcaa7af",
                                "rate": 4,
                                "date": "2023-12-12T02:56:22.4464313",
                                "review": "Fast and reliable. Great performance overall.",
                                "pros": "Speedy performance, smooth interface.",
                                "cons": "Lacks some camera finesse.",
                                "userFullName": "Phoenix Blaze",
                                "userId": "6"
                            },
                            {
                                "id": "6c5d4146-77b3-45ab-b55b-7407506af692",
                                "rate": 1,
                                "date": "2023-12-12T02:56:22.4464315",
                                "review": "Solid phone, but expected more for the price.",
                                "pros": "Sleek design, good display.",
                                "cons": "Average camera quality.",
                                "userFullName": "Dimitar Sarafiloski",
                                "userId": "7"
                            }
                        ],
                        "id": "50f7e18f-a606-4935-95aa-2679cfa37999",
                        "name": "OnePlus 9 Pro",
                        "price": 999,
                        "discountPercentage": 0,
                        "discountedPrice": 999,
                        "image": "https://ibb.co/qp4ZBBK",
                        "rating": 2.5
                    },
                    {
                        "description": "The Google Pixel 6 Pro is a high-end Android smartphone with a beautiful 6.7-inch OLED display and the latest Google Tensor processor.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
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
                        "image": "https://ibb.co/7S70L3W",
                        "rating": 4
                    },
                    {
                        "description": "The Sony Xperia 1 III is a high-end Android smartphone with a 6.5-inch 4K OLED display and a Snapdragon 888 processor.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "0fef87ca-6b35-408c-94d0-e159d2509716",
                                "stock": 19,
                                "size": "6.2",
                                "color": "green"
                            },
                            {
                                "id": "69583a09-05c7-4c46-bb32-5d203c2da327",
                                "stock": 32,
                                "size": "5.8",
                                "color": "violet"
                            },
                            {
                                "id": "cc3bc513-43e5-449c-9d33-15aa3fad01e4",
                                "stock": 36,
                                "size": "6.4",
                                "color": "gray"
                            },
                            {
                                "id": "ecc78d95-2af5-4ad5-ae5b-1f59950ad31c",
                                "stock": 15,
                                "size": "6.4",
                                "color": "blue"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "b3773232-6649-40a5-8920-44b2e4811ee5",
                                "rate": 5,
                                "date": "2023-12-12T02:56:22.4464319",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Jovana Milevska",
                                "userId": "10"
                            }
                        ],
                        "id": "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab",
                        "name": "Sony Xperia 1 III",
                        "price": 1299,
                        "discountPercentage": 0,
                        "discountedPrice": 1299,
                        "image": "https://ibb.co/JdYWL5v",
                        "rating": 5
                    },
                    {
                        "description": "The Samsung Galaxy S21 Ultra is a premium Android smartphone with a stunning 6.8-inch Dynamic AMOLED display and a powerful Exynos 2100 processor.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsamsung",
                            "name": "Samsung",
                            "image": "/assets/imgs/manufacturers/samsung.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "5cd9e939-edcd-4cbc-9c4c-f1c050f72eac",
                                "stock": 1,
                                "size": "6.4",
                                "color": "violet"
                            },
                            {
                                "id": "620af334-5084-4d16-8e5e-4473b6714229",
                                "stock": 0,
                                "size": "6.8",
                                "color": "purple"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "087c7d12-fd6f-4a4d-8da7-f7edf4dd84fe",
                                "rate": 3,
                                "date": "2023-12-12T02:56:22.4464308",
                                "review": "Good phone, but not worth the high price tag.",
                                "pros": "Nice display, powerful processor.",
                                "cons": "Expensive, average battery life.",
                                "userFullName": "Eleanor Rutherford",
                                "userId": "3"
                            },
                            {
                                "id": "2c037559-751c-469c-958a-be64036d7348",
                                "rate": 2,
                                "date": "2023-12-12T02:56:22.4464307",
                                "review": "Exceptional features, especially the camera setup.",
                                "pros": "Fantastic camera, gorgeous display.",
                                "cons": "Slightly bulky, UI can be overwhelming.",
                                "userFullName": "Aurora Skywalker",
                                "userId": "2"
                            }
                        ],
                        "id": "690d1d22-2bbd-4f27-9549-58862b320685",
                        "name": "Samsung Galaxy S21 Ultra",
                        "price": 1199,
                        "discountPercentage": 0,
                        "discountedPrice": 1199,
                        "image": "https://ibb.co/cy7QXH3",
                        "rating": 2.5
                    },
                    {
                        "description": "The Samsung Galaxy Z Fold3 5G is a foldable Android smartphone with a 7.6-inch Dynamic AMOLED display and a Snapdragon 888 processor.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "544f6dfb-c8a6-4f56-915c-6c86c1d1ba06",
                                "stock": 47,
                                "size": "6.8",
                                "color": "red"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "e16b6ce9-7852-40b2-a4d8-5658d46a14ef",
                                "rate": 1,
                                "date": "2023-12-12T02:56:22.4464322",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Aurora Skywalker",
                                "userId": "2"
                            }
                        ],
                        "id": "8c559d76-c84a-4144-b6b8-259d896a97cc",
                        "name": "Samsung Galaxy Z Fold3 5G",
                        "price": 1799,
                        "discountPercentage": 4,
                        "discountedPrice": 1727,
                        "image": "https://ibb.co/bKnrdZx",
                        "rating": 1
                    },
                    {
                        "description": "The iPhone 13 Pro Max is the latest flagship smartphone from Apple, featuring a stunning 6.7-inch Super Retina XDR display and a powerful A15 Bionic chip.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsamsung",
                            "name": "Samsung",
                            "image": "/assets/imgs/manufacturers/samsung.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "7390a278-5b4a-4344-a379-85da4dfe4c45",
                                "stock": 21,
                                "size": "6.8",
                                "color": "magenta"
                            },
                            {
                                "id": "82e6f02a-c477-447b-98ea-ca64ced27421",
                                "stock": 25,
                                "size": "5.8",
                                "color": "gray"
                            },
                            {
                                "id": "f555d904-fff0-4877-a068-80b36e1a1e00",
                                "stock": 49,
                                "size": "5.4",
                                "color": "silver"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "7dcdbfb3-20eb-4700-bdea-c93d63de86bc",
                                "rate": 5,
                                "date": "2023-12-12T02:56:22.4464304",
                                "review": "Stunning device! Camera quality is unmatched.",
                                "pros": "Superb camera, powerful performance.",
                                "cons": "Hefty price, heavy to carry.",
                                "userFullName": "Jovana Milevska",
                                "userId": "10"
                            },
                            {
                                "id": "b5bd3285-6972-40e8-a164-144a29e52056",
                                "rate": 4,
                                "date": "2023-12-12T02:56:22.4464305",
                                "review": "Impressive phone, but the battery drains quickly.",
                                "pros": "Great display, smooth interface.",
                                "cons": "Average battery life.",
                                "userFullName": "Mark Grayson",
                                "userId": "1"
                            }
                        ],
                        "id": "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd",
                        "name": "Apple iPhone 13 Pro Max",
                        "price": 1299,
                        "discountPercentage": 0,
                        "discountedPrice": 1299,
                        "image": "https://ibb.co/jvMP0jY",
                        "rating": 4.5
                    },
                    {
                        "description": "The iPhone 12 mini is a compact iPhone with a 5.4-inch Super Retina XDR display and the A14 Bionic chip.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techlg",
                            "name": "LG",
                            "image": "/assets/imgs/manufacturers/lg.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "722a2237-3b0a-41ed-ad80-2f3ef35cb871",
                                "stock": 42,
                                "size": "6.8",
                                "color": "violet"
                            },
                            {
                                "id": "c20f74e2-c1b6-4fd5-8e91-0e5725357627",
                                "stock": 40,
                                "size": "5.8",
                                "color": "navy"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "ed71a1be-ea92-4699-bf92-84b67a666641",
                                "rate": 2,
                                "date": "2023-12-12T02:56:22.4464321",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Mark Grayson",
                                "userId": "1"
                            }
                        ],
                        "id": "d62efc95-bc43-41d1-bb0e-417003349616",
                        "name": "Apple iPhone 12 mini",
                        "price": 699,
                        "discountPercentage": 0,
                        "discountedPrice": 699,
                        "image": "https://ibb.co/zr53xh4",
                        "rating": 2
                    },
                    {
                        "description": "The Google Pixel 5a is a mid-range Android smartphone with a 6.34-inch OLED display and a Snapdragon 765G processor.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsamsung",
                            "name": "Samsung",
                            "image": "/assets/imgs/manufacturers/samsung.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "65f6696c-dbbb-40a4-8175-b9bd8a962dd9",
                                "stock": 8,
                                "size": "5.4",
                                "color": "pink"
                            },
                            {
                                "id": "8cf9891e-dc08-432a-a683-67f2aa9357d7",
                                "stock": 13,
                                "size": "5.4",
                                "color": "yellow"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "08f09f3d-2b5f-46ea-ae54-53947b9bc774",
                                "rate": 4,
                                "date": "2023-12-12T02:56:22.4464324",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Eleanor Rutherford",
                                "userId": "3"
                            }
                        ],
                        "id": "f0dd3651-99f3-4bac-abb3-8492b32d71ba",
                        "name": "Google Pixel 5a",
                        "price": 449,
                        "discountPercentage": 0,
                        "discountedPrice": 449,
                        "image": "https://ibb.co/b7yRz7L",
                        "rating": 4
                    },
                    {
                        "description": "The Xiaomi Mi 11 is a flagship Android smartphone with a 6.81-inch AMOLED display and a Snapdragon 888 processor.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "2914c5a9-9bf0-468b-a47e-ad663987d122",
                                "stock": 9,
                                "size": "5.8",
                                "color": "purple"
                            },
                            {
                                "id": "cc3504b7-9370-44f1-8df4-7948fff51177",
                                "stock": 8,
                                "size": "5.8",
                                "color": "gold"
                            }
                        ],
                        "ratings": [
                            {
                                "id": "fafb86b0-5856-411b-9002-abe208bef6f4",
                                "rate": 4,
                                "date": "2023-12-12T02:56:22.4464318",
                                "review": "",
                                "pros": "",
                                "cons": "",
                                "userFullName": "Gabriela Kuzmanovska",
                                "userId": "9"
                            }
                        ],
                        "id": "ff269c57-2916-4536-a976-02864ffe9a5d",
                        "name": "Xiaomi Mi 11",
                        "price": 799,
                        "discountPercentage": 7,
                        "discountedPrice": 743,
                        "image": "https://ibb.co/KjMYrHx",
                        "rating": 4
                    }
                ],
                "id": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
                "name": "Smartphones",
                "image": "/assets/imgs/subCategories/phone.jpg",
                "description": "Discover the latest smartphones from top brands like Apple, Samsung, and more.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            },
            {
                "products": [
                    {
                        "description": "The PlayStation 5 is a next-generation gaming console with lightning-fast loading times and immersive 3D audio.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "04f3df56-ae56-4d27-973b-4140b1aa50cb",
                                "stock": 15,
                                "size": "6.4",
                                "color": "navy"
                            },
                            {
                                "id": "10e3a495-adea-4e3f-a44a-14ddce091047",
                                "stock": 20,
                                "size": "6.8",
                                "color": "teal"
                            },
                            {
                                "id": "852ac684-1e9f-4dcd-bf12-a94aabe97fa4",
                                "stock": 29,
                                "size": "5.8",
                                "color": "navy"
                            },
                            {
                                "id": "edc1d578-2918-42bb-b0ff-6c051028b3e1",
                                "stock": 37,
                                "size": "6.4",
                                "color": "magenta"
                            },
                            {
                                "id": "edeb4dcd-5c4d-47eb-9695-a8aec16ef914",
                                "stock": 5,
                                "size": "5.8",
                                "color": "blue"
                            }
                        ],
                        "ratings": [],
                        "id": "2c8676d4-55be-4090-ad12-9b66b88d188a",
                        "name": "PlayStation 5",
                        "price": 499,
                        "discountPercentage": 0,
                        "discountedPrice": 499,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Xbox Series X is a powerful gaming console with support for 4K gaming and fast load times.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsamsung",
                            "name": "Samsung",
                            "image": "/assets/imgs/manufacturers/samsung.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "1c2d5d1f-e55c-4cd0-afa0-ea8f5f7dd9eb",
                                "stock": 3,
                                "size": "6.4",
                                "color": "yellow"
                            },
                            {
                                "id": "c6b7360d-e096-447d-b438-71dfe17cd0d9",
                                "stock": 20,
                                "size": "6.4",
                                "color": "violet"
                            }
                        ],
                        "ratings": [],
                        "id": "691785c7-f98c-4b26-a391-f2cfa65b3b60",
                        "name": "Xbox Series X",
                        "price": 499,
                        "discountPercentage": 0,
                        "discountedPrice": 499,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Nintendo Switch is a versatile gaming console that can be played on-the-go or on a TV.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "12653cd3-47b9-4d1f-bf53-8f5167f121b1",
                                "stock": 22,
                                "size": "6.4",
                                "color": "brown"
                            },
                            {
                                "id": "154c0850-0b02-4ba9-ae0f-d45b6de685be",
                                "stock": 38,
                                "size": "5.4",
                                "color": "green"
                            },
                            {
                                "id": "61d18b5e-fea1-4712-ba89-834a9813283c",
                                "stock": 43,
                                "size": "5.8",
                                "color": "violet"
                            },
                            {
                                "id": "9ed8b2f7-eb1a-496c-8c21-e11da5ff1f55",
                                "stock": 40,
                                "size": "6.4",
                                "color": "blue"
                            },
                            {
                                "id": "aa065f0d-3b2c-4aa5-b840-0a7a0afd38cb",
                                "stock": 9,
                                "size": "6.2",
                                "color": "yellow"
                            }
                        ],
                        "ratings": [],
                        "id": "b4c1b2ca-8bf2-4aa7-91f6-af2ca4a164d3",
                        "name": "Nintendo Switch",
                        "price": 299,
                        "discountPercentage": 0,
                        "discountedPrice": 299,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The Razer DeathAdder V2 Gaming Mouse is a high-precision mouse with customizable RGB lighting and programmable buttons.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techxiaomi",
                            "name": "Xiaomi",
                            "image": "/assets/imgs/manufacturers/xiaomi.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "40d3abdd-3e65-43df-8c66-7621db3fc78c",
                                "stock": 41,
                                "size": "6.8",
                                "color": "blue"
                            },
                            {
                                "id": "6046e1ad-7c12-46ef-8fe8-44ec1f3605e3",
                                "stock": 25,
                                "size": "5.8",
                                "color": "purple"
                            },
                            {
                                "id": "9120351a-95a3-4aff-98c5-77003c0321c4",
                                "stock": 32,
                                "size": "6.8",
                                "color": "pink"
                            }
                        ],
                        "ratings": [],
                        "id": "d0de30f9-c6ed-46a2-a1a6-4826156f8bf1",
                        "name": "Razer DeathAdder V2 Gaming Mouse",
                        "price": 69,
                        "discountPercentage": 0,
                        "discountedPrice": 69,
                        "image": "",
                        "rating": 0
                    },
                    {
                        "description": "The HyperX Cloud II Gaming Headset is a comfortable and immersive headset with 7.1 surround sound and noise-cancelling microphone.",
                        "subcategory": null,
                        "category": null,
                        "manufacturer": {
                            "id": "techsony",
                            "name": "Sony",
                            "image": "/assets/imgs/manufacturers/sony.jpg"
                        },
                        "productSizes": [
                            {
                                "id": "5d303b37-3386-4e8b-84f4-fe3dfe90f37f",
                                "stock": 35,
                                "size": "6.4",
                                "color": "red"
                            },
                            {
                                "id": "abb86e4b-ba97-4164-a259-57bb772674bc",
                                "stock": 29,
                                "size": "5.4",
                                "color": "yellow"
                            },
                            {
                                "id": "c2cc877f-f50b-4130-8b19-3e0d600e7df3",
                                "stock": 9,
                                "size": "5.4",
                                "color": "navy"
                            }
                        ],
                        "ratings": [],
                        "id": "d5613ac9-0c78-4869-9bf8-66877adfc306",
                        "name": "HyperX Cloud II Gaming Headset",
                        "price": 99,
                        "discountPercentage": 0,
                        "discountedPrice": 99,
                        "image": "",
                        "rating": 0
                    }
                ],
                "id": "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
                "name": "Gaming Consoles & Accessories",
                "image": "/assets/imgs/subCategories/consoles.jpg",
                "description": "Find the latest gaming consoles and accessories from top brands like Playstation, Xbox, and Nintendo.",
                "category": {
                    "id": "technology",
                    "name": "Technology"
                }
            }
        ]
    }
}

export async function updateCategoryApi({ catData, tokens }) {
    const url = `${mainURL}/Category/UpdateCategory`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(catData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function createCategoryApi({ catData, tokens }) {
    const url = `${mainURL}/Category/AddCategory`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(catData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function deleteCategoryApi({ ID, tokens }) {
    const url = `${mainURL}/Category/${ID}`

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