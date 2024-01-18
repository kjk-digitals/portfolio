document.getElementById('logo').onclick = function(color) {
    color.target.style.color = 'purple';
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function change() {
    for (const color of ['red', 'blue', 'green', 'white']) {
      document.getElementById('title1').style.color = color;
      await delay(1000);
    }
  }
  
  window.onload = change;


