const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    // 1. Create an issue with every field: POST request to /api/issues/{project}
    // 2. Create an issue with only required fields: POST request to /api/issues/{project}
    // 3. Create an issue with missing required fields: POST request to /api/issues/{project}
    // 4. View issues on a project: GET request to /api/issues/{project}
    // 5. View issues on a project with one filter: GET request to /api/issues/{project}
    // 6. View issues on a project with multiple filters: GET request to /api/issues/{project}
    // 7. Update one field on an issue: PUT request to /api/issues/{project}
    // 8. Update multiple fields on an issue: PUT request to /api/issues/{project}
    // 9. Update an issue with missing _id: PUT request to /api/issues/{project}
    // 10. Update an issue with no fields to update: PUT request to /api/issues/{project}
    // 11. Update an issue with an invalid _id: PUT request to /api/issues/{project}
    // 12. Delete an issue: DELETE request to /api/issues/{project}
    // 13. Delete an issue with an invalid _id: DELETE request to /api/issues/{project}
    // 14. Delete an issue with missing _id: DELETE request to /api/issues/{project}
});
