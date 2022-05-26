import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

function Layout() {
    return (
        <>
            <div className="flex flex-col mx-auto">
                <Navbar />
                <div className='container items-center'>
                    <SideBar />
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Layout