'use client';
import React, { useState } from 'react';
import { FaLaptopCode, FaDatabase, FaPython } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'Digital Plus Web Application',
//     description: 'A web application to manage and display digital services accounts. Built using Angular, HTML, and CSS.',
//     image: '/images/digital.png',
//     livePreview: 'https://nextjs-weld-two-10.vercel.app/',
//     github: 'https://github.com/mahmoudamr5896/Todo-List',
//     category: 'Web Development',
//   },
//   {
//     title: 'Estate Web Application',
//     description: 'A web application to manage and display real estate services. Built using Angular, HTML, and CSS.',
//     image: '/images/estate.png',
//     livePreview: 'https://real-estate-mahmoud.vercel.app/',
//     github: 'https://github.com/mahmoudamr5896/Todo-List',
//     category: 'Web Development',
//   },
//   // Add other projects with relevant categories
// ];
const projects = [
  {
    title: "Recommender System Courses - Udemy",
    description: "Developing a recommendation system for Udemy courses using collaborative filtering and machine learning techniques. Tools used: Python, Scikit-learn, Pandas, and Flask.",
    image: "/imges/udemy.png",
    livePreview: "",
    github: "https://github.com/yourgithub/recommender-system-udemy",
    category: "Data Science"
}, 
{
    title: "Forecasting Avocado Prices",
    description: "Building a time series forecasting model to predict avocado prices using historical data. Tools used: Python, Pandas, Statsmodels, and Machine Learning techniques.",
    image: "/imges/MW.jpg",
    livePreview: "",
    github: "https://github.com/yourgithub/avocado-price-forecasting",
    category: "Data Science"
},
{
    title: "Natural Language Processing (NLP)",
    description: "Implementing NLP techniques for text processing, sentiment analysis, and topic modeling using Python. Tools used: NLTK, SpaCy, and Transformer models.",
    image: "/imges/nlp.jpg",
    livePreview: "",
    github: "https://github.com/yourgithub/nlp-project",
    category: "Data Science"
}
,
  
  
  {
    title: 'Walmart Sales Analysis',
    description: 'Analyzing Walmart sales data to uncover trends and insights.using tools ssis , power bi ,Sql server ,ETL',
    image: '/imges/walmart.png',
    livePreview: '',
    github: 'https://github.com/yourgithub/walmart-sales-analysis',
    category: 'Data Engineer',
  },
  {
    title: 'Real Estate Market Analysis',
    description: 'Processing and analyzing real estate market data to identify trends.',
    image: '/imges/Realestatr.png',
    livePreview: '',
    github: 'https://github.com/yourgithub/real-estate-analysis',
    category: 'Data Engineer',
  },
  {
    title: 'Fast Api Web Api Ecommerce',
    description: 'A web application to manage and display Products and Orders. Built using FastAPi Python.',
    image: '/imges/fastapi.png',
    livePreview: '',
    github: 'https://github.com/mahmoudamrhassan/nextjs',
    category: 'Full Stack Developer',

  },{
    title: 'Instgram web App',
    description: 'A web application to manage and display post and stories. Built using Django, HTML, Janga[Template Engine] ,and CSS.',
    image: '/imges/instgram.png',
    livePreview: 'https://instagramappp.pythonanywhere.com/',
    github: 'https://github.com/mahmoudamrhassan/nextjs',
    category: 'Full Stack Developer',

  },
    {
    title: 'Digital Plus Web Application',
    description: 'A web application to manage and display Services Digital Acounts. Built using Angualr, HTML, and CSS.',
    image: '/imges/digital.png',
    livePreview: 'https://nextjs-weld-two-10.vercel.app/',
    github: 'https://github.com/mahmoudamrhassan/nextjs',
    category: 'Full Stack Developer',

  },
  {
    title: 'Estate Web Application',
    description: 'A web application to manage and display Services Estate. Built using Angualr, HTML, and CSS.',
    image: '/imges/estate.png',
    livePreview: 'https://real-estate-mahmoud.vercel.app/',
    github: 'https://github.com/mahmoudamrhassan/angular-boilerplate',
    category: 'Full Stack Developer',

  },
  {
    title: 'Static Web Application',
    description: 'A web application to manage and display Services information. Built using  HTML, and CSS.',
    image: '/imges/static.png',
    livePreview: 'https://marketing-app-mostakel.netlify.app/',
    github: 'https://github.com/mahmoudamrhassan/Static_Web',
    category: 'Full Stack Developer',

  },
  {
    title: 'Seller List Web Application',
    description: 'A web application to manage and display seller information. Built using vue.js, laravel, HTML, and CSS.',
    image: '/imges/seller-list.png',
    livePreview: 'https://seller-list-eosin.vercel.app',
    github: 'https://seller-list-eosin.vercel.app/',
    category: 'Full Stack Developer',

  },
  {
    title: 'Code toturial Web Application',
    description: 'A web application to manage and display Code toturial . Built using React, Javascript, HTML, and CSS.',
    image: '/imges/code-app.png',
    livePreview: 'https://project-data-analysis-ywvz.vercel.app/',
    github: 'https://github.com/mahmoudamrhassan/Project_data_analysis',
    category: 'Full Stack Developer',

  },
  {
    title: 'courses Online Web Application',
    description: 'A web application to manage and display courses Online . Built using Python, Django, HTML, and CSS.',
    image: '/imges/image3.png',
    livePreview: 'https://mohmmedamr.pythonanywhere.com/onlinecourse/',
    github: 'https://github.com/mahmoudamrhassan/app-coursesonline',
    category: 'Full Stack Developer',

  },
  {
    title: 'Warehouse Management Web Application',
    description: 'A web application to manage and display Warehouse Management. Built using React , Node.js, HTML, and CSS.',
    image: '/imges/image4.png',
    livePreview: 'https://warehouse-client-roan.vercel.app/',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'Asp.net mvc',
    description: 'A web application to manage and display institute Mangment. Built using Mvc, C#, HTML, and CSS.',
    image: '/imges/images.jpeg',
    livePreview: '',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'Asp.net Api',
    description: 'A web application to manage and display institute Mangment. Built using Asp.net Api, C#, HTML, and CSS.',
    image: '/imges/api.jpeg',
    livePreview: '',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'Full Crud Web Application',
    description: 'A web application to manage and display Full crud. Built using Angular, Node.js, HTML, and CSS.',
    image: '/imges/image1.png',
    livePreview: 'https://fullcrudapi.netlify.app/',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'Crowd Fuinding Web Application',
    description: 'A web application to manage and display Projects. Built using Python, Django, HTML, and CSS.',
    image: '/imges/image2.png',
    livePreview: 'https://crowdfuinding.pythonanywhere.com/',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'Mangement Reasturant Web Application',
    description: 'A web application to manage and display Resturant . Built using Next, js, HTML, and CSS.',
    image: '/imges/image.png',
    livePreview: 'https://resturantafloor.netlify.app/home',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'E-commerce Web App',
    description: 'An e-commerce application for online shopping. Developed with React, Node.js,FIrebase, HTML, and CSS.',
    image: '/imges/vue-app.png',
    livePreview: 'https://lola-app-psi.vercel.app/',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'E-commerce Platform',
    description: 'A feature-rich platform for e-commerce operations using Vue.js, Firebase , HTML, and CSS.',
    image: '/imges/e-commerce-app.png',
    livePreview: 'https://vueproject-seven.vercel.app/products',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'Taheed Web Application',
    description: 'A specialized web application built using React, node.js, HTML, and CSS.',
    image: '/imges/taheed2.png',
    livePreview: 'https://taheedapp.vercel.app/',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'Todo List Project',
    description: 'A simple and interactive to-do list application designed with Python, Django, HTML, and CSS.',
    image: '/imges/todo.png',
    livePreview: 'https://mahmoudamr5896.pythonanywhere.com/',
    github: 'https://github.com/mahmoudamrhassan',
    category: 'Full Stack Developer',

  },
  {
    title: 'React E-commerce Application',
    description: 'An e-commerce web app developed using React, Python, Retool Api,Redux, HTML, and CSS.',
    image: '/imges/react1.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/ecommerce_project ',
    category: 'Full Stack Developer',

  },
  {
    title: 'Movies Web Application',
    description: 'A movie cataloging application with features to explore and manage movie details, built with React and Redux.',
    image: '/imges/movies.jpeg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/day3',
    category: 'Full Stack Developer',

  },
  {
    title: 'Database Engine Project (BASH)',
    description: 'A database engine implemented in BASH, showcasing shell scripting and database management concepts.',
    image: '/imges/bash.jpeg',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Bash_project_database_Engine ',
    category: 'Full Stack Developer',

  },
  {
    title: 'Mashroh Online Courses Application',
    description: 'An educational platform offering online courses, built using Wordpress, Php, Mysql, and CSS.',
    image: '/imges/mashroh.jpg',
    livePreview: 'https://mshrohcom.wordpress.com/higher-education-business-homepage/',
    github: 'https://github.com/mahmoudamr5896/project_Mashrowh ',
    category: 'Full Stack Developer',

  },
  {
    title: 'Clothing Shop Web Application',
    description: 'An e-commerce site specializing in clothing, created using Js, HTML, and CSS.',
    image: '/imges/clothing.jpg',
    livePreview: 'https://website-iti.netlify.app/',
    github: 'https://github.com/mahmoudamr5896/E-commerce-website ',
    category: 'Full Stack Developer',

  },
  {
    title: 'E-commerce Application',
    description: 'A comprehensive e-commerce solution built with Js , HTML, and CSS.',
    image: '/imges/ecommerce1.png',
    livePreview: 'http://127.0.0.1:5502/home/homepage.html',
    livePreview: 'https://ecommerce-iti-html.netlify.app/home/homepage',
    github: 'https://github.com/mahmoudamr5896/',
    category: 'Full Stack Developer',

  },
  {
    title: 'E-commerce Application',
    description: 'A comprehensive e-commerce solution built with Js , HTML,  CSS ,and bootstrap.',
    image: '/imges/img12.png',
    livePreview: 'https://ecommaerce.netlify.app/',
    github: 'https://github.com/mahmoudamr5896/',
    category: 'Full Stack Developer',

  },
  {
    title: 'Mr. Health Web Application',
    description: 'A health-focused web application for tracking and managing wellness activities, created with Python and Django.',
    image: '/imges/mrhealth.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Final_Project_ITI ',
    category: 'Full Stack Developer',

  },
  {
    title: 'Bookstore Application',
    description: 'An online bookstore platform developed using Node.js, js, HTML, and CSS.',
    image: '/imges/bookstor.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/project-book-store ',
    category: 'Full Stack Developer',

  },
  {
    title: 'Angular E-commerce Application',
    description: 'An e-commerce site developed using Angular, with a focus on modern web design and functionality.',
    image: '/imges/ecommerce2.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/Angulat-project-e-commerce',
    category: 'Full Stack Developer',

  },
  {
    title: 'Vue.js E-commerce Web App',
    description: 'A dynamic e-commerce application built with Vue.js and Firebase.',
    image: '/imges/vuejs.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/vueproject ',
    category: 'Full Stack Developer',

  },
  {
    title: 'Laravel Posts Project',
    description: 'A blogging platform to manage posts, developed using PHP, Laravel, HTML, and CSS.',
    image: '/imges/laravel.png',
    livePreview: '#',
    github: 'https://github.com/mahmoudamr5896/project-laravel',
    category: 'Full Stack Developer',

  },

];
const categories = [
  { name: 'Data Science', icon: <FaDatabase />, description: 'Currently working on data science projects.' },
  { name: 'Full Stack Developer', icon: <FaLaptopCode />, description: 'Developed projects using HTML, CSS, Flask ,Django ,React,Angular,Node.js , nest.js .' },
  { name: 'Data Engineer', icon: <FaDatabase />, description: 'Handling data pipelines and engineering projects.' },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('Full Stack Developer');

  const filteredProjects = projects.filter(project => project.category === selectedCategory);
  const handleSeeMore = () => setVisibleProjects(filteredProjects.length);

  return (
    <section id='projects' className='container-fluid' style={styles.projectsSection}>
      <h2 style={styles.title}>Projects</h2>
      <div className='category-container' style={styles.categoryRow}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-card ${selectedCategory === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.name)}
            style={selectedCategory === cat.name ? styles.activeCategory : styles.categoryCard}
          >
            <div className='icon'>{cat.icon}</div>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
      <div style={styles.projectsGrid}>
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={project.image} alt={project.title} style={styles.projectImage} />
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.buttons}>
              {project.livePreview && (
                <a href={project.livePreview} className='me-2' style={styles.button} target='_blank' rel='noopener noreferrer'>Live Preview</a>
              )}
              <a href={project.github} style={styles.button} target='_blank' rel='noopener noreferrer'>GitHub</a>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < filteredProjects.length && (
        <div style={styles.seeMoreButtonContainer}>
          <button style={styles.seeMoreButton} onClick={handleSeeMore}>See More</button>
        </div>
      )}
      <hr style={styles.hr} />
    </section>
  );
};

const styles = {
  projectsSection: { padding: '4rem 2rem', backgroundColor: '#0f0f23', color: '#fff' },
  title: { textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' },
  projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
  projectCard: { backgroundColor: '#1b1b32', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' },
  projectImage: { width: '100%', borderRadius: '8px', marginBottom: '1rem' },
  projectTitle: { fontSize: '1.5rem', marginBottom: '0.5rem' },
  projectDescription: { fontSize: '1rem', marginBottom: '1rem' },
  buttons: { display: 'flex', justifyContent: 'space-between' },
  button: { backgroundColor: '#6c63ff', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none' },
  seeMoreButtonContainer: { textAlign: 'center', marginTop: '2rem' },
  seeMoreButton: { backgroundColor: '#6c63ff', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '5px', border: 'none', cursor: 'pointer' },
  hr: { color: 'white', height: '3px' },
  categoryRow: { display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' },
  categoryCard: { cursor: 'pointer', padding: '1rem', borderRadius: '5px', backgroundColor: '#222', color: '#fff' },
  activeCategory: { cursor: 'pointer', padding: '1rem', borderRadius: '5px', backgroundColor: '#6c63ff', color: '#fff' },
};

export default Projects;




// components/Projects.js
// 'use client';
// import React, { useState } from 'react';
// import { FaLaptopCode, FaDatabase, FaPython } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'Digital Plus Web Application',
//     description: 'A web application to manage and display Services Digital Acounts. Built using Angualr, HTML, and CSS.',
//     image: '/imges/digital.png',
//     livePreview: 'https://nextjs-weld-two-10.vercel.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Estate Web Application',
//     description: 'A web application to manage and display Services Estate. Built using Angualr, HTML, and CSS.',
//     image: '/imges/estate.png',
//     livePreview: 'https://real-estate-mahmoud.vercel.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Static Web Application',
//     description: 'A web application to manage and display Services information. Built using  HTML, and CSS.',
//     image: '/imges/static.png',
//     livePreview: 'https://marketing-app-mostakel.netlify.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Seller List Web Application',
//     description: 'A web application to manage and display seller information. Built using vue.js, laravel, HTML, and CSS.',
//     image: '/imges/seller-list.png',
//     livePreview: 'https://seller-list-eosin.vercel.app',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Code toturial Web Application',
//     description: 'A web application to manage and display Code toturial . Built using React, Javascript, HTML, and CSS.',
//     image: '/imges/code-app.png',
//     livePreview: 'https://project-data-analysis-ywvz.vercel.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'courses Online Web Application',
//     description: 'A web application to manage and display courses Online . Built using Python, Django, HTML, and CSS.',
//     image: '/imges/image3.png',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Warehouse Management Web Application',
//     description: 'A web application to manage and display Warehouse Management. Built using React , Node.js, HTML, and CSS.',
//     image: '/imges/image4.png',
//     livePreview: 'https://warehouse-client-roan.vercel.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Asp.net mvc',
//     description: 'A web application to manage and display institute Mangment. Built using Mvc, C#, HTML, and CSS.',
//     image: '/imges/images.jpeg',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Asp.net Api',
//     description: 'A web application to manage and display institute Mangment. Built using Asp.net Api, C#, HTML, and CSS.',
//     image: '/imges/api.jpeg',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Full Crud Web Application',
//     description: 'A web application to manage and display Full crud. Built using Angular, Node.js, HTML, and CSS.',
//     image: '/imges/image1.png',
//     livePreview: 'https://fullcrudapi.netlify.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Crowd Fuinding Web Application',
//     description: 'A web application to manage and display Projects. Built using Python, Django, HTML, and CSS.',
//     image: '/imges/image2.png',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Mangement Reasturant Web Application',
//     description: 'A web application to manage and display Resturant . Built using Next, js, HTML, and CSS.',
//     image: '/imges/image.png',
//     livePreview: 'https://resturantafloor.netlify.app/home',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'E-commerce Web App',
//     description: 'An e-commerce application for online shopping. Developed with React, Node.js,FIrebase, HTML, and CSS.',
//     image: '/imges/vue-app.png',
//     livePreview: 'https://lola-app-psi.vercel.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'E-commerce Platform',
//     description: 'A feature-rich platform for e-commerce operations using Vue.js, Firebase , HTML, and CSS.',
//     image: '/imges/e-commerce-app.png',
//     livePreview: 'https://vueproject-seven.vercel.app/products',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Taheed Web Application',
//     description: 'A specialized web application built using React, node.js, HTML, and CSS.',
//     image: '/imges/taheed2.png',
//     livePreview: 'https://taheedapp.vercel.app/',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Todo List Project',
//     description: 'A simple and interactive to-do list application designed with Python, Django, HTML, and CSS.',
//     image: '/imges/todo.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'React E-commerce Application',
//     description: 'An e-commerce web app developed using React, Python, Retool Api,Redux, HTML, and CSS.',
//     image: '/imges/react1.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/ecommerce_project ',
//   },
//   {
//     title: 'Movies Web Application',
//     description: 'A movie cataloging application with features to explore and manage movie details, built with React and Redux.',
//     image: '/imges/movies.jpeg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/day3',
//   },
//   {
//     title: 'Database Engine Project (BASH)',
//     description: 'A database engine implemented in BASH, showcasing shell scripting and database management concepts.',
//     image: '/imges/bash.jpeg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Bash_project_database_Engine ',
//   },
//   {
//     title: 'Mashroh Online Courses Application',
//     description: 'An educational platform offering online courses, built using Wordpress, Php, Mysql, and CSS.',
//     image: '/imges/mashroh.jpg',
//     livePreview: 'https://mshrohcom.wordpress.com/higher-education-business-homepage/',
//     github: 'https://github.com/mahmoudamr5896/project_Mashrowh ',
//   },
//   {
//     title: 'Clothing Shop Web Application',
//     description: 'An e-commerce site specializing in clothing, created using Js, HTML, and CSS.',
//     image: '/imges/clothing.jpg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/E-commerce-website ',
//   },
//   {
//     title: 'E-commerce Application',
//     description: 'A comprehensive e-commerce solution built with Js , HTML, and CSS.',
//     image: '/imges/ecommerce1.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/',
//   },
//   {
//     title: 'Mr. Health Web Application',
//     description: 'A health-focused web application for tracking and managing wellness activities, created with Python and Django.',
//     image: '/imges/mrhealth.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Final_Project_ITI ',
//   },
//   {
//     title: 'Bookstore Application',
//     description: 'An online bookstore platform developed using Node.js, js, HTML, and CSS.',
//     image: '/imges/bookstor.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/project-book-store ',
//   },
//   {
//     title: 'Angular E-commerce Application',
//     description: 'An e-commerce site developed using Angular, with a focus on modern web design and functionality.',
//     image: '/imges/ecommerce2.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Angulat-project-e-commerce',
//   },
//   {
//     title: 'Vue.js E-commerce Web App',
//     description: 'A dynamic e-commerce application built with Vue.js and Firebase.',
//     image: '/imges/vuejs.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/vueproject ',
//   },
//   {
//     title: 'Laravel Posts Project',
//     description: 'A blogging platform to manage posts, developed using PHP, Laravel, HTML, and CSS.',
//     image: '/imges/laravel.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/project-laravel',
//   },
// ];

// const categories = [
//   { name: 'Data Science', icon: <FaDatabase />, description: 'Currently working on data science projects.' },
//   { name: 'Web Development', icon: <FaLaptopCode />, description: 'Developed projects using HTML, CSS, Flask.' },
//   { name: 'Mini Python Projects', icon: <FaPython />, description: 'Built small projects using Python packages.' },
// ];

// const Projects = () => {
//     // Set initial number of projects to display
//     const [visibleProjects, setVisibleProjects] = useState(10);
//   const [selectedCategory, setSelectedCategory] = useState('Data Science');

//     // Function to handle "See More" click
//     const handleSeeMore = () => {
//       setVisibleProjects(projects.length); // Show all projects
//     };
//   return (
//     <section id='projects' className='container-fluid' style={styles.projectsSection}>
//       <h2 style={styles.title}>Projects</h2>
//       <div style={styles.projectsGrid}>
//       {projects.slice(0, visibleProjects).map((project, index) => (
//           <div key={index} style={styles.projectCard}>
//             <div >
//             <img src={project.image} alt={project.title} style={styles.projectImage} />

//             </div>
//             <h3 style={styles.projectTitle}>{project.title}</h3>
//             <p style={styles.projectDescription}>{project.description}</p>
//             <div style={styles.buttons}>
//               <a href={project.livePreview} className='me-2' style={styles.button} target="_blank" rel="noopener noreferrer">Live preview</a>
//               <a href={project.github} style={styles.button} target="_blank" rel="noopener noreferrer">Check on GitHub</a>
//             </div>
//           </div>
//         ))}
//       </div>
//       {visibleProjects < projects.length && (
//         <div style={styles.seeMoreButtonContainer}>
//           <button style={styles.seeMoreButton} onClick={handleSeeMore}>See More</button>
//         </div>
//       )}
//               <hr style={styles.hr}></hr>
//               <div className="category-container">
//         {categories.map((cat) => (
//           <div
//             key={cat.name}
//             className={`category-card ${selectedCategory === cat.name ? 'active' : ''}`}
//             onClick={() => setSelectedCategory(cat.name)}
//           >
//             <div className="icon">{cat.icon}</div>
//             <h3>{cat.name}</h3>
//             <p>{cat.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   projectsSection: {
//     padding: '4rem 2rem',
//     backgroundColor: '#0f0f23',
//     color: '#fff',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: '2rem',
//     marginBottom: '2rem',
//   },
//   projectsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '2rem',
//   },
//   projectCard: {
//     backgroundColor: '#1b1b32',
//     padding: '1.5rem',
//     borderRadius: '8px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//   },
//   projectImage: {
//     width: '100%',
//     borderRadius: '8px',
//     marginBottom: '1rem',
//   },
//   projectTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '0.5rem',
//   },
//   projectDescription: {
//     fontSize: '1rem',
//     marginBottom: '1rem',
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: '#6c63ff',
//     color: '#fff',
//     padding: '0.5rem 1rem',
//     textAlign: 'center',
//     borderRadius: '5px',
//     textDecoration: 'none',
//     transition: 'background-color 0.3s ease',
//   },
//   seeMoreButtonContainer: {
//     textAlign: 'center',
//     marginTop: '2rem',
//   },
//   seeMoreButton: {
//     backgroundColor: '#6c63ff',
//     color: '#fff',
//     padding: '0.5rem 1.5rem',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   hr: { 
//     color:'white',
//     height:'3px'
//     },
// };

// export default Projects;



//____________________________

// 'use client';
// import React, { useState } from 'react';
// import { FaLaptopCode, FaDatabase, FaPython } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'Digital Plus Web Application',
//     description: 'A web application to manage and display digital services accounts. Built using Angular, HTML, and CSS.',
//     image: '/images/digital.png',
//     livePreview: 'https://nextjs-weld-two-10.vercel.app/',
//     github: 'https://github.com/mahmoudamr5896/Todo-List',
//     category: 'Web Development',
//   },
//   {
//     title: 'Estate Web Application',
//     description: 'A web application to manage and display real estate services. Built using Angular, HTML, and CSS.',
//     image: '/images/estate.png',
//     livePreview: 'https://real-estate-mahmoud.vercel.app/',
//     github: 'https://github.com/mahmoudamr5896/Todo-List',
//     category: 'Web Development',
//   },
//   // Add other projects with relevant categories
// ];

// const categories = [
//   { name: 'Data Science', icon: <FaDatabase />, description: 'Currently working on data science projects.' },
//   { name: 'Web Development', icon: <FaLaptopCode />, description: 'Developed projects using HTML, CSS, Flask.' },
//   { name: 'Data Engineer', icon: <FaDatabase />, description: 'Handling data pipelines and engineering projects.' },
// ];

// const Projects = () => {
//   const [visibleProjects, setVisibleProjects] = useState(10);
//   const [selectedCategory, setSelectedCategory] = useState('Data Science');

//   const filteredProjects = projects.filter(project => project.category === selectedCategory);
//   const handleSeeMore = () => setVisibleProjects(filteredProjects.length);

//   return (
//     <section id='projects' className='container-fluid' style={styles.projectsSection}>
//       <h2 style={styles.title}>Projects</h2>
//        <div className='category-container'>
//         {categories.map((cat) => (
//           <div
//             key={cat.name}
//             className={`category-card ${selectedCategory === cat.name ? 'active' : ''}`}
//             onClick={() => setSelectedCategory(cat.name)}
//             style={selectedCategory === cat.name ? styles.activeCategory : styles.categoryCard}
//           >
//             <div className='icon'>{cat.icon}</div>
//             <h3>{cat.name}</h3>
//             <p>{cat.description}</p>
//           </div>
//         ))}
//       </div>
      
//       <hr style={styles.hr} />
//      <div style={styles.projectsGrid}>
//         {filteredProjects.slice(0, visibleProjects).map((project, index) => (
//           <div key={index} style={styles.projectCard}>
//             <img src={project.image} alt={project.title} style={styles.projectImage} />
//             <h3 style={styles.projectTitle}>{project.title}</h3>
//             <p style={styles.projectDescription}>{project.description}</p>
//             <div style={styles.buttons}>
//               {project.livePreview && (
//                 <a href={project.livePreview} className='me-2' style={styles.button} target='_blank' rel='noopener noreferrer'>Live Preview</a>
//               )}
//               <a href={project.github} style={styles.button} target='_blank' rel='noopener noreferrer'>GitHub</a>
//             </div>
//           </div>
//         ))}
//       </div>
//       {visibleProjects < filteredProjects.length && (
//         <div style={styles.seeMoreButtonContainer}>
//           <button style={styles.seeMoreButton} onClick={handleSeeMore}>See More</button>
//         </div>
//       )}
//     </section>
//   );
// };

// const styles = {
//   projectsSection: { padding: '4rem 2rem', backgroundColor: '#0f0f23', color: '#fff' },
//   title: { textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' },
//   projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
//   projectCard: { backgroundColor: '#1b1b32', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' },
//   projectImage: { width: '100%', borderRadius: '8px', marginBottom: '1rem' },
//   projectTitle: { fontSize: '1.5rem', marginBottom: '0.5rem' },
//   projectDescription: { fontSize: '1rem', marginBottom: '1rem' },
//   buttons: { display: 'flex', justifyContent: 'space-between' },
//   button: { backgroundColor: '#6c63ff', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none' },
//   seeMoreButtonContainer: { textAlign: 'center', marginTop: '2rem' },
//   seeMoreButton: { backgroundColor: '#6c63ff', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '5px', border: 'none', cursor: 'pointer' },
//   hr: { color: 'white', height: '3px' },
//   categoryCard: { cursor: 'pointer', padding: '1rem', borderRadius: '5px', backgroundColor: '#222', color: '#fff' },
//   activeCategory: { cursor: 'pointer', padding: '1rem', borderRadius: '5px', backgroundColor: '#6c63ff', color: '#fff' },
// };

// export default Projects;


//________________________________
// const projects = [
//   {
//     title: 'Seller List web application',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/seller-list.png',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Web App Ecommerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/vue-app.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Web App Ecommerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/e-commerce-app.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Web App Taheed',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/taheed2.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Todo List Project',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/todo.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamrhassan',
//   },
//   {
//     title: 'Web Application E-Commece',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/react1.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/ecommerce_project ',
//   },
//   {
//     title: 'Web Application Movies',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/movies.jpeg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/day3',
//   },
//   {
//     title: 'Project Database Engine in BASH',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/bash.jpeg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Bash_project_database_Engine ',
//   },
//   {
//     title: 'Web Application Mshroh Courses Online',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/mashroh.jpg',
//     livePreview: '',
//     github: 'https://github.com/mahmoudamr5896/project_Mashrowh ',
//   },
//   {
//     title: 'Web Application clothing Shop clothes',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/clothing.jpg',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/E-commerce-website ',
//   },
//   {
//     title: 'Web Application E-commerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/ecommerce1.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/',
//   },
//   {
//     title: 'Web Application Mr./Health',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/mrhealth.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Final_Project_ITI ',
//   },
//   {
//     title: 'Web Application Book store',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/bookstor.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/project-book-store ',
//   },
//   {
//     title: 'Web Application Angular E Commerce',
//     description: 'This is a simple card component created using CSS. Teck Stack Python Django HTML Css',
//     image: '/imges/ecommerce2.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/Angulat-project-e-commerce',
//   },
//   {
//     title: 'Project Ecommpece Web App Vue.js',
//     description: 'This is a simple card component created using CSS. Teck Stack Firebase HTML Css',
//     image: '/imges/vuejs.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/vueproject ',
//   },
//   {
//     title: 'Project Laravel Posts',
//     description: 'This is a simple card component created using CSS. Teck Stack PHP Laravel HTML Css',
//     image: '/imges/laravel.png',
//     livePreview: '#',
//     github: 'https://github.com/mahmoudamr5896/project-laravel',
//   },
 
// ];
