function addingEventListener() {
    const element = document.getElementById('button'); // Ensure the ID matches the one expected in your HTML
  
    // Add event listener for 'click' event
    element.addEventListener('click', function() {
      console.log('Button clicked!'); // Or trigger some other action
    });
  }
  