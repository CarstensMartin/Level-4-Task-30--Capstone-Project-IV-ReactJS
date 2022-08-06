// Dear reviewer- I Commented out import fetch, latest express does not require it but is still in beta, please uncomment if needed with older version.
// import fetch from 'node-fetch';
const express = require('express');
const router = express.Router();

// GET USER information for GitHub
router.get('/:data', async (req, resp) => {
    // Get entered params 
    const searchParams = req.params.data

    const api_url = `https://gitlab.com/api/v4/projects/${searchParams}/repository/commits`;

    const fetch_response = await fetch (api_url);
    const json = await fetch_response.json();

    resp.send(json)  
})

module.exports = router;
