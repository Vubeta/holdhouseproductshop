import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container">
                {/*Top Section*/}
                <div className="row text-center py-3">
                    <div className="col-md-4">
                        <h5>Gọi mua hàng (08:30-18:00)</h5>
                        <p><i className="fas fa-phone"></i> 0912241237</p>
                        <p>Tất cả các ngày trong tuần</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Góp ý, khiếu nại (08:30-20:30)</h5>
                        <p><i className="fas fa-phone"></i> 0912241237</p>
                        <p>Các ngày trong tuần (trừ ngày lễ)</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Đăng ký nhận thông tin mới</h5>
                        <form className="d-flex">
                            <input type="email" className="form-control" placeholder="Nhập email của bạn" />
                            <button type="submit" className="btn btn-dark">Đăng ký</button>
                        </form>
                        <div className="mt-3">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-zalo"></i></a>
                        </div>
                    </div>
                </div>

                {/*Footer Section*/}
                <div className="row text-center py-5 bg-light">
                    <div className="col-md-3">
                        <h5>Hỗ trợ khách hàng</h5>
                        <p>CÔNG TY TNHH GIA DỤNG NHANH</p>
                        <p>Địa chỉ: 343E/17 - 18 Lạc Long Quân, Phường 5, Quận 11, TP. Hồ Chí Minh</p>
                        <p>Hotline: (+849) 1224 1237</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Về chúng tôi</h5>
                        <ul className="list-unstyled">
                            <li>Chính sách bảo mật</li>
                            <li>Chính sách thanh toán</li>
                            <li>Chính sách giao nhận</li>
                            <li>Chính sách đổi trả</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Hệ thống cửa hàng</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Zalo</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Fanpage chúng tôi</h5>
                        {/*Fanpage content*/}
                        <img src="fanpage-image.jpg" alt="Fanpage" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/*Social Media Buttons (Right Side)*/}
            <div className="position-fixed" style={{ top: '50%', right: '10px' }}>
                <a href="#" className="btn btn-danger mb-2"><i className="fas fa-phone"></i></a>
                <a href="#" className="btn btn-primary mb-2"><i className="fab fa-facebook-messenger"></i></a>
                <a href="#" className="btn btn-info"><i className="fab fa-zalo"></i></a>
            </div>
        </div>
    );
}

export default Footer;
