module.exports = {
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: require('chromedriver').path,
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities: {
        browserName: 'chrome',
      }
    }
  }
};