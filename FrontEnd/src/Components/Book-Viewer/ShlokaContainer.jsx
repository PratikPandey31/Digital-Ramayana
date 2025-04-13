// import React from 'react';
// import { Link } from 'react-router-dom';
// import SholkaBox from './SholkaBox';
// import Footer from "../Footer/Footer";
// import useShloka from '../../Hooks/Shloka';
// import { useLocation } from 'react-router-dom';
// import NextPrevButton from './PrevButton';
// import NavigateButtonsContainer from './NavigateButtonsContainer';
// import { useDispatch, useSelector } from 'react-redux';
// import { addRamayan } from '../../Features/ramayan/ramayanSlice';
// import './ShlokaViewer.css';


// export default function SholkaContainer() {
//   const dispatch = useDispatch();

//   const location = useLocation();
//   const currentUrl = location.pathname + location.search + location.hash;
//   const urlSegments = currentUrl.split('/');
//   let id = urlSegments[urlSegments.length - 1] || urlSegments[urlSegments.length - 2];

//   let subid;
//   if (id.length >= 2) {
//     subid = id;
//     id = urlSegments[urlSegments.length - 2] || urlSegments[urlSegments.length - 3];
//   }
//   const { shlokas, error } = useShloka(id, subid);
//   dispatch(addRamayan(shlokas));

//   const Shlokas = useSelector(state => state.shlokas);
//   const fontSize = useSelector(state => state.fontSize);
//   return (
//     <div className='overflow-scroll max-h-screen overflow-x-hidden w-1/2 scrollbar snap-y'>
//       {Shlokas[0] && Shlokas[0].description && <div className='border rounded-md w-[90%] mx-auto p-4 shadow-lg bg-orange-100 mb-3 dark:bg-orange-200/85'>
//         <p className={`font-baloo font-semibold text-slate-500 my-2 dark:text-slate-700 text-${fontSize==1 ? 'md' : fontSize==2 ? 'lg' : 'xl'}`}>
//           <span className='text-orange-500'>Description of sarga {id}</span> <br /> 
//           {Shlokas[0].description}
//         </p>
//       </div>}

//       {Shlokas &&
//         Array.isArray(Shlokas) && shlokas.map((Shlok) => (
//           <SholkaBox key={Shlok.id} Shlok={Shlok} />
//         ))
//       }

//       {error &&  
//         //
//         <div style={{ position: 'relative' }}>
//       {error && (
//         <div className="error-container">
//           <p className="error-message">{error}</p>
//           <Link to="/login">
//             <button className="login-button">Go to Login</button>
//           </Link>
//         </div>)}


//       {shlokas.map((s, index) => (
//         <div key={index}>
//           <p>{s.text}</p>
//         </div>
//       ))}
//     </div>}
//       <NavigateButtonsContainer/>
//       <Footer />
//     </div>
//   );
// }import React from 'react';
import React from 'react'; // ✅ this line is necessary!
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SholkaBox from './SholkaBox';
import Footer from "../Footer/Footer";
import useShloka from '../../Hooks/Shloka';
import NavigateButtonsContainer from './NavigateButtonsContainer';
import { addRamayan } from '../../Features/ramayan/ramayanSlice';
import './ShlokaViewer.css';


export default function SholkaContainer() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUrl = location.pathname + location.search + location.hash;
  const urlSegments = currentUrl.split('/');
  let id = urlSegments[urlSegments.length - 1] || urlSegments[urlSegments.length - 2];

  let subid;
  if (id.length >= 2) {
    subid = id;
    id = urlSegments[urlSegments.length - 2] || urlSegments[urlSegments.length - 3];
  }

  const { shlokas, error } = useShloka(id, subid);
  const fontSize = useSelector(state => state.fontSize);

  React.useEffect(() => {
    if (shlokas && !error) {
      dispatch(addRamayan(shlokas));
    }
  }, [shlokas, error, dispatch]);

  const Shlokas = useSelector(state => state.shlokas);

  return (
    <div className='overflow-scroll max-h-screen overflow-x-hidden w-1/2 scrollbar snap-y'>

      {Shlokas[0]?.description && (
        <div className='border rounded-md w-[90%] mx-auto p-4 shadow-lg bg-orange-100 mb-3 dark:bg-orange-200/85'>
          <p className={`font-baloo font-semibold text-slate-500 my-2 dark:text-slate-700 text-${fontSize === 1 ? 'md' : fontSize === 2 ? 'lg' : 'xl'}`}>
            <span className='text-orange-500'>Description of sarga {id}</span> <br />
            {Shlokas[0].description}
          </p>
        </div>
      )}

      {error ? (
  <div className="error-container">
    <p className="error-message">{error}</p>

    <div className="login-wrapper">
      <Link to="/login">
        <button className="login-button">Go to Login</button>
      </Link>
    </div>
  </div>
) : (
  shlokas?.map((shlok) => (
    <SholkaBox key={shlok.id} Shlok={shlok} />
  ))
)}


      <NavigateButtonsContainer />
      <Footer />
    </div>
  );
}
