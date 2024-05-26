/* eslint-disable no-unused-vars */
import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    isAvailable: false,
    category: "",
    rating: 0,
    reviews: [],
    totalReviewCount: 0,
    price: {
      current: {
        value: 0,
        text: "",
      },
    },
    serviceProvider: "",
    imageUrl: "",
    additionalImageUrls: [],
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "price") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        price: {
          ...prevProduct.price,
          current: {
            ...prevProduct.price.current,
            value: type === "number" ? parseFloat(value) : value,
          },
        },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const absolutePath = e.target.value;
      const fileName = absolutePath.split("\\").pop(); // Extract file name
      const imagePath = `/src/assets/${fileName}`; // Add the path to the file name
      setImageFile(file);
      setProduct((prevProduct) => ({
        ...prevProduct,
        imageUrl: imagePath,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/products", {
        ...product,
        id: nanoid(), // Generate a unique ID for the new product
      });
      console.log(response.data);
      alert("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        isAvailable: false,
        category: "",
        rating: 0,
        reviews: [],
        totalReviewCount: 0,
        price: {
          current: {
            value: 0,
            text: "",
          },
        },
        serviceProvider: "",
        imageUrl: "",
        additionalImageUrls: [],
      });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("There was an error adding the product.");
    }
  };

  const categories = [
    "Online Education",
    "IT Services",
    "Art",
    "Virtual Healthcare Consultation",
    "Remote Financial Advisory",
    "Digital Marketing Services",
    "Cloud Computing Services",
    "Online Counseling",
    "Web Development Services",
    "E-commerce Solutions",
    "Online Fitness Training",
    "Virtual Event Planning",
    "Multimedia"
  ];

  return (
    <div className="m-6 max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Category:</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price.current.value}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Service Provider:</label>
          <input
            type="text"
            name="serviceProvider"
            value={product.serviceProvider}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isAvailable"
            checked={product.isAvailable}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm font-medium text-gray-700">Available</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
