document.getElementById('pause').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const video = document.querySelector('video');
          if (video) video.pause();
        }
      });
    });
  });
  
  document.getElementById('play').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const video = document.querySelector('video');
          if (video) video.play();
        }
      });
    });
  });
  