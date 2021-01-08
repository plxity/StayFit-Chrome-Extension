chrome.alarms.onAlarm.addListener(function (alarm) {
  if (confirm('Ready to StayFit?')) {
    chrome.tabs.create({ url: 'background.html' });
  }
});
