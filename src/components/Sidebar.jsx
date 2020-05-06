import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ButtonGroup className="SideButtons" vertical>
          <Link to="/waiter/Hamburguesas">
            <Button>Hamburguesas</Button>
          </Link>
          <Link to="/waiter/Agregados">
            <Button>Agregados</Button>
          </Link>
          <Link to="/waiter/Compartir">
            <Button>Compartir</Button>
          </Link>
          <Link to="/waiter/Tragos">
            <DropdownButton
              as={ButtonGroup}
              title="Tragos"
              id="bg-vertical-dropdown-1"
            >
              <Link to="/waiter/Tragos/Tematicos">
                <Dropdown.Item eventKey="1">Temáticos</Dropdown.Item>
              </Link>
              <Dropdown.Item eventKey="2">Cocktails</Dropdown.Item>
              <Dropdown.Item eventKey="3">Cervezas</Dropdown.Item>
            </DropdownButton>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default SideBar;
