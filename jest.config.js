module.exports =  {
//    "collectCoverage": false,
    "collectCoverageFrom": [
        "src/**/*.js",
        "!**/node_modules/**",
        "!**/playground/**",
        "!**/setTests.js"
    ],
    "setupFiles": [
        "raf/polyfill",
        "<rootDir>/src/tests/setupTests.js"
    ],
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ]
}