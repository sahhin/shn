// This script runs operations *synchronously* which is normally not the best
// approach, but it keeps things simple, readable, and for now is good enough.

const {gitDescribeSync} = require('git-describe');
const commitCount = require('git-commit-count');
const {writeFileSync} = require('fs');
const gitInfo = gitDescribeSync();

var obj = {
    version: gitDescribeSync(),
    count: commitCount(),
};

const versionInfoJson = JSON.stringify(obj);

writeFileSync('src/assets/version/app-version.json', versionInfoJson);
