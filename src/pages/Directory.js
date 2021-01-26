import React, { Component } from "react";
import API from "../utils/API";
import { EmployeeList, EmployeeListItem } from "../components/SearchResultsContainer";
import Jumbotron from "../components/Jumbotron";
import "../style/style.css";

class Directory extends Component {
    state = {
        employees: [],
        filter: "",
        orderByName: true
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getRandomUser()
        .then(res => {
            console.log(res);
            this.setState({
                employees: res.data.results
            })
        })
        .catch(err => console.log(err))
    };

    orderEmployeesByName = () => {
        if (this.state.orderByName === true) {
            this.setState({
                employees: this.state.employees.sort((a,b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0)),
                orderByName: false
            })
        }
        else {
            this.setState({
                employees: this.state.employees.sort((a,b) => (a.name.first < b.name.first) ? 1 : ((b.name.first < a.name.first) ? -1 : 0)),
                orderBool: true
            });
        }
    }

    handleInputChange = event => {
        this.setState({
            filter: event.target.value
        });
    };

    render() {
        const { filter, employees } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = employees.filter(employee => {

            return employee.name.first.toLowerCase().includes(lowercasedFilter)
        });

        return(
            <div>
                <Jumbotron />
                <div className="container">
                    <div class="input-group mb-3">
                        <input 
                            value={filter}
                            onChange={this.handleInputChange}
                            name="employee"
                            type="text"
                            class="form-control"
                            placeholder="Search"
                            aria-describedby="button-addon2"
                            id="employee"
                        />
                    </div>
                </div>

                <div className="container">
                    
                    <div className="row">

                        <div className="col-md-1 column-title">
                            <p>Image</p>
                        </div>

                        <div className="col-md-3 column-title">
                            <button onClick={this.orderEmployeesByName}>Name</button>
                        </div>

                        <div className="col-md-2 column-title">
                            <p>Phone</p>
                        </div>

                        <div className="col-md-3 column-title">
                            <p>Email</p>
                        </div>

                        <div className="col-md-3 column-title">
                            <p>DOB</p>
                        </div>

                    </div>

                </div>
                <EmployeeList>
                    {filteredData.map(employee => (
                        <EmployeeListItem
                            value={employee}
                            key={employee.phone}
                            firstName= {employee.name.first}
                            lastName = {employee.name.last}
                            img={employee.picture.thumbnail}
                            phoneNum = {employee.phone}
                            email = {employee.email}
                            DOB = {employee.dob.date}
                        />
                    ))
                    }
                </EmployeeList>
            </div>
        )
    }
}

export default Directory;