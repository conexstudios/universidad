import '../styles/Subject.css'
import Menu from "../components/Menu";
import Subject from "../components/Subject";

const ChooseSubject = () => {
    return (
        <>
        <Menu />
        <main className="main-content ChooseSubject-content">
            <Subject />
            </main>
        </>
    )
}

export default ChooseSubject;