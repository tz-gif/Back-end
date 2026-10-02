"""
Chatbot de terminal com regras definidas por você.

Como usar:
1. pip install anthropic
2. Defina sua chave:  export ANTHROPIC_API_KEY="sua-chave-aqui"
   (no Windows: set ANTHROPIC_API_KEY=sua-chave-aqui)
3. Edite a variável REGRAS abaixo.
4. python minha_ia.py
"""

import anthropic

# ====== EDITE AQUI: as regras e a personalidade da sua IA ======
REGRAS = """
Você é um assistente chamado Nova.
- Responda sempre em português do Brasil.
- Seja direto e use um tom descontraído.
- Só responda sobre o assunto: [coloque o tema aqui].
- Se o usuário perguntar algo fora do tema, diga que não pode ajudar com isso.
- Nunca invente informações; se não souber, diga que não sabe.
"""
# ================================================================

MODELO = "claude-sonnet-5-5"

client = anthropic.Anthropic()  # lê ANTHROPIC_API_KEY do ambiente
historico = []

print("IA pronta! Digite 'sair' para encerrar.\n")

while True:
    entrada = input("Você: ").strip()
    if entrada.lower() in ("sair", "exit", "quit"):
        break
    if not entrada:
        continue

    historico.append({"role": "user", "content": entrada})

    resposta = client.messages.create(
        model=MODELO,
        max_tokens=1000,
        system=REGRAS,
        messages=historico,
    )

    texto = resposta.content[0].text
    historico.append({"role": "assistant", "content": texto})
    print(f"\nIA: {texto}\n")