import React, { useState } from 'react';
import { Pagination, Row, Col, Card,Image } from 'antd';
import galleryData from '../data/galleryData';

const { Meta } = Card;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of items per page

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = galleryData.slice(startIndex, endIndex);

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {currentData.map(item => (
          <Col xs={24} sm={12} md={8} lg={8} key={item.id}>
            <Card
              hoverable
              cover={<Image alt={item.title} src={item.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />}
            >
              <Meta title={item.title} />
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={galleryData.length}
        onChange={handleChangePage}
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
    </div>
  );
};

export default Gallery;
