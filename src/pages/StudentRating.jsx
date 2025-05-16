import '../styles/StudentData.css'
import Menu from "../components/Menu";
import StudentData from "../components/StudentData";

const StudentRating = () => {
    return (
        <>
            <Menu></Menu>
             <main className="main-content StudentRating-content">
                <StudentData></StudentData>
            </main>
        </>
    )
}

export default StudentRating;