import "./css/home.css";

function Home() {
    return (
        <div className="containerHome">
            <div className="button-container">
                <a href="/login" className="button">
                    Login
                </a>

                <a href="/register" className="button">
                    Register
                </a>
            </div>
        </div>
    );
}

export default Home;
