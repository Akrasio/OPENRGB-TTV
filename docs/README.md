# OPENRGB-TTV Package
> Not really much, it just simplifies having to install and set up alot of stuff with `OPENRGB-SDK` + `Tmi.js` and looks prettier to me...

## Example Usage
```js
// Index.JS
const { Client } = require("openrgb-ttv");
const id = {
    username: "username_here",
    oauthKey: "oauth:key",
    channels: "channelname_here",
    rewardId: "ChannelPoint-RedeemID-Goes-right-here"
}

let RGB = new Client.RGBClient(id)
RGB.start()
```
Features:
---
- Change Color of Keyboard/Mouse connected with OpenRGB
- Twitch Integrated for channel point redeem (aka "rewardId")
- Auto Handels Redeem errors (ie: uses regex to see if redeem INPUT has a somewhat valid HEX Color, like `#FF00FF` and not `#HIJ909`)

---
Requirements:
---
- OpenRGB Software
- Twitch API / OAuth Key with `channel:read:redemptions`. 
  - [Generate Here](https://twitchtokengenerator.com "For TESTING Purposes")
  - [REMINDER](https://twitchtokengenerator.com/#:~:text=Reminder)

#
### Get rewardId:
- [Streamer.bot](https://streamer.bot)
![RewardIDs](imgs\rewardId.png)


> Made with :heart: by @aunnux
  
