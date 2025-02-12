from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_db_connection
import bcrypt

app = Flask(__name__)
CORS(app)  # Allow frontend requests

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("name")
    phone = data.get("phone")
    email = data.get("email")
    password = data.get("password")

    if not all([name, phone, email, password]):
        return jsonify({"error": "All fields are required"}), 400

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    conn = get_db_connection()
    if conn:
        cursor = conn.cursor()
        try:
            cursor.execute("INSERT INTO users (name, phone, email, password) VALUES (%s, %s, %s, %s)",
                           (name, phone, email, hashed_password.decode('utf-8')))
            conn.commit()
            return jsonify({"message": "User registered successfully!"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()
    return jsonify({"error": "Database connection failed"}), 500


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
            user = cursor.fetchone()

            if user and bcrypt.checkpw(password.encode('utf-8'), user["password"].encode('utf-8')):
                return jsonify({"message": "Login successful", "user": user}), 200
            else:
                return jsonify({"error": "Invalid email or password"}), 401
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()
    return jsonify({"error": "Database connection failed"}), 500


if __name__ == "__main__":
    app.run(debug=True)
