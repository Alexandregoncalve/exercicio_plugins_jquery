$(document).ready(function() {
  // Função para preencher automaticamente o endereço
  function preencherEndereco() {
    var cep = $('#cep').val();

    // Verifica se o CEP foi digitado corretamente (opcional)
    if (cep.length !== 8) {
      alert('CEP inválido');
      return;
    }

    // Cria a URL da API com o CEP digitado
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';

    // Faz a requisição AJAX para a API ViaCEP
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        // Preenche os campos do endereço com os dados retornados pela API
        $('#endereco').val(data.logradouro);
        $('#bairro').val(data.bairro);
        $('#cidade').val(data.localidade);
        $('#estado').val(data.uf);
      },
      error: function(error) {
        console.log('Ocorreu um erro:', error);
      }
    });
  }

  // Evento que dispara a função ao alterar o valor do campo de CEP
  $('#cep').on('blur', preencherEndereco);

  // Aplica a máscara para CPF
  $('#cpf').mask('000.000.000-00', { reverse: true });

  // Aplica a máscara para telefone
  $('#telefone').mask('(00) 00000-0000');


  $('form').validate({
    rules: {
        nome: {
            required: true,
        },
        cpf: {
          required: true,
        },
        datanascimento: {
          required: true,
        },
        cep : {
          required: true,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome',
        cpf: 'Por Favor insira seu CPF completo',
        datanascimento: 'Por favor insira sua data de Nascimento',
        cep: 'Campo Obrigatório para preencher seu ENDEREÇO',
        complemento: 'Insira o Complemento',
        numero: 'Por favor insira o numero de sua residencia',
        email: 'Por favor insira o e-mail completo',
        telefone: 'Insira seu Telefone Celular'
    },
   
    })

});


