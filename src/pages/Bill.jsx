import '../styles/InvoiceDetails.css';
import '../styles/Receipt.css';
import Menu from "../components/Menu";
import Receipt from "../components/Receipt";
import InvoiceDetails from "../components/InvoiceDetails";

const Bill = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content bill-content">
          <Receipt></Receipt>
          <InvoiceDetails></InvoiceDetails>
      </main>
    </>
  );
};

export default Bill;