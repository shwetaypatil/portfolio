from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import smtplib
import os
from email.message import EmailMessage

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["https://portfolio-chi-jet-8mk9l4b9u5.vercel.app"])

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASSWORD = os.getenv("EMAIL_PASS")

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({
            "error": "All fields are required."
        }), 400

    try:
        msg = EmailMessage()

        msg["Subject"] = f"Portfolio Contact - {name}"
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_USER
        msg["Reply-To"] = email

        msg.set_content(f"""
You received a new message from your portfolio.

Name: {name}
Email: {email}
Message: {message}""")

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return jsonify({
            "message": "Message received successfully!"
        }), 200

    except Exception as e:
        print("Email error: ", e)

        return jsonify({
            "error": "Failed to send message."
        }), 500


if __name__ == "__main__":
    app.run(debug=True)