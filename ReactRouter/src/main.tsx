import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.tsx'
import Contact from './component/Contact/Contact.tsx'
import Home from './component/Home/Home.tsx'
import About from './component/About/About.tsx'
import User from './component/User/User.tsx'
import GitHub from './component/GitHub/GitHub.tsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<App/> >
      <Route path = "" element=<Home/> ></Route>
      <Route path="contact" element = <Contact/> />
      <Route path="about" element=<About/> ></Route>
      <Route path="user/:userId" element=<User/> ></Route>
      <Route 
      // Loader Remaining 
      path="github" 
      element=<GitHub/> 
      >
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
