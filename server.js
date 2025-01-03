const {OpenAI} = require('openai');
const Configuration = require('openai');
const express = require("express");
const cors = require("cors");
require('dotenv').config()

//console.log(process.env.SECRET_KEY);


const openai = new OpenAI({
    apiKey: "d644e1d559ec4fe28156ea303b2c12cc",
    baseURL: "https://api.aimlapi.com/v1"
});

const app = express();
const port = 6969;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/data', async (req, res) => {
    console.log(req.body.msg);
    const msg = await onChatCompletion(req.body.msg);
    res.json({msg : msg});
});


async function onChatCompletion(input) {
    const chatCompletion = await openai.chat.completions.create({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          { role: "system", content: "You are a therapist. Listen carefully and respond with understanding and non-judgmental language to help the user process their feelings. Avoid medical diagnoses or advice." },
          { role: "user", content: input }
        ],
        temperature: 0.7,
        max_tokens: 500,
      });

      return chatCompletion.choices[0].message.content;
}

app.listen(port, () => {
    console.log('Server running on port ' + port);
})


