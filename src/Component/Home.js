import React from "react";
import img1 from '../Assets/sv.jpeg';
import img2 from '../Assets/whatsapp.png';
import img3 from '../Assets/Om.png';
import img4 from '../Assets/vinayak.png';
import img5 from '../Assets/Omsymbol.png';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Home=()=>{
    return(
        <div className="App" style={{backgroundColor:'rgb(18, 47, 108)',color:'white'}}>
        <h3 style={{fontSize:'24px', letterSpacing:'0.2rem', padding:'2rem'}}>SRIVEERA.ORG</h3>
        <h3 style={{color:'orange', fontSize:'45px'}}>Inaugurating on 7th Dec 2022 Datta Jayanthi</h3>
        <div className="d-flex justify-content-center align-items-center relative mt-4">
        <img src={img4} style={{width:'12.5%',marginRight:'8rem', position:'absolute',left:'10rem'}}/>
        <h1 style={{fontSize:'100px',whiteSpace:'nowrap', fontWeight:'bold',letterSpacing:'0.4rem'}}>SriVeera <br/>Charitables</h1>
        <img src={img5} style={{width:'12.5%',marginRight:'8rem', position:'absolute',left:'72rem'}}/>
        </div>
        <div className="relative">
        <img src={img1} style={{width:'35%'}}/>
        <img src={img3} style={{width:'9%',position:'absolute',left:'8rem'}}/>
        <img src={img3} style={{width:'9%',position:'absolute',left:'8rem',bottom:'0'}}/>
        <img src={img3} style={{width:'9%',position:'absolute',left:'8rem',bottom:'-10rem'}}/>
        <img src={img3} style={{width:'9%',position:'absolute',right:'10rem'}}/>
        <img src={img3} style={{width:'9%',position:'absolute', bottom:'0',right:'10rem'}}/>
        <img src={img3} style={{width:'9%',position:'absolute',bottom:'-10rem',right:'10rem'}}/>
        </div>
        <h1 style={{fontSize:'74px',fontWeight:'bold', marginTop:'4rem'}}>
        శ్రీవీర ధార్మిక సంస్థలు
        </h1>
        <h4 style={{fontSize:'33px', fontWeight:'bold',marginTop:'3rem'}}>దత్తజయంతిని పురస్కరించుకొని ప్రారంభం...
</h4>
<div className="d-flex flex-row justify-content-center">
    <div className="d-flex flex-row align-items-center mt-4">
<LanguageIcon style={{color:'orange', position:'relative',marginBottom:'.5rem',marginRight:'.5rem'}}/>
<p style={{fontSize:'38px',fontWeight:'bold'}}>SriVeera.org</p>
</div>
<div className="d-flex flex-row align-items-center mt-4">
<MailOutlineIcon style={{color:'orange',position:'relative',marginBottom:'.5rem', marginLeft:'1.5rem',marginRight:'.5rem'}}/>
<p style={{fontSize:'38px', fontWeight:'bold'}}>info@SriVeera.org</p>
</div>
</div> 
    <div>
        <p style={{marginTop:'2rem', opacity:'0.7'}}>Welcome to SriVeera.org</p>
        </div>
    <div>
        <div className="d-flex flex-row justify-content-center">
            <p style={{fontSize:'26px', marginTop:'18rem',marginRight:'1.5rem' }}>Subscribe</p>
    <input placeholder="Email" style={{backgroundColor:'transparent', fontColor:'white', marginTop:'18rem', width:'50%'}}/>
    <button className="signup-btn" style={{marginLeft:'1.5rem'}}>Sign up</button>
    </div>
</div>
<div>
    <p style={{fontSize:'26px',marginTop:'6rem',fontFamily: 'Dancing Script',fontWeight:'bolder'}}>Contact us</p>
</div>
<div>
    <p style={{marginTop:'3rem', fontWeight:'bold', fontSize:'18px'}}>Better yet,see us in person!</p>
</div>
<div>
    <p style={{marginTop:'2rem',opacity:'.6',fontSize:'18px'}}>
        Feel free to contact us
    </p>
</div>
<div className="d-flex justify-content-center">
<div className="d-flex justify-content-center align-items-center" style={{fontWeight:'bold',border:'white',width:'18rem',height:'4rem',backgroundColor:'white',color:'black',alignSelf:'center',marginTop:'2rem'}}>
<img src={img2} style={{width:'10%', cursor:'pointer',marginRight:'0.5rem'}}/>
    <h6 style={{fontWeight:'bold', marginTop:'0.5rem'}}>Message us on WhatsApp</h6>
</div>
</div>
<div>
    <p style={{marginTop:'2rem', fontWeight:'bold',fontSize:'18px'}}>
        SriVeera.org
    </p>
</div>
<footer className="d-flex justify-content-center align-items-center" style={{backgroundColor:'black',height:'10rem',marginTop:'5rem'}}>
    <p style={{fontSize:'18px',opacity:'0.6', letterSpacing:'.1rem'}}>Copyright © 2022 SriVeera.org-All Rights Reserved.<hr style={{width:'12%',marginLeft:'13rem'}}/></p>
</footer>
</div>

    )
}
export default Home;