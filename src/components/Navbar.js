



import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Website</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/partners">Partners</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;










// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">My Website</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/aboutus">About Us</Link>
//             </li>
//             <li className="nav-item dropdown">
//               <Link 
//                 className="nav-link dropdown-toggle" 
//                 to="/services" 
//                 id="servicesDropdown" 
//                 role="button" 
//                 data-bs-toggle="dropdown" 
//                 aria-expanded="false"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 Services
//               </Link>
//               <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
//                 <li><Link className="dropdown-item" to="/services/call-center">Call Center Services</Link></li>
//                 <li><Link className="dropdown-item" to="/services/back-office">Back Office Services</Link></li>
//                 <li><Link className="dropdown-item" to="/services/fos">FOS Services</Link></li>
//                 <li><Link className="dropdown-item" to="/services/staffing">Staffing Services</Link></li>
//                 <li><Link className="dropdown-item" to="/services/voices-broadcasting">Voices Broadcasting</Link></li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <Link 
//                 className="nav-link dropdown-toggle" 
//                 to="/resources" 
//                 id="resourcesDropdown" 
//                 role="button" 
//                 data-bs-toggle="dropdown" 
//                 aria-expanded="false"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 Resources
//               </Link>
//               <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
//                 <li><Link className="dropdown-item" to="/resources/blogs">Blogs</Link></li>
//                 <li><Link className="dropdown-item" to="/resources/case-studies">Case Studies</Link></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/partners">Partners</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
