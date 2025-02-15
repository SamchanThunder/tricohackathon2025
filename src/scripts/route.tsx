import { RouteObject } from 'react-router-dom';
import MentorProfile from '../component/mentorProfile';

const routes: RouteObject[] = [
    {
        path: 'profile',
        element: <MentorProfile />
    },
]

export default routes;