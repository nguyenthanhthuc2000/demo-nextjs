import styles from './Navbar.module.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import Image from 'next/image';
import Link from 'next/link';

import BgImageLogo from '../../public/assets/images/bg-logo.svg';
import ImageLogo from '../../public/assets/images/logo_2.svg';
import IconHome from '../../public/assets/icons/icon_home.svg';
import IconItem from '../../public/assets/icons/icon_item.svg';
import IconLog from '../../public/assets/icons/icon_log.svg';
import IconSetting from '../../public/assets/icons/icon_setting.svg';
import IconHelp from '../../public/assets/icons/icon_help.svg';
import IconStorefront from '../../public/assets/icons/icon_storefront.svg';

import IconHomeActive from '../../public/assets/icons/icon_home_active.svg';
import IconDown from '../../public/assets/icons/icon_down.svg';


function NavbarCustom() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="/" className="logo-box">
          <Image src={ImageLogo} alt='LogoImage' className="logo-image"/>
          <Image src={BgImageLogo} alt='LogoImage' className="logo-bg"/>
        </Navbar.Brand>
        <span className="menu-active">
        反映/操作ログ
        </span>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto nav-center`}>
            <Nav.Link href="/" className={`menu-item menu-item__active`}>
              <Image src={IconHomeActive} alt='IconHomeActive' />
              ホーム
            </Nav.Link>
            <Nav.Link href="/products" className="menu-item">
              <Image src={IconItem} alt='IconItem' />
              商品
            </Nav.Link>
            <Nav.Link href="/" className="menu-item">
              <Image src={IconLog} alt='IconLog' />
              ログ
            </Nav.Link>
            <Nav.Link href="/" className="menu-item">
              <Image src={IconSetting} alt='IconSetting' />
              設定
            </Nav.Link>
          </Nav>
          <Nav className="nav-right">
            <Button className="plan">プラン500</Button>
            <Dropdown className="dropdown-account">
              <Dropdown.Toggle id="dropdown-basic" className="store-front">
                <Image src={IconStorefront} alt='IconStorefront' />
                <p>グリニッジショップ（テスト１１テスト１１...</p>
                <Image src={IconDown} alt='IconDown' />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-account-item">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link eventKey={2} href="/" className="menu-help">
              <span className="menu-help-col"></span>  
              <Image src={IconHelp} alt='IconHelp' />
              ヘルプ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  );
}

export default NavbarCustom;