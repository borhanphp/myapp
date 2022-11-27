import styles from '../../styles/Layout.module.css'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import SquareIcon from '@mui/icons-material/Square';
import Link from 'next/link';
import Marquee from "react-fast-marquee";

const Scrollbar = () => {
    
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        console.log(API)
        fetch(`${API}/scroll`).then((res)=>{return res.json()}).then((data)=>{setLastNews(data)})}, []); 
  return (
    <div className='container px-0'>
       <div className={"scrolling-wrapper "+styles.bigscroll}>
            <div className="scroll-title">
                <span className="intro-banner-vdo-play-btn pinkBg">
					<span className="ripple pinkBg"></span>
					<span className="ripple pinkBg"></span>
					<span className="ripple pinkBg"></span>
                </span>
                <h2>Headline</h2>
            </div>
            <div className="scrolling bg-white">
                <Marquee pauseOnHover={true} gradient={false} speed={40} className="bg-white fw-bold pt-1"> 
                    {lastNews && lastNews.slice(0, 5).map((last, index) =>
                        <Link href={`/blogs/${last?.slug}`} key={index}>
                            <span className={styles.text_style} ><SquareIcon fontSize='small'/>&nbsp;{last?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </Link>
                    )}
                  
                </Marquee> 
            </div>
        </div>
		<div className={styles.smallscroll} style={{margin: "12px 17px"}}>
            <div className="row">
                <div className="col-3 col-sm-2 col-md-1 bg-dark">
				
                    <h6 className="text-white fw-bold pt-2 position-relative"> <span className="intro-banner-vdo-play-btn pinkBg">
					<span className="ripple pinkBg"></span>
					<span className="ripple pinkBg"></span>
					<span className="ripple pinkBg"></span>
                </span> শিরোনাম</h6>
                </div>

                <div className="col-9 col-sm-10 col-md-11 bg-danger">
                    <marquee className="bg-white fw-bold pt-0">
                        {lastNews && lastNews.slice(0, 5).map((last, i) =>
                            <Link href={`/blogs/${last?.slug}`} key={i}>
                                <span style={{cursor: "pointer"}} ><SquareIcon fontSize='small'/>&nbsp;{last?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </Link>
                        )}
                    </marquee>  
                </div>
            </div>
        </div>
    </div>
  );
};

export default Scrollbar;
