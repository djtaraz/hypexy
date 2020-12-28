import { Component } from "react";
import { Col, Row, Form, Image } from "react-bootstrap";
import { TiktokStyle } from "./Tiktok.styled";

type State = { quantity: number };

export default class Tiktok extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      quantity: 10,
    };
  }

  render() {
    return (
      <TiktokStyle>
        <Row>
          <Col className="d-flex justify-content-center">
            <Form
              id="tiktok-form"
              className="m-5 p-5 rounded shadow text-white"
            >
              <Form.Row className="mb-4">
                <Col className="d-flex justify-content-center">
                  <Image
                    src="https://i2.wp.com/itgetsbetter.org/wp-content/uploads/2020/08/TikTok-logo-CMYK-Horizontal-white-simplified_50_2.png?fit=1200%2C500&ssl=1&w=640"
                    fluid
                    width="450px"
                  ></Image>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Text id="notes" className="px-3 pt-3 pb-1 rounded">
                    <p>• Views on any of your videos on TikTok</p>
                    <p>• Delivery in 10 min with full support</p>
                  </Form.Text>
                </Col>
              </Form.Row>
              <Form.Row className="mt-3 ">
                <Col className="text-center">
                  <Form.Label>Video Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://www.tiktok.com/@addisonre/video/6908144864261688582"
                  />
                </Col>
              </Form.Row>
              <Form.Row className="mt-3">
                <Col className="d-flex justify-content-center">
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="CVKSA72K97V2S"
                    />
                    <table>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <input
                            type="hidden"
                            name="on0"
                            value="TikTok Views"
                          />
                          TikTok Views
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select name="os0">
                            <option value="1000 Views">
                              1000 Views $1.99 USD
                            </option>
                            <option value="5000 Views">
                              5000 Views $5.99 USD
                            </option>
                            <option value="10000 Views">
                              10000 Views $10.99 USD
                            </option>
                            <option value="100000 Views">
                              100000 Views $99.99 USD
                            </option>
                          </select>{" "}
                        </td>
                      </tr>
                    </table>
                    <div style={{ textAlign: "center" }}>
                      <input type="hidden" name="currency_code" value="USD" />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif"
                        // border="0"
                        name="submit"
                        alt="PayPal - The safer, easier way to pay online!"
                      />
                      <img
                        alt=""
                        // border="0"
                        src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                        width="1"
                        height="1"
                      />
                    </div>
                  </form>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </TiktokStyle>
    );
  }
}
