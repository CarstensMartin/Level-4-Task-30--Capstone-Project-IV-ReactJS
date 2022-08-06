// Dear reviewer- I Commented out import fetch, latest express does not require it but is still in beta, please uncomment if needed with older version.
// import fetch from 'node-fetch';
const express = require('express');
const router = express.Router();

// GET USER information for GitHub
router.get('/:data', async (req, resp) => {
    // Get entered params and split to Array
    const searchParams = req.params.data.split(',');

    // Get the username and repo information from the array
    const username = searchParams[0];
    const repo = searchParams[1]

    // If repo is blank, use only username on fetch, if repo then use as part of URL
    let api_url;
    if(repo === ""){
        api_url = `https:api.github.com/users/${username}`;
    }else{
        api_url = `https:api.github.com/users/${username}/${repo}`;
    }

    const fetch_response = await fetch (api_url);
    const json = await fetch_response.json();

    resp.send(json)  
})

module.exports = router;
