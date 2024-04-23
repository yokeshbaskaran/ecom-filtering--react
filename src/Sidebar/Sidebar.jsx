import "./Sidebar.css";
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

function Sidebar({ handleChange }) {

    return (
        <section className="sidebar">
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
        </section>
    )
}

export default Sidebar;