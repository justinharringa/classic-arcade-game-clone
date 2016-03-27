module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'js/app.js',
            'test/**/*.spec.js'
        ]
    });
};