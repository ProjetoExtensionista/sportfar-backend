const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

function throwNotFoundEnv(env) {
	throw new Error(`Could not find the env: ${env}`)
}

async function runMigrations() {
	const connection = await mysql.createConnection({
		host: process.env.DB_HOST || throwNotFoundEnv("DB_HOST"),
		port: process.env.DB_PORT || throwNotFoundEnv("DB_PORT"),
		user: process.env.DB_USER || throwNotFoundEnv("DB_USER"),
		password: process.env.DB_PASS || throwNotFoundEnv("DB_PASS"),
		database: process.env.DB_NAME || throwNotFoundEnv("DB_NAME"),
		multipleStatements: true,
	});

	const migrationsDir = path.join('migrations');
	const files = fs.readdirSync(migrationsDir).filter(file => file.endsWith('.sql'));

	for (const file of files) {
		const filePath = path.join(migrationsDir, file);
		const sql = fs.readFileSync(filePath, 'utf8');
		console.log(`Running migration: ${file}`);
		try {
			await connection.query(sql);
		} catch (err) {
			console.error(`Error in ${file}:`, err);
		}
	}

	await connection.end();
	console.log('All migrations executed.');
}

runMigrations();
