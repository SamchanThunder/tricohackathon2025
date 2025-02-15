import { RouteObject } from 'react-router-dom';
import SignUp from '../pages/signup';
import UserRole from '../pages/userrole';
import Interests from '../pages/interests';
import AboutMe from '../pages/aboutme';
import Experience from '../pages/experience';
import AddPfp from '../pages/addPfp';
import ProfileTemplate1 from '../pages/profiletemplate1';
import Jobs from '../pages/job';
import ProfileTemplate2 from '../pages/profiletemplate2';
import ProfileTemplate from '../pages/myProfile';
import SearchUsers from '../pages/searchUsers';
import ProfileTemplate3 from '../pages/profiletemplate3';

const routes: RouteObject[] = [
  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '/ChooseRole',
    element: <UserRole />
  },
  {
    path: '/Interests',
    element: <Interests />
  },
  {
    path: '/Jobs',
    element: <Jobs />
  },
  {
    path: '/AboutMe',
    element: <AboutMe />
  },
  {
    path: '/Timeline',
    element: <Experience />
  },
  {
    path: '/AddPfp',
    element: <AddPfp />
  },
  {
    path: '/users/evanrogers',
    element: <ProfileTemplate1 /> 
  },
  {
    path: '/users/sthompson',
    element: <ProfileTemplate2 />
  },
  {
    path: '/users/simonejohnson',
    element: <ProfileTemplate3 />
  },
  {
    path: '/users/myprofile',
    element: <ProfileTemplate /> },
  {
    path: '/searchusers',
    element: <SearchUsers />
  }
    
];

export default routes;
