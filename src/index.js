var optimizelySDK = require('@optimizely/optimizely-sdk');

var optimizelyClientInstance = optimizelySDK.createInstance({ datafile: '#ADD YOUR OWN DATAFILE HERE#' });
var userId = "123456";
var variation = optimizelyClientInstance.activate('simple_test', userId);

window.optimizelyClientInstance = optimizelyClientInstance;