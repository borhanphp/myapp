import React, {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import { SearchContext } from '../service/SearchContext';
import FrontPage from '../components/frontend/Frontpage';

const Index = ({ router }) => {
  const head = () => (
    <Head>
        <title>{APP_NAME}</title>
        <meta
            name="description"
            content="Daily digital news and article"
        />
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
        <meta property="og:title" content={`Latest digital news and article for | ${APP_NAME}`} />
        <meta
            property="og:description"
            content="Newyork News"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${DOMAIN}/public/digitalnews.png`} />
        <meta property="og:image:secure_url" content={`${DOMAIN}/public/digitalnews.png`} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );


const hideview = useContext(SearchContext);

const frontPage = () => {
  return (
    <>
     { hideview === true ? "" : <FrontPage {...{ router }} /> }
    </>
  );
}

const [loading, setLoading] = useState(true);
useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 100);
} , []);




  return ( 
    <>
    {head()}
    
    { loading ? '' : frontPage() }
   
    </>
    
  )
};

  
export default withRouter(Index);