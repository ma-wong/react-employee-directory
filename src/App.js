import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

function App() {

    const [employees, setEmployees] = useState([]);
    const [employeeSearch, setEmployeeSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setEmployeeSearch(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getRandomUser(employeeSearch)
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err));
    };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="EmployeeSearch"
                      value={employeeSearch}
                      onChange={handleInputChange}
                      placeholder="Search for an employee"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!employees.length ? (
              <h1 className="text-center">No employees to Display</h1>
            ) : (
              <RecipeList>
                {employees.map(employee => {
                  return (
                    <RecipeListItem
                        key={employee.name.last}
                        image={employee.picture.thumbnail}
                        name={employee.name.first}
                        phoneNumber={employee.phone}
                        email={employee.email}
                        dob={employee.dob.date}
                    />
                  );
                })}
              </RecipeList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
