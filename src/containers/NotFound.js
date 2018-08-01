import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <section>
        <h2>Error - The page was not found</h2>

        <Link to="/">
            <Button color="primary" variant="contained">
                Back
            </Button>
        </Link>        
    </section>
);

export default NotFound;