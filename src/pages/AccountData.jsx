import '../styles/Account.css'
import Menu from "../components/Menu";
import Barra from "../components/Barra";
import Account from "../components/Account";

const AccountData = () => {
    return (
        <>
            <Menu />
            <Barra />
            <main className="main-content Barra-content">
                <Account />
            </main>
        </>
    );
};

export default AccountData;
