// product.js:

const products = [
  {
    "name": "Classic Oxford Button-Down Shirt",
    "description": "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    "price": 39.99,
    "discountPrice": 34.99,
    "countInStock": 20,
    "sku": "OX-SH-001",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/1.1.avif",
        "altText": "Classic Oxford Button-Down Shirt view 1"
      },
      {
        "url": "/products/1.2.avif",
        "altText": "Classic Oxford Button-Down Shirt view 2"
      },
      {
        "url": "/products/1.3.avif",
        "altText": "Classic Oxford Button-Down Shirt view 3"
      },
      {
        "url": "/products/1.4.avif",
        "altText": "Classic Oxford Button-Down Shirt view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 12
  },
  {
    "name": "Slim-Fit Stretch Shirt",
    "description": "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    "price": 29.99,
    "discountPrice": 24.99,
    "countInStock": 35,
    "sku": "SLIM-SH-002",
    "category": "Top Wear",
    "brand": "Modern Fit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Navy Blue",
      "Burgundy"
    ],
    "collections": "Formal Wear",
    "material": "Cotton Blend",
    "gender": "Men",
    "images": [
      {
        "url": "/products/2.1.avif",
        "altText": "Slim-Fit Stretch Shirt view 1"
      },
      {
        "url": "/products/2.2.avif",
        "altText": "Slim-Fit Stretch Shirt view 2"
      },
      {
        "url": "/products/2.3.avif",
        "altText": "Slim-Fit Stretch Shirt view 3"
      },
      {
        "url": "/products/2.4.avif",
        "altText": "Slim-Fit Stretch Shirt view 4"
      }
    ],
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Casual Denim Shirt",
    "description": "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    "price": 49.99,
    "discountPrice": 44.99,
    "countInStock": 15,
    "sku": "CAS-DEN-003",
    "category": "Top Wear",
    "brand": "Street Style",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Light Blue",
      "Dark Wash"
    ],
    "collections": "Casual Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/products/3.1.avif",
        "altText": "Casual Denim Shirt view 1"
      },
      {
        "url": "/products/3.2.avif",
        "altText": "Casual Denim Shirt view 2"
      },
      {
        "url": "/products/3.3.avif",
        "altText": "Casual Denim Shirt view 3"
      },
      {
        "url": "/products/3.4.avif",
        "altText": "Casual Denim Shirt view 4"
      }
    ],
    "rating": 4.6,
    "numReviews": 8
  },
  {
    "name": "Printed Resort Shirt",
    "description": "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    "price": 29.99,
    "discountPrice": 22.99,
    "countInStock": 25,
    "sku": "PRNT-RES-004",
    "category": "Top Wear",
    "brand": "Beach Breeze",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Tropical Print",
      "Navy Palms"
    ],
    "collections": "Vacation Wear",
    "material": "Viscose",
    "gender": "Men",
    "images": [
      {
        "url": "/products/4.1.avif",
        "altText": "Printed Resort Shirt view 1"
      },
      {
        "url": "/products/4.2.avif",
        "altText": "Printed Resort Shirt view 2"
      },
      {
        "url": "/products/4.3.avif",
        "altText": "Printed Resort Shirt view 3"
      },
      {
        "url": "/products/4.4.avif",
        "altText": "Printed Resort Shirt view 4"
      }
    ],
    "rating": 4.4,
    "numReviews": 10
  },
  {
    "name": "Slim-Fit Easy-Iron Shirt",
    "description": "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    "price": 34.99,
    "discountPrice": 29.99,
    "countInStock": 30,
    "sku": "SLIM-EIR-005",
    "category": "Top Wear",
    "brand": "Urban Chic",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Business Wear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/5.1.avif",
        "altText": "Slim-Fit Easy-Iron Shirt view 1"
      },
      {
        "url": "/products/5.2.avif",
        "altText": "Slim-Fit Easy-Iron Shirt view 2"
      },
      {
        "url": "/products/5.3.avif",
        "altText": "Slim-Fit Easy-Iron Shirt view 3"
      },
      {
        "url": "/products/5.4.avif",
        "altText": "Slim-Fit Easy-Iron Shirt view 4"
      }
    ],
    "rating": 5,
    "numReviews": 14
  },
  {
    "name": "Polo T-Shirt with Ribbed Collar",
    "description": "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    "price": 24.99,
    "discountPrice": 19.99,
    "countInStock": 50,
    "sku": "POLO-TSH-006",
    "category": "Top Wear",
    "brand": "Polo Classics",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy",
      "Red"
    ],
    "collections": "Casual Wear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/6.1.avif",
        "altText": "Polo T-Shirt with Ribbed Collar view 1"
      },
      {
        "url": "/products/6.2.avif",
        "altText": "Polo T-Shirt with Ribbed Collar view 2"
      },
      {
        "url": "/products/6.3.avif",
        "altText": "Polo T-Shirt with Ribbed Collar view 3"
      },
      {
        "url": "/products/6.4.avif",
        "altText": "Polo T-Shirt with Ribbed Collar view 4"
      }
    ],
    "rating": 4.3,
    "numReviews": 22
  },
  {
    "name": "Oversized Graphic T-Shirt",
    "description": "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    "price": 19.99,
    "discountPrice": 15.99,
    "countInStock": 40,
    "sku": "OVS-GRF-007",
    "category": "Top Wear",
    "brand": "Street Vibes",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray"
    ],
    "collections": "Streetwear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/7.1.avif",
        "altText": "Oversized Graphic T-Shirt view 1"
      },
      {
        "url": "/products/7.2.avif",
        "altText": "Oversized Graphic T-Shirt view 2"
      },
      {
        "url": "/products/7.3.avif",
        "altText": "Oversized Graphic T-Shirt view 3"
      },
      {
        "url": "/products/7.4.avif",
        "altText": "Oversized Graphic T-Shirt view 4"
      }
    ],
    "rating": 4.6,
    "numReviews": 30
  },
  {
    "name": "Regular-Fit Henley Shirt",
    "description": "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    "price": 22.99,
    "discountPrice": 18.99,
    "countInStock": 35,
    "sku": "REG-HEN-008",
    "category": "Top Wear",
    "brand": "Heritage Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Heather Gray",
      "Olive",
      "Black"
    ],
    "collections": "Casual Wear",
    "material": "Cotton Blend",
    "gender": "Men",
    "images": [
      {
        "url": "/products/8.1.avif",
        "altText": "Regular-Fit Henley Shirt view 1"
      },
      {
        "url": "/products/8.2.avif",
        "altText": "Regular-Fit Henley Shirt view 2"
      },
      {
        "url": "/products/8.3.avif",
        "altText": "Regular-Fit Henley Shirt view 3"
      },
      {
        "url": "/products/8.4.avif",
        "altText": "Regular-Fit Henley Shirt view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 25
  },
  {
    "name": "Long-Sleeve Thermal Tee",
    "description": "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    "price": 27.99,
    "discountPrice": 22.99,
    "countInStock": 20,
    "sku": "LST-THR-009",
    "category": "Top Wear",
    "brand": "Winter Basics",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Charcoal",
      "Dark Green",
      "Navy"
    ],
    "collections": "Winter Essentials",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/9.1.avif",
        "altText": "Long-Sleeve Thermal Tee view 1"
      },
      {
        "url": "/products/9.2.avif",
        "altText": "Long-Sleeve Thermal Tee view 2"
      },
      {
        "url": "/products/9.3.avif",
        "altText": "Long-Sleeve Thermal Tee view 3"
      },
      {
        "url": "/products/9.4.avif",
        "altText": "Long-Sleeve Thermal Tee view 4"
      }
    ],
    "rating": 4.4,
    "numReviews": 18
  },
  {
    "name": "V-Neck Classic T-Shirt",
    "description": "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    "price": 14.99,
    "discountPrice": 11.99,
    "countInStock": 60,
    "sku": "VNECK-CLS-010",
    "category": "Top Wear",
    "brand": "Everyday Comfort",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black",
      "Navy"
    ],
    "collections": "Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/10.1.avif",
        "altText": "V-Neck Classic T-Shirt view 1"
      },
      {
        "url": "/products/10.2.avif",
        "altText": "V-Neck Classic T-Shirt view 2"
      },
      {
        "url": "/products/10.3.avif",
        "altText": "V-Neck Classic T-Shirt view 3"
      },
      {
        "url": "/products/10.4.avif",
        "altText": "V-Neck Classic T-Shirt view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 28
  },
  {
    "name": "Slim Fit Joggers",
    "description": "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 20,
    "sku": "BW-001",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray",
      "Navy"
    ],
    "collections": "Casual Collection",
    "material": "Cotton Blend",
    "gender": "Men",
    "images": [
      {
        "url": "/products/11.1.avif",
        "altText": "Slim Fit Joggers view 1"
      },
      {
        "url": "/products/11.2.avif",
        "altText": "Slim Fit Joggers view 2"
      },
      {
        "url": "/products/11.3.avif",
        "altText": "Slim Fit Joggers view 3"
      },
      {
        "url": "/products/11.4.avif",
        "altText": "Slim Fit Joggers view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 12
  },
  {
    "name": "Cargo Joggers",
    "description": "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 15,
    "sku": "BW-002",
    "category": "Bottom Wear",
    "brand": "UrbanStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Black"
    ],
    "collections": "Urban Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/12.1.avif",
        "altText": "Cargo Joggers view 1"
      },
      {
        "url": "/products/12.2.avif",
        "altText": "Cargo Joggers view 2"
      },
      {
        "url": "/products/12.3.avif",
        "altText": "Cargo Joggers view 3"
      },
      {
        "url": "/products/12.4.avif",
        "altText": "Cargo Joggers view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Tapered Sweatpants",
    "description": "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 25,
    "sku": "BW-003",
    "category": "Bottom Wear",
    "brand": "ChillZone",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Charcoal",
      "Blue"
    ],
    "collections": "Lounge Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/products/13.1.avif",
        "altText": "Tapered Sweatpants view 1"
      },
      {
        "url": "/products/13.2.avif",
        "altText": "Tapered Sweatpants view 2"
      },
      {
        "url": "/products/13.3.avif",
        "altText": "Tapered Sweatpants view 3"
      },
      {
        "url": "/products/13.4.avif",
        "altText": "Tapered Sweatpants view 4"
      }
    ],
    "rating": 4.3,
    "numReviews": 18
  },
  {
    "name": "Denim Jeans",
    "description": "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    "price": 60,
    "discountPrice": 50,
    "countInStock": 30,
    "sku": "BW-004",
    "category": "Bottom Wear",
    "brand": "DenimCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Dark Blue",
      "Light Blue"
    ],
    "collections": "Denim Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/products/14.1.avif",
        "altText": "Denim Jeans view 1"
      },
      {
        "url": "/products/14.2.avif",
        "altText": "Denim Jeans view 2"
      },
      {
        "url": "/products/14.3.avif",
        "altText": "Denim Jeans view 3"
      },
      {
        "url": "/products/14.4.avif",
        "altText": "Denim Jeans view 4"
      }
    ],
    "rating": 4.6,
    "numReviews": 22
  },
  {
    "name": "Chino Pants",
    "description": "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    "price": 55,
    "discountPrice": 48,
    "countInStock": 40,
    "sku": "BW-005",
    "category": "Bottom Wear",
    "brand": "CasualLook",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy",
      "Black"
    ],
    "collections": "Smart Casual Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/15.1.avif",
        "altText": "Chino Pants view 1"
      },
      {
        "url": "/products/15.2.avif",
        "altText": "Chino Pants view 2"
      },
      {
        "url": "/products/15.3.avif",
        "altText": "Chino Pants view 3"
      },
      {
        "url": "/products/15.4.avif",
        "altText": "Chino Pants view 4"
      }
    ],
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Track Pants",
    "description": "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 20,
    "sku": "BW-006",
    "category": "Bottom Wear",
    "brand": "SportX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Red",
      "Blue"
    ],
    "collections": "Activewear Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/products/16.1.avif",
        "altText": "Track Pants view 1"
      },
      {
        "url": "/products/16.2.avif",
        "altText": "Track Pants view 2"
      },
      {
        "url": "/products/16.3.avif",
        "altText": "Track Pants view 3"
      },
      {
        "url": "/products/16.4.avif",
        "altText": "Track Pants view 4"
      }
    ],
    "rating": 4.2,
    "numReviews": 17
  },
  {
    "name": "Slim Fit Trousers",
    "description": "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    "price": 65,
    "discountPrice": 55,
    "countInStock": 15,
    "sku": "BW-007",
    "category": "Bottom Wear",
    "brand": "ExecutiveStyle",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Office Wear",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/products/17.1.avif",
        "altText": "Slim Fit Trousers view 1"
      },
      {
        "url": "/products/17.2.avif",
        "altText": "Slim Fit Trousers view 2"
      },
      {
        "url": "/products/17.3.avif",
        "altText": "Slim Fit Trousers view 3"
      },
      {
        "url": "/products/17.4.avif",
        "altText": "Slim Fit Trousers view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 10
  },
  {
    "name": "Cargo Pants",
    "description": "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 25,
    "sku": "BW-008",
    "category": "Bottom Wear",
    "brand": "StreetWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown",
      "Black"
    ],
    "collections": "Street Style Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/18.1.avif",
        "altText": "Cargo Pants view 1"
      },
      {
        "url": "/products/18.2.avif",
        "altText": "Cargo Pants view 2"
      },
      {
        "url": "/products/18.3.avif",
        "altText": "Cargo Pants view 3"
      },
      {
        "url": "/products/18.4.avif",
        "altText": "Cargo Pants view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 13
  },
  {
    "name": "Relaxed Fit Sweatpants",
    "description": "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 35,
    "sku": "BW-009",
    "category": "Bottom Wear",
    "brand": "LoungeWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black",
      "Navy"
    ],
    "collections": "Lounge Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/products/19.1.avif",
        "altText": "Relaxed Fit Sweatpants view 1"
      },
      {
        "url": "/products/19.2.avif",
        "altText": "Relaxed Fit Sweatpants view 2"
      },
      {
        "url": "/products/19.3.avif",
        "altText": "Relaxed Fit Sweatpants view 3"
      },
      {
        "url": "/products/19.4.avif",
        "altText": "Relaxed Fit Sweatpants view 4"
      }
    ],
    "rating": 4.3,
    "numReviews": 14
  },
  {
    "name": "Formal Dress Pants",
    "description": "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    "price": 70,
    "discountPrice": 60,
    "countInStock": 20,
    "sku": "BW-010",
    "category": "Bottom Wear",
    "brand": "ElegantStyle",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Navy"
    ],
    "collections": "Formal Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/products/20.1.avif",
        "altText": "Formal Dress Pants view 1"
      },
      {
        "url": "/products/20.2.avif",
        "altText": "Formal Dress Pants view 2"
      },
      {
        "url": "/products/20.3.avif",
        "altText": "Formal Dress Pants view 3"
      },
      {
        "url": "/products/20.4.avif",
        "altText": "Formal Dress Pants view 4"
      }
    ],
    "rating": 4.9,
    "numReviews": 8
  },
  {
    "name": "Oversized Training T-Shirt",
    "description": "A soft oversized training t-shirt with dropped shoulders and a relaxed longline fit. Lightweight jersey keeps it comfortable for workouts, lounging, and everyday casual wear.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "BW-W-001",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink"
    ],
    "collections": "Activewear Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/products/21.1.webp",
        "altText": "Oversized Training T-Shirt view 1"
      },
      {
        "url": "/products/21.2.webp",
        "altText": "Oversized Training T-Shirt view 2"
      },
      {
        "url": "/products/21.3.webp",
        "altText": "Oversized Training T-Shirt view 3"
      },
      {
        "url": "/products/21.4.webp",
        "altText": "Oversized Training T-Shirt view 4"
      }
    ],
    "rating": 4.8,
    "numReviews": 20
  },
  {
    "name": "Boxy Training T-Shirt",
    "description": "A boxy short-sleeve training t-shirt with an easy cropped silhouette. The breathable fabric and roomy shape make it a clean pick for gym sets and relaxed off-duty looks.",
    "price": 60,
    "discountPrice": 55,
    "countInStock": 25,
    "sku": "BW-W-002",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Light Blue"
    ],
    "collections": "Activewear Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/products/22.1.webp",
        "altText": "Boxy Training T-Shirt view 1"
      },
      {
        "url": "/products/22.2.webp",
        "altText": "Boxy Training T-Shirt view 2"
      },
      {
        "url": "/products/22.3.webp",
        "altText": "Boxy Training T-Shirt view 3"
      },
      {
        "url": "/products/22.4.webp",
        "altText": "Boxy Training T-Shirt view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 15
  },
  {
    "name": "Regular Training T-Shirt",
    "description": "A regular-fit training t-shirt with a classic crew neck and short sleeves. The lightweight feel works for warmups, errands, and simple everyday outfits.",
    "price": 25,
    "discountPrice": 20,
    "countInStock": 40,
    "sku": "BW-W-003",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White"
    ],
    "collections": "Activewear Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/products/23.1.webp",
        "altText": "Regular Training T-Shirt view 1"
      },
      {
        "url": "/products/23.2.webp",
        "altText": "Regular Training T-Shirt view 2"
      },
      {
        "url": "/products/23.3.webp",
        "altText": "Regular Training T-Shirt view 3"
      },
      {
        "url": "/products/23.4.webp",
        "altText": "Regular Training T-Shirt view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 30
  },
  {
    "name": "Loose Fit Logo T-Shirt",
    "description": "A loose short-sleeve logo t-shirt with a simple crew neckline. The clean black finish and relaxed fit make it easy to style with joggers, shorts, or jeans.",
    "price": 55,
    "discountPrice": 50,
    "countInStock": 20,
    "sku": "BW-W-004",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black"
    ],
    "collections": "Essentials",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/24.1.webp",
        "altText": "Loose Fit Logo T-Shirt view 1"
      },
      {
        "url": "/products/24.2.webp",
        "altText": "Loose Fit Logo T-Shirt view 2"
      },
      {
        "url": "/products/24.3.webp",
        "altText": "Loose Fit Logo T-Shirt view 3"
      },
      {
        "url": "/products/24.4.webp",
        "altText": "Loose Fit Logo T-Shirt view 4"
      }
    ],
    "rating": 4.6,
    "numReviews": 18
  },
  {
    "name": "Minimal Jersey T-Shirt",
    "description": "A minimal jersey t-shirt with a relaxed straight cut and soft hand feel. The understated design is built for everyday rotation and light training sessions.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 35,
    "sku": "BW-W-005",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black"
    ],
    "collections": "Essentials",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/25.1.webp",
        "altText": "Minimal Jersey T-Shirt view 1"
      },
      {
        "url": "/products/25.2.webp",
        "altText": "Minimal Jersey T-Shirt view 2"
      },
      {
        "url": "/products/25.3.webp",
        "altText": "Minimal Jersey T-Shirt view 3"
      },
      {
        "url": "/products/25.4.webp",
        "altText": "Minimal Jersey T-Shirt view 4"
      }
    ],
    "rating": 4.4,
    "numReviews": 22
  },
  {
    "name": "Fleece Training Shorts",
    "description": "Comfortable fleece training shorts with an elastic waist and easy athletic cut. Side pockets and a soft interior make them practical for workouts or downtime.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 30,
    "sku": "BW-W-006",
    "category": "Bottom Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray"
    ],
    "collections": "Loungewear Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/products/26.1.webp",
        "altText": "Fleece Training Shorts view 1"
      },
      {
        "url": "/products/26.2.webp",
        "altText": "Fleece Training Shorts view 2"
      },
      {
        "url": "/products/26.3.webp",
        "altText": "Fleece Training Shorts view 3"
      },
      {
        "url": "/products/26.4.webp",
        "altText": "Fleece Training Shorts view 4"
      }
    ],
    "rating": 4.3,
    "numReviews": 25
  },
  {
    "name": "Printed Cargo Shorts",
    "description": "Relaxed cargo shorts with a bold all-over print and utility pockets. The drawstring waist and knee-length cut keep them comfortable for warm casual days.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 20,
    "sku": "BW-W-007",
    "category": "Bottom Wear",
    "brand": "Jordan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/products/27.1.webp",
        "altText": "Printed Cargo Shorts view 1"
      },
      {
        "url": "/products/27.2.webp",
        "altText": "Printed Cargo Shorts view 2"
      },
      {
        "url": "/products/27.3.webp",
        "altText": "Printed Cargo Shorts view 3"
      },
      {
        "url": "/products/27.4.webp",
        "altText": "Printed Cargo Shorts view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 19
  },
  {
    "name": "Wide-Leg Track Pants",
    "description": "Wide-leg track pants with an elastic drawcord waist and zip pockets. The lightweight fabric and roomy shape make them a strong activewear staple.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 25,
    "sku": "BW-W-008",
    "category": "Bottom Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige"
    ],
    "collections": "Activewear Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/products/28.1.webp",
        "altText": "Wide-Leg Track Pants view 1"
      },
      {
        "url": "/products/28.2.webp",
        "altText": "Wide-Leg Track Pants view 2"
      },
      {
        "url": "/products/28.3.webp",
        "altText": "Wide-Leg Track Pants view 3"
      },
      {
        "url": "/products/28.4.webp",
        "altText": "Wide-Leg Track Pants view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 15
  },
  {
    "name": "Relaxed Woven Pants",
    "description": "Relaxed woven pants with a soft drape and straight wide leg. The elastic waist makes them easy to wear for travel, lounging, and everyday outfits.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "BW-W-009",
    "category": "Bottom Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White"
    ],
    "collections": "Loungewear Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/products/29.1.webp",
        "altText": "Relaxed Woven Pants view 1"
      },
      {
        "url": "/products/29.2.webp",
        "altText": "Relaxed Woven Pants view 2"
      },
      {
        "url": "/products/29.3.webp",
        "altText": "Relaxed Woven Pants view 3"
      },
      {
        "url": "/products/29.4.webp",
        "altText": "Relaxed Woven Pants view 4"
      }
    ],
    "rating": 4.6,
    "numReviews": 23
  },
  {
    "name": "Lightweight Bomber Jacket",
    "description": "A lightweight bomber jacket with a clean collarless neckline and softly padded shape. It layers easily over training sets or casual basics.",
    "price": 70,
    "discountPrice": 65,
    "countInStock": 25,
    "sku": "BW-W-010",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Charcoal"
    ],
    "collections": "Outerwear Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/products/30.1.webp",
        "altText": "Lightweight Bomber Jacket view 1"
      },
      {
        "url": "/products/30.2.webp",
        "altText": "Lightweight Bomber Jacket view 2"
      },
      {
        "url": "/products/30.3.webp",
        "altText": "Lightweight Bomber Jacket view 3"
      },
      {
        "url": "/products/30.4.webp",
        "altText": "Lightweight Bomber Jacket view 4"
      }
    ],
    "rating": 4.8,
    "numReviews": 20
  },
  {
    "name": "Hooded Puffer Jacket",
    "description": "A hooded puffer jacket with warm quilted insulation and a cropped, easy-to-layer fit. The zip front and adjustable hood keep it practical in cold weather.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 25,
    "sku": "TW-W-001",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White"
    ],
    "collections": "Outerwear Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/products/31.1.webp",
        "altText": "Hooded Puffer Jacket view 1"
      },
      {
        "url": "/products/31.2.webp",
        "altText": "Hooded Puffer Jacket view 2"
      },
      {
        "url": "/products/31.3.webp",
        "altText": "Hooded Puffer Jacket view 3"
      },
      {
        "url": "/products/31.4.webp",
        "altText": "Hooded Puffer Jacket view 4"
      }
    ],
    "rating": 4.6,
    "numReviews": 15
  },
  {
    "name": "Colorblock Windbreaker",
    "description": "A colorblock windbreaker with a half-zip front, high collar, and elastic cuffs. Lightweight woven fabric makes it useful for breezy training days.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "TW-W-002",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Brown",
      "White"
    ],
    "collections": "Outerwear Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/products/32.1.webp",
        "altText": "Colorblock Windbreaker view 1"
      },
      {
        "url": "/products/32.2.webp",
        "altText": "Colorblock Windbreaker view 2"
      },
      {
        "url": "/products/32.3.webp",
        "altText": "Colorblock Windbreaker view 3"
      },
      {
        "url": "/products/32.4.webp",
        "altText": "Colorblock Windbreaker view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Long Hooded Puffer Jacket",
    "description": "A long hooded puffer jacket with generous insulation and a high protective collar. The extended length adds extra coverage for cold commutes and winter walks.",
    "price": 25,
    "discountPrice": 20,
    "countInStock": 50,
    "sku": "TW-W-003",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black"
    ],
    "collections": "Outerwear Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/products/33.1.webp",
        "altText": "Long Hooded Puffer Jacket view 1"
      },
      {
        "url": "/products/33.2.webp",
        "altText": "Long Hooded Puffer Jacket view 2"
      },
      {
        "url": "/products/33.3.webp",
        "altText": "Long Hooded Puffer Jacket view 3"
      },
      {
        "url": "/products/33.4.webp",
        "altText": "Long Hooded Puffer Jacket view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 25
  },
  {
    "name": "Logo Bomber Jacket",
    "description": "A padded bomber jacket with subtle tonal logo detailing and a ribbed collar. It has an easy athletic shape for casual layering in cooler weather.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 35,
    "sku": "TW-W-004",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige"
    ],
    "collections": "Outerwear Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/products/34.1.webp",
        "altText": "Logo Bomber Jacket view 1"
      },
      {
        "url": "/products/34.2.webp",
        "altText": "Logo Bomber Jacket view 2"
      },
      {
        "url": "/products/34.3.webp",
        "altText": "Logo Bomber Jacket view 3"
      },
      {
        "url": "/products/34.4.webp",
        "altText": "Logo Bomber Jacket view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 18
  },
  {
    "name": "Faux Fur Parka",
    "description": "A padded parka with a faux-fur trimmed hood, full zip closure, and flap pockets. The longer cut is designed for warmth and coverage in cold weather.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 40,
    "sku": "TW-W-005",
    "category": "Top Wear",
    "brand": "Adidas",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Khaki"
    ],
    "collections": "Outerwear Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/products/35.1.webp",
        "altText": "Faux Fur Parka view 1"
      },
      {
        "url": "/products/35.2.webp",
        "altText": "Faux Fur Parka view 2"
      },
      {
        "url": "/products/35.3.webp",
        "altText": "Faux Fur Parka view 3"
      },
      {
        "url": "/products/35.4.webp",
        "altText": "Faux Fur Parka view 4"
      }
    ],
    "rating": 4.8,
    "numReviews": 22
  },
  {
    "name": "Graphic Print Tee",
    "description": "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    "price": 30,
    "discountPrice": 25,
    "countInStock": 45,
    "sku": "TW-W-006",
    "category": "Top Wear",
    "brand": "StreetStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "collections": "Urban Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/products/36.1.avif",
        "altText": "Graphic Print Tee view 1"
      },
      {
        "url": "/products/36.2.avif",
        "altText": "Graphic Print Tee view 2"
      },
      {
        "url": "/products/36.3.avif",
        "altText": "Graphic Print Tee view 3"
      },
      {
        "url": "/products/36.4.avif",
        "altText": "Graphic Print Tee view 4"
      }
    ],
    "rating": 4.6,
    "numReviews": 30
  },
  {
    "name": "Ribbed Long-Sleeve Top",
    "description": "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    "price": 55,
    "discountPrice": 50,
    "countInStock": 30,
    "sku": "TW-W-007",
    "category": "Top Wear",
    "brand": "ComfortFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink",
      "Brown"
    ],
    "collections": "Fall Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/products/37.1.avif",
        "altText": "Ribbed Long-Sleeve Top view 1"
      },
      {
        "url": "/products/37.2.avif",
        "altText": "Ribbed Long-Sleeve Top view 2"
      },
      {
        "url": "/products/37.3.avif",
        "altText": "Ribbed Long-Sleeve Top view 3"
      },
      {
        "url": "/products/37.4.avif",
        "altText": "Ribbed Long-Sleeve Top view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 26
  },
  {
    "name": "Ruffle-Sleeve Blouse",
    "description": "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 20,
    "sku": "TW-W-008",
    "category": "Top Wear",
    "brand": "FeminineWear",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "White",
      "Navy",
      "Lavender"
    ],
    "collections": "Summer Collection",
    "material": "Viscose",
    "gender": "Women",
    "images": [
      {
        "url": "/products/38.1.avif",
        "altText": "Ruffle-Sleeve Blouse view 1"
      },
      {
        "url": "/products/38.2.avif",
        "altText": "Ruffle-Sleeve Blouse view 2"
      },
      {
        "url": "/products/38.3.avif",
        "altText": "Ruffle-Sleeve Blouse view 3"
      },
      {
        "url": "/products/38.4.avif",
        "altText": "Ruffle-Sleeve Blouse view 4"
      }
    ],
    "rating": 4.5,
    "numReviews": 19
  },
  {
    "name": "Classic Button-Up Shirt",
    "description": "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    "price": 60,
    "discountPrice": 55,
    "countInStock": 25,
    "sku": "TW-W-009",
    "category": "Top Wear",
    "brand": "ClassicStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Light Blue",
      "Black"
    ],
    "collections": "Office Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/products/39.1.avif",
        "altText": "Classic Button-Up Shirt view 1"
      },
      {
        "url": "/products/39.2.avif",
        "altText": "Classic Button-Up Shirt view 2"
      },
      {
        "url": "/products/39.3.avif",
        "altText": "Classic Button-Up Shirt view 3"
      },
      {
        "url": "/products/39.4.avif",
        "altText": "Classic Button-Up Shirt view 4"
      }
    ],
    "rating": 4.8,
    "numReviews": 25
  },
  {
    "name": "V-Neck Wrap Top",
    "description": "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "TW-W-010",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Red",
      "Black",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/products/40.1.avif",
        "altText": "V-Neck Wrap Top view 1"
      },
      {
        "url": "/products/40.2.avif",
        "altText": "V-Neck Wrap Top view 2"
      },
      {
        "url": "/products/40.3.avif",
        "altText": "V-Neck Wrap Top view 3"
      },
      {
        "url": "/products/40.4.avif",
        "altText": "V-Neck Wrap Top view 4"
      }
    ],
    "rating": 4.7,
    "numReviews": 22
  }
];

module.exports = products;
