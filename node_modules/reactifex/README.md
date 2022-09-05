# reactifex

Helper utility designed to make it easy to upload react-intl extracted messages to transifex, with support for ICU plurals and translator comments.

[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](reactifex)
[![license](https://img.shields.io/npm/l/reactifex.svg)](reactifex)
[![npm_version](https://img.shields.io/npm/v/reactifex.svg)](reactifex)
[![Build Status](https://travis-ci.org/efischer19/reactifex.svg?branch=master)](https://travis-ci.org/efischer19/reactifex)


There are two modes of usage - compilation and comment pushing.

## Compilation mode

In this mode, messages that have been extracted by `babel-plugin-react-intl` (into individual files) are combined. The resulting json is suitable to upload to Transifex and matches their specified `KEYVALUEJSON` format.

usage: `$(npm bin)/reactifex <input_folder> <output_file>`
  - `input_folder` corresponds to the `messagesDir` option used by `babel-plugin-react-intl`
    - note that reactifex assumes folder structure based on this default
  - `output_file` will be suitable for upload to transifex

## Comment pushing

This mode is why I wrote this library in the first place - I wanted the ability to use comments as `PO` files do, but none of the tools I found to convert react-intl messages to `PO` files were able to properly handle ICU pluralization. By keeping everything in a js context with `KEYVALUEJSON`, plurals work correctly *and* we now have comment support for translators (by default, Transifex's `KEYVALUEJSON` file format does not allow for comments to be included with strings for translation).

Usage is a little complicated, I'm sorry about that; you're going to be running this server-side as a series of bash commands. Do note that I assume `$SECRET_USER` and `$SECRET_PWD` env vars exist for basic auth purposes. See [Transifex's API Introduction](https://docs.transifex.com/api/introduction) for more details on authentication. Here's an example, written as it would be in the Makefile of a project that makes use of reactifex:

```
tx_url1 = https://www.transifex.com/api/2/project/<project>/resource/<resource>/translation/<default_language_code>/strings/
tx_url2 = https://www.transifex.com/api/2/project/<project>/resource/<resource>/source/
push_translations:
    ./node_modules/reactifex/bash_scripts/get_hashed_strings.sh $(tx_url1)
    $$(npm bin)/reactifex <input_folder> --comments
    ./node_modules/reactifex/bash_scripts/put_comments.sh $(tx_url2)
```

  - [tx_url1](https://docs.transifex.com/api/translation-strings#identifying-strings-using-hashes) and [tx_url2](https://docs.transifex.com/api/resource-strings) are just variables as defined by the Transifex API documentation, extracted for readability.

  - First, `bash_scripts/get_hashed_strings.sh` is called with a url argument. This will populate `bash_scripts/hashmap.json` with data about the strings in your resource, including the all-important `string_hash`.

  - Next, the main reactifex script (node js) runs with an additional `--comments` flag, and no output file. This has the effect of gathering up all your `babel-plugin-react-intl` extracted messages *with* their comments attached. From there, it's simple enough to match up each message with its `string_hash`, and save these pairs in a '|'-delimited list, for later consumption.

  - Finally, `bash_scripts/put_comments.sh` is run with the base PUT url as an argument (also reads the data file we created in the previous step), updating translator comments for each message on Transifex via their API.
