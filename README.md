## Тестовое задание для Effective Mobile
### Сервис заказчика (сервер с данными)

У этого сервиса два эндпоинта:
1. */products?limit={limit}&page={page}* - get запрос, который выводит данные из таблицы Products. Page и limit опциональные, по умолчанию limit = 10, page = 1.  
2. */products/bulk* - post запрос, который заполняет таблицу Products данными из bulk.json.

