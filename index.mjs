import Client from "msgroom";
import { generate, count } from "random-words";

const client = new Client("ReplBot [repl!]", [ "repl!" ]);
await client.connect();
console.log("Connected to MsgRoom servers")
client.commands.ping = () => "pong";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};
client.commands.vote = () => "Voted!";
client.commands.vencord = () => "Vencord is a Discord client mod!";
client.commands.betterdiscord = () => "BetterDiscord is a Discord client mod!";
client.commands.randomword = () => (generate({ minLength: 1, maxLength: 1000000 }));;
client.commands.botinfo = () => "Server: Replit. Bot username: ReplBot. Source? Not yet"