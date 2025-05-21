import '../styles/AddressData.css';
import Menu from "../components/Menu";
import Bar  from "../components/Bar";
import AddressData from "../components/AddressData";

const Address = () => {
  return (
    <>
      <Menu></Menu>
      <Bar></Bar>
      <main className="main-content Address-content">
         <AddressData></AddressData>
      </main>
    </>
  );
};

export default Address;