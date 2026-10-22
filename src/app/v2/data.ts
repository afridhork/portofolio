import lpk_image from '../../assets/lpk/lpk-landingPage.png'
import st_image from '../../assets/staycation/st-landindPage.png'
import tms_front from '../../assets/tms/0-front.png'
import tms_airport_list from '../../assets/tms/11-airport-list.png'
import crm_front from '../../assets/crm/0-front.png'
import crm_dashboard from '../../assets/crm/1-dashboard.png'

import lpk_lp from '../../assets/lpk/lpk-landingPage.png'
import lpk_login from '../../assets/lpk/lpk-login.png'
import lpk_reg from '../../assets/lpk/lpk-register.png'
import lpk_db from '../../assets/lpk/lpk-dashboard.png'
import st_lp from '../../assets/staycation/dataLP/st-landingPage-lg.png'
import st_dtl from '../../assets/staycation/dataLP/st-detail.png'
import st_bi from '../../assets/staycation/dataLP/st-bookInfo.png'
import st_mp from '../../assets/staycation/dataLP/st-payment.png'

import type { projectData } from '../../types/projectData'

export const v2Projects: projectData[] = [
  {
    name: 'TMS Platform',
    techStack: ['Laravel', 'VueJs', 'MySQL', 'Git'],
    category: 'Operational Platform',
    content:
      'Developed order workflows from creation and pickup through warehouse delivery for air and ocean export operations. The platform included driver management, protected routes, role-based access, and Mekari Talenta API integration to support day-to-day logistics operations.',
    link: 'https://afridhork.vercel.app/v2/project/tms-platform',
    thumbnail: tms_front,
    images: [{ image: tms_front }, { image: tms_airport_list }],
  },
  {
    name: 'CRM Platform',
    techStack: ['Python', 'VueJs', 'Frappe', 'ERPNext', 'Redis'],
    category: 'Business Workflow Platform',
    content:
      'Built dashboards and reporting for leads, deals, and quotations, then extended Frappe CRM safely through custom apps, overrides, workflows, fixtures, reports, and business logic without modifying upstream core code.',
    link: 'https://afridhork.vercel.app/v2/project/crm-platform',
    thumbnail: crm_front,
    images: [{ image: crm_front }, { image: crm_dashboard }],
  },
  {
    name: 'LMS Platform',
    techStack: ['Javascript', 'NuxtJs', 'Bootstrap', 'NodeJs', 'Gitlab'],
    category: 'Education Platform',
    content:
      'Developed frontend features across a three-application LMS ecosystem for admins, training institutions, and students. The work focused on usability, operational coverage, and supporting institutions that needed a better online training workflow.',
    link: 'https://afridhork.vercel.app/v2/project/lms-platform',
    thumbnail: lpk_image,
    images: [{ image: lpk_lp }, { image: lpk_login }, { image: lpk_reg }, { image: lpk_db }],
  },
  {
    name: 'AI Design Pipeline',
    techStack: ['Python', 'NextJs', 'Typescript', 'Git', 'Tailwind'],
    category: 'Automation',
    content:
      'Built a generative AI workflow for design asset creation and workflow automation. The focus was practical integration: moving prompts, assets, and outputs through a pipeline that reduced repetitive work and supported faster iteration.',
    link: 'https://afridhork.vercel.app/v2/project/ai-design-pipeline',
    thumbnail: st_image,
    images: [{ image: st_lp }, { image: st_dtl }, { image: st_bi }, { image: st_mp }],
  },
]

export const getV2ProjectBySlug = (slug: string) =>
  v2Projects.find(project => project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug)
