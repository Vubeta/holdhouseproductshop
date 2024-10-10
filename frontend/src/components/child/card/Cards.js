import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../../services/ProductService";

function GridCard() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError('Error fetching products');
                console.error(err);
            }
        };

        fetchData();
    }, []);

    console.log(products);

    return (
        <div style={{ margin: '1%' }}>
            <Row xs={1} sm={2} md={4} className="g-4">

                {products.length > 0 ? (
                    products.map((product, id) => (
                        <Col key={id}>
                            <Card>
                                <Card.Img variant="top" src={product.url} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center', minHeight: '4.5em', lineHeight: '1.5em', overflow: 'hidden' }}>
                                        {product.title}
                                        <Card.Text className="text-danger font-weight-bold">
                                            {product.price}
                                        </Card.Text>
                                    </Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    This is a longer card with supporting text below as a natural*/}
                                    {/*    lead-in to additional content. This content is a little bit*/}
                                    {/*    longer.*/}
                                    {/*</Card.Text>*/}

                                    <div className="btn-group w-100" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary">Mua nhanh</button>
                                        <button type="button" className="btn btn btn-secondary">Xem chi tiết</button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No products available</p> // Optional: Thêm hiển thị nếu không có sản phẩm
                )}

            </Row>
        </div>
    );
}

export default GridCard;