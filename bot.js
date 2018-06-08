const Discord = require('discord.js');
const client = new Discord.Client();
const yt = require('ytdl-core');



 client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)

});

client.on('message', msg => {
  if (msg.content === '#العاب') {
    msg.reply(`
	
1 - #انمي


2 - #لاعب


3 - #علم 


	
	`);
  }
});










client.on('message', msg => {
  if (msg.content === '#انمي') {
    msg.reply(`**
	
1 - #نارتو


2 - #درغون بول 


3 - #هجوم العمالقة


	
	**`);
  }
});


















console.log("=-=-=-=-=-=-=-=");
console.log("by Abdallah");
console.log("=-=-=-=-=-=-=-=");


  var prefix = "^";

  
  client.on("message", message =>{
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (!message.author.id == 415649344864387072) return;

if (message.content.startsWith(prefix + 'setply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

if (message.content.startsWith(prefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Mishary00_");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else
if (message.content.startsWith(prefix + 'pic')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
}
  if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '415649344864387072') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setActivity(argresult, {type : 'cc'});
   message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
  }
  
   });

   client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '^join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('ok');
        })
        .catch(console.log);
    } else {
      message.reply('No soory');
    }
  }
});

 
  client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('#bc')){ //الامر
 if(!message.author.id === '415649344864387072') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
  
  
  
  
  
  
  
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  
  
  
  
  






function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }





var servers = {};






var p1 = "Play1S"

var p2 = "play2S"

var p3 = "play3"

var p4 = "play4S"

var p5 = "Play5S"



function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`M is in ${client.guilds.size} servers `)
});

var PREFIX = "^";



//---------------------


client.on("message", message => {

	                    if (message.content === p1 ) {
                  message.react('.')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/l1BboLh1Hio', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === p2 ) {
                  message.react('.')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/GTFekNNLzRU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === p3 ) {
                  message.react('.')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/Nk4zCnVB6Tw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === p4 ) {
                  message.react('.')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/DFyON-KIuv0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
		
  }
  
      	                    if (message.content === p5 ) {
                  message.react('.')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/Nk4zCnVB6Tw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
    
    
    //-----------------------
    
  
  if(message.content === "#stop" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

  
  });
  
  
  
client.login("NDUyMzA4OTA1MDE2NDI2NDk2.DfOdGQ.Y-LfoBXbDngTt2n3GwaZRT4fBlI")
