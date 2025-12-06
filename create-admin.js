// create-admin.js
import clientPromise from "./lib/mongodb.js";
import bcrypt from "bcryptjs";

async function main() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const email = "admin@example.com";
    const plainPassword = "admin123";
    const name = "Super Admin";
    const role = "Admin";

    console.log("🔑 Hashing password...");
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    console.log("📥 Inserting admin...");
    const result = await db.collection("admins").insertOne({
      email,
      password: hashedPassword,
      name,
      role,
      createdAt: new Date(),
    });

    console.log("✅ Admin created successfully!");
    console.log("Email:", email);
    console.log("Password:", plainPassword);
    console.log("MongoDB _id:", result.insertedId.toString());

    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
}

main();
