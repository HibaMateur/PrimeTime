import React,{useState,useEffect} from 'react'
import {Container} from 'reactstrap'
const ProfileSection = () => {
    const [sideSection, setSideSection] = useState(true);

    const removeSection = () => {
        setSideSection(false)
        document.getElementById('profile-section').classList.remove('d-block');
    }
    const [user,setUser]=useState({firstName:"",lastName:""});
    const[imgsrc,setImgsrc]=useState("");
   useEffect(() => {
    
    setUser(JSON.parse(localStorage.getItem("user")))
    
    
  }, []);
  useEffect(()=>{
    console.log(user)
      if (user)
    setImgsrc("images/users/"+user["firstName"]+user["lastName"]+".jpg");

  },[user])
    return(
        <div className="music side-section" id="profile-section">
            <div aria-label="media player" className="jp-audio" id="jp_container_1_1" role="application">
                <div className="jp-type-playlist">
                    <div className="jp-gui jp-interface">
                        <div className="side-player">
                            <div className="text-center">
                                <div className="gradient-block">
                                    <div className="animation-circle-inverse">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <h6 className="now-play">Profile</h6>
                                </div>
                                <img alt="" className="img-fluid girls" src={imgsrc} />
                                <div className="author-text">
                                    <h5 className="song-text">{user?(user["firstName"]):null} {user?(user["lastName"]):null}</h5>
                                    <h6 className="song-sub-text">Zrial doj</h6>
                                </div>
                            </div>
                            <Container>
                                <div className="jp-progress">
                                    <div className="jp-seek-bar">
                                        <div className="jp-play-bar"></div>
                                    </div>
                                </div>
                                <div className="jp-time-holder">
                                    <div aria-label="time" className="jp-current-time" role="timer">&nbsp;</div>
                                    <div aria-label="duration" className="jp-duration" role="timer">&nbsp;</div>
                                </div>
                                <div className="jp-controls">
                                    <div className="button-container">
                                        <button className="jp-previous" role="button" tabIndex="0"></button>
                                        <button className="jp-play" role="button" tabIndex="0"></button>
                                        <button className="jp-next" role="button" tabIndex="0"></button>
                                    </div>
                                    <button className="btn-sidebar" onClick={removeSection}>
                                        <i aria-hidden="true" className="fa fa-times"></i>
                                    </button>
                                </div>
                                <div className="jp-playlist">
                                    <ul>
                                        <li>&nbsp;</li>
                                    </ul>
                                </div>
                            </Container>
                            <div className="jp-no-solution">
                                <span>Update Required</span>
                                To play the media you will need to either update your browser to a recent version or update your
                            <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileSection;