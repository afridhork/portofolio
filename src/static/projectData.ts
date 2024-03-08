import sc_image from '@/assets/shopcart/sc-landindPage.png'
import st_image from '@/assets/staycation/st-landindPage.png'
import st_admin from '@/assets/staycation/st-admin.png'
import dc_image from '@/assets/deacourse/dc-landingPage.png'
import pt_image from '@/assets/porto/pt-landingPage.png'
import lpk_image from '@/assets/lpk/lpk-landingPage.png'

//afridhork
import pt_lp from '@/assets/porto/pt-landingPage.png' 
import pt_sp from '@/assets/porto/pt-skillPage.png' 
import pt_dp from '@/assets/porto/pt-detailPage.png' 



// shopCart
import sc_lp from '@/assets/shopcart/data/sc-landindPage-lg.png' 
import sc_ctg from '@/assets/shopcart/data/sc-category.png' 
import sc_dtl from '@/assets/shopcart/data/sc-detail.png' 
import sc_co from '@/assets/shopcart/data/sc-checkout.png' 
import sc_cart from '@/assets/shopcart/data/sc-cart.png' 

// staycation
import st_lp from '@/assets/staycation/dataLP/st-landingPage-lg.png'
import st_mp from '@/assets/staycation/dataLP/st-mostPicked.png'
import st_dtl from '@/assets/staycation/dataLP/st-detail.png'
import st_bi from '@/assets/staycation/dataLP/st-bookInfo.png'

// admin stay
import admst_lp from '@/assets/staycation/dataAdmin/st-admin-lgt.png'
import admst_db from '@/assets/staycation/dataAdmin/st-dashboard.png'
import admst_bnk from '@/assets/staycation/dataAdmin/st-bank.png'
import admst_bkg from '@/assets/staycation/dataAdmin/st-booking.png'
import admst_ctg from '@/assets/staycation/dataAdmin/st-category.png'
import admst_itm from '@/assets/staycation/dataAdmin/st-item.png'

// shoplist
import dc_lp from '@/assets/deacourse/data/dc-landingPage-lg.png'

// rumah lpk
import lpk_lp from '@/assets/lpk/lpk-landingPage-lg.png'
import lpk_login from '@/assets/lpk/lpk-login.png'
import lpk_reg from '@/assets/lpk/lpk-register.png'
import lpk_fp from '@/assets/lpk/lpk-forgot-pass.png'
import lpk_db from '@/assets/lpk/lpk-dashboard.png'
import lpk_ins from '@/assets/lpk/lpk-instructor.png'
import lpk_cl from '@/assets/lpk/lpk-courseList.png'
import lpk_ca from '@/assets/lpk/lpk-config-account.png'
import lpk_acc from '@/assets/lpk/lpk-addCourseContent.png'


