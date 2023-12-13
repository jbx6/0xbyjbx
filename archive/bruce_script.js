async function sha256Hash(inputString) {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputString);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(digest));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

(async () => {
  const inputString = '060197';
  const hash = await sha256Hash(inputString);
  console.log(`The SHA-256 hash of "${inputString}" is: ${hash}`);
})();


const sha256 = require('js-sha256');

const targetHash = "32c1097eb3302b3026e7c5eaaa44fc9e2ff08c084ccbacdac0df8b7abf0b404d";

const characters = "1234567890";

for (let i = 0; i < characters.length; i++) {
  for (let j = 0; j < characters.length; j++) {
    for (let k = 0; k < characters.length; k++) {
      for (let l = 0; l < characters.length; l++) {
        for (let m = 0; m < characters.length; m++) {
          for (let n = 0; n < characters.length; n++) {
            const candidate = characters[i] + characters[j] + characters[k] + characters[l] + characters[m] + characters[n];
        const candidateHash = sha256(candidate);
        if (candidateHash === targetHash) {
          console.log(`The hash ${targetHash} corresponds to the word ${candidate}`);
          break;
            }
          }
        }
      }
    }
  }
}
