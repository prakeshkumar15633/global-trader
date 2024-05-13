import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home'
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactForm from './components/Contact/Contact';
import RootLayout from "./components/RootLayout";
import ErrorRoute from "./components/ErrorRoute";
import Service1 from './components/servicepages/service6';
import Service2 from './components/servicepages/service2';
import Service3 from './components/servicepages/service3';
import Service4 from './components/servicepages/service7';
import Service5 from './components/servicepages/service5';
import Service6 from './components/servicepages/service5';
import Service7 from './components/servicepages/service4';
import Service8 from './components/servicepages/service8';
import Service9 from './components/servicepages/service9';
import Gallery from './components/Gallery/Gallery';
import { FaWhatsapp } from 'react-icons/fa';
// import './App.css'

function App() {
    let router = createBrowserRouter([
        {
            path: '/global-trader',
            element: <RootLayout />,
            errorElement: <ErrorRoute />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'services',
                    element: <Services />
                },
                {
                    path: 'aboutus',
                    element: <AboutUs />
                },
                {
                    path: 'contact',
                    element: <ContactForm />
                },
                {
                    path: 'service1',
                    element: <Service8 />
                },
                {
                    path: 'service2',
                    element: <Service2 />
                },
                {
                    path: 'service3',
                    element: <Service5 />
                },
                {
                    path: 'service4',
                    element: <Service4 />
                },
                {
                    path: 'service5',
                    element: <Service1 />
                },
                {
                    path: 'service6',
                    element: <Service6 />
                },
                {
                    path: 'service7',
                    element: <Service7 />
                },
                {
                    path: 'service8',
                    element: <Service9 />
                },
                {
                    path: 'service9',
                    element: <Service3 />
                },
                {
                    path: 'gallery',
                    element: <Gallery />
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router} />
            <div className='p-3 rounded-circle' style={{ backgroundColor: 'rgb(0,0,0,0.5)', position: 'fixed', bottom: '10vh', right: '10vw' , zIndex:5}}>
                <a href="https://wa.me/918939169177" target="_blank" rel="noopener noreferrer" className="whatsapp-icon" style={{ color: 'inherit' }}>
                    <FaWhatsapp style={{ fontSize: '10vw', color: '#0BF446' }} />
                </a>
            </div>
        </div>
    )
}

export default App;