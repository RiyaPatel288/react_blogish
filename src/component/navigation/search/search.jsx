import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './search.css'
import { useNavigate } from "react-router-dom";

const SearchNav = (props) => {

    const [value, setValue] = useState("");

    const navigate = useNavigate();
    
    function handleSubmit() {
        return navigate(`/search/${value}`);
    }

    return (
        <>
            <Form className="d-flex" method='GET' style={{ marginLeft: '100px', marginTop: '15px' }}>
                <Form.Control
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button type="button" onClick={handleSubmit} variant="dark">Search</Button>
                {/* <Button variant="outline-success" onClick={() =>{
                    {handle}{routeChange}
                }}>Search</Button> */}
            </Form>
        </>
    )
}
export default SearchNav;
