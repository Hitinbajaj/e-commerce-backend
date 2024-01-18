const products = [
  {
    name: "PlayStation 5",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/HkdMToxijoHfz4JwUgfh3G-970-80.jpg.webp",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment...",
    price: 499,
    countInStock: 15,
    category: "Gaming",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "iPhone 12",
    imageUrl: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020_big.jpg.large.jpg",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display...",
    price: 1099,
    countInStock: 10,
    category: "Mobiles",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "Canon EOS-1D",
    imageUrl: "https://1.img-dpreview.com/files/p/TS170x100~products/canon_eos1dmkiin/5d3fc17856974cf19d08c01905f91ed1.png",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals...",
    price: 1300,
    countInStock: 5,
    category: "Cameras",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "Amazon Alexa",
    imageUrl: "https://voicebot.ai/wp-content/uploads/2018/12/echo-dots-top-seller-christmas-2018.jpg",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms...",
    price: 50,
    countInStock: 25,
    category: "Smart Home",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl: "https://www.audio-technica.com/en-eu/media/catalog/product/cache/2fd25c71ae48bc84d3a11be1bc2cd1b1/a/t/ath-s220btbk_01_1.png",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design...",
    price: 233,
    countInStock: 4,
    category: "Audio",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "JBL FLIP 4",
    imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRB-TcpZCdDlHh72wr01G9HUMcHilt-SWKt6w3sygneqtmIvQqm6nwwo_n7g4X_uGJjx-OBOyIOgHvPJkI_7AGp_yOfhxFX",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker...",
    price: 140,
    countInStock: 10,
    category: "Audio",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },

  // Adding more products as per your request...

  // Sports
  {
    name: "Nike Running Shoes",
    imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/384f7a6f-b4f2-407c-86ec-1a6582c194e6/invincible-3-road-running-shoes-VZDSsw.png",
    description: "Premium running shoes for ultimate comfort and performance.",
    price: 120,
    countInStock: 20,
    category: "Sports",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "Adidas Soccer Ball",
    imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/ball/y/b/j/-original-imagjpzyvhqhg9xs.jpeg?q=70",
    description: "High-quality soccer ball for professional players.",
    price: 30,
    countInStock: 30,
    category: "Sports",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },

  // Speakers
  {
    name: "Bose SoundLink Speaker",
    imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71i1wq8vNaL._SL1500_.jpg",
    description: "Portable Bluetooth speaker with impressive sound quality.",
    price: 199,
    countInStock: 15,
    category: "Speakers",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "Sony Noise Cancelling Headphones",
    imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61zWFqX+krL._SL1500_.jpg",
    description: "Wireless headphones with industry-leading noise cancellation.",
    price: 299,
    countInStock: 10,
    category: "Speakers",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },

  // Kitchen
  {
    name: "Instant Pot Duo",
    imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81MXavhztlL._SL1500_.jpg",
    description: "Multi-functional electric pressure cooker for easy cooking.",
    price: 89,
    countInStock: 8,
    category: "Kitchen",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "KitchenAid Stand Mixer",
    imageUrl: "https://www.kitchenaid.in/content/kitchenaid/en_in/countertop-appliances/stand-mixers/_jcr_content/root/main/responsivegrid/responsivegrid_copy__832431237/container_copy_copy__1486777444/wrapperParsys/image_1644220087.coreimg.jpeg/1589379053812/mini-thumbnail.jpeg",
    description: "Powerful stand mixer for baking enthusiasts.",
    price: 279,
    countInStock: 12,
    category: "Kitchen",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },

  // Home Decors
  {
    name: "Modern Wall Clock",
    imageUrl: "https://realspare.com/wp-content/uploads/2023/06/s-l500-6.jpg",
    description: "Sleek and stylish wall clock for contemporary interiors.",
    price: 45,
    countInStock: 18,
    category: "Home Decors",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "Artificial Plant Set",
    imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1EXTICsPnu6ys88Ty-uPms7AskojLCaFvWoRZ-fKJq1xUUSR15HN-9cW8FYNhZNfyTqQ6CQW-QGu6szW7hFr8-PuYqym1f685u4Pheeuq18HQZv8qv1KY9jw",
    description: "Set of lifelike artificial plants to enhance your home decor.",
    price: 65,
    countInStock: 25,
    category: "Home Decors",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },

  // Mobiles
  {
    name: "Samsung Galaxy S21",
    imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81cHpJNr07L._SL1500_.jpg",
    description: "Flagship smartphone with advanced camera features and performance.",
    price: 899,
    countInStock: 10,
    category: "Mobiles",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "Google Pixel 6",
    imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Dc3f0C50L._SL1500_.jpg",
    description: "Cutting-edge smartphone with a focus on photography and AI.",
    price: 799,
    countInStock: 15,
    category: "Mobiles",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },

  // Laptops
  {
    name: "Dell XPS 13",
    imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=575&qlt=100,1&resMode=sharp2&size=575,402&chrss=full",
    description: "Ultra-thin and powerful laptop for productivity and entertainment.",
    price: 1299,
    countInStock: 7,
    category: "Laptops",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },
  {
    name: "MacBook Pro 16-inch",
    imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-silver-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697230830241",
    description: "High-performance MacBook with a stunning Retina display.",
    price: 2399,
    countInStock: 5,
    category: "Laptops",
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  },

  // Add more products as needed...
];


module.exports = products;
