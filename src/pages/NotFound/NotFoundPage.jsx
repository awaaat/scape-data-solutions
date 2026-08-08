import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1rem' }}>
            <Helmet>
                <title>Page Not Found</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Link to="/" style={{ textDecoration: 'underline' }}>
                Return to homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;
