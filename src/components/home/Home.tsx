import { Component } from "react";
import { HomeStyle } from "./Home.styled";
import { Row, Col, Card, CardDeck, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component<any, any> {
  render() {
    return (
      <HomeStyle>
        <Row>
          <Col>
            <Row>
              <Col sm="8">
                <h3>
                  <span style={{ color: "#ffe4df", textShadow: "1px 1px" }}>
                    Become famous{" "}
                  </span>
                  by attracting users to your page right now. Purchase viewers
                  now
                  <span style={{ color: "#ffe4df" }}> Twitch </span>
                  and<span style={{ color: "#ffe4df" }}> TikTok </span>viewers.
                  Give us a try, order a demo package and watch your content go
                  viral.
                </h3>
              </Col>
              <Col sm="4">
                <Image
                  id="anim-img"
                  width="85%"
                  src="https://streamhub.us/images/pudge.png"
                ></Image>
              </Col>
            </Row>
            <Row className="pt-5">
              <Col sm="5">
                <Image
                  width="80%"
                  className="mt-n5"
                  src="https://media2.giphy.com/media/Xfh1N9XrKaLP34KWGS/giphy.gif"
                ></Image>
              </Col>
              <Col sm="7">
                <h3>
                  We treat each costumer
                  <span style={{ color: "#ffe4df", textShadow: "1px 1px" }}>
                    {" "}
                    individually.{" "}
                  </span>
                  On top of boosting your content viewers you will get
                  personalized marketing advice to help you get recognized on
                  social media.
                </h3>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col className="text-center">
                <h1 style={{ color: "#ffe4df" }}>Services</h1>
                <Row>
                  <CardDeck>
                    <Card className="shadow" id="card">
                      <Card.Header>
                        <h1>Twitch Viewers</h1>
                      </Card.Header>
                      <Card.Img
                        id="twitch-img"
                        variant="top"
                        src="https://i.pinimg.com/originals/ec/fa/37/ecfa37c5f4abaad2f6cf39f4316fb9c7.gif"
                      />
                      <Card.Body>
                        <Card.Text>
                          Purchase any amount of Twitch viewers for your stream
                          right now and move up in the recommended section for
                          your category.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Link to="/twitch">
                          <Button id="twitch-order">Order</Button>
                        </Link>
                      </Card.Footer>
                    </Card>
                    <Card className="shadow" id="card">
                      <Card.Header>
                        <h1>TikTok Views</h1>
                      </Card.Header>
                      <Card.Img
                        variant="top"
                        src="https://miro.medium.com/max/1280/1*H32XskhSdhga50tHFNjr2w.gif"
                      />
                      <Card.Body>
                        <Card.Text>
                          Purchase any amount of TikTok viewers for your content
                          right now, make it on the for you page and become a
                          popular creator.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Link to="/tiktok">
                          <Button id="tiktok-order">Order</Button>
                        </Link>
                      </Card.Footer>
                    </Card>
                  </CardDeck>
                </Row>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <div id="why-us">
                  <h1 style={{ color: "#ffe4df" }}>Why Us?</h1>
                  <h4>
                    You have the chance to grow your brand with our program. We
                    have a unique algorithm that brings the audience directly to
                    your page and retains engagement. We create the opportunity
                    for you to get real-time users through popularity of your
                    content.
                  </h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </HomeStyle>
    );
  }
}
