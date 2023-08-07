export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  validaIdade(dataNascimento);

  console.log(validaIdade(dataNascimento));
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
