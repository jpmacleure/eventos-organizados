# eventos-organizados
Sistema para gerenciamento de eventos.

#### 1. Requisito

##### 1.1 Visão e Escopo
**Visão:**  
Desenvolver um sistema de organização de eventos que facilite a criação, gerenciamento e participação em eventos para usuários finais e organizadores. O sistema deve ser intuitivo, seguro e escalável, permitindo que eventos de diferentes tipos e tamanhos sejam organizados e geridos de forma eficiente.

**Escopo:**  
- **Funcionalidades para organizadores:**
  - Criação, edição e cancelamento de eventos.
  - Definição de detalhes como nome, descrição, data, horário, local, número de vagas e preço (se houver).
  - Controle de inscrições e emissão de ingressos.
  - Envio de notificações e atualizações para os inscritos.
  - Relatórios de participação e feedbacks dos participantes.

- **Funcionalidades para participantes:**
  - Pesquisa e visualização de eventos disponíveis.
  - Inscrição em eventos com possibilidade de pagamento online.
  - Recebimento de ingressos eletrônicos.
  - Recebimento de notificações e lembretes sobre os eventos inscritos.
  - Possibilidade de enviar feedback sobre os eventos participados.

- **Funcionalidades administrativas:**
  - Gestão de usuários (organizadores e participantes).
  - Moderação de eventos e conteúdo gerado pelos usuários.
  - Monitoramento de uso do sistema e geração de relatórios administrativos.

##### 1.2 Especificação de Requisitos

**Histórias de Usuário:**
- **Como organizador**, eu quero criar e editar eventos para que eu possa promover e gerenciar meus eventos de forma eficiente.
- **Como participante**, eu quero pesquisar e me inscrever em eventos de meu interesse para participar e estar ciente das informações relevantes.
- **Como administrador**, eu quero moderar e monitorar o sistema para garantir a segurança e a qualidade do conteúdo.

**Regras de Negócio:**
- Apenas organizadores autenticados podem criar e editar eventos.
- O sistema deve enviar notificações automáticas aos participantes sobre alterações ou cancelamentos de eventos.
- Pagamentos realizados pelos participantes devem ser seguros e processados via integração com um gateway de pagamento.
- Cancelamentos de inscrições por parte dos participantes só podem ser feitos até 24 horas antes do início do evento.

**Requisitos Não Funcionais (RNF):**
- **Segurança:** Todos os dados sensíveis devem ser armazenados de forma criptografada e o sistema deve implementar autenticação segura para usuários.
- **Escalabilidade:** A arquitetura deve permitir fácil escalabilidade para suportar um aumento no número de eventos e usuários.
- **Usabilidade:** A interface do usuário deve ser intuitiva e fácil de usar, aderindo às melhores práticas de design.

#### 2. Projeto de Software

##### 2.1 Projeto de Interface com Usuário
- **Tela de Login/Registro:** Permitir que usuários (organizadores e participantes) possam se cadastrar e autenticar de forma segura.
- **Dashboard de Organizador:** Interface para que organizadores possam criar, editar e gerenciar seus eventos.
- **Página de Pesquisa de Eventos:** Interface para que participantes possam buscar e visualizar eventos disponíveis.
- **Página de Detalhes do Evento:** Exibir informações detalhadas de um evento, com opções para inscrição e pagamento.
- **Interface Administrativa:** Área de gerenciamento para administradores controlarem usuários e eventos.

##### 2.2 Arquitetura Lógica
- **Camada de Apresentação:** Implementada em frameworks web como Bootstrap5, responsável pela interação com o usuário.
- **Camada de Aplicação:** Implementada em Node.js, utilizando o Express.js para lidar com lógica de negócios e rotas HTTP.
- **Camada de Persistência:** Implementada usando ORM como Sequelize para a comunicação com o banco de dados relacional.

##### 2.3 Arquitetura Física
- **Servidores Web:** Hospedagem do sistema em servidores de nuvem como AWS ou Azure, utilizando balanceadores de carga para gerenciar o tráfego.
- **Banco de Dados:** Utilização de um banco de dados relacional como PostgreSQL, com backups regulares e replicação para alta disponibilidade.
- **Armazenamento de Arquivos:** Arquivos e mídias relacionados aos eventos são armazenados em serviços de armazenamento de objetos.

##### 2.4 Projeto de Banco de Dados
- **Tabela Usuários:** Armazena dados dos usuários, incluindo informações de login, perfil e permissões.
- **Tabela Eventos:** Armazena informações dos eventos, como título, descrição, data, local, organizador, etc.
- **Tabela Inscrições:** Relaciona participantes com eventos e armazena status de inscrição, pagamentos, etc.
- **Tabela Feedback:** Coleta e armazena feedback dos participantes após a realização dos eventos.


Este projeto visa garantir uma abordagem organizada e sistemática para o desenvolvimento de um sistema de organização de eventos, cobrindo todos os aspectos críticos do ciclo de vida do software, desde a concepção até a implementação e testes.