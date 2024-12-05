import { HfInference } from "@huggingface/inference";

const client = new HfInference("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");

const chatCompletion = await client.chatCompletion({
	model: "Qwen/QwQ-32B-Preview",
	messages: [
		{
			role: "user",
			content: "What is the capital of France?"
		}
	],
	max_tokens: 500
});

console.log(chatCompletion.choices[0].message);