import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/login');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card className="shadow">
        <Card.Body className="text-center">
          <h2>404 - Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <Button variant="primary" onClick={handleRedirect}>
            Go to Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFoundPage;
