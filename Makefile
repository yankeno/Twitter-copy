install:
	@make clean
	@make build
	@make up
	docker compose exec app composer install
	docker compose exec app cp .env.example .env
	docker compose exec app php artisan key:generate
	docker compose exec app php artisan storage:link
	docker compose exec app php artisan migrate
	docker compose exec app php artisan db:seed
	docker compose exec app chmod -R 777 storage bootstrap/cache
	cd src && npm install && cd ..
	@make fresh
clean:
	docker compose down --rmi all --volumes --remove-orphans
build:
	docker compose build --no-cache --force-rm
up:
	docker compose up -d
	sleep 5
	docker compose exec app php artisan migrate:refresh
	docker compose exec app php artisan db:seed
	docker compose exec app chmod -R 777 storage bootstrap/cache
	cd src && npm run dev && cd ..
	@make fresh
down:
	docker compose down
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
fresh:
	docker compose exec app php artisan migrate:fresh --seed
app:
	docker compose exec app bash
sql:
	docker compose exec db bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'
