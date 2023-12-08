import '../Components/sidebar.css'
import './track.css'
import ladle from "../assets/img/ladle.png";
import scrap from "../assets/img/scrap_pot.png";
import view from "../assets/img/view.png";
import history from "../assets/img/history.png";
import search from "../assets/img/search.png";
function Track(){
    return (
        <div className="track">
            <div className="track__header">
                <h4>Ladle/Scrap-pot Tracks</h4>
                <h5>Date: 24/11/2023</h5>
            </div>
            <div className="first_line">
                <div className="container">
                    <div className="con1" id="heading">MECHANICAL WORKSHOP</div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={ladle} alt="" className="ladle_img" height="30px"/>
                        <div>
                            <div className="ladle">ladle on site</div>
                            <div className="ladle_number">9</div>
                        </div>
                    </div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={scrap} alt="" className="ladle_img" height="25px"/>
                        <div>
                            <div className="ladle">Scrap-pot on site</div>
                            <div className="ladle_number">2</div>
                        </div> 
                    </div>
                    <hr />
                    <div className="con1" id="view">View</div>
                </div>
                <div className="container">
                    <div className="con1" id="heading">LADLE PREPARATION BAY</div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={ladle} alt="" className="ladle_img" height="30px"/>
                        <div>
                            <div className="ladle">ladle on site</div>
                            <div className="ladle_number">2</div>
                        </div>
                    </div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={scrap} alt="" className="ladle_img" height="25px"/>
                        <div>
                            <div className="ladle">Scrap-pot on site</div>
                            <div className="ladle_number">0</div>
                        </div> 
                    </div>
                    <hr />
                    <div className="con1" id="view">View</div>
                </div>
                <div className="container">
                    <div className="con1" id="heading">CONVERTOR UNIT</div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={ladle} alt="" className="ladle_img" height="30px"/>
                        <div>
                            <div className="ladle">ladle on site</div>
                            <div className="ladle_number">3</div>
                        </div>
                    </div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={scrap} alt="" className="ladle_img" height="25px"/>
                        <div>
                            <div className="ladle">Scrap-pot on site</div>
                            <div className="ladle_number">1</div>
                        </div> 
                    </div>
                    <hr />
                    <div className="con1" id="view">View</div>
                </div>
                <div className="container">
                    <div className="con1" id="heading">PRODUCTION UNIT</div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={ladle} alt="" className="ladle_img" height="30px"/>
                        <div>
                            <div className="ladle">ladle on site</div>
                            <div className="ladle_number">1</div>
                        </div>
                    </div>
                    <hr />
                    <div className="con" id="ladle_con">
                        <img src={scrap} alt="" className="ladle_img" height="25px"/>
                        <div>
                            <div className="ladle">Scrap-pot on site</div>
                            <div className="ladle_number">0</div>
                        </div> 
                    </div>
                    <hr />
                    <div className="con1" id="view">View</div>
                </div>
            </div>
            <div className="second_line">
                <div className="second_title" id='second_name'>Results</div>
                <div className="selected-unit" id='second_name'>Convertor Unit</div>
            </div>
            <div className='ladle_content'>
                <div className="ladle_line">
                    <img src={ladle} alt="img" height="30px"/>
                    <div className="ladle_name">ladle</div>
                </div>
                <div className="ladle_container">
                    <div className="ladle_no">
                        <div className="no">120</div>
                        <div className="no_name">ladle no</div>
                    </div>
                    <div className="ver"></div>
                    <div className="content">
                        <div className="content1">
                            <div className="view">
                                <div className="view_name">View</div>
                                <img src={view} alt="" height="20px"/>
                            </div>
                            <div className="ver1"></div>
                            <div className="history">
                                <div className="history_name">History</div>
                                <img src={history} alt="" height="20px"/>
                            </div>
                        </div>
                        <div id='ladle_horizon'></div>
                        <div className="content2">
                            <img src={search} alt="" height="25px"/>
                            <div className="track">Track</div>
                        </div>
                    </div>
                </div>
                <div className="ladle_container">
                    <div className="ladle_no">
                        <div className="no">12</div>
                        <div className="no_name">ladle No</div>
                    </div>
                    <div className="ver"></div>
                    <div className="content">
                        <div className="content1">
                            <div className="view">
                                <div className="view_name">View</div>
                                <img src={view} alt="" height="20px"/>
                            </div>
                            <div className="ver1"></div>
                            <div className="history">
                                <div className="history_name">History</div>
                                <img src={history} alt="" height="20px"/>
                            </div>
                        </div>
                        <div id='ladle_horizon'></div>
                        <div className="content2">
                            <img src={search} alt="" height="25px"/>
                            <div className="track">Track</div>
                        </div>
                    </div>
                </div>
                <div className="ladle_container">
                    <div className="ladle_no">
                        <div className="no">23</div>
                        <div className="no_name">ladle No</div>
                    </div>
                    <div className="ver"></div>
                    <div className="content">
                        <div className="content1">
                            <div className="view">
                                <div className="view_name">View</div>
                                <img src={view} alt="" height="20px"/>
                            </div>
                            <div className="ver1"></div>
                            <div className="history">
                                <div className="history_name">History</div>
                                <img src={history} alt="" height="20px"/>
                            </div>
                        </div>
                        <div id='ladle_horizon'></div>
                        <div className="content2">
                            <img src={search} alt="" height="25px"/>
                            <div className="track">Track</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ladle_content1'>
                <div className="ladle_line">
                    <img src={scrap} alt="img" height="25px"/>
                    <div className="ladle_name">Scrap-Pot</div>
                </div>
                <div className="ladle_container">
                    <div className="ladle_no">
                        <div className="no">2</div>
                        <div className="no_name">Scrap-pot No</div>
                    </div>
                    <div className="ver"></div>
                    <div className="content">
                        <div className="content1">
                            <div className="view">
                                <div className="view_name">View</div>
                                <img src={view} alt="" height="20px"/>
                            </div>
                            <div className="ver1"></div>
                            <div className="history">
                                <div className="history_name">History</div>
                                <img src={history} alt="" height="20px"/>
                            </div>
                        </div>
                        <div id='ladle_horizon'></div>
                        <div className="content2">
                            <img src={search} alt="" height="25px"/>
                            <div className="track">Track</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Track;