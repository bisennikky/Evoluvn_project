import React from 'react';
import img1 from '../imgs/img1.jpg';
import img2 from '../imgs/img2.jpg';
import img3 from '../imgs/img3.jpg';
import img4 from '../imgs/img4.jpg';
import img5 from '../imgs/img5.jpg';
import img6 from '../imgs/img6.jpg';
import img7 from '../imgs/img7.png';
import img8 from '../imgs/img8.jpg';


const Dashboard = () => {
    return (
      <>

{/* div1 for github */}
       <h1 className='img1_heading'>Profiles</h1>
    <div className='Main_div'>
      <h5 className='profile_title'>Social Media</h5>
    <div className='div_1'>
      <div className='div_2'>
        <a href="https://github.com/bisennikky">
        <img className='img1' src={img2} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://github.com/bisennikky">
            <img className="github" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" alt="" />
            </a>
        <h3>@bisennikky</h3>
            <p>Projects: 25+</p>
            <p>Tech Stack:Frontend</p>
            <p>Status: Active</p>
        </div>
      </div>

{/* div2 for linkedin */}

<div className='div_2'>
      <a href="https://www.linkedin.com/in/nikky-bisen-4a609115a/">
        <img className='img1' src={img3} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://www.linkedin.com/in/nikky-bisen-4a609115a/">
        <img className="Linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="insta" />
            </a>
        <h3>@nk_bisen</h3>
            <p>Tech Stack:Frontend </p>
            <p>Connection: 195+</p>
            <p>Status: Active</p>
        </div>
      </div>
      

{/* instagram  */}

      <div className='div_2'>
      <a href="https://www.instagram.com/nk_bisen/">
        <img className='img1' src={img1} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://www.instagram.com/nk_bisen/">
        <img className="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="insta" />
            </a>
        <h3>@nk_bisen</h3>
            <p>Articles:CosmologyFacts</p>
            <p>Followers:527+</p>
            <p>Status: Active</p>
        </div>
      </div>


{/* div4 for facebook */}
      <div className='div_2'>
      <a href="https://www.facebook.com/nk.bisane/">
        <img className='img1' src={img4} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://www.facebook.com/nk.bisane/">
        <img className="Facebook" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
            </a>
        <h3>@nkbisen</h3>
            <p>Friends: 1.5k+</p>
            <p>Status: Active</p>
        </div>
      </div>
  </div>


  {/* div5 for Twitter */}
  <div className='div_1'>
      <div className='div_2'>
      <a href="https://twitter.com/LaxmanNikky">
        <img className='img1' src={img5} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://twitter.com/LaxmanNikky">
        <img className="twitter" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" />
            </a>
        <h3>@LaxmanNikky</h3>
            <p>Friend: 10+</p>
            <p>Status: Active</p>
        </div>
      </div>


    {/* div6 for instagram */}
      <div className='div_2'>
      <a href="https://www.instagram.com/cosmology_0/">
        <img className='img1' src={img6} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://www.instagram.com/cosmology_0/">
        <img className="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="insta" />
            </a>
        <h3>@cosmology_0</h3>
            <p>Articles:CosmologyFacts</p>
            <p>Followers:300+</p>
            <p>Status: Active</p>
        </div>
      </div>


    {/* div7 for Email */}


      <div className='div_2'>
      <a href="https://www.instagram.com/nk_bisen/">
        <img className='img1' src={img7} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://www.instagram.com/nk_bisen/">
        <img className="email" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" />
            </a>
        <h3>Gmail</h3>
            <p>nkbisane@gmail.com</p>
            <p>Status: Active</p>
        </div>
      </div>

{/* div8 for leetcode */}

      <div className='div_2'>
      <a href="https://leetcode.com/nk_bisen/">
        <img className='img1' src={img8} alt="Click"/>
        </a>
        <div className='img1_info'>
            <a href="https://leetcode.com/nk_bisen/">
        <img className="instagram" src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="" />
            </a>
        <h3>@nk_bisen</h3>
            <p>problem solve Easy level</p>
            <p>Status: Active</p>
        </div>
      </div>
  </div>
 </div>
      </>
       
    );
};

export default Dashboard;