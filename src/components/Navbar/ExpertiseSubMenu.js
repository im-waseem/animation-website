import React from 'react';
import PropTypes from 'prop-types';

const ExpertiseSubMenu = ({ isOpen }) => {
  return (
    <div className={`HeaderSubmenu_submenu__group__BIGgm ${isOpen ? 'open' : ''}`}>
      <h2 className="HeaderSubmenu_submenu__heading__CpYC6">What We Do</h2>
      <ul className="HeaderSubmenu_submenu__list__be8NW">
        <li style={{ transform: 'translateX(0%) translateY(0%) rotate(0deg)' }}>
          <a
            className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--purple__lM_G4"
            href="/expertise/strategy-ux"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
              style={{ '--width': 12, '--height': 12 }}
            >
              {/* ... (icon path) */}
            </svg>
            Strategy & UX
          </a>
        </li>
        {/* Add more expertise links as needed */}
      </ul>
    </div>
  );
};

ExpertiseSubMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default ExpertiseSubMenu;
