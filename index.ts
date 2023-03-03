import {
    createPool, createSqlTag,
  } from 'slonik';
import { z } from 'zod';

// You can create a sql tag with a predefined set of Zod type aliases that can be later referenced when creating a query with runtime validation.
const sql = createSqlTag({
    typeAliases: {
        id: z.object({
            id: z.number(),
        }),
        void: z.object({}).strict(),
    }
})

// Maps to columns in person table
const personObject = z.object({
    id: z.number(),
    name: z.string(),
});

const morgan = 'morgan'
const pool = await createPool('postgresql://morgan:olVdHJPEPb77NR7ojWyz-w@morgan-serverless-3042.g8z.cockroachlabs.cloud:26257/defaultdb?sslmode=require');

// INSERT 
const personInsertQuery = sql.type(personObject)`INSERT INTO person (id, name) VALUES (1, ${morgan})`;
await pool.query(personInsertQuery);

// Bulk INSERT
await pool.query(sql.unsafe`
  INSERT INTO person (id, name)
  SELECT *
  FROM ${sql.unnest(
    [
      [1, 'mauricio'],
      [2, 'alex']
    ],
    [
      'int4',
      'string'
    ]
  )}
`);

// SELECT
const personSelectQuery = sql.type(personObject)`SELECT id, name FROM person WHERE name = ${morgan}`;
const morganSelect = await pool.any(personSelectQuery);
if (morganSelect.length > 0) {
  console.log(morganSelect[0].id)
}

// SELECT Pt. 2
try {
  const selectOneFirst = await pool.oneFirst(sql.type(personObject.shape.id)`
      SELECT id
      FROM person
      WHERE name = ${morgan}
  `);
  console.log(selectOneFirst)
} catch (error) {
  console.log(error)
}


// DELETE
await pool.query(sql.typeAlias('void')`DELETE FROM person WHERE id = ${morganSelect[0].id}`);


// Connection Pooling Testing
const releaseConnection = () => {
  return pool.connect((connection) => {
    return connection.query(sql.typeAlias('id')`SELECT id from person limit 1`);
  });
};

const result = await releaseConnection()
await pool.end();
console.log (pool.getPoolState())
