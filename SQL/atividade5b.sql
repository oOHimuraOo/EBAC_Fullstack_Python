CREATE TABLE Atividade (id SERIAL, values INT);

INSERT INTO Atividade(values) SELECT 50 FROM generate_series(1,50000);

INSERT INTO Atividade(values) SELECT 100 FROM generate_series(1,50000);

INSERT INTO Atividade(values) SELECT 150 FROM generate_series(1,50000);

INSERT INTO Atividade(values) SELECT 200 FROM generate_series(1,50000);

INSERT INTO Atividade(values) SELECT 250 FROM generate_series(1,50000);

CREATE INDEX atividade_idx ON Atividade(id);

EXPLAIN ANALYZE SELECT * FROM Atividade WHERE id = 2;