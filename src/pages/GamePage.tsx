import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  max-height: 932px;
  max-width: 480px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  cursor: pointer; /* 클릭 가능 표시 */
`;

const GamePage = () => {
  const navigate = useNavigate();
  const images = [
    'https://private-user-images.githubusercontent.com/102893954/403512534-8287b2fb-1a01-4d2b-a5be-88a07d4b1ae5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc2NjgwMjgsIm5iZiI6MTczNzY2NzcyOCwicGF0aCI6Ii8xMDI4OTM5NTQvNDAzNTEyNTM0LTgyODdiMmZiLTFhMDEtNGQyYi1hNWJlLTg4YTA3ZDRiMWFlNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyM1QyMTI4NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NzZjMThhZmZhODFiMDk0ZGIzMDBlZWY4MmEyN2U5Y2ExZDgzYjY3ZTY2MmQzN2NiMjY1MjM2MTdlNzFmNzY1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7S_zhSS_X6CrnhZ0Bb6jhYVXf13CRJBdQ0_TDgHrVkA', // 첫 번째 이미지
    'https://private-user-images.githubusercontent.com/102893954/403512609-abb38035-7ad7-4f7c-8dc7-35104caf8778.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc2NjgwMjgsIm5iZiI6MTczNzY2NzcyOCwicGF0aCI6Ii8xMDI4OTM5NTQvNDAzNTEyNjA5LWFiYjM4MDM1LTdhZDctNGY3Yy04ZGM3LTM1MTA0Y2FmODc3OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyM1QyMTI4NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZWY0ODllNDRkZWE2NTU4MDFiMzlmNjU4OGM5ZTc4NTFmNzE0MmZmODBkZWQ5OTBjZmIwMjBkNzA2ODU1MTdlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.tCNcW1PQrO0fYhRlzpjMjqOKO_i-BTGxs6J_CoGKzHg', // 두 번째 이미지
    'https://private-user-images.githubusercontent.com/102893954/403513457-e91e59ac-082d-44de-946a-f633b95caff5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc2NjgwMjgsIm5iZiI6MTczNzY2NzcyOCwicGF0aCI6Ii8xMDI4OTM5NTQvNDAzNTEzNDU3LWU5MWU1OWFjLTA4MmQtNDRkZS05NDZhLWY2MzNiOTVjYWZmNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyM1QyMTI4NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MjE1MDMxMDFiOThkYmE5ZTI5Yjc5ZjU5MjEwYjI2NTc4ZWFlYmYyYzMxNWQzZjc5ZTI4NzlmMGRlODkyMTc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.JrQYYtQIkfnOKcYvRLaInLATc4w_j45KkZ430DCwQY8', // 세 번째 이미지
    'https://private-user-images.githubusercontent.com/102893954/403512794-c87baca6-5618-4c9e-978d-7680910c1343.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc2NjgwMjgsIm5iZiI6MTczNzY2NzcyOCwicGF0aCI6Ii8xMDI4OTM5NTQvNDAzNTEyNzk0LWM4N2JhY2E2LTU2MTgtNGM5ZS05NzhkLTc2ODA5MTBjMTM0My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyM1QyMTI4NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMTYyYTAwYzI1ZjIxMmU0MmU3NDc1NDMyNzQ4MjAyNjI1NDllZjNmMTAxZDM3MjBhYzhhYTdhNDY3MjJhMzQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.eIsKB25mJF2eGYeEBi5wNKN_HN7dxxJnNE_3ADCZIkU', // 네 번째 이미지
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    if (currentImageIndex < images.length - 1) {
      // 다음 이미지로 이동
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // 마지막 이미지 클릭 시 /matching으로 이동
      navigate('/matching');
    }
  };

  return (
    <Container>
      <FullscreenImage
        src={images[currentImageIndex]}
        alt={`Step ${currentImageIndex + 1}`}
        onClick={handleImageClick}
      />
    </Container>
  );
};

export default GamePage;
