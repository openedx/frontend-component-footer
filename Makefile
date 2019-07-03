requirements:
	npm install

# This target is used by Travis.
validate-no-uncommitted-package-lock-changes:
	# Checking for package-lock.json changes...
	git diff --exit-code package-lock.json

build:
	rm -rf ./dist
	./node_modules/.bin/babel src --out-dir dist --source-maps --ignore **/*.test.jsx,**/*.stories.jsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files
	rm -rf ./dist/example
	rm -rf dist/**/*.test.jsx
	rm -rf dist/**/__snapshots__
	rm -rf dist/**/__mocks__
	rm -rf dist/lib/setupTest.js
