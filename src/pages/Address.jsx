import '../styles/AddressData.css';
import Menu from "../components/Menu";
import AddressData from "../components/AddressData";

const Address = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content Address-content">
         <AddressData></AddressData>
      </main>
    </>
  );
};

export default Address;