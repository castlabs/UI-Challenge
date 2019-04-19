install:
	docker-compose run --rm md-ui npm install

build:
	docker-compose build md-ui

run-ui: build install
	docker-compose run --rm -p"9000:9000" md-ui npm run serve
