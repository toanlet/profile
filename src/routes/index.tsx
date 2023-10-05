import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import { PATH } from 'src/config/contanst';

import Contact from 'src/page/Client/Contact';
import ErrorPage from 'src/page/Error';
import Home from 'src/page/Client/Main';
import { MainLayout } from 'src/layout/MainLayout';
import { DetailUser } from 'src/page/Client/Detail';
import { PrivateLayout } from 'src/layout/PrivateLayout';
import { Login } from 'src/page/Client/Login';
import MyPage from 'src/page/Client/MyPage';
import { AdminLayout } from 'src/layout/AdminLayout';
import ManageUser from 'src/page/Admin/ManageUser';
import ManagePost from 'src/page/Admin/ManagePost';
import LatestPost from 'src/page/Admin/ManagePost/LatestPost';
import Overview from 'src/page/Admin/ManagePost/Overview';
import UserDetail from 'src/page/Admin/ManageUser/UserDetail';

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to={PATH.MAIN} /> },
      { path: PATH.MAIN, element: <Home /> },
      { path: PATH.CONTACT, element: <Contact /> },
      {
        element: (
          <PrivateLayout>
            <Outlet />
          </PrivateLayout>
        ),
        children: [
          {
            path: PATH.DETAIL,
            element: <DetailUser />,
          },
          {
            path: PATH.MY_PAGE,
            element: <MyPage />,
          },
        ],
      },
    ],
  },

  {
    path: PATH.ADMIN,
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to={PATH.USER_MANAGEMENT} /> },
      {
        path: PATH.USER_MANAGEMENT,
        element: <ManageUser />,
        children: [{ path: PATH.USER_DETAIL, element: <UserDetail /> }],
      },
      {
        path: PATH.POST_MANAGEMENT,
        element: <ManagePost />,
        children: [
          { path: PATH.LATEST_POST, element: <LatestPost /> },
          { path: PATH.OVERVIEW, element: <Overview /> },
        ],
      },
    ],
  },

  { path: PATH.LOGIN, element: <Login /> },

  { path: '*', element: <ErrorPage /> },
];

export const router = createBrowserRouter(routes);
