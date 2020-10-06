// Step 1: Initialize Optimizely
const optimizely = optimizelySdk.createInstance({
  sdkKey: 'TQFkGiY8MGw9ZqRYpnVtnH',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1*1000
  },
  logLevel: 'info',
});

var user = 'user123';

function updatePage() {
  // Step 2: Install a feature flag
  // var enabled = optimizely.isFeatureEnabled('astronaut_feature', 'user123')

  // var flag = document.getElementById('astronaut');
  // if (enabled) {
  //   flag.style.display = "block";
  // } else {
  //   flag.style.display = "none";
  // }

  // Step 2 Alternative: Install an AB test
  var variation = optimizely.activate('ab_test', user);
  if (variation === 'variation_1') {
    // execute code for variation_1
    var var1 = document.querySelector('.var1');
    var1.style.display = 'block';
  } else if (variation === 'variation_2') {
    // execute code for variation_2
    var var2 = document.querySelector('.var2');
    var2.style.display = 'block';
  } else {
    // execute default code
  }
}

if (optimizely) {
  optimizely.onReady().then(updatePage);
  optimizely.notificationCenter.addNotificationListener(
    optimizelySdk.enums.NOTIFICATION_TYPES.OPTIMIZELY_CONFIG_UPDATE,
    updatePage
  );
}

function getId() {
  var key = 'optimizely-ctf-userId'
  var userId = localStorage.getItem(key);
  if (!userId) {
    userId = String(Math.random());
    localStorage.setItem(key, userId);
  }
  return userId;
}
