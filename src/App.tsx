import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function App() {
    return (
        <div className="flex flex-col mx-auto dark:bg-gray-500 h-screen">
            <Navbar />
            <SideBar />
            {/* <LoginForm /> */}
        </div>
    )
}