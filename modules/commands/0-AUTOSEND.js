module.exports.config = {
    name: 'autosent',
    version: '10.02',
    hasPermssion: 0,
    credits: 'SHANKAR SUMAN',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const nam = [
    {
        timer: '12:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 P𝐌 ⏳\nरात की तन्हाई में सुकून सा है,\nखुद से मिलने का वक्त भी बेमिसाल सा है।🙂🌙\n\nअब सोने का समय है, सोचो सपनों के बारे में! 😴\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '1:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳\nसितारे कहते हैं सो जाओ अब,💫\nसपनों में खो जाओ अब।🌟\n\nजो जाग रहे हो, रात का सुकून महसूस करो!\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽ 🥀\n────── •💜• ──────']
},
{
timer: '2:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳\nरात का सफर खामोश सा है,\nदिल के जख्म फिर से ताज़ा सा है।💔\n\nअगर कोई रात में सोच रहा है, तो ये समय ख्वाब बुनने का है।🌙\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '3:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳\nकुछ रातें ऐसी होती हैं जो चैन छीन लेती हैं,\nफिर सुबह की रौशनी ही राहत देती है।🌟💜\n\nअगर अब तक नहीं सोए हो, तो हो सकता है आप सबसे क्रिएटिव हो रहे हों! ✨💡\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '4:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳\nरात की आखिरी पहर में\nसपने बनते हैं असलियत।💫☀️\n\nजो लोग जाग रहे हैं, ये समय योग और ध्यान का है। 🧘‍♂️\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '5:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳\nसवेरा नया, हौसला भी नया,\nहर दिन का स्वागत मुस्कान से करो।😊🌅\n\nजागने का समय आ गया, उठकर दिन की शुरुआत करो! 🌞\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '6:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳\nसूरज की पहली किरण के साथ\nएक नई उम्मीद जगती है।☀️✨\n\nसैर पर निकलने का समय, खुद को ताजगी से भर दो। 🚶‍♂️\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '7:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳\nसुबह का उजाला, सुकून भरी हवा,\nआज का दिन हो खुशियों से भरा।🙂🌸\n\nनाश्ता करने का समय है, कुछ हेल्दी खाओ! 🥗\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '8:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳\nसपनों की उड़ान भरने का समय आ गया,\nहौसलों को पंख देने का समय आ गया।💪✨\n\nकाम पर जाने का समय, पूरे दिन का उत्साह अपने साथ ले जाओ। 🚀💼\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '9:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳कड़ी मेहनत का फल मीठा होता है,\nबस धैर्य और मेहनत का साथ मत छोड़ना।🍇💪\n\nदिन की शुरुआत काम के साथ करो, आज का लक्ष्य तय करो! 🎯\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '10:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳\nहर कदम पर जीत का मकसद रखो,\nहर दिन को नई शुरुआत बनाओ।✌️💖\n\nब्रेक लेकर चाय या कॉफी का आनंद लो! ☕\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '11:00:00 AM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳\nकामयाबी उन्हीं को मिलती है,\nजो सपनों में भी मेहनत करते हैं।💪☘️\n\nअब अपने काम पर ध्यान दो, लंच का समय पास है। 😋\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '12:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳\nदोपहर की गर्मी में थोड़ी ठंडक ढूंढो,\nमन को सुकून और शांति दो।🌿💫\n\nलंच टाइम आ गया है, कुछ अच्छा खाओ और एनर्जी बढ़ाओ! 🍽️\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '1:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳\nसपनों की राह में मुश्किलें तो होंगी,\nमगर जिद हो तो मंजिल भी मिलेगी।🚶💫\n\nलंच का मजा लेकर अब थोड़ा आराम करो। 😌\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '2:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳\nअब वक्त है काम पर लौटने का,\nदिन को पूरा करने का।💪🌟\n\nथोड़ा और काम करो, शाम का वक्त दूर नहीं! 😄\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '3:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳\nदिन के इस पहर में\nथोड़ा काम का रफ्तार और बढ़ाओ।⚡🖋️\n\nअब चाय का समय है, एक कप चाय से ऊर्जा भर लो! ☕\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '4:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳\nकुछ समय और मेहनत करो,\nशाम का वक्त अब पास है।🕔💪\n\nकाम खत्म करने की तैयारी करो, शाम की राहत तुम्हारी है। 😊\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '5:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳\nशाम की ठंडी हवा में\nदिन की थकान छू मंतर हो जाती है।🍃😊\n\nशाम का वक्त है, अब आराम का समय आ गया। 🕔🌇\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '6:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳\nशाम का ये सुहाना वक्त,\nदिल को सुकून और मन को राहत देता है।✨🌆\n\nअब वक्त है परिवार के साथ समय बिताने का, दिन भर की बातें साझा करो। 🏡👪\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '7:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳\nरात की शुरुआत, दिन का अंत,\nअब है सुकून का समय।✨🌙\n\nअब डिनर का वक्त है, दिन का आखिरी भोजन अच्छा हो! 🍛😋\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '8:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳\nरात के इस पल में\nदिन के सारे पल अब शांत हो जाते हैं।💫🌌\n\nअब फिल्म देखने या किताब पढ़ने का समय है, आराम से बैठो और आनंद लो। 🎥📖\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '9:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳\nदिन का अंत और रात की शुरुआत,\nअब वक्त है आराम करने का।🌙🛌\n\nसोने की तैयारी करो, कल फिर से नई शुरुआत का स्वागत करो। 🌠🌙\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '10:00:00 PM',
message: ['────── •💜• ──────\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳\nरात का ये समय,\nसपनों को साकार करने का है।💫🌙\n\nअब सोने से पहले दिनभर का रिव्यू करो, और मीठे सपने देखो। 😴✨\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
{
timer: '11:00:00 PM',
message: ['────── •💜• ──────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 P𝐌 ⏳\nदिन ढल चुका है,\nअब आराम का समय है।💫🌌\n\nअगर अब तक नहीं सोए हो, तो ये आखिरी समय है सोने से पहले कुछ खुद के लिए सोचने का। 💭🛌\n\n≼≽Ω ❱𝐓𝐡𝕖 𝗦𝗛𝗔𝗡𝗞𝗔𝗥❱≼≽\n────── •💜• ──────']
},
    // Add the rest of your message timers here...
];

module.exports.onLoad = o => {
    setInterval(() => {
        const r = a => a[Math.floor(Math.random() * a.length)];
        const currentTime = new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim();
        const a = nam.find(i => i.timer == currentTime);

        if (a) {
            global.data.allThreadID.forEach(i => o.api.sendMessage(r(a.message), i));
        }
    }, 1000);
};

module.exports.run = o => {};
