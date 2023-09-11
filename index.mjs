import Client from "msgroom";
import { generate, count } from "random-words";

const client = new Client("ReplBot [repl!]", [ "repl!" ]);
await client.connect();
import express from 'express';
  
const app = express();
  
app.get('/',(req,res) => {
    res.send('Welcome to ReplBot server!');
})
  
const PORT = 443;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})
console.log("Connected to MsgRoom servers")
client.commands.ping = () => "pong";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};
client.commands.vote = () => "Voted!";
client.commands.vencord = () => "Vencord is a Discord client mod!";
client.commands.betterdiscord = () => "BetterDiscord is a Discord client mod!";
client.commands.randomword = () => (generate({ minLength: 1, maxLength: 1000000 }));;
client.commands.botinfo = () => "Server: Replit. Bot username: ReplBot. Source? https://github.com/miki1513/ReplBot"
client.commands.msgroom = () => "the chat you're in now"
client.commands.bored = () => "That's okay!"
client.commands.troll = () => "That command doesn't exist. Run repl!help for a list of commands"