"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTable = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
var pg_core_2 = require("drizzle-orm/pg-core");
exports.UserTable = (0, pg_core_2.pgTable)("users", {
    id: (0, pg_core_2.serial)("id").primaryKey(),
    fullname: (0, pg_core_2.text)("full_name"),
    phone: (0, pg_core_2.varchar)("phone", { length: 100 }),
    address: (0, pg_core_2.varchar)("address", { length: 100 }),
    score: (0, pg_core_1.integer)("score"),
});
