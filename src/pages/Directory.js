import React, { Component } from "react";
import API from "../utils/API";
import { EmployeeList, EmployeeListItem } from "../components/SearchResultsContainer";
import SearchBar from "../components/SearchBar";
import Jumbotron from "../components/Jumbotron";
import "../style/style.css";

class Directory extends Component {
    state = {
        employees: [],
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
            this.orderEmployeesByName()
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

    render() {
        return(
            <div>
                <Jumbotron />
                <SearchBar />
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
                    {this.state.employees.map(employee => (
                        <EmployeeListItem 
                            firstName= {employee.name.first}
                            lastName = {employee.name.last}
                            img={employee.picture.thumbnail}
                            phoneNum = {employee.phone}
                            email = {employee.email}
                            DOB = {employee.dob.date}
                        />
                    ))}
                </EmployeeList>
            </div>
        )
    }
}

export default Directory;