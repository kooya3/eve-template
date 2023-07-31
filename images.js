const productData = {
    masks: [
        { name: "Mask 1", imageUrl: "mask1.jpg" },
        { name: "Mask 2", imageUrl: "mask2.jpg" },
        { name: "Mask 3", imageUrl: "mask3.jpg" },
        // Add more masks here as needed
    ],
    gloves: [
        { name: "Gloves 1", imageUrl: "gloves1.jpg" },
        { name: "Gloves 2", imageUrl: "gloves2.jpg" },
        // Add more gloves here as needed
    ],
    syringes: [
        { name: "Syringe 1", imageUrl: "syringe1.jpg" },
        // Add more syringes here as needed
    ],
    cottonWool: [
        { name: "Cotton Wool 1", imageUrl: "cotton-wool1.jpg" },
        // Add more cotton wool here as needed
    ],
    bags: [
        { name: "Bag 1", imageUrl: "bag1.jpg" },
        { name: "Bag 2", imageUrl: "bag2.jpg" },
        // Add more bags here as needed
    ],
    glasses: [
        { name: "Glasses 1", imageUrl: "glasses1.jpg" },
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