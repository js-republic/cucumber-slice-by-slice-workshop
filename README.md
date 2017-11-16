## Launch all Cucumber tests with Nightwatch
	npm i
	npm install selenium-standalone@latest -g // We install with node.js the selenium server
	selenium-standalone install
	selenium-standalone start // We start the selenium server. To be keeped open to launch tests
	node_modules/.bin/nightwatch

