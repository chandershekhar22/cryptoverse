import React from 'react';
import { Typography, Row, Col, Avatar, Card } from "antd";
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;

const News = ({ simplified }) => { 
 
  const { data: cryptoNews, error, isLoading } = useGetCryptoNewsQuery();
 
  // Log to inspect each news item
 // console.log("cryptoNews", cryptoNews);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news: {error.message}</div>;

  const newsItems = cryptoNews.data || cryptoNews.articles || cryptoNews; // Adjust based on your API response

  if (!newsItems || !Array.isArray(newsItems) || newsItems.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <Row gutter={[24, 24]}>
      {newsItems.slice(0, simplified ? 10 : newsItems.length).map((newsItem, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{newsItem.title}</Title>
                {/* Check if newsItem has a valid image URL */}
                <img 
                  src={newsItem.image || newsItem.thumbnail || 'https://via.placeholder.com/150'} 
                  alt={newsItem.title || 'news'} 
                  style={{ maxWidth: '100px', maxHeight: '100px' }} 
                />
              </div>
              <p>
                {newsItem.description && newsItem.description.length > 100
                  ? `${newsItem.description.substring(0, 100)}...`
                  : newsItem.description}
              </p>
              <div className="provider-container">
                
                <Text className="provider-name">{newsItem.provider}</Text>
              </div>
              <Text>{moment(newsItem.datePublished).startOf('hour').fromNow()}</Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
