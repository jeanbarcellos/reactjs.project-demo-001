# Projeto 101 (Frontend em Javascript/ReactJS)

Implementação de um projeto do zero em ReactJS

## Objetivo

Implementar um sistema do zero utilizando ReactJS e adicionando recursos e bibliotecas durante o desenvolvimento, com a finalidade de revisar o que foi aprendido em meses de trabalho e estudos.

## Tecnologias/pacotes utilizados

- Material-UI
- Tailwind CSS
- JSS
- React Router
- Redux
- Lodash

## Extras

- CSS injection order

  https://material-ui.com/styles/advanced/#css-injection-order

## TO-DO

- Validação de formulário

## Referências

- [Material-UI](https://material-ui.com/)
- [Como organizar projetos em React](https://imasters.com.br/front-end/como-organizar-projetos-em-react)
- [mahenrique94/tst-reactive-architecture](https://github.com/mahenrique94/tst-reactive-architecture)

## Estrutura

```bash
root/
  build/                        # Arquivos para produção
  node_modules/                 # Dependências do Projeto
  public/                       # Assets, arquivos estáticos que não serão processados pelo webpack
  src/                          # Código fonte da Aplicação
    api/                        # Abstração da API backend
    assets/                     # Alguns arquivos CSSs, Fonts, dentre outros, globais do projeto
    components/                 # Armazena todos os componentes "globais" do projeto
    config/                     # Armazena as onfigurações globais do projeto
    enums/                      # Armazena valores que são utilizados em vários lugares dos códigos
    hooks/                      # Armazen os hooks globais do projeto
    layout/                     # Layout ao App
    modules/                    # Armazena e separa os contextos do projeto
    services/                   # Serviços
    store/                      # Store principal do App
    utils/                      # Utilitários do App
  .env                          # Configuração de Variáveis de ambiente
  .gitignore                    # Arquivos a serem ignorados no repositório
  .prettierrc                   #
  craco.config.js               #
  jsconfig.json                 #
  package.json                  # Arquivo de dependências do projeto
  README.md                     # Documentação resumida
  tailwind.config.js            # Configuração do Tailing
  yarn.lock                     #
```

## Docker

Geração da imagem

```
docker build -t project-101/frontend-reactjs .
```

Execução da imagem

```
docker run -d -p 3000:3000 --name project-101/frontend-reactjs project-101/frontend-reactjs
```
