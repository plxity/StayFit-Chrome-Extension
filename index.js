// Restore Checkbox value
function restoreOptions() {
  // Use default value = false.
  chrome.storage.sync.get(
    {
      value: false,
    },
    function (items) {
      document.getElementsByClassName('toggler')[0].checked = items.value;
    }
  );
}

// An object which contains all the function required to start/stop and setup the alarm
let alarmClock = {
  onHandler: function (e) {
    chrome.alarms.create('myAlarm', {
      delayInMinutes: 0.1,
      periodInMinutes: 0.2,
    });
    setTimeout(()=>{
      window.close();
    },600)
    
  },
  offHandler: function (e) {
    chrome.alarms.clear('myAlarm');
    setTimeout(()=>{
      window.close();
    },600)
  
  },

  setup: function () {
    var toggler = document.getElementsByClassName('toggler');
    toggler[0].addEventListener('change', () => {
      if (toggler[0].checked == true) {
        chrome.storage.sync.set(
          {
            value: true,
          },
          function () {
            console.log('Switch Saved as true');
             alarmClock.onHandler();
          }
        );
      } else {
        chrome.storage.sync.set(
          {
            value: false,
          },
          function () {
            console.log('Switch Saved as false');
             alarmClock.offHandler();
          }
        );
      }
    });
  },
};

// To fire when DOM is loaded and calling restoreOptions to check the status of checkbox
document.addEventListener('DOMContentLoaded', function () {
  restoreOptions();
  alarmClock.setup();
});
