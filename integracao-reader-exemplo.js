const ACERVO_URL = "https://jogoiarexx-blip.github.io/Manga-HQ-acervo-2/";

export async function carregarAcervoExterno() {
  const resposta = await fetch(`${ACERVO_URL}catalogo.json`, { cache: "no-store" });
  if (!resposta.ok) throw new Error(`Acervo externo indisponível: ${resposta.status}`);
  return resposta.json();
}
