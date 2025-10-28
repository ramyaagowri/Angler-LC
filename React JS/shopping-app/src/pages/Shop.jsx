
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Card, Button, Row, Col, Pagination } from "react-bootstrap";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.cart);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => setProducts(res.data));
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <Row>
        {message || error ? (
          <Alert variant={error ? "danger" : "success"}>
            {message ? message : error}
          </Alert>
        ) : null}
        {currentProducts.map((p) => (
          <Col md={4} key={p.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{p.product_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {p.brand}
                </Card.Subtitle>
                <Card.Text>{p.description}</Card.Text>
                <Card.Text>
                  <b>${p.price}</b>
                </Card.Text>
                <Button onClick={() => dispatch(addToCart(p))}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-3">
        <Pagination.First
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }).map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}
