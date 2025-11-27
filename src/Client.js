const cl = require("./functions");
const tmi = require("tmi.js")
/**
 * Captcha Options
 * @typedef {object} Options
 * @prop {string} [username=undefined] The username of the Client to connect with.
 * @prop {string} oauthKEY The OAUTH Token of the Client to connect with.
 * @prop {string} channels The channel(s) to connect to.
 * 
 */

class RGBClient {
    constructor(options = {}) {
        if (!options.oauthKey) throw new Error("No KEY found for Twitch Client");
        if (!options.channels) throw new Error("No Channels found for Twitch Client");
        this.KEY = options.oauthKey,
            this.username = options.username || undefined,
            this.channels = [options.channels],
            this.rewardId = options.rewardId

    };
    async start() {
        const client = new tmi.Client({
            options: { debug: false },
            connection: {
                secure: true,
                reconnect: true,
            },
            identity: {
                username: this.username,
                password: `${this.KEY.startsWith("oauth:") ? this.KEY : "oauth:" + this.KEY}`,
            },
            channels: this.channels, // Replace with your channel name
        });
        try {
            client.connect();
            client.once("connected", () => {
                console.log("TTV CONNECTED Successfully!")
            })
            client.on("message", (channel, userstate, message, self) => {
                const reg = "(^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))|(^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))"
                let cmr = message.match(`${reg}`)
                if (!userstate["custom-reward-id"]) return;
                if (userstate["custom-reward-id"] == this.rewardId) {
                    if (cmr == null) return;
                    return cl.COLOR(cmr[0]);
                }
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
module.exports.RGBClient = RGBClient;