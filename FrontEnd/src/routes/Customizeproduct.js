import React, { useState } from 'react';
import './Customizeproduct.css';
import { Link, useNavigate } from "react-router-dom";


function Customizeproduct() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showDeleteProductForm, setShowDeleteProductForm] = useState(false);
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
  });
  
  let name,value;

  const handleAddProductInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewProduct({...newProduct,[name]: value,});
  };
  // Handle form submission for adding a product
  const handleAddProductSubmit = async (e) => {
    console.log("submit has pressed");
    e.preventDefault();
    
    const { name, price, description, category} = newProduct;
    if (!name || !price || !description || !category ) {
      window.alert('Please fill out all required fields.');
      return;
  }
  // const formData = new FormData();
  // formData.append('name', name);
  // formData.append('price', price);
  // formData.append('description', description);
  // formData.append('category', category);
  console.log(name,description,price,category);

  
    
    const res = await fetch('http://localhost:4000/api/v1/product/new', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        price,
        description,
        category,

      })
      
    });
    
    const data = await res.json();

    if (res.status === 201) {
      window.alert('Product added successfully');
      // Reset the form and close it
      setNewProduct({
        name: '',
        price: 0,
        description: '',
        category: '',
      });
      setShowAddProductForm(false);
    } else {
      window.alert(data.message);
    }
  
};
    
    
  

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === 'add') {
      setShowAddProductForm(!showAddProductForm);
      setShowDeleteProductForm(false);
      setShowUpdateProductForm(false);
    } else if (option === 'delete') {
      setShowDeleteProductForm(!showDeleteProductForm);
      setShowAddProductForm(false);
      setShowUpdateProductForm(false);
    } else if (option === 'update') {
      setShowUpdateProductForm(!showUpdateProductForm);
      setShowAddProductForm(false);
      setShowDeleteProductForm(false);
    }
};

  return (
    <div className="Productsettings">
      <header className="product-header">
        <h1>Product Customization Page</h1>
      </header>
      <div className="options-container">
        <button
        className={`option-button ${selectedOption === 'add' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('add')}
      >
        Add Product
      </button>
      <button
        className={`option-button ${selectedOption === 'delete' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('delete')}
      >
        Delete Product
      </button>
      <button
        className={`option-button ${selectedOption === 'update' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('update')}
      >
        Update Product
      </button>
      </div>
      {showAddProductForm && (
        <div className="add-product-form">
          <h2>Add Product</h2>
          <form onSubmit={handleAddProductSubmit}>
          <label>
              Product Name:
              <input type="text" name="name" value={newProduct.name} onChange={handleAddProductInput} />
            </label>
            <label>
              Product Price:
              <input type="number" name="price" value={newProduct.price} onChange={handleAddProductInput}/>
            </label>
            <label>
              Product Description:
              <textarea name="description" value={newProduct.description} onChange={handleAddProductInput}/>
            </label>
            <label>
              Product Category:
              <textarea name="category" value={newProduct.category} onChange={handleAddProductInput}/>
            </label>
            <label>
              Product Images (up to 3):
              <input type="file" name="productImages" multiple />
            </label>
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}
      {/* ... Other JSX ... */}
    </div>
  );
}

export default Customizeproduct;