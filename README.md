# 📦 StockMaster Enterprise - IA TECNOLOGIA

Sistema de Gestão de Estoque, Controle Patrimonial com Números Individuais de Inventário (INV), Etiquetas com Código de Barras, Controle de Notas Fiscais (NF-e) e Importação/Exportação Excel (.xlsx).

---

## 🔒 Segurança e Acesso Restrito
Este site é **fechado ao público** e protegido por tela de autenticação exclusiva e controle de acesso por usuários.
- **Administrador**: `admin`
- Acesso restrito a usuários autorizados.

---

## 🚀 Como Hospedar Gratuitamente no GitHub Pages

### Passo 1: Criar um Novo Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome para o repositório (exemplo: `gerenciador-estoque` ou `stockmaster`).
3. Deixe o repositório como **Público** (ou Privado caso possua GitHub Pro/Enterprise com suporte a Pages em repositórios privados).
4. Clique em **Create repository**.

### Passo 2: Enviar os Arquivos para o GitHub
No seu computador ou terminal (na pasta do projeto `gerenciador-estoque`):
```bash
git init
git add .
git commit -m "Publicação inicial StockMaster - IA TECNOLOGIA"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

*(Ou você pode simplesmente arrastar e soltar todos os arquivos da pasta na interface web do GitHub clicando em "upload an existing file").*

### Passo 3: Ativar o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** -> **Source**, selecione **Deploy from a branch** (Branch: `main` e pasta: `/(root)`).
4. Clique em **Save**.
5. Em cerca de 1 minuto, seu site estará ativo no link:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

---

## ✨ Funcionalidades do StockMaster
- **Painel Dashboard**: Estatísticas financeiras e alertas de estoque baixo/zerado.
- **Catálogo de Inventário**: Busca em tempo real, filtros por status/categoria e ordenação.
- **Rastreabilidade INV**: Geração de número patrimonial individual (`INV-000001` a `INV-XXXXXX`) para cada unidade física.
- **Impressão de Etiquetas**: Folha de etiquetas formatada para papel adesivo (padrão 3 colunas com logo IA TECNOLOGIA e código de barras).
- **Entradas e Saídas**: Registro de movimentações com histórico e edição.
- **Módulo Fiscal**: Registro de número de NF-e, chave de acesso de 44 dígitos e link do portal SEFAZ.
- **Importação/Exportação Excel (.xlsx)**: Suporte completo a planilhas Excel.
- **Envio de Relatórios por E-mail**: Alertas automáticos com 1 clique para e-mails de logística.
