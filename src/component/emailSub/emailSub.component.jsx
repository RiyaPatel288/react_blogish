import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const EmailSub = () => {
    return (
        <>
            <hr />
            <Row>
                <p className="txt1">Subscribe to BLOGISH</p>
                <p className="txt2">To Get the latest post</p>

                <div>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="inputemail" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="secondary" type="submit" className="btnsubmit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Row>
        </>
    )
}
export default EmailSub;