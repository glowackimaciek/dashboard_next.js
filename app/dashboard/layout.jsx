import Sidebar from "@/app/ui/sidebar/page"
import Navbar from "@/app/ui/navbar/page"

const Layout = ({children}) => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout