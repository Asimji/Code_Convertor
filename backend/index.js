const express=require("express");
require("dotenv").config();
const cors=require('cors')

const {Configuration,OpenAIApi}=require("openai");

const app=express();
app.use(cors())
app.use(express.json());

const configuration=new Configuration({
    apiKey:process.env.OPEN_AI_KEY
});
const openai=new OpenAIApi(configuration)

app.post("/convert", async (req, res) => {
    try {
      const inputCode = req.body.code;
      const targetLanguage = req.body.language; 
  
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Convert the following code  to ${targetLanguage}:\n${inputCode} do not give any suggestion only give code`,
          },
        ],
        max_tokens: 100,
        temperature: 0,
      });
  
      const outputMessage = response.data.choices[0].message.content;
      res.status(200).json({data:outputMessage});
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

  app.post("/debug",async(req,res)=>{
         try {
            const inputCode = req.body.code;
            const response=await openai.createChatCompletion({
                model:"gpt-3.5-turbo",
                messages:[
                    {
                        role: "system",
                        content: `Can you please debug this code. and explain all the line briefly. do not tell the solution only give some suggestion for improvement`,
                      },
                      {
                        role: "user",
                        content: `${inputCode}`,
                      }
                ],
                max_tokens:100,
                temperature:0
            })
            const outputMessage = response.data.choices[0].message.content;
            res.status(200).json({data:outputMessage})
         } catch (error) {
            res.status(400).json({error:error.message})
         }
  })
  app.post("/quality",async(req,res)=>{
         try {
            const inputCode = req.body.code;
            const response=await openai.createChatCompletion({
                model:"gpt-3.5-turbo",
                messages:[
                    {
                        role: "system",
                        content: `Can you do Quality check of this code and also give correct code for this`,
                      },
                      {
                        role: "user",
                        content: `${inputCode}`,
                      }
                ],
                max_tokens:100,
                temperature:0
            })
            const outputMessage = response.data.choices[0].message.content;
            res.status(200).json({data:outputMessage})
         } catch (error) {
            res.status(400).json({error:error.message})
         }
  })

app.listen(process.env.port,async()=>{
    try {
        console.log(`Server is running at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})