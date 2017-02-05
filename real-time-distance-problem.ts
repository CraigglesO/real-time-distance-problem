
interface Block {
  blockGap: null;
  currentBlock: number;
  highestBlock: number;
  startingBlock: number;
  warpChunksAmount: null;
  warpChunksProcessed: null;
};

interface Construct {
  block:     Block;
  velocityA: number;
  velocityB: number;
}

class RTDP {
  storeSize:        number;
  LRU:              Array<Construct>;
  averageVelocityA: number;
  averageVelocityB: number;
  startTime:        number;
  newTime:          number;
  constructor(storeSize: number) {
    const self = this;

    self.storeSize        = storeSize;
    self.LRU              = [];
    self.averageVelocityA = 0;
    self.averageVelocityB = 0;
    self.startTime        = Date.now() / 1000; // Seconds
    self.newTime          = 0;

  }

  update(lru: Block): string {
    const self = this;
    // Add to the LRU
    self.set(lru);
    // If the first block:
    if (self.newTime === 0) {
      self.LRU[0].velocityA = 0;
      self.LRU[0].velocityB = 0;
    }
    // Set new time marker (seconds):
    self.newTime = Date.now() / 1000;
    // Set the velocity of the next Block:
    self.LRU[0].velocityA = ( self.LRU[0].block.currentBlock - self.LRU[1].block.currentBlock ) / (self.newTime - self.startTime);
    self.LRU[0].velocityB = ( self.LRU[0].block.highestBlock - self.LRU[1].block.highestBlock ) / (self.newTime - self.startTime);
    // Iterate and get the average velocity
    let vA = 0, vB = 0;
    for (let i = 0; i < self.LRU.length; i++) {
      vA += self.LRU[i].velocityA;
      vB += self.LRU[i].velocityB;
    }
    self.averageVelocityA = vA / self.LRU.length;
    self.averageVelocityB = vB / self.LRU.length;

    let distance = self.LRU[0].block.highestBlock - self.LRU[0].block.currentBlock;

    let time = distance / (self.averageVelocityA - self.averageVelocityB);

    // Now update the time
    self.startTime = Date.now() / 1000;
    return secondsToString(time);
  }

  set(lru: Block) {
    const self = this;
    // Add
    self.LRU.unshift( { block: lru, velocityA: 0, velocityB: 0} );
    // Check if LRU is too large:
    self.lru();
  }

  lru() {
    const self = this;
    while (self.LRU.length > self.storeSize) {
      self.LRU.pop();
    }
  }
}

function secondsToString(seconds) {
  let numdays = Math.floor(seconds / 86400);
  let numhours = Math.floor((seconds % 86400) / 3600);
  let numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
  let numseconds = ((seconds % 86400) % 3600) % 60;
  if (numminutes === 0 && numdays === 0 && numdays === 0) {
    return numseconds + "s";
  } else if (numhours === 0 && numdays === 0) {
    return numminutes + "m " + numseconds + "s";
  } else if (numdays === 0) {
    return numhours + "h " + numminutes + "m " + numseconds + "s";
  } else {
    return numdays + "d " + numhours + "h " + numminutes + "m " + numseconds + "s";
  }
}

export default RTDP;
