
# PROJETO: Jogo da Forca

Esse projeto foi desenvolvido a partir das video-aulas disponibilizadas no youtube **[Jogo da Forca]** (https://www.youtube.com/playlist?list=PLUPt90PJkVdU5kHy_QHmJi0MY_Zgw7CJV)

## 🚀 Como começar?
Acesse o link disponibilizado logo acima. Ao ser redirecionado você terá todas as aulas disponíveis de forma gratuita. O conteúdo está completo e muito bem explicado, contando com 27 aulas no total.

## 📋 Pré-requisitos:
Um editor de textos, é recomendado o Visual Studio Code. É necessário a instalação do Xampp + Mariadb

## 🔎 Conteúdo:
Foi desenvolvido o jogo da forca no projeto inicial, com diversas modificações ao longo do projeto pelo professor Agnaldo Guimarães. Por fim, eu contribui com o projeto adicionado as palavras ao banco de dados e estabelecendo a conexão.

## 🛠️ Construído com:
* [GitHub](https://github.com/)
* [Xampp + mariadb](https://www.apachefriends.org/pt_br/index.html)

### 🔧 Configurações do banco de dados:

#### Criar o banco:

```
CREATE DATABASE projetosDB;
```
#### Utilizar o banco:

```
USE projetosDB;
```
#### Criar a tabela:

```
CREATE TABLE jogoDaForca (
    id INT NOT NULL AUTO_INCREMENT,
    palavras VARCHAR(255) NOT NULL,
    categorias VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
```
#### Exemplo de inserts:

```
INSERT INTO projetosDB.jogoDaForca (palavras,categorias) VALUES
    ('AFEGANISTAO','PAÍS'),
    ('AFRICA DO SUL','PAÍS'),
    ('ALBANIA','PAÍS'),
    ('ALEMANHA','PAÍS'),
    ('ANDORRA','PAÍS'),
    ('ANGOLA','PAÍS'),
    ('ANTIGUA E BARBUDA','PAÍS'),
    ('ARABIA SAUDITA','PAÍS'),
    ('ARGELIA','PAÍS'),
    ('ARGENTINA','PAÍS');
INSERT INTO projetosDB.jogoDaForca (palavras,categorias) VALUES
    ('VASCO','FUTEBOL'),
    ('FLUMINENSE','FUTEBOL'),
    ('CRUZEIRO','FUTEBOL'),
    ('ATLETICO MINEIRO','FUTEBOL');
```

## ✒️ Autores:
**Agnaldo Guimarães** 
https://www.youtube.com/@AgnaldoGuimaraes

**Pedro Ricardo de Campos** [pedrordcampos]
(https://github.com/pedrordcampos)
















