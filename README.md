This is a simple example of a completely custom media handler in SIP.js.

To run:

1. `npm install`
2. `node callee.js`
3. In a separate terminal window, `node caller.js`

This custom media handler uses its own media description language, consisting of three words:  `rock`, `paper`, or `scissors`.  After each side has an offer and an answer, negotiation is complete and the winner/loser is logged to the console.
