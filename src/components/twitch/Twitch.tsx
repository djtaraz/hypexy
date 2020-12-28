import { Component } from "react";
import { Col, Row, Form, Image } from "react-bootstrap";
import { TwitchStyle } from "./Twitch.styled";

type State = { quantity: number };

export default class Twitch extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      quantity: 10,
    };
  }

  render() {
    return (
      <TwitchStyle>
        <Row>
          <Col className="d-flex justify-content-center">
            <Form
              id="twitch-form"
              className="m-5 p-5 rounded shadow text-white"
            >
              <Form.Row className="mb-4">
                <Col className="d-flex justify-content-center">
                  <Image
                    src="data:image/png;base64,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"
                    fluid
                  ></Image>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Text id="notes" className="px-3 pt-3 pb-1 rounded">
                    <p>• Viewers stay for the duration of the stream</p>
                    <p>• Delivery in 10 min with full support</p>
                  </Form.Text>
                </Col>
              </Form.Row>
              <Form.Row className="mt-3 ">
                <Col className="text-center">
                  <Form.Label>Stream URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://twitch.tv/ninja"
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
                      value="QNK79YCJ2DYJS"
                    />
                    <table>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <input
                            type="hidden"
                            name="on0"
                            value="Twitch Views"
                          />
                          Twitch Viewers
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select name="os0">
                            <option value="10 Viewers">
                              10 Viewers $1.99 USD
                            </option>
                            <option value="20 Viewers">
                              20 Viewers $3.99 USD
                            </option>
                            <option value="50 Viewers">
                              50 Viewers $7.99 USD
                            </option>
                            <option value="100 Viewers">
                              100 Viewers $14.99 USD
                            </option>
                          </select>{" "}
                        </td>
                      </tr>
                    </table>
                    <div style={{ textAlign: "center" }}>
                      <input type="hidden" name="currency_code" value="USD" />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_SM.gif"
                        // border="0"
                        name="submit"
                        alt="PayPal – The safer, easier way to pay online!"
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
      </TwitchStyle>
    );
  }
}
