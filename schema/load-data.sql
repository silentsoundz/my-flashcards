\copy categories(name) FROM './schema/categories.csv' WITH DELIMITER ',' CSV HEADER;

\copy cards(question, answer, category_id) FROM './schema/javascriptFlashcards.csv' WITH DELIMITER ',' CSV HEADER;

\copy cards(question, answer, category_id) FROM './schema/sqlFlashcards.csv' WITH DELIMITER ',' CSV HEADER;
