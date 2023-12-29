import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Acceuil/Navbar'

import Footer from '../../Acceuil/Footer'
import Card from '../../../components/Product/Card'

import logo1 from '../../../images/Products/xv-logo.png'
import btl1 from '../../../images/Products/bottle.png'

import logo2 from '../../../images/Products/logo2.png'
import btl2 from '../../../images/Products/btl2.png'

import logo3 from '../../../images/Products/logo3.png'
import btl3 from '../../../images/Products/btl3.png'

import logo4 from '../../../images/Products/logo4.png'
import btl4 from '../../../images/Products/btl4.png'

import logo5 from '../../../images/Products/logo5.png'
import btl5 from '../../../images/Products/btl5.png'

import logo6 from '../../../images/Products/logo6.png'
import btl6 from '../../../images/Products/btl6.png'

import logo7 from '../../../images/Products/logo7.png'
import btl7 from '../../../images/Products/btl7.png'
import { useTranslation } from 'react-i18next'
import triangle from '../../../images/Products/triangle.svg'

function RhumUne() {
  const [show,setShow]=useState(false)
  const[gamme,setGamme]=useState(false)
 
  const Gamme=()=>{
      setGamme(!gamme);
  } 
  const {t}=useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
    <div className='container'>

 <Navbar show={show} setShow={setShow}/>
 {!show && <div>
<div className='Psection1'>
<div> 
               <h1>{t("1.nos")}</h1>
               <h2>{t("1.produits")}</h2>
               <h3 className='titre-gamme'>{t("3.text6")}</h3>
           </div>
           <div>
           <div className='gamme' onClick={Gamme}>{t("3.text1")}
                    <img src={triangle}/>
                    </div>
               {gamme &&
               <ul className='ul-gamme'>
                   <li><Link to="/RhumUne" className='ul-gamme-a'>{t("3.text6")}</Link></li>
                   <li><Link to="/RhumVieux"  className='ul-gamme-a'>{t("3.text2")}</Link></li>
                        <li> <Link to="/RhumAmbre" className='ul-gamme-a'>{t("3.text3")}</Link></li>
                        <li> <Link to="/RhumBlanc" className='ul-gamme-a'>{t("3.text4")}</Link></li>
                        <li><Link to="/VieuxRhum" className='ul-gamme-a'>{t("3.text5")}</Link> </li>
                      
               </ul>
               }
           </div>
</div>

          <div className='Psection2'>
                    <div className='carte'>
                        <Card logo={logo1} 
                       text={t("3.text7")} 
                       text2={t("3.text8")}  img={btl1}  
                          linkTo='/DzamarhumXV'
                          showbutton={true}
                          />
                    </div>

                    <div className='carte2'>
                        <Card logo={logo2}
                         text={t("3.text9")}  img={btl2} 
                        linkTo='/VanillaDzamaRhum'
                        showbutton={true}
                        />
                    </div>
                    
                    <div className='carte3'>
                    <Card logo={logo3}text={t("3.text10")} 
                    text2={t("3.text11")} img={btl3} 
                    linkTo='/CuveeBlanche'
                    showbutton={true}
                    />
                </div>

                <div className='carte4'>
                    <Card logo={logo4} text={t("3.text12")} 
                    text2={t("3.text13")}img={btl4} 
                    linkTo='/CuveeNoir'
                    showbutton={true}
                    />
                </div>

                <div className='carte5'>
                    <Card logo={logo5} text={t("3.text14")} 
                    text2={t("3.text15")} img={btl5} 
                    linkTo='/VieuxRhum5'
                    showbutton={true}
                    />
                </div>

                <div className='carte6'>
                    <Card logo={logo6} text={t("3.text16")} 
                    text2={t("3.text17")} img={btl6}
                    linkTo='/VieuxRhum8'
                    showbutton={true} />
                </div>

                <div className='carte7'>
                    <Card logo={logo7} text={t("3.text18")} 
                    text2={t("3.text19")} 
                    text3={t("3.text20")}  img={btl7}
                    linkTo='/VanillaDzama'
                    showbutton={true}
                   />
                </div>
          </div>
          <Footer/></div>}
    
    </div>
    </>
  )
}

export default RhumUne