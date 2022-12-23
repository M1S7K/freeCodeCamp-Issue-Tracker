<section>
<h1 align="center">Metric-Imperial Converter</h1>
<h2>Description</h2>
<p>A full stack JavaScript app that is functionally similar to this: https://issue-tracker.freecodecamp.rocks/.</p>
<h2>Purpose</h2>
  <p><a href="https://www.freecodecamp.org">freeCodeCamp</a> Quality Assurance certification</p>
<h2>Required steps</h2>
  <ol>
    <li>Complete the project.</li>
      <ul>
        <li>Complete the necessary routes in /routes/api.js</li>
        <li>Create all of the functional tests in tests/2_functional-tests.js</li>
        <li>Copy the sample.env file to .env and set the variables appropriately</li>
        <li>To run the tests uncomment NODE_ENV=test in your .env file</li>
        <li>To run the tests in the console, use the command npm run test. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"</li>
      </ul>
    <li>Write the following tests in tests/2_functional-tests.js:</li>
      <ul>
        <li>Create an issue with every field: POST request to /api/issues/{project}</li>
        <li>Create an issue with only required fields: POST request to /api/issues/{project}</li>
        <li>Create an issue with missing required fields: POST request to /api/issues/{project}</li>
        <li>View issues on a project: GET request to /api/issues/{project}</li>
        <li>View issues on a project with one filter: GET request to /api/issues/{project}</li>
        <li>View issues on a project with multiple filters: GET request to /api/issues/{project}</li>
        <li>Update one field on an issue: PUT request to /api/issues/{project}</li>
        <li>Update multiple fields on an issue: PUT request to /api/issues/{project}</li>
        <li>Update an issue with missing _id: PUT request to /api/issues/{project}</li>
        <li>Update an issue with no fields to update: PUT request to /api/issues/{project}</li>
        <li>Update an issue with an invalid _id: PUT request to /api/issues/{project}</li>
        <li>Delete an issue: DELETE request to /api/issues/{project}</li>
        <li>Delete an issue with an invalid _id: DELETE request to /api/issues/{project}</li>
        <li>Delete an issue with missing _id: DELETE request to /api/issues/{project}</li>
      </ul>
    <li>Submit the code.</li>
      <ul>
        <li>Save all the required files into a public repository and submit the URL.</li>
      </ul>
  </ol>
<h2>Result</h2>
<div>
  <p>All functional tests passed</p>
  <img src='./Result screenshots/Tests.png' width='380'>
</div>
<div>
  <p>All the necessary steps were completed</p>
    <img src='./Result screenshots/Task-completed.png' width='380'>
</div>
<h2>Helpful Links</h2>
<ol>
  <li><a href="https://www.chaijs.com">Chai Assertion Library</a>
  <li><a href="https://www.freecodecamp.org/learn/quality-assurance/">freeCodeCamp Quality Assurance course</a>
  <li><a href="https://www.mongodb.com/docs/">MongoDB Documentation</a>
</ol>
 </section>
