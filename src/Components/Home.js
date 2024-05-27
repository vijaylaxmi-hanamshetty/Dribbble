import React from "react";
import Marquee from "./Marquee";

const imageUrls = [
  
 "https://th.bing.com/th/id/OIP.h8mBs1MLmy9QtOxIwhWg9gAAAA?w=250&h=250&rs=1&pid=ImgDetMain",
 "https://static.wixstatic.com/media/2f6407_41acdaeceec74be1948b25c7f2bbe449~mv2_d_2672_4000_s_4_2.jpg/v1/crop/x_454,y_519,w_1926,h_2616/fill/w_178,h_242,al_c,q_80,usm_0.66_1.00_0.01/Michelle2_selected.jpg",
 "https://designimages.appypie.com/displaypicture/displaypicture-28-face-person.jpg",
 "https://www.productmarketingalliance.com/content/images/size/w300/2021/10/Stephanie-Perezo.jpg",
 "https://www.ismilestudio.com.au/wp-content/uploads/2020/04/Sarah-iSmile-20-01-0928-350.jpg",
 "https://nccppr.org/wp-content/uploads/2018/04/bestone-3-400x400.jpg",
 "https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_face%2Cq_auto:good%2Cw_640/MTY3NTM5MzU3NDc2NjYxMTM0/maylan-studart.jpg",
 "https://media.licdn.com/dms/image/C5603AQFy9BVKeUe_5w/profile-displayphoto-shrink_800_800/0/1566923794425?e=2147483647&v=beta&t=1HwNwkaXizNMOj4Lekmbibza2zNAqfbqM_C99gW5ehA",
 "https://th.bing.com/th/id/OIP.h8mBs1MLmy9QtOxIwhWg9gAAAA?w=250&h=250&rs=1&pid=ImgDetMain",
 "https://static.wixstatic.com/media/2f6407_41acdaeceec74be1948b25c7f2bbe449~mv2_d_2672_4000_s_4_2.jpg/v1/crop/x_454,y_519,w_1926,h_2616/fill/w_178,h_242,al_c,q_80,usm_0.66_1.00_0.01/Michelle2_selected.jpg",
 "https://designimages.appypie.com/displaypicture/displaypicture-28-face-person.jpg",
 "https://www.productmarketingalliance.com/content/images/size/w300/2021/10/Stephanie-Perezo.jpg",
 "https://www.ismilestudio.com.au/wp-content/uploads/2020/04/Sarah-iSmile-20-01-0928-350.jpg",
 "https://nccppr.org/wp-content/uploads/2018/04/bestone-3-400x400.jpg",
];

const Home = () => {
  return (
    <div className="">
      <Marquee>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            className="inline-block rounded-xl mx-2 h-64 w-64"
            src={url}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Home;
