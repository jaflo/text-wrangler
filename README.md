# Text Wrangler

I often find myself opening VS Code to manipulate text. I usually paste the text, select when I want to change and use Ctrl-D to select instances of the selection, then make changes.

Since I don't always haave access to VS Code (and it is kind of overkill to open it each time), I wanted to make a browser-based version of just the text editor that supports the functionality I need to make these text manipulations.

Most of the functionality comes from [CodeMirror 6](https://codemirror.net/) with some tweaks made for my use case. The editor is wrapped in a Svelte project for potential future improvements.

## Development

Clone, `npm install` the dependencies, `npm run dev` to start a local development server.

## CI Setup

1. Run `ssh-keygen -t ed25519 -a 100 -f keyfile` (this will generate `keyfile` and `keyfile.pub`, instructions from [here](https://github.com/webfactory/ssh-agent))
1. In the destination repository (where you want the files served from), go to Settings > Deploy keys and add the public key.
1. In the source repository (this one), go to Settings > Secrets > New repository secret and add the private key as `DEPLOY_KEY`.
