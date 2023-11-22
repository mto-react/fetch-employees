import DisplayEmployee from "./DisplayEmployee";

function DisplayEmployees({employees}) {
    console.log(employees)

    return (
        // <div className=""></div>
        employees && (
            <div className="employees">
            {
                employees.map((employee) => (
                    <div className="employee" key = {employee.name.first}>
                        <DisplayEmployee employee = {employee} />             
                    </div>
                ))
            }
            </div>
        )
    );
}

export default DisplayEmployees;