# Be Still

Firefox Extension to help quiet the noise.

## Setup

    $ yarn install

## Development

    $ yarn run start:firefox

If you need to pass in a specific browser, you can do so as such:

    $ yarn run start:firefox --firefox=firefoxdeveloperedition

You can also go to `about:debugging` in Firefox and load Temporary Extensions
directly.

## Distribution

    $ yarn run build

This will create a `.zip` for uploading in a directory called
`web-ext-artifacts/`.

## License

See LICENSE for details.
