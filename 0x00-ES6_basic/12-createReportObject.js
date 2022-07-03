export default function createReportObject(employeesList) {
    ReportObj = {
        "allEmployees": [employeesList],
        getNumberOfDepartments: function(employeesList) {
            for (const value of employeesList) {
                num_of_departments += 1;
        }
        return num_of_departments;
        }
    }
    return ReportObj;
}
