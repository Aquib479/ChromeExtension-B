# Vercel AI SDK, Next.js, and Hugging Face ChatGPT Writer

Let's first see how to use it:
This how to use the [Vercel AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/) and the [Hugging Face Inference](https://huggingface.co) to create a ChatGPT-Writer AI-powered streaming chat bot with [Open Assistant's SFT-4 12B](https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5) as the chat model.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel/ai/tree/main/examples/next-huggingface next-huggingface-app
```

```bash
yarn create next-app --example https://github.com/vercel/ai/tree/main/examples/next-huggingface next-huggingface-app
```
```bash
pnpm create next-app --example https://github.com/vercel/ai/tree/main/examples/next-huggingface next-huggingface-app
```

To run the example locally you need to:

1. Sign up at [Hugging Face](https://huggingface.co/join).
2. Go to your [Hugging Face account settings](https://huggingface.co/settings/tokens). Create a User Access Token with `read` access.
3. Set the required Hugging Face environment variable with the token as shown [the example env file](./.env.local.example) but in a new file called `.env.local`.
4. `npm install` to install the required dependencies.
5. `npm run dev` to launch the development server.

6. ## About Hugging Face

[Hugging Face](https://huggingface.co) is company that develops tools for building applications using machine learning. It is most notable for its [Transformers](https://huggingface.co/docs/transformers/index) Python library built for natural language processing applications and its platform that allows users to share machine learning models and datasets.

## About Open Assistant

The model in the example is [Open Assistant SFT-4 12B](https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5). This is the 4th iteration English supervised-fine-tuning (SFT) model of the Open-Assistant project. It is based on a Pythia 12B that was fine-tuned on human demonstrations of assistant conversations collected through the [Open Assistant](https://open-assistant.io/) human feedback web app before March 25, 2023.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
