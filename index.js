const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: "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"
})
const openai = new OpenAIApi(configuration)

async function translate() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Describe a happy purple elephant in 50 words.",
    temperature: 0,
    max_tokens: 500
  })

  console.log(completion.data.choices[0].text)

}

translate()