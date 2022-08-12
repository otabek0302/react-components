import React from "react";
import './Content_Blog.css'
import ItemsBlog from "./Item/ItemsBlog";
const ContentBlog = () => {
     return (
          <div className="blog_content">
               <div className="blog_content_wrapper">
                    <div className="blog_content_butons">
                         <a href="#" dataBtn="btn all" className="btn active">All</a>
                         <a href="#" dataBtn="btn news" className="btn ">News</a>
                         <a href="#" dataBtn="btn article" className="btn ">Aricles</a>
                         <a href="#" dataBtn="btn stories" className="btn ">Stories</a>
                    </div>
                    <ul className="blog_content_list">
                         <ItemsBlog
                              users={ 
                                   [{
                                        name: 'Otabek',
                                        proffesion: 'Web Developer',
                                        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                                   }]
                              }
                              title={"Vox The best movies of 2022 so far, ranked, and how to watch - Vox"}
                              time={3}
                              img={"https://cdn.vox-cdn.com/thumbor/ellakluEktxzQPNG0xLmgWIHOu8=/0x0:1800x1200/1200x800/filters:focal(810x62:1098x350)/cdn.vox-cdn.com/uploads/chorus_image/image/71037212/headshots_1656511601166.0.jpg"}
                         />
                         <ItemsBlog
                              title={"Vox The best movies of 2022 so far, ranked, and how to watch - Vox"}
                              time={4}
                              img={"https://cdn.vox-cdn.com/thumbor/ellakluEktxzQPNG0xLmgWIHOu8=/0x0:1800x1200/1200x800/filters:focal(810x62:1098x350)/cdn.vox-cdn.com/uploads/chorus_image/image/71037212/headshots_1656511601166.0.jpg"}
                         />
                         <ItemsBlog
                              title={"Vox The best movies of 2022 so far, ranked, and how to watch - Vox"}
                              time={20}
                              img={"https://cdn.vox-cdn.com/thumbor/ellakluEktxzQPNG0xLmgWIHOu8=/0x0:1800x1200/1200x800/filters:focal(810x62:1098x350)/cdn.vox-cdn.com/uploads/chorus_image/image/71037212/headshots_1656511601166.0.jpg"}
                         />
                         <ItemsBlog
                              title={"Vox The best movies of 2022 so far, ranked, and how to watch - Vox"}
                              time={3}
                              img={"https://cdn.vox-cdn.com/thumbor/ellakluEktxzQPNG0xLmgWIHOu8=/0x0:1800x1200/1200x800/filters:focal(810x62:1098x350)/cdn.vox-cdn.com/uploads/chorus_image/image/71037212/headshots_1656511601166.0.jpg"}
                         />
                         <ItemsBlog
                              title={"Vox The best movies of 2022 so far, ranked, and how to watch - Vox"}
                              time={8}
                              img={"https://cdn.vox-cdn.com/thumbor/ellakluEktxzQPNG0xLmgWIHOu8=/0x0:1800x1200/1200x800/filters:focal(810x62:1098x350)/cdn.vox-cdn.com/uploads/chorus_image/image/71037212/headshots_1656511601166.0.jpg"}
                         />
                         <ItemsBlog
                              title={"Vox The best movies of 2022 so far, ranked, and how to watch - Vox"}
                              time={9}
                              img={"https://cdn.vox-cdn.com/thumbor/ellakluEktxzQPNG0xLmgWIHOu8=/0x0:1800x1200/1200x800/filters:focal(810x62:1098x350)/cdn.vox-cdn.com/uploads/chorus_image/image/71037212/headshots_1656511601166.0.jpg"}
                         />
                    </ul>
               </div>
          </div>
     );
};

export default ContentBlog;
