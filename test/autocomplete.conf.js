exports.config = {
    //TODO: directConnect:false when using headless chrome
    directConnect: true,
    baseUrl: '',
    onPrepare: function () {
        setTimeout(function () {
            var x = 0, y = 0;
            browser.driver.manage().window().setPosition(x, y);
            browser.driver.executeScript(function () {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then(function (result) {
                browser.driver.manage().window().setSize(result.width, result.height);
            });
        });
    },
    multiCapabilities: [{
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--no-sandbox', '--disable-web-security']
        }
    }
    ],
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    framework: 'jasmine',
    specs: ['./color/test_colorTemplate.spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000 * 60 * 10
    }
};
