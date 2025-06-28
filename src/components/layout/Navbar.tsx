import { Link } from "react-router"
import { ModeToggle } from "../mode-toggler"


const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex ju items-center justify-between gap-3 px-5 ">
            <div className="flex items-center">
                <span className="font-bold ml-2">Task</span>Master
            </div>
                <Link to="/tasks">Tasks</Link>
                <Link to="/user">Users</Link>
            <div className="ml-auto">
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    )
}

export default Navbar