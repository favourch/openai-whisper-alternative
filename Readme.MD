# openai-whisper-alternative
A Node.js package for interacting with OpenAI Whisper API.

## Installation
You can install this package via npm:

`` npm install openai-whisper-alternative ``


## Usage
To use the package, first import it into your project:

const openaiWhisper = require('openai-whisper-alternative');

Then, you can create an instance of the openaiWhisper class and call its methods to interact with the OpenAI Whisper API. For example, to send a message to the API:

`` const whisper = new openaiWhisper(apiKey);
whisper.send('Hello, OpenAI!'); ``

## API
`` new openaiWhisper(apiKey) ``

Creates a new openaiWhisper instance using the provided API key.

## Parameters
> apiKey (string): Your OpenAI API key.

`` send(message) ``

Sends a message to the OpenAI Whisper API.

## Parameters
> message (string): The message to send.

## License
This package is licensed under the MIT license. See the LICENSE file for details.
