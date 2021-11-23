import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';

const AppShell = (props) => {
    return (
        <>
            <Navbar />
            <main className="AppShell">
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default AppShell
