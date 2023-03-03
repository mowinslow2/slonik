"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const postgres_1 = __importDefault(require("postgres"));
const postgres_bridge_1 = require("postgres-bridge");
const createIntegrationTests_1 = require("../../helpers/createIntegrationTests");
const Pool = (0, postgres_bridge_1.createPostgresBridge)(postgres_1.default);
const { test, } = (0, createIntegrationTests_1.createTestRunner)(Pool, 'postgres-bridge');
(0, createIntegrationTests_1.createIntegrationTests)(test, pg_1.Pool);
