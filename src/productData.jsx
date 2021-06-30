const productData = {
    products: [
    {
      id: 1,
      name: "TORTA OREO",
      price: 1500,
      stock: 5,
      image:
        "https://truffle-assets.imgix.net/f0f7a6e1-torta-oreo-y-ddl_l_thumb.jpg"
    },
    {
      id: 2,
      name: "CHEESECAKE",
      price: 1800,
      stock: 15,
      image:
        "https://d1uz88p17r663j.cloudfront.net/resized/2017b5b6ae40076cad68b8d8fd489239_373_Cheesecake_sin_Horno_1200_600.jpg"
    },
    {
      id: 3,
      name: "LEMON PIE",
      price: 1300,
      stock: 10,
      image:
        "data:image/jpeg;base64,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"
      },
    ],
  };
  
  export default productData;


  