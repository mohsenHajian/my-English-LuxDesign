import React from 'react';
import Admin from '.';
import ProductList from './ProductList';

const AdminLayout = () => {
    return (
        <Admin>
            <Routes>
                <Route path='/admin' element={<ProductList />} />
            </Routes>
        </Admin>
    );
}

export default AdminLayout;