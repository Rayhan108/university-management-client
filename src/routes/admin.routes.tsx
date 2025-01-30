
import AcademicDepartment from '../Pages/Admin/AademicManagement/AcademicDepartment';
import AcademicFaculty from '../Pages/Admin/AademicManagement/AcademicFaculty';
import AcademicSemister from '../Pages/Admin/AademicManagement/AcademicSemister';
import CreateAcademicSemister from '../Pages/Admin/AademicManagement/CreateAcademicSemister';
import CreateADepartment from '../Pages/Admin/AademicManagement/CreateADepartment';
import CreateAFaculty from '../Pages/Admin/AademicManagement/CreateAFaculty';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateAdmin from '../Pages/Admin/userManagement/CreateAdmin';
import CreateFaculty from '../Pages/Admin/userManagement/CreateFaculty';
import CreateStudent from '../Pages/Admin/userManagement/CreateStudent';
import StudentData from '../Pages/Admin/userManagement/StudentData';
import StudentDetails from '../Pages/Admin/userManagement/StudentsDetails';




export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
   children:[
    {
      name: 'Create A.Semister',
      path: 'create-academic-semester',
      element: <CreateAcademicSemister/>,
    },
 
    {
      name: 'Academic Semister',
      path: 'academic-semester',
      element: <AcademicSemister />,
    },
    {
      name: 'Create A.Faculty',
      path: 'create-academic-faculty',
      element: <CreateAFaculty />,
    },
 
    {
      name: 'Academic Faculty',
      path: 'academic-faculty',
      element: <AcademicFaculty/>,
    },
    {
      name: 'Create A. Department',
      path: 'create-academic-department',
      element: <CreateADepartment />,
    },
 
    {
      name: 'Academic Department',
      path: 'academic-department',
      element: <AcademicDepartment />,
    },
   ]
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Students',
        path: 'students-data',
        element: <StudentData />,
      },
      {
        name: 'Student Details',
        path: 'student-data/:studentId',
        element: <StudentDetails />,
      },
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },

      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },
    ],
  },
];

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

//* Programatical way

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

//! Hard coded way

// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];