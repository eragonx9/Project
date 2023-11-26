import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Tech from "../Domain/Tech";
import Cult from "../Domain/Cult";
import Sport from "../Domain/Sport";
import Quizzinga from "../Domain/Tech/Quizzinga";
import Cipher from "../Domain/Tech/Cipher";
import Debsoc from "../Domain/Tech/Debsoc";
import Cybros from "../Domain/Tech/Cybros";
import Phoenix from "../Domain/Tech/Phoenix";
import Astronomy from "../Domain/Tech/Astronomy";
import LC from "../Domain/Cult/LC";
import Capriccio from "../Domain/Cult/Capriccio";
import Insignia from "../Domain/Cult/Insignia";
import Imagination from "../Domain/Cult/Imagination";
import Rendition from "../Domain/Cult/Rendition";
import Mediacell from "../Domain/Cult/Mediacell";
import Aaveg from "../Domain/Cult/Aaveg";
import Eminence from "../Domain/Cult/Eminence";
import Cricket from "../Domain/Sport/Cricket";
import Football from "../Domain/Sport/Football";
import Kabaddi from "../Domain/Sport/Kabaddi";
import Badminton from "../Domain/Sport/Badminton";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/tech",
    element: <Tech />,
  },
      {
        path: "/tech/quizzinga",
        element: <Quizzinga />,
      },
      {
        path: "/tech/debsoc",
        element: <Debsoc />,
      },
      {
        path: "/tech/Cipher",
        element: <Cipher />,
      },
      {
        path: "/tech/Cybros",
        element: <Cybros />,
      },
      {
        path: "/tech/phoenix",
        element: <Phoenix />,
      },
      {
        path: "/tech/astronomy",
        element: <Astronomy />,
      },
    


  {
    path: "/cult",
    element: <Cult />,
  },
    {
      path:"/cult/lc",
      element:<LC/>
    },
    {
      path: "/cult/capriccio",
      element: <Capriccio />
    },
    {
      path: "/cult/insignia",
      element: <Insignia />
    },
    {
      path: "/cult/imagination",
      element: <Imagination />
    },
    {
      path: "/cult/rendition",
      element: <Rendition />
    },
    {
      path: "/cult/mediacell",
      element: <Mediacell />
    },
    {
      path: "/cult/aaveg",
      element: <Aaveg />
    },
    {
      path: "/cult/eminence",
      element: <Eminence />
    },
  
    
  {
    path: "/sport",
    element: <Sport />,
  },
      {
        path: "/sport/badminton",
        element: <Badminton />,
      },
      {
        path: "/sport/cricket",
        element: <Cricket/>,
      },
      {
        path: "/sport/football",
        element: <Football />,
      },
      {
        path: "/sport/kabaddi",
        element: <Kabaddi />,
      },
      {
        path:"/login",
        element:<Login/>
      }
     

]);
export default router;
