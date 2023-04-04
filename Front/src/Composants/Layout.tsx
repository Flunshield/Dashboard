import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <body className="flex-1 py-6 px-4">
                {children}
            </body>
            <Footer />
        </div>
    );
};

export default Layout;
