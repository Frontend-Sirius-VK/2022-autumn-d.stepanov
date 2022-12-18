# 2022-autumn-d.stepanov
## Analog Animego


## Шаги для запуска на локалке

## 1 

### Склонировать репозиторий git clone

## 2

### Установить docker и docker-compose

## 3

### В корне проекта создать файл .env и заполнить следующими переменными
```
POSTGRES_PORT=37568
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

APP_NAME=animego
APP_PORT=3002
```

## 4

### Находясь в корне проекта выполнить команду(в зависимости от версии docker-compose) docker-compose up --build или docker compose up --build

## 5

### ввести в браузере адресс http://localhost:3002/