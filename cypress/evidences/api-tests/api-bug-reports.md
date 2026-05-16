BUG REPORT: 1

Titulo: Validando campo obrigatorio

Descrição: A reserva pelo Booking esta sendo criada, mesmo que não esteja preenchido o campo obrigatorio

Passos Para Reproduzir:

1. Create Booking
2. Deixa vazio o campo obrigatorio
3. Salvar
4. Clicar em Send

Resultado Esperado: Status de erro 400/401

Resultado Obtido: Status de sucesso 200

Evidencias: https://www.loom.com/share/9f9081c0cf1a470f993c234b2a9b2303


° Ambiente: API

° Navegador: Postman

° Dispositivo: Computador

° Sistema Operacional: Windows 11

Severidade: Alta

Prioridade: Alta

Observações Adicionais: Importante ser concertado o quanto antes, os campos obrigatórios devem ser todos preenchidos, para uma melhor organização



BUG REPORT: 2

Titulo: Criando reserva com caracteres especiais

Descrição: Booking aceita que crie reserva com caracteres que não são letras

Passos Para Reproduzir:

1. Create booking
2. Escrever no nome caracteres especiais (!@#$%)
3. Salvar
4. Clicar em Send

Resultado Esperado: Status de erro 400/ 401

Resultado Obtido: Status de sucesso 200

Evidencias: https://www.loom.com/share/55622a7c67a54e6b8735a7eda27cc1e6


° Ambiente: API

° Navegador: Postman

° Dispositivo: Computador
 
° Sistema Operacional: Windows 11

Severidade: Media

Prioridade: Media

Observações Adicionais: Não deveria ser possível criar reserva, com caracteres que não sejam letras na área de nome (First Name/ Last Name) 


BUG REPORT: 3

Titulo: Não encontra reserva recém criada

Descrição: Reservas recém criadas não estão sendo encontradas 

Passos Para Reproduzir:

1. Criar uma nova reserva
2. Get booking
3. Inserir bookingId
4. Salvar
5. Clicar em Post

Resultado Esperado: Status 200 e JSON com os detalhes da reserva

Resultado Obtido: Status 404 Not Found

Evidencias: https://www.loom.com/share/25d0c4a2a00e44c6b6bdb7543c24ba9d


° Ambiente: Back-end

° Navegador: Postman

° Dispositivo: Computador

° Sistema Operacional: Windows 11

Severidade: Alta

Prioridade: Alta

Observações Adicionais: Isso pode causar problemas ao local onde o hospede fez sua reserva, pois não estaria no sistema do hotel a reserva feita