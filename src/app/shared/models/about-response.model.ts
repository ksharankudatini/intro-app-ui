import { About } from "../../feat/about/about";
import { Skills } from "./skills.model";
import { SocialLinks } from "./social-links.model";


// ABOUT
//  ├── about
//  │    ├── id
//  │    ├── name
//  │    ├── title
//  │    ├── bio
//  │    ├── profile_image_url
//  │    └── resume_url
//  │
//  ├── skills
//  │    ├── id
//  │    ├── name
//  │    ├── category
//  │    └── display_order
//  │f
//  └── social_links
//       ├── id
//       ├── platform
//       ├── url
//       └── display_order


// {
//   "id": 1,
//   "name": "Ksharan Kudatini",
//   "title": "Full Stack Developer | YouTuber",
//   "bio": "I'm a Full Stack Developer with 5+ years of experience building enterprise applications using Java, Spring Boot, Angular and REST APIs. Outside of software development, I create travel and lifestyle content on YouTube.",
//   "profileImageUrl": "/api/files/profile.jpg",
//   "resumeUrl": "/api/files/resume.pdf",

//   "skills": [
//     {
//       "id": 1,
//       "name": "Java",
//       "category": "Backend",
//       "displayOrder": 1
//     },
//     {
//       "id": 2,
//       "name": "Spring Boot",
//       "category": "Backend",
//       "displayOrder": 2
//     },
//     {
//       "id": 3,
//       "name": "Angular",
//       "category": "Frontend",
//       "displayOrder": 3
//     },
//     {
//       "id": 4,
//       "name": "Oracle SQL",
//       "category": "Database",
//       "displayOrder": 4
//     },
//     {
//       "id": 5,
//       "name": "Git",
//       "category": "Tools",
//       "displayOrder": 5
//     }
//   ],

//   "socialLinks": [
//     {
//       "id": 1,
//       "platform": "YouTube",
//       "url": "https://youtube.com/yourchannel",
//       "displayOrder": 1
//     },
//     {
//       "id": 2,
//       "platform": "GitHub",
//       "url": "https://github.com/yourusername",
//       "displayOrder": 2
//     },
//     {
//       "id": 3,
//       "platform": "LinkedIn",
//       "url": "https://linkedin.com/in/yourprofile",
//       "displayOrder": 3
//     }
//   ]
// }

export interface AboutResponse {
    about: About;
    skills: Skills[];
    socialLinks: SocialLinks[];
}