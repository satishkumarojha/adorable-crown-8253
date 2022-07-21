import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import { SiTwitter,SiInstagram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    const [lang, setLang] = useState("English");

    const onSelect = (e) =>{
        setLang(e.target.value);
    }

  return (
    <div className={styles.MainFooter}>
        <div className={styles.LeftFooter}>
             <div>
                <h1>Easy</h1>
                <h1 style={{color:"#006bff", marginTop:"-10px" }}>ahead</h1>
             </div>
             <div>
             <p>We take the work out of connecting with others so you can accomplish more.</p>
             </div>
             <div>
             <select value={lang} onChange={onSelect} className={styles.Select}>
                <option value="English">English</option>
                <option value="Francais">Francais</option>
                <option value="Deustch">Deustch</option>
                <option value="Portagues">Portagues</option>
             </select>
             </div>
             <div style={{display:"flex", gap:"20px", marginBottom:"20px"}}>
                <div>
                   <img src="https://assets-marketing-site.calendly.com/static/AppStore-15f01eefb2013206cc7e26d98fbe95fb.svg" alt="apple_logo" style={{cursor:"pointer"}} />                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1ANbjwIzvXX4YpXZT6Nt3TiRUsMlqrZ3xg&usqp=CAU" alt="google_play" width="135px"  style={{borderRadius:"5px",cursor:"pointer"}}/>
                </div>
             </div>
             <div style={{marginTop:"20px"}}>
               <SiTwitter style={{color:"#0b3558",width:"50px",height:"25px",cursor:"pointer"}}/>
                <FaFacebookF style={{color:"#0b3558",width:"50px",height:"25px",cursor:"pointer"}}/>
                <SiInstagram style={{color:"#0b3558",width:"50px",height:"25px",cursor:"pointer"}}/>
                <FaLinkedinIn style={{color:"#0b3558",width:"50px",height:"25px",cursor:"pointer"}}/>
                <FiYoutube style={{color:"#0b3558",width:"50px",height:"25px",cursor:"pointer"}}/>
             </div>
        </div>
        <div className={styles.RightFooter}>
            <div>
                <h3>About</h3>
                <Link to="#"><p>About Calendly</p></Link>
                <Link to="#"><p>Contact Sales</p></Link>
                <Link to="#"><p>Newsrooms</p></Link>
                <Link to="#"><p>Careers</p></Link>
                <Link to="#"><p>Security</p></Link>
            </div>
            <div>
            <h3>Solutions</h3>
                <Link to="#"><p>Customer Success</p></Link>
                <Link to="#"><p>Sales</p></Link>
                <Link to="#"><p>Recruiting</p></Link>
                <Link to="#"><p>Information Technology</p></Link>
                <Link to="#"><p>Marketing</p></Link>   
            </div>
            <div>
            <h3>Popular Features</h3>
                <Link to="#"><p>Embeded Calendly</p></Link>
                <Link to="#"><p>Availability</p></Link>
                <Link to="#"><p>Sending Notifications</p></Link>
                <Link to="#"><p>Using Calendly Mobile</p></Link>   
            </div>
            <div>
            <h3>Support</h3>
                <Link to="#"><p>Help Center</p></Link>
                <Link to="#"><p>Video Tutorials</p></Link>
                <Link to="#"><p>Cookie Settings</p></Link>    
            </div>
            <div>
            <h3>Add-Ons</h3>
                <Link to="#"><p>Download for Chrome</p></Link>
                <Link to="#"><p>Download for Firefox</p></Link>    
            </div>
            <div>
            <h3>Developers</h3>
            <Link to="#"><p>Developer Tools</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer