import React from 'react';
import { Button } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <section
      className="container-fluid d-flex align-items-center"
      style={{
        backgroundColor: '#1c1e21',
        padding: '100px 20px',
        position: 'relative',
      }}
    >
      <div className="container text-center text-white">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-10 col-sm-12 mb-4 mb-lg-0">
            <h1
              className="hero-title"
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                lineHeight: '1.2',
              }}
            >
              Hello, I'm{' '}
              <span
                className="highlight"
                style={{
                  color: '#6a4ef6',
                  background:
                    '-webkit-linear-gradient(45deg, #6a4ef6, #00c9ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Mahmoud Amr Hassan
              </span>
              ,
              <br />
            </h1>
            <p
              className="hero-subtitle mt-3"
              style={{
                fontSize: '1.2rem',
                fontWeight: '400',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              {/* Full Stack Web Developer graduated from the Information Technology
              Institute (ITI), certified by Google as a Data Analyst. I'm
              proficient in JavaScript, ES6, jQuery, React, Python, Django,
              Flask, SQL, PostgreSQL, MySQL, MongoDB, HTML5, CSS3, Bootstrap,
              Git, GitHub, Bash scripting, Apache, Odoo, Docker, C, C++, PHP,
              and WordPress. */}
                Data Engineer & Full-Stack Developer
                Passionate about turning data into insights and ideas into code.
                 Certified by IBM, Google, and NTI, I specialize in building data pipelines,
                  dashboards, and scalable web applications. From React and Node.js to Azure,
                   Power BI, and Apache Spark — I blend software engineering with analytics 
                   to solve real-world problems.

            </p>
            <Button
          variant="primary"
          className="mt-4 hero-button"
          style={{
            backgroundColor: '#00c9ff',
            border: 'none',
            padding: '10px 30px',
            fontSize: '1rem',
            borderRadius: '30px',
            boxShadow: '0px 10px 20px rgba(0, 201, 255, 0.3)',
          }}
        >
          <a className="btn" href="./imges/mahmoudamrhassn_resume 01.pdf">
            Download CV
          </a>
        </Button></div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-end">
            <img
              src="./imges/img.jpeg"
              alt="Mahmoud Amr Hassan"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '5px solid #1c1e21',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              }}
            />
          
          </div>

        </div>
      
      </div>
      <hr style={{  color:'white',
    height:'3px'}}></hr>
    </section>
  );
}


// import React from 'react';
// import { Button } from 'react-bootstrap';
// export default function HeroSection() {
//   return (
//     <section className="container-fluid d-flex align-items-center"  style={{'background-color': '#1c1e21','padding': '100px', 'position': 'relative'}}>
//       <div className="container text-center text-white">
//         <div className='col-8 '> 
//         <h1 className="hero-title" style={{  'font-size': '2.5rem', 'font-weight': '700','line-height':' 1.2'}}>
//           Hello, I'm <span className="highlight" style={{    'color': '#6a4ef6', 'background': '-webkit-linear-gradient(45deg, #6a4ef6, #00c9ff)', '-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent'}}>Mahmoud Amr Hassan</span>,
//           <br/>
//         </h1>
//         <p className="hero-subtitle mt-3" style={{ 'font-size': '1.2rem',   ' font-weight': '400',    'max-width': '600px',    'margin': '0 auto'}}>
//         software engineer graduated from the Information Technology Institute (ITI), certified by Google as a Data Analyst. I'm proficient in JavaScript, ES6, jQuery, React, Python, Django, Flask, SQL, PostgreSQL, MySQL, MongoDB, HTML5, CSS3, Bootstrap, Git, GitHub, Bash scripting, Apache, Odoo, Docker, C, C++, PHP, and WordPress.
//         </p>
//         </div>
//     <br/>
//         <Button variant="primary" className="mt-4 hero-button" style={{ '  background-color': '#00c9ff',
//     'border': 'none',
//     'padding': '10px 30px',
//     'font-size': '1rem',
//     'border-radius': '30px',
//     'box-shadow': '0px 10px 20px rgba(0, 201, 255, 0.3)'}}>
//             <a className='btn' href='./imges/mahmoudamrhassan_resume01.pdf'> 
//                Download CV
//             </a>
//         </Button>
//       </div>
//       <div className="hero-image-wrapper col-4 " 
//       style={{ 
//     'top': '50%',
//     'right':' 10%',
//     'transform': 'translateY(-50%)'}}>
//         <img src="./imges/img.jpeg" alt="Mahmoud Amr Hassan" style={{
//              'width':' 250px',     'height': '250px',
//              'border-radius': '50%',
//              'border': '5px solid #1c1e21',
//             ' box-shadow': '0px 10px 20px rgba(0, 0, 0, 0.3)'
//         }}/>
//       </div>
//     </section>
//   );
// }
