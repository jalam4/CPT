import React from "react";
import "./Navbar.css";
import optumLogo from "../asset/images/optumLogo.png";
const NavBar = () => {
    return (
        <div>
            {/* navbar start */}
            <div>
            
                <nav className="navbar navbar-expand-lg" style={{position: "relative", width: "100%", marginLeft:"45px", top: "0px", zIndex: "99"}}>
                
                <a className="navbar-brand nav-title" href="#" style={{ position: "fixed", left: "40px", width:'20%'}}>
                        <div style={{ /*borderRight: "1px solid #fa600d91"*/ paddingRight: "10px", paddingLeft: "15px",   width: "100px",    height: "28px" }}><img src={optumLogo} alt="" /></div>
                        <div className = "Capcity-Planning-Tool" style={{ display: "block", paddingLeft: "14.5px", color:"#002677 !important", fontSize: "21px"  }}>Capacity Planning Tool</div>
                    </a>

                    <div className="collapse navbar-collapse">
                    </div>
                </nav>
            </div>

           
            {/* navbar end */}
            
        </div>
    );
};

export default NavBar;