// Use string paths for images instead of imports to avoid build errors with placeholder files
const sc_image = '/assets/shopcart/sc-landindPage.png'
const st_image = '/assets/staycation/st-landindPage.png'
const st_admin = '/assets/staycation/st-admin.png'
const dc_image = '/assets/deacourse/dc-landingPage.png'
const pt_image = '/assets/porto/pt-landingPage.png'
const lpk_image = '/assets/lpk/lpk-landingPage.png'

//afridhork
const pt_lp = '/assets/porto/pt-landingPage.png'
const pt_sp = '/assets/porto/pt-skillPage.png'
const pt_dp = '/assets/porto/pt-detailPage.png'

// shopCart
const sc_lp = '/assets/shopcart/data/sc-landindPage-lg.png'
const sc_ctg = '/assets/shopcart/data/sc-category.png'
const sc_dtl = '/assets/shopcart/data/sc-detail.png'
const sc_co = '/assets/shopcart/data/sc-checkout.png'
const sc_cart = '/assets/shopcart/data/sc-cart.png'

// staycation
const st_lp = '/assets/staycation/dataLP/st-landingPage-lg.png'
const st_mp = '/assets/staycation/dataLP/st-mostPicked.png'
const st_dtl = '/assets/staycation/dataLP/st-detail.png'
const st_bi = '/assets/staycation/dataLP/st-bookInfo.png'

// admin stay
const admst_lp = '/assets/staycation/dataAdmin/st-admin-lgt.png'
const admst_db = '/assets/staycation/dataAdmin/st-dashboard.png'
const admst_bnk = '/assets/staycation/dataAdmin/st-bank.png'
const admst_bkg = '/assets/staycation/dataAdmin/st-booking.png'
const admst_ctg = '/assets/staycation/dataAdmin/st-category.png'
const admst_itm = '/assets/staycation/dataAdmin/st-item.png'

// shoplist
const dc_lp = '/assets/deacourse/data/dc-landingPage-lg.png'

// rumah lpk
const lpk_lp = '/assets/lpk/lpk-landingPage-lg.png'
const lpk_login = '/assets/lpk/lpk-login.png'
const lpk_reg = '/assets/lpk/lpk-register.png'
const lpk_fp = '/assets/lpk/lpk-forgot-pass.png'
const lpk_db = '/assets/lpk/lpk-dashboard.png'
const lpk_ins = '/assets/lpk/lpk-instructor.png'
const lpk_cl = '/assets/lpk/lpk-courseList.png'
const lpk_ca = '/assets/lpk/lpk-config-account.png'
const lpk_acc = '/assets/lpk/lpk-addCourseContent.png'


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
      thumbnail:pt_image,
      images:[
         {image:pt_lp},
         {image:pt_sp},
         {image:pt_dp}
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
      thumbnail:sc_image,
      images:[
         {image:sc_lp},
         {image:sc_ctg},
         {image:sc_dtl},
         {image:sc_co},
         {image:sc_cart},
         // sc_lp
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
      thumbnail:st_image,
      images:[
         {image:st_lp},
         {image:st_dtl},
         {image:st_bi},
         {image:st_mp}
      ]
   },
   {
      name: 'Admin StayCation',
      techStack:[
         'Javascript',
         'Express',
         'ejs',
         'Bootstrap',
         'Mongoose',
         'Chai'
      ],
      category:'Web Development',
      content:"For the admin panel of our staycation website, we've crafted a robust tech stack to streamline management tasks. Leveraging JavaScript as the primary language, the backend is powered by Express.js, providing a fast and minimalistic web application framework. Dynamic views are efficiently handled with EJS templating, offering a seamless integration of data and design. Bootstrap ensures a responsive and user-friendly interface, while Mongoose facilitates smooth communication with the MongoDB database. To maintain code quality and reliability, Chai is employed for testing. This stack empowers administrators to effortlessly oversee and manage staycation offerings with an intuitive and efficient admin interface.",
      link:'https://bwa-server-staycation-flame.vercel.app/',
      thumbnail:st_admin,
      images:[
         {image:admst_lp},
         {image:admst_db},
         {image:admst_bnk},
         {image:admst_bkg},
         {image:admst_ctg},
         {image:admst_itm},
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
      thumbnail:dc_image,
      images:[
         {image:dc_lp}
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
      thumbnail:lpk_image,
      images:[
         {image:lpk_lp},
         {image:lpk_login},
         {image:lpk_reg},
         {image:lpk_fp},
         {image:lpk_db},
         {image:lpk_ca},
         {image:lpk_ins},
         {image:lpk_cl},
         {image:lpk_acc},
      ]
   },
]