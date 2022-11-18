import React from 'react';
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../assets/images/contingency-images/404-not-found.webp"
import RestoreIcon from '@mui/icons-material/Restore';
import Button from '@mui/material/Button';
import './index.css'


function NotFound({ status }) {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <section className="not-found">
            <div className='container'>
                {status && <div className="no-product-alert">
                    <h3 className='apology'>Xin lỗi. Hiện chúng tôi chưa có sản phẩm máy tính bảng và laptop</h3>
                    <Button className='go-back-btn'
                        onClick={goBack}
                        style={{
                            color: '#ffffff',
                            backgroundColor: "#2e7d32",
                            margin: '0 auto',
                            display: "flex"
                        }}>
                        <RestoreIcon /> Quay lại
                    </Button>

                </div>}
                <div className="not-found-image">
                    <img src={NotFoundImg} alt={NotFoundImg} />
                </div>
            </div>
        </section>
    )
}

export default NotFound