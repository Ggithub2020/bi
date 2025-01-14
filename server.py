from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Replace with your actual OpenAI API key
openai.api_key = "your_openai_api_key"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    prompt = data.get("prompt", "")

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=150
        )
        return jsonify({"response": response.choices[0].text.strip()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


openai.api_key = "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"
