import React, { useState } from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

// importing images
import ProductData1 from "../../src/assets/images/categoryTab/01.jpg";
import ProductData2 from "../../src/assets/images/categoryTab/02.jpg";
import ProductData3 from "../../src/assets/images/categoryTab/03.jpg";
import ProductData4 from "../../src/assets/images/categoryTab/04.jpg";
import ProductData5 from "../../src/assets/images/categoryTab/05.jpg";
import ProductData6 from "../../src/assets/images/categoryTab/06.jpg";
import ProductData7 from "../../src/assets/images/categoryTab/07.jpg";
import ProductData8 from "../../src/assets/images/categoryTab/08.jpg";

const title = "Our Products";

const ProductData = [
  {
    imgUrl: ProductData1,
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: ProductData2,
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: ProductData3,
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: ProductData4,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: ProductData5,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: ProductData6,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: ProductData7,
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: ProductData8,
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

const CategoryShowcase = () => {
  const [items, setItems] = useState(ProductData);

  //   Category filtering
  // const filterItem = (categItem) => {
  //   const updateItems = ProductData.filter((curElem) => {
  //     return curElem.cate === categItem;
  //   });
  //   setItems(updateItems);
  // };
  // OR

  const filterItem = (categItem) => {
    if (categItem === "All") {
      setItems(ProductData);
      return;
    }
    const updateItems = ProductData.filter(
      (curElem) => curElem.cate === categItem
    );
    setItems(updateItems);
  };

  return (
    <div className="course-section style-3 padding-tb">
      {/* Shapes */}
      <div>
        <img
          className="course-shape one"
          src="/src/assets/images/shape-img/icon/01.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="course-shape two"
          src="/src/assets/images/shape-img/icon/02.png"
          alt=""
        />
      </div>

      {/* Main section */}
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              {/* <li onClick={() => setItems(ProductData)}>All</li> */}
              <li onClick={() => filterItem("All")}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>

        {/* Section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    {/* course thumb */}
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt={product.title} />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-review">
                          <Rating />
                        </div>
                      </div>
                    </div>

                    {/* content */}
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h6>{product.title}</h6>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/" className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
