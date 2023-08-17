import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {



    return (
        <div>
            <a href="/register">
                <button>Login as a HR Department</button></a>

            <a href="#">
                <button>Login as a Finance Department</button></a>
        </div>
    )
}

export default Home