/*
 Copyright 2025 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import { googleAI } from "@genkit-ai/google-genai";
import { openAI } from "@genkit-ai/compat-oai";
import { configure } from "genkit";

// 默认使用千问 API（通过 OpenAI 兼容模式）
// 如需使用其他模型，请设置对应的环境变量
const openaiApiKey = process.env.OPENAI_API_KEY;
const openaiBaseUrl = process.env.OPENAI_BASE_URL;
const openaiModel = process.env.OPENAI_MODEL;

const openaiPlugin = openAI({
  apiKey: openaiApiKey,
  baseURL: openaiBaseUrl,
  models: [
    { name: openaiModel, info: modelInfo, configSchema: schema },
  ],
});

export default configure({
  plugins: [googleAI(), openaiPlugin],
  logLevel: "debug",
  enableTracingAndMetrics: true,
});
