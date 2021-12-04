var getNumero = () => Math.floor(Math.random() * 10 + 1)
const primNum = getNumero()
const segNum = getNumero()
const resultCorreto = primNum + segNum

document.getElementById("labelOperacao").innerHTML = `${primNum} + ${segNum} = ?*`

function onSub(params) {

    if (!params.nome.value) {
        alert("Campo NOME é obrigatório.")
        params.nome.focus()
        return false
    }

    if (!params.email.value) {
        alert("Campo EMAIL é obrigatório.")
        params.email.focus()
        return false
    }

    if (!params.profissional.value) {
        alert("Escolha um estado profissional.")
        params.profissional.focus()
        return false
    }

    if (!params.objetivo.value) {
        alert("Escolha um objetivo.")
        params.objetivo.focus()
        return false
    }

    if (!params.operacao.value) {
        alert("O resultado é obrigatório.")
        params.operacao.focus()
        return false
    }
    if (parseInt(params.operacao.value) !== resultCorreto) {
        alert("Valor incorreto.")
        params.operacao.focus()
        return false
    }
    return true
}
