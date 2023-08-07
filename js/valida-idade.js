export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity("O usuário não é maior de idade");
  }
}

function validaIdade(data) {
  const datAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return datAtual >= dataMais18;
}
