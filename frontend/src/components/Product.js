import {Badge} from "react-bootstrap";
import GridCard from "./child/card/Cards";

const Product = () => {
    return (
        <div>
            <h4 style={{margin: '1%'}}>
                Sản phẩm hot <Badge bg="secondary">Hot</Badge>
            </h4>
            <GridCard></GridCard>
            <h4 style={{margin: '1%'}}>
                Sản phẩm mới <Badge bg="secondary">New</Badge>
            </h4>
            <GridCard></GridCard>

        </div>
    );
}

export default Product;