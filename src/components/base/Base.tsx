import { Component } from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BaseStyle } from "./Base.styled";

export default class Base extends Component<any, any> {
  render() {
    return (
      <BaseStyle>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className="custom-bar justify-content-between"
          fixed="top"
        >
          <Navbar.Brand className="soc mb-n2" href="/">
            <Image src="img/hypexy.PNG" rounded className="logo"></Image>
          </Navbar.Brand>
          <div>
            <Link to="/twitch">
              <Navbar.Brand className="soc">Twitch</Navbar.Brand>
            </Link>
            <span className="soc mr-3 ml-1">•</span>
            <Link to="/tiktok">
              <Navbar.Brand className="soc">TikTok</Navbar.Brand>
            </Link>
          </div>
        </Navbar>
        <Container className="contain">{this.props.children}</Container>
      </BaseStyle>
    );
  }
}
