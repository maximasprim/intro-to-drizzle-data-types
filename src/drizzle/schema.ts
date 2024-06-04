
import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users",{
      id: serial("id").primaryKey(),
      fullname: text("full_name"),
      phone: varchar("phone",{length:100}),
      address:varchar("address",{length: 100}),
      score: integer("score"),
}) 


export const ProfilesTable = pgTable("profiles", {
    id: serial("id").primaryKey(),
    bio: varchar("bio",{length: 256}),
    userId: integer("user_id").notNull().references(() => UserTable.id, {onDelete: "cascade"}),
});  