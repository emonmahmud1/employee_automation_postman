const newman = require('newman');
require('dotenv').config(); //require install dotenv package
 
newman.run({
    // past collection url 
   collection: `https://api.postman.com/collections/34701780-a2bb936b-4248-49ef-85d4-193cd71c8fd8?access_key=${process.env.secretKey}`,
// Environment file
    environment: './TestEnv.postman_environment.json',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});