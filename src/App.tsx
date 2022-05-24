import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="flex flex-col mx-auto dark:bg-gray-500 h-screen">
            <Navbar />
            <LoginForm />
        </div>
    )
}