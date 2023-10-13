import { PATH } from 'src/config/contanst';
import './styles.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'src/i18n';

const navbarList = [
  {
    title: i18n.t('dashboard'),
    link: PATH.DASHBOARD,
    icon: <i className="fa fa-home" aria-hidden="true"></i>,
  },
  {
    title: i18n.t('account_setting'),
    link: PATH.ACCOUNT_SETTING,
    icon: <i className="fa fa-cog" aria-hidden="true"></i>,
  },
];

const NavBar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="navbar-admin">
      <div className="logo">{t('admin')}</div>
      <ul>
        {navbarList.map((nav) => {
          return (
            <li
              key={nav.title}
              className={`item-list ${
                pathname.includes(nav.link) && 'active-list'
              }`}
              onClick={() => {
                navigate(nav.link);
              }}
            >
              <NavLink key={nav.title} to={nav.link} className="link">
                <span>{nav.icon}</span> <span>{nav.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
