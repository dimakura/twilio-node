# twilio-node

A node.js Twilio helper library.

[![NPM](https://nodei.co/npm/twilio.png?downloads=true&stars=true)](https://nodei.co/npm/twilio/)

[![Build Status](https://travis-ci.org/twilio/twilio-node.svg?branch=master)](https://travis-ci.org/twilio/twilio-node)

## Recent Update

As of release 3.6.0, Beta and Developer Preview products are now exposed via
the main `twilio-node` artifact. Releases of the `alpha` branch have been
discontinued.

If you were using the `alpha` release line, you should be able to switch back
to the normal release line without issue.

If you were using the normal release line, you should now see several new
product lines that were historically hidden from you due to their Beta or
Developer Preview status. Such products are explicitly documented as
Beta/Developer Preview both in the Twilio docs and console, as well as through
in-line code documentation here in the library.

## End User Docs

For detailed usage information and API docs, head out here:

[https://www.twilio.com/docs/libraries/node](https://www.twilio.com/docs/libraries/node)

## Getting help

If you need help installing or using the library, please contact Twilio Support at help@twilio.com first. Twilio's Support staff are well-versed in all of the Twilio Helper Libraries, and usually reply within 24 hours.

If you've instead found a bug in the library or would like new features added, go ahead and open issues or pull requests against this repo!

## Contributing

Bug fixes, docs and library improvements are always welcome. 

> ⚠️ Please be aware that a large share of the files are auto-generated by our backend tool. You are welcome to suggest changes and submit PRs illustrating the changes. However, we'll have to make the changes in the underlying tool. You can find more info about this in the [Contributing Guide](CONTRIBUTING.md)

If you're not familiar with the GitHub pull request/contribution process, [this is a nice tutorial](http://gun.io/blog/how-to-github-fork-branch-and-pull-request/).

#### Getting Started
If you want to familiarize yourself with the project, you can start by [forking the repository](https://help.github.com/articles/fork-a-repo/) and [cloning it in your local development environment](https://help.github.com/articles/cloning-a-repository/). The project requires [Node.js](https://nodejs.org) to be installed on your machine.

After cloning the repository, install the dependencies by running the following command in the directory of your cloned repository:

```bash
npm install
```

You can run the existing tests to see if everything is okay by executing: 

```bash
npm test
```

To run just one specific test file instead of the whole suite, provide a JavaScript regular expression that will match your spec file's name, like:

```bash
npm run test -- -m .\*client.\*
```

#### Contributing Code

Please refer to our [Contributing Guide](CONTRIBUTING.md) for detailed information on how you can contribute.

#### Contributing Docs

Right now, the docs are maintained in static HTML in the `gh-pages` branch of this repository.  We hope to switch to a more robust documentation system soon, but for the time being, you can make documentation changes by editing [index.html](https://github.com/twilio/twilio-node/blob/gh-pages/index.html) directly.



