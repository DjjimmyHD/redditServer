const express = require('express')
const router = express.Router()

router.get("/", (request, response, next) => {
    queries.list().then(profiles => {
        response.json({profiles});
    }).catch(next);
});