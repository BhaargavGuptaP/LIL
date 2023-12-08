import "../Components/sidebar.css";
import Track from '../Pages/track';
function Sidebar() {
  return (
    <>
        <div className="sidebar">
            <div className="sidebar__logo">
                <a href="#">
                    <div className="title">Melt</div>
                    <div className="title" id="middle-title">O</div>
                    <div className="title">Vision</div>
                </a>
            </div>
            <div className="sidebar__menu">
                <ul>
                    <li>
                        <a href="#" className="item active">Ladle/Scrap-pot Tracks</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" className="item">Ladle/Scrap-pot List</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" className="item">Ladle/Scrap-pot History</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" className="item">Notification Alerts</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" className="item">Upload Schedule</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" className="item">Surviellance Feed</a>
                    </li>
                    <hr />
                    <hr className="logout_horizontal"/>
                    <div className="sidebar__logout">
                        <a href="#">Logout</a>
                    </div>
                </ul>
            </div>
        </div>
        
       <Track/>
        
    </>
  );
}
export default Sidebar;