export const data = [
   {
      name: 'AfridhoRK',
      techStack:[
         'Typescript',
         'NextJs',
         'Three',
         'Tailwind',
         'Framer',
         'Lenis'
      ],
      category:'Web Development',
      content:"I build this portfolio as portofolio with TypeScript, Next.js, and Tailwind CSS to exemplify my expertise in modern web development. Leveraging Framer Motion, Lenis, and React Three Fiber, I've infused dynamic animations and 3D elements into the user experience. This digital showcase is more than a testament to my technical prowess—it's a commitment to pushing the boundaries of web innovation. Explore the synergy of creativity and functionality as each line of code narrates my journey in the dynamic landscape of web technologies. Welcome to my digital space, where innovation takes center stage! ",
      link:'https://afridhork.vercel.app/',
      thumbnail:pt_image.src,
      images:[
         {image:pt_lp.src},
         {image:pt_sp.src},
         {image:pt_dp.src}
      ]
   },
   {
      name: 'ShopCart',
      techStack:[
         'Typescript',
         'NextJs',
         'Redux', 
         'Tailwind',
      ],
      category:'Web Development',
      content:"In crafting this e-commerce platform, I harnessed the power of TypeScript, Next.js, and Redux to provide a seamless and robust shopping experience. The integration of React Loading Skeleton ensures a smooth and engaging interface, while Tailwind CSS adds a touch of aesthetic finesse. From streamlined navigation to efficient state management, every element reflects a commitment to enhancing the e-commerce journey. Dive into a realm of secure transactions and responsive design, where technology converges with user-centric innovation. Explore a new era of online shopping, where simplicity meets sophistication!",
      link:'https://shop-cart-project-pi.vercel.app/',
      thumbnail:sc_image.src,
      images:[
         {image:sc_lp.src},
         {image:sc_ctg.src},
         {image:sc_dtl.src},
         {image:sc_co.src},
         {image:sc_cart.src},
         // sc_lp.src
      ]
   },
   {
      name: 'StayCation',
      techStack:[
         'Typescript',
         'ReactJs',
         'Redux',  
         'Tailwind',
      ],
      category:'Web Development',
      content:"For a staycation website, I'm leveraging a powerful tech stack to ensure a seamless and engaging user experience. The website is built using TypeScript for robust type-checking and enhanced code quality. React.js is the heart of the frontend, providing a dynamic and responsive UI that keeps users immersed. The application state is managed efficiently with Redux, enabling smooth data flow and state management. Tailwind CSS enhances the styling, ensuring a modern and visually appealing design. Together, this stack ensures a delightful staycation booking experience with a focus on reliability, interactivity, and aesthetics.",
      link:'https://staycation-web-tawny.vercel.app/',
      thumbnail:st_image.src,
      images:[
         {image:st_lp.src},
         {image:st_dtl.src},
         {image:st_bi.src},
         {image:st_mp.src}
      ]
   },
   {
      name: 'Admin StayCation',
      techStack:[
         'Javascript',
         'Express',
         'Ejs',
         'Bootstrap',
         'Mongoose',
         'Chai'
      ],
      category:'Web Development',
      content:"For the admin panel of our staycation website, we've crafted a robust tech stack to streamline management tasks. Leveraging JavaScript as the primary language, the backend is powered by Express.js, providing a fast and minimalistic web application framework. Dynamic views are efficiently handled with EJS templating, offering a seamless integration of data and design. Bootstrap ensures a responsive and user-friendly interface, while Mongoose facilitates smooth communication with the MongoDB database. To maintain code quality and reliability, Chai is employed for testing. This stack empowers administrators to effortlessly oversee and manage staycation offerings with an intuitive and efficient admin interface.",
      link:'https://bwa-server-staycation-flame.vercel.app/',
      thumbnail:st_admin.src,
      images:[
         {image:admst_lp.src},
         {image:admst_db.src},
         {image:admst_bnk.src},
         {image:admst_bkg.src},
         {image:admst_ctg.src},
         {image:admst_itm.src},
      ]
   },
   {
      name: 'ShopList',
      techStack:[
         'Typescript',
         'ReactJs',
         'Redux',
         'Tailwind',
         'Vite'
      ],
      category:'Web Development',
      content:'Shop List Page! Crafted with TypeScript, ReactJS, Redux, Tailwind CSS, and Vite, it embodies our dedication to top-tier development. Seamlessly blending advanced tech with sleek design, it offers an intuitive browsing experience. Discover a wide range of products effortlessly with name and category filters, plus customizable sorting. Our showcase reflects our commitment to dynamic, user-centric web solutions, enhancing the online shopping journey. Experience innovation and creativity in every line of code.',
      link:'https://dea-coruse-project.vercel.app/',
      thumbnail:dc_image.src,
      images:[
         {image:dc_lp.src}
      ]
   },
   {
      name: 'Rumah LPK',
      techStack:[
         'Javascript',
         'NuxtJs',
         'Axios',
         'Bootstrap',
         'IntroJs'
      ],
      category:'Web Development',
      content:"This website is created to support vocational training institutions (LPK - Lembaga Pelatihan Kerja) that do not have an online selling platform to start selling online. The Rumah LPK space is divided into three parts: an admin website, a website for LPK, and a website for customers or students. I do development for a website for LPK side, Powered by Nuxt.js and Bootstrap, our platform offers a user-friendly interface that ensures smooth navigation. Leveraging Axios and JavaScript, we bring you a dynamic and responsive system, empowering LPK to connect with a wider audience. Elevate your training programs, streamline operations, and embrace the future of online engagement with Rumah LPK.",
      link:'https://lpk.rumahlpk.com/',
      thumbnail:lpk_image.src,
      images:[
         {image:lpk_lp.src},
         {image:lpk_login.src},
         {image:lpk_reg.src},
         {image:lpk_fp.src},
         {image:lpk_db.src},
         {image:lpk_ca.src},
         {image:lpk_ins.src},
         {image:lpk_cl.src},
         {image:lpk_acc.src},
      ]
   },
]