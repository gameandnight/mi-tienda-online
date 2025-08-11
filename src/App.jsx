import React, { useState } from "react";
import "./index.css";

const products = [
    // SPORTS (10)
    { id: 1, name: "RunFast 200 Sneakers", category: "Sports", price: 89.99, rating: 4.5, description: "Lightweight running shoes." },
    { id: 2, name: "DryFit T-Shirt", category: "Sports", price: 24.0, rating: 4.1, description: "Breathable training t-shirt." },
    { id: 6, name: "YogaComfort Pants", category: "Sports", price: 34.99, rating: 4.0, description: "Flexible and comfortable yoga pants." },
    { id: 10, name: "SportX Socks", category: "Sports", price: 9.99, rating: 4.0, description: "Breathable and comfortable socks." },
    { id: 11, name: "ProGrip Gloves", category: "Sports", price: 14.99, rating: 4.2, description: "Non-slip gloves for weight training." },
    { id: 12, name: "SwiftRun Shorts", category: "Sports", price: 27.5, rating: 4.3, description: "Light and breathable running shorts." },
    { id: 13, name: "Stamina Hoodie", category: "Sports", price: 49.99, rating: 4.6, description: "Warm hoodie for outdoor training." },
    { id: 14, name: "AquaFlex Swim Goggles", category: "Sports", price: 19.5, rating: 4.1, description: "Anti-fog swimming goggles." },
    { id: 15, name: "Marathon Hydration Bottle", category: "Sports", price: 12.99, rating: 4.4, description: "Lightweight water bottle for long runs." },
    { id: 16, name: "PowerStretch Resistance Bands", category: "Sports", price: 15.5, rating: 4.3, description: "Set of resistance bands for workouts." },

    // ELECTRONICS (10)
    { id: 3, name: "BeatPro Headphones", category: "Electronics", price: 59.99, rating: 4.6, description: "Noise-cancelling headphones." },
    { id: 5, name: "SmartFit Watch", category: "Electronics", price: 129.99, rating: 4.4, description: "Watch with activity tracking and notifications." },
    { id: 9, name: "ActionGo Camera", category: "Electronics", price: 199.0, rating: 4.7, description: "Extreme sports camera, waterproof." },
    { id: 17, name: "PulseTrack Heart Monitor", category: "Electronics", price: 89.5, rating: 4.3, description: "Wearable heart rate monitor." },
    { id: 18, name: "NoiseShield Earbuds", category: "Electronics", price: 79.99, rating: 4.5, description: "Wireless earbuds with noise cancellation." },
    { id: 19, name: "FlexScreen Tablet", category: "Electronics", price: 299.0, rating: 4.2, description: "Lightweight tablet for media and work." },
    { id: 20, name: "SportCam Drone", category: "Electronics", price: 349.99, rating: 4.6, description: "Compact drone with HD camera." },
    { id: 21, name: "ChargeGo Power Bank", category: "Electronics", price: 25.0, rating: 4.4, description: "Portable charger for all devices." },
    { id: 22, name: "GymBeat Bluetooth Speaker", category: "Electronics", price: 39.5, rating: 4.3, description: "Shockproof and waterproof speaker." },
    { id: 23, name: "LightTrack GPS Tracker", category: "Electronics", price: 59.0, rating: 4.1, description: "Compact GPS tracker for sports." },

    // ACCESSORIES (10)
    { id: 4, name: "UrbanPack Backpack", category: "Accessories", price: 45.5, rating: 4.2, description: "Durable backpack with multiple compartments." },
    { id: 8, name: "Runner Waist Bag", category: "Accessories", price: 19.99, rating: 3.9, description: "Practical bag for carrying your phone while running." },
    { id: 24, name: "FitStyle Cap", category: "Accessories", price: 12.5, rating: 4.0, description: "Breathable sports cap." },
    { id: 25, name: "ProShield Sunglasses", category: "Accessories", price: 35.99, rating: 4.3, description: "UV-protected sports sunglasses." },
    { id: 26, name: "AquaGuard Water Bottle", category: "Accessories", price: 14.0, rating: 4.1, description: "Insulated stainless steel bottle." },
    { id: 27, name: "GripMax Wristbands", category: "Accessories", price: 9.5, rating: 4.2, description: "Sweat-absorbing sports wristbands." },
    { id: 28, name: "TrailBlazer Hiking Stick", category: "Accessories", price: 39.0, rating: 4.4, description: "Adjustable hiking stick." },
    { id: 29, name: "MultiFit Gym Bag", category: "Accessories", price: 29.99, rating: 4.3, description: "Spacious sports bag for all your gear." },
    { id: 30, name: "CyclePro Gloves", category: "Accessories", price: 18.0, rating: 4.2, description: "Padded gloves for cycling." },
    { id: 31, name: "RainGuard Poncho", category: "Accessories", price: 15.99, rating: 4.1, description: "Lightweight waterproof poncho." },

    // FOOTWEAR (10)
    { id: 7, name: "CityWalk Sneakers", category: "Footwear", price: 74.99, rating: 4.3, description: "Shoes for daily use and urban walking." },
    { id: 32, name: "TrailRunner Shoes", category: "Footwear", price: 99.0, rating: 4.5, description: "Shoes designed for mountain trails." },
    { id: 33, name: "AquaStep Sandals", category: "Footwear", price: 29.99, rating: 4.2, description: "Waterproof sandals for outdoor use." },
    { id: 34, name: "FlexStep Trainers", category: "Footwear", price: 64.5, rating: 4.1, description: "Light trainers for casual wear." },
    { id: 35, name: "GripMax Hiking Boots", category: "Footwear", price: 119.99, rating: 4.6, description: "Durable boots for hiking." },
    { id: 36, name: "SpeedCourt Indoor Shoes", category: "Footwear", price: 54.0, rating: 4.0, description: "Indoor sports shoes with extra grip." },
    { id: 37, name: "UrbanStep Loafers", category: "Footwear", price: 69.5, rating: 4.3, description: "Comfortable loafers for city use." },
    { id: 38, name: "CoolBreeze Flip Flops", category: "Footwear", price: 15.0, rating: 4.0, description: "Light flip flops for summer." },
    { id: 39, name: "RunEase Slip-Ons", category: "Footwear", price: 49.5, rating: 4.2, description: "Slip-on sneakers for quick wear." },
    { id: 40, name: "StepGuard Work Shoes", category: "Footwear", price: 89.0, rating: 4.4, description: "Protective shoes for heavy use." }
];


