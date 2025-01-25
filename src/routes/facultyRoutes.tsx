import FacultyDashboard from "../Pages/Faculty/FacultyDashboard";
import OfferedCourse from "../Pages/Faculty/offeredCourse";

export const facultyPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <FacultyDashboard />,
    },
   
        {
          name: 'Offered Course',
          path: 'offred-course',
          element: <OfferedCourse />,
        },
        
      ]
