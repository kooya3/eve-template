const productData = {
    Masks: [
        { name: "", imageUrl: "assets/mask-1.jpg" },
        { name: "", imageUrl: "assets/mask-2.jpg" },
        { name: "", imageUrl: "assets/mask-3.jpg" },
        { name: "", imageUrl: "assets/mask-4.jpg" },
        { name: "", imageUrl: "assets/mask-5.jpg" },
        // Add more masks here as needed
    ],
    Gloves: [
        { name: "", imageUrl: "assets/gloves-1.jpg" },
        { name: "", imageUrl: "assets/gloves-2.jpg" },
        { name: "", imageUrl: "assets/gloves-3.jpg" },
        // Add more gloves here as needed
    ],
    Syringes: [
        { name: "", imageUrl: "assets/syringe-1.jpg" },
        // Add more syringes here as needed
    ],
      Bags: [
        { name: "", imageUrl: "assets/bag-1.jpg" },
        { name: "", imageUrl: "assets/bag-2.jpg" },
        // Add more bags here as needed
    ],
    Glasses: [
        { name: "", imageUrl: "assets/glasses-1.jpg" },
        { name: "", imageUrl: "assets/glasses-2.jpg" },
        { name: "", imageUrl: "assets/glasses-3.jpg" },
        { name: "", imageUrl: "assets/glasses-4.jpg" },
        
        // Add more glasses here as needed
    ]
};

const galleryContainer = document.getElementById("gallery");

function createGallery(category, products) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);

    const productsDiv = document.createElement("div");
    productsDiv.classList.add("products");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("item");

        const productImg = document.createElement("img");
        productImg.src = product.imageUrl;
        productImg.alt = product.name;

        const productName = document.createElement("p");
        productName.textContent = product.name;

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productsDiv.appendChild(productDiv);
    });

    categoryDiv.appendChild(productsDiv);
    galleryContainer.appendChild(categoryDiv);
}

// Create the gallery for each category
for (const category in productData) {
    createGallery(category, productData[category]);
}