export default function App() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Filtrado básico
    const filteredProducts = products.filter((p) => {
        return (
            p.name.toLowerCase().includes(search.toLowerCase()) &&
            (category === "All" || p.category === category) &&
            (maxPrice === "" || p.price <= parseFloat(maxPrice))
        );
    });

    // Generar recomendaciones simples
    const getRecommendations = (product) => {
        if (!product) return [];
        return products
            .filter(
                (p) =>
                    p.id !== product.id &&
                    p.category === product.category &&
                    p.rating >= 4.0
            )
            .slice(0, 3);
    };

    const recommendations = getRecommendations(selectedProduct);

    return (
        <div className="app">
            <h1>Product Catalog (AI: Recommendations)</h1>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>All</option>
                    <option>Sports</option>
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>Footwear</option>
                </select>

                <input
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <button onClick={() => { setSearch(""); setCategory("All"); setMaxPrice(""); }}>
                    Clear
                </button>
            </div>

            <div className="content">
                <div className="product-list">
                    <h2>Products ({filteredProducts.length})</h2>
                    {filteredProducts.map((p) => (
                        <div key={p.id} className="product" onClick={() => setSelectedProduct(p)}>
                            <strong>{p.name}</strong> — {p.category} — ${p.price} — ⭐{p.rating}
                            <p>{p.description}</p>
                        </div>
                    ))}
                </div>

                <div className="product-details">
                    {selectedProduct ? (
                        <>
                            <h2>{selectedProduct.name}</h2>
                            <p><strong>Category:</strong> {selectedProduct.category}</p>
                            <p><strong>Price:</strong> ${selectedProduct.price}</p>
                            <p><strong>Rating:</strong> ⭐{selectedProduct.rating}</p>
                            <p>{selectedProduct.description}</p>

                            <h3>Recommended for you:</h3>
                            {recommendations.length > 0 ? (
                                recommendations.map((r) => (
                                    <div key={r.id} className="recommendation">
                                        <strong>{r.name}</strong> — ${r.price} — ⭐{r.rating}
                                    </div>
                                ))
                            ) : (
                                <p>No similar products found.</p>
                            )}
                        </>
                    ) : (
                        <p>Select a product to see details and recommendations.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
