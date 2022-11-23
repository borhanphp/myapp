import { useState } from 'react';
import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API, DOMAIN_IP, IMG_API } from '../../config';

const SearchCard = ({ blog, clearN }) => {
    


    const monthNames = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন","জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বার", "ডিসেম্বর"];
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const bdate=["০","০১","০২","০৩","০৪","০৫","০৬","০৭","০৮","০৯","১০","১১","১২","১৩","১৪","১৫","১৬","১৭","১৮","১৯","২০","২১","২২","২৩","২৪","২৫","২৬","২৭","২৮","২৯","৩০","৩১"];
    
    const entob = (input) => {
        const bnumbers =["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
        var output = [];
        for (var i = 0; i < input.length; ++i) {
            if (bnumbers[input[i]]) {
            output.push(bnumbers[input[i]]);
            } else {
            output.push(input[i]);
            }
        }
        return output.join('');
    };
    
    let today = new Date(blog.updatedAt);
    let date =''+''+ monthNames[(today.getMonth())] +' '+ bdate[(today.getDate())]+','+' '+ entob((today.getFullYear().toString()));
    let dayName = days[today.getDay()];

    const clearS = () => {
        clearN();
    }

    return (
        <>
            <div className='row mx-0 mb-2 border border-secondary mb-2'>
               <div className='col-lg-4'>
                    <img src={`${IMG_API}/${blog?.photo}`} className='w-100 py-2 h-100'/>
                </div>
                <div className='col-lg-8 row'>
                    <div className='col-lg-12'>
                        <Link href={`/${blog.slug}`}>
                            <a className='text-start'>
                                <h3 className="pt-2" style={{
                                    fontWeight: "600",
                                    fontSize: "30px"
                                }} onClick={clearS}>{blog.title}</h3>
                            </a>
                        </Link>
                    </div>
                    <div className='col-lg-12'>
                        <div className="pb-2 text-start text-muted">{renderHTML(blog.excerpt.substring(0, 200))}...</div>
                        <div className='pb-2 text-muted'>{dayName}, {date}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchCard;
