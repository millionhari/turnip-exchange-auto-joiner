const IN_GAME_NAME = 'Hari';
const ISLAND_NAME = 'Townsville'

const options = {
  name: IN_GAME_NAME,
  islandID: ISLAND_NAME,
  theme: 'light',
  turnipCode: 'd3012ebc',
  hostedTurnipCode:null,
  hasSeenDisclaimer:true,
  lastDingSoundTurnipCode: 'a76841d2',
  seenMerch: true
}

const setIntervalJoinQueue = setInterval(joinQueue, 50);

// Set localStorage settings
((options) => {
  window.localStorage['turnip-storage'] = JSON.stringify(options);
})(options)

function joinQueue() {
  // Clear Announcement
  let announcement = document.body.querySelector('.absolute.text-sm.bg-overlay-mask.text-overlay-foreground');
  let joinQueueBtn = document.body.querySelector('.bg-primary.text-background.p-2.rounded-lg');
  if (announcement) {
    announcement.click();
    console.log('announcement cleared');
  } else if (joinQueueBtn.innerText ===  "Join this queue") {
  // Join Queue
    joinQueueBtn.click();
    setTimeout(function(){
      document.body.querySelector('.bg-primary.text-background.p-2.rounded-lg').nextSibling.click();
      joined();
    }, 0);
  } else {
    console.log('attempting to join queue');
  }
}

function joined() {
  console.log('queue joined');
  clearInterval(setIntervalJoinQueue);
}