import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../styles/Btn.css";
import image from '../assets/logo_Magali.png';
import { ROOT_FILE_PATIENT, ROOT_HOME, ROOT_NEW_CONSULTATION } from "../Constantes/routeConstante";

export interface NavRoute {
  route: string;
  label: string;
  displayLink: boolean;
};

const Header = () => {

  const navItems: NavRoute[] = [
    {
      route: ROOT_HOME,
      label: 'Accueil',
      displayLink: true,
    },
    {
      route: ROOT_NEW_CONSULTATION,
      label: 'Nouvelle consultation',
      displayLink: true,
    },
    {
      route: ROOT_FILE_PATIENT,
      label: 'Dossier patient',
      displayLink: true,
    }
  ]

  const NavList = () => (
    <ul className="list">
      {navItems.map(
        (item) => item.displayLink && (
          <Link to={item.route}>
            <li key={item.route}>
              {item.label}
            </li>
          </Link>
        )
      )}
    </ul>
  );

  return (
    <header>
      <div className="Composant">
        <div>
          <Link to="/">
            <img src={image} alt="logo" className="logo" />
          </Link>
        </div>
        <nav>
          <NavList />
        </nav>
      </div>
    </header>
  );
};

export default Header;
