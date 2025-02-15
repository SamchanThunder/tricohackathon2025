import { RouteObject } from 'react-router-dom';
import SignUp from '../pages/signup';
import UserRole from '../pages/userrole';
import Interests from '../pages/interests';
import AboutMe from '../pages/aboutme';
import Experience from '../pages/experience';
import MentorProfile from '../pages/mentorprofile';
import AddPfp from '../pages/addPfp';
const dummyMentorData = {
    id: "1",
    name: "Test User",
    image: "https://example.com/user.jpg",
    bio: "Some user bio",
    timeline: []
};

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
    path: '/AboutMe',
    element: <AboutMe />
  },
  {
    path: '/Timeline',
    element: <Experience />
  },
  {
    path: '/MentorProfile',
    element: <MentorProfile mentor={dummyMentorData}/>
  },
  {
    path: '/AddPfp',
    element: <AddPfp />
  }
];

export default routes;
