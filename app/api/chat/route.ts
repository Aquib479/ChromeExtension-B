// route.ts -> Router handler 
import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { experimental_buildOpenAssistantPrompt } from 'ai/prompts';

// Create a new Huggingface Interference instance
const Hf = new HfInference(
    process.env.HUGGINGFACE_API_KEY
    // process.env.HUGGINGFACE_INFERENCE_ENDPOINT_URL,
)

// edge provide optimal infrastructure for our API route 
// set the runtime to edge
export const runtime = 'edge';

export async function POST(request: Request, response: Response) {

    const { messages } = await request.json();
    console.log(messages);

    // crete chatcompletion ( get response from Huggingface AI Model )
    const res = Hf.textGenerationStream({
        model: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
        inputs: experimental_buildOpenAssistantPrompt(messages),
        parameters: {
            max_new_tokens: 500,
            // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
            typical_p: 0.2,
            repetition_penalty: 1,
            truncate: 1000,
            return_full_text: false
        }
    });

    // create a stream of data from OpenAI ( stream data to the frontend )
    const stream = HuggingFaceStream(res);

    // send the stream as a response to our client / frontend
    return new StreamingTextResponse(stream, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'chrome-extension://ocnhdgaaklcgnbeifihipdchfkckjmpj',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
        }
    });
}