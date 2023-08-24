import "./css/home.css";

function Home() {
    return (
        <div className="containerHome">
            <div className="button-container">
                <a href="/register" className="button">
                    Login as HR Department
                </a>

                <a href="registerEmployee" className="button">
                    Login as Employee
                </a>
            </div>
        </div>
    );
}

export default Home;
