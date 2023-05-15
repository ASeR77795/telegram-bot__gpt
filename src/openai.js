import { Configuration, OpenAIApi } from "openai";
import config from "config";
import { createReadStream } from "fs";
class OpenAi {
  constructor(apiKey) {
    const configuration = new Configuration({
      //   organization: "org-iSyzAhP4ioA0FQKrz395E8BP",
      apiKey,
    });
    this.openai = new OpenAIApi(configuration);
    console.log(configuration);
  }
  chat() {}
  async transcription(filepath) {
    try {
      const response = await this.openai.createTranscription(
        createReadStream(filepath),
        "whisper-1"
      );
      return response.data.text;
    } catch (err) {
      console.log("error while transcription", err.message);
    }
  }
}
export const openai = new OpenAi(config.get("OPENAI_KEY"));
