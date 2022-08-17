import Header from '../components/Header';

import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
