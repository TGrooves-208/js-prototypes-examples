  // We need to use abstration to hide the complexity
  // This as it is written breaks abstraction
  // The object is now useless
  // Premature optimization is the root of all evil

function Stopwatch() { 
    let startTime, endTime, running, duration = 0;
  
    // This goes against OOP concepts
    // This is a readonly property
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; },
      set: function(value) {duration = value;}
    });
  
    Object.defineProperty(this, 'startTime', {
      get: function() { return startTime; }
    });
  
    Object.defineProperty(this, 'endTime', {
      get: function() { return endTime; }
    });
  
    Object.defineProperty(this, 'running', {
      get: function() { return running; }
    });
  }
  
  
  Stopwatch.prototype.start = function() {
    if (this.running) 
      throw new Error('Stopwatch has already started.');
    
    this.running = true; 
  
    this.startTime = new Date();
  };
  
  Stopwatch.prototype.stop = function() {
    if (!this.running) 
      throw new Error('Stopwatch is not started.');
  
    this.running = false; 
      
    this.endTime = new Date();
  
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    // This is a read only property
    this.duration += seconds; 
  };
  
  Stopwatch.prototype.reset = function() { 
    this.startTime = null;
    this.endTime = null;
    this.running = false; 
    this.duration = 0; 
  };
  
  const sw = new Stopwatch();
  sw.duration = 10;
  console.table(sw.duration);
  

  