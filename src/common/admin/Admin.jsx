import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import './admin.style.scss'


const Admin = ({ children }) => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="admin d-flex flex-column">
            <header className="admin-header d-flex justify-content-between py-4">
                <div className="admin-header-title d-flex align-items-center gap-3">
                    <div className="admin-header-title-icon">
                        <Icon icon="eva:menu-fill" color="#eee" width='25px' cursor='pointer' onClick={() => setShowMenu(!showMenu)} />
                    </div>
                    <span>داشبورد لوکس دیزاین</span>
                </div>
                <div className="admin-profile-header d-flex align-items-center gap-2">
                    <Icon icon="bi:person-fill" color="#eee" width="25" />
                    <span>mohsen</span>
                    <Icon icon="gridicons:dropdown" color="#eee" width="25" />
                </div>
            </header>
            <div className="d-flex">
                {showMenu ? (
                    <div className="mini-menu-bg">
                        <aside className='mini-menu d-flex flex-column gap-3'>
                            <button className="d-flex gap-2 py-3 aside-item" onClick={() => navigate('/admin/products')}>
                                <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                                <span>محصولات</span>
                            </button>
                            <button className="d-flex gap-2 py-3 aside-item" onClick={() => navigate('/admin/orders')}>
                                <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                                <span>سفارشات</span>
                            </button>
                            <button className="d-flex gap-2 py-3 aside-item">
                                <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                                <span>محصولات</span>
                            </button>
                            <button className="d-flex gap-2 py-3 aside-item">
                                <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                                <span>محصولات</span>
                            </button>
                            <button className="d-flex gap-2 py-3 aside-item">
                                <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                                <span>محصولات</span>
                            </button>
                        </aside>
                    </div>
                ) : null}
                <aside className='admin-aside d-flex flex-column gap-3'>
                    <button className="d-flex gap-2 py-3 aside-item" onClick={() => navigate('/admin/products')}>
                        <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                        <span>محصولات</span>
                    </button>
                    <button className="d-flex gap-2 py-3 aside-item" onClick={() => navigate('/admin/orders')}>
                        <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                        <span>سفارشات</span>
                    </button>
                    <button className="d-flex gap-2 py-3 aside-item">
                        <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                        <span>محصولات</span>
                    </button>
                    <button className="d-flex gap-2 py-3 aside-item">
                        <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                        <span>محصولات</span>
                    </button>
                    <button className="d-flex gap-2 py-3 aside-item">
                        <Icon icon="icon-park-outline:clothes-sweater" color="#dbdbdb" width="25" />
                        <span>محصولات</span>
                    </button>
                </aside>

                <Outlet />

            </div>
        </div>
    );
}

export default Admin;