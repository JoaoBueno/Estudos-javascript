-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema fullcontrol
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fullcontrol
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fullcontrol` DEFAULT CHARACTER SET utf8 ;
USE `fullcontrol` ;

-- -----------------------------------------------------
-- Table `fullcontrol`.`fcos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fcos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigo` INT(14) NOT NULL COMMENT 'CPF, CNPJ ou código',
  `nomecompleto` VARCHAR(55) NOT NULL,
  `nomereduzido` VARCHAR(30) NOT NULL,
  `type` ENUM('J', 'F', 'O') NOT NULL,
  `emuso` ENUM('S', 'N', 'E') NULL,
  `rg` VARCHAR(20) NULL COMMENT 'RG para type = F\nInscrição Estadual para type = J\n',
  `rgexpedidor` VARCHAR(10) NULL,
  `rguf` VARCHAR(2) NULL,
  `rgexpedicao` DATE NULL,
  `homepage` VARCHAR(50) NULL,
  `aniversario` DATE NULL,
  `zonafranca` TINYINT(1) NULL,
  `suframa` VARCHAR(12) NULL,
  `limitecredito` DECIMAL(11,2) NULL,
  `observacao` TEXT NULL,
  `contrib-ie` TINYINT(1) NULL,
  `orgao_publico` TINYINT(1) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cnpjcpf_UNIQUE` (`codigo` ASC))
ENGINE = InnoDB
COMMENT = 'Fornecedor, Cliente e Outros - (aigefcop)\nTabela de entidade' /* comment truncated */ /* jurídica ou física contendo os dados comuns de uma "PESSOA"*/;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fco_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fco_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Tipos de cliente:\nCliente, Fornecedor, Transportadora, Rural' /* comment truncated */ /* e outros, Funcionário.*/;


-- -----------------------------------------------------
-- Table `fullcontrol`.`phone_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`phone_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Tipo do número de telefone - FCO ou Contato, Cadastro de em' /* comment truncated */ /*presa. Local de entrega e cobrança.*/;


-- -----------------------------------------------------
-- Table `fullcontrol`.`phones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`phones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `phonetypesid` INT NOT NULL,
  `ddd` INT NOT NULL,
  `telefone` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_phones_phone_types1_idx` (`phonetypesid` ASC),
  CONSTRAINT `fk_phones_phone_types1`
    FOREIGN KEY (`phonetypesid`)
    REFERENCES `fullcontrol`.`phone_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Números de telefone de todo sistema';


-- -----------------------------------------------------
-- Table `fullcontrol`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`addresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ie` VARCHAR(20) NULL COMMENT 'Inscrição Estadual',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `ie_UNIQUE` (`ie` ASC))
ENGINE = InnoDB
COMMENT = 'Endereços de todo sistema';


-- -----------------------------------------------------
-- Table `fullcontrol`.`address_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`address_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'quem utiliza esse endereço. Entrega, cobrança, fco, empres' /* comment truncated */ /*a.*/;


-- -----------------------------------------------------
-- Table `fullcontrol`.`departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`departments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `descricao_UNIQUE` (`descricao` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `departmentsid` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `aniversario` DATE NULL,
  `obeservacao` TEXT NULL,
  `cpf` INT NULL,
  `rg` VARCHAR(20) NULL,
  `statusid` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contacts_departments1_idx` (`departmentsid` ASC),
  INDEX `fk_contacts_status1_idx` (`statusid` ASC),
  CONSTRAINT `fk_contacts_departments1`
    FOREIGN KEY (`departmentsid`)
    REFERENCES `fullcontrol`.`departments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contacts_status1`
    FOREIGN KEY (`statusid`)
    REFERENCES `fullcontrol`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'contatos do FCO';


-- -----------------------------------------------------
-- Table `fullcontrol`.`activities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`activities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Ramo de atividades do FCO.';


-- -----------------------------------------------------
-- Table `fullcontrol`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Cadastro de Grupos do sistema (gergrdip).';


-- -----------------------------------------------------
-- Table `fullcontrol`.`group_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`group_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Tipos de grupo do sistema';


-- -----------------------------------------------------
-- Table `fullcontrol`.`fco_sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fco_sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Porte das empresas do FCO';


-- -----------------------------------------------------
-- Table `fullcontrol`.`fco_regimes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fco_regimes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Regime das FCO';


-- -----------------------------------------------------
-- Table `fullcontrol`.`price_headers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`price_headers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'tabela com o cabeçalho das tabelas de preço.';


-- -----------------------------------------------------
-- Table `fullcontrol`.`price_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`price_details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Detalhes de cada produto/item';


-- -----------------------------------------------------
-- Table `fullcontrol`.`credit_situations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`credit_situations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Situações de crédito (aivesicp)\nA - Ótimo\nB - Bom\nC - Se' /* comment truncated */ /*m crédito*/;


-- -----------------------------------------------------
-- Table `fullcontrol`.`banks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`banks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'tabela de Bancos (aibabanp)';


-- -----------------------------------------------------
-- Table `fullcontrol`.`fco_bank_accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fco_bank_accounts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'contas correntes dos FCO´s';


-- -----------------------------------------------------
-- Table `fullcontrol`.`destinations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`destinations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` ENUM('E', 'S') NULL,
  `descricao` VARCHAR(45) NULL,
  `fisger` ENUM('F', 'G', 'T') NULL COMMENT 'Fiscal, Gerencial ou Todos',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fco_cobranca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fco_cobranca` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fco_entrega`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fco_entrega` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `inscricaoestadual` VARCHAR(20) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `inscricaoestadual_UNIQUE` (`inscricaoestadual` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fco_classification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fco_classification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  `sigla` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Classificação das empresas\n- Simples Estadual\n- Simples Fe' /* comment truncated */ /*deral
- Ambos
- Super Simples*/;


-- -----------------------------------------------------
-- Table `fullcontrol`.`reminders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`reminders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lembrete` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`reminders_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`reminders_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`liberations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`liberations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Esta tabela registra os tipos de liberações que o cliente ' /* comment truncated */ /*pode ter. 
Exemplo: Cheque, Requisição
Campos: LIBNRF, LIBCON, LIBREQ, LIBCHQ*/;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fiscal_models`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fiscal_models` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Tabela de Modelos Fiscais.\n 1-Nota Fiscal   (1 e 1A) \n55-Not' /* comment truncated */ /*a fiscal eletronica */;


-- -----------------------------------------------------
-- Table `fullcontrol`.`destinations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`destinations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` ENUM('E', 'S') NULL,
  `descricao` VARCHAR(45) NULL,
  `fisger` ENUM('F', 'G', 'T') NULL COMMENT 'Fiscal, Gerencial ou Todos',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`contacts_fcos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`contacts_fcos` (
  `fcosid` INT NOT NULL,
  `contactsid` INT NOT NULL,
  PRIMARY KEY (`fcosid`, `contactsid`),
  INDEX `fk_contacts_has_fcos_fcos1_idx` (`fcosid` ASC),
  INDEX `fk_contacts_has_fcos_contacts_idx` (`contactsid` ASC),
  CONSTRAINT `fk_contacts_has_fcos_contacts`
    FOREIGN KEY (`contactsid`)
    REFERENCES `fullcontrol`.`contacts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contacts_has_fcos_fcos1`
    FOREIGN KEY (`fcosid`)
    REFERENCES `fullcontrol`.`fcos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`emails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`emails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(60) NULL,
  `recebexml` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`emails_fcos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`emails_fcos` (
  `emailsid` INT NOT NULL,
  `fcosid` INT NOT NULL,
  PRIMARY KEY (`emailsid`, `fcosid`),
  INDEX `fk_emails_has_fcos_fcos1_idx` (`fcosid` ASC),
  INDEX `fk_emails_has_fcos_emails1_idx` (`emailsid` ASC),
  CONSTRAINT `fk_emails_has_fcos_emails1`
    FOREIGN KEY (`emailsid`)
    REFERENCES `fullcontrol`.`emails` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_emails_has_fcos_fcos1`
    FOREIGN KEY (`fcosid`)
    REFERENCES `fullcontrol`.`fcos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`contacts_emails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`contacts_emails` (
  `contactsid` INT NOT NULL,
  `emailsid` INT NOT NULL,
  PRIMARY KEY (`contactsid`, `emailsid`),
  INDEX `fk_contacts_has_emails_emails1_idx` (`emailsid` ASC),
  INDEX `fk_contacts_has_emails_contacts1_idx` (`contactsid` ASC),
  CONSTRAINT `fk_contacts_has_emails_contacts1`
    FOREIGN KEY (`contactsid`)
    REFERENCES `fullcontrol`.`contacts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contacts_has_emails_emails1`
    FOREIGN KEY (`emailsid`)
    REFERENCES `fullcontrol`.`emails` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`functions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`functions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`contacts_phones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`contacts_phones` (
  `contacts_id` INT NOT NULL,
  `phones_id` INT NOT NULL,
  PRIMARY KEY (`contacts_id`, `phones_id`),
  INDEX `fk_contacts_has_phones_phones1_idx` (`phones_id` ASC),
  INDEX `fk_contacts_has_phones_contacts1_idx` (`contacts_id` ASC),
  CONSTRAINT `fk_contacts_has_phones_contacts1`
    FOREIGN KEY (`contacts_id`)
    REFERENCES `fullcontrol`.`contacts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contacts_has_phones_phones1`
    FOREIGN KEY (`phones_id`)
    REFERENCES `fullcontrol`.`phones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fcos_phones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fcos_phones` (
  `fcos_id` INT NOT NULL,
  `phones_id` INT NOT NULL,
  PRIMARY KEY (`fcos_id`, `phones_id`),
  INDEX `fk_fcos_has_phones_phones1_idx` (`phones_id` ASC),
  INDEX `fk_fcos_has_phones_fcos1_idx` (`fcos_id` ASC),
  CONSTRAINT `fk_fcos_has_phones_fcos1`
    FOREIGN KEY (`fcos_id`)
    REFERENCES `fullcontrol`.`fcos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fcos_has_phones_phones1`
    FOREIGN KEY (`phones_id`)
    REFERENCES `fullcontrol`.`phones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fcos_fco_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fcos_fco_types` (
  `fcos_id` INT NOT NULL,
  `fco_types_id` INT NOT NULL,
  PRIMARY KEY (`fcos_id`, `fco_types_id`),
  INDEX `fk_fcos_has_fco_types_fco_types1_idx` (`fco_types_id` ASC),
  INDEX `fk_fcos_has_fco_types_fcos1_idx` (`fcos_id` ASC),
  CONSTRAINT `fk_fcos_has_fco_types_fcos1`
    FOREIGN KEY (`fcos_id`)
    REFERENCES `fullcontrol`.`fcos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fcos_has_fco_types_fco_types1`
    FOREIGN KEY (`fco_types_id`)
    REFERENCES `fullcontrol`.`fco_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`fcos_has_fco_classification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`fcos_has_fco_classification` (
  `fcos_id` INT NOT NULL,
  `fco_classification_id` INT NOT NULL,
  PRIMARY KEY (`fcos_id`, `fco_classification_id`),
  INDEX `fk_fcos_has_fco_classification_fco_classification1_idx` (`fco_classification_id` ASC),
  INDEX `fk_fcos_has_fco_classification_fcos1_idx` (`fcos_id` ASC),
  CONSTRAINT `fk_fcos_has_fco_classification_fcos1`
    FOREIGN KEY (`fcos_id`)
    REFERENCES `fullcontrol`.`fcos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fcos_has_fco_classification_fco_classification1`
    FOREIGN KEY (`fco_classification_id`)
    REFERENCES `fullcontrol`.`fco_classification` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Grupo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Grupo` (
  `idGrupo` INT NOT NULL,
  `Grupo` VARCHAR(45) NULL,
  `Descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`idGrupo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Subgrupo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Subgrupo` (
  `idSubgrupo` INT NOT NULL,
  `Subgrupo` VARCHAR(45) NULL,
  `Descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`idSubgrupo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Produtos` (
  `idProdutos` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NULL,
  `Grupos_idGrupos` INT NOT NULL,
  `SubGrupos_idSubGrupos` INT NOT NULL,
  PRIMARY KEY (`idProdutos`),
  INDEX `fk_Produtos_Grupos1_idx` (`Grupos_idGrupos` ASC),
  INDEX `fk_Produtos_SubGrupos1_idx` (`SubGrupos_idSubGrupos` ASC),
  CONSTRAINT `fk_Produtos_Grupos1`
    FOREIGN KEY (`Grupos_idGrupos`)
    REFERENCES `fullcontrol`.`Grupos` (`idGrupos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produtos_SubGrupos1`
    FOREIGN KEY (`SubGrupos_idSubGrupos`)
    REFERENCES `fullcontrol`.`SubGrupos` (`idSubGrupos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Categoria` (
  `idCategoria` INT NOT NULL,
  `Categoria` VARCHAR(45) NULL,
  `Descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Categoria_has_Produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Categoria_has_Produtos` (
  `Categoria_idCategoria` INT NOT NULL,
  `Produtos_id` INT NOT NULL,
  PRIMARY KEY (`Categoria_idCategoria`, `Produtos_id`),
  INDEX `fk_Categoria_has_Produtos_Produtos1_idx` (`Produtos_id` ASC),
  INDEX `fk_Categoria_has_Produtos_Categoria1_idx` (`Categoria_idCategoria` ASC),
  CONSTRAINT `fk_Categoria_has_Produtos_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `fullcontrol`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Categoria_has_Produtos_Produtos1`
    FOREIGN KEY (`Produtos_id`)
    REFERENCES `fullcontrol`.`Produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Grupos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Grupos` (
  `idGrupos` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NULL,
  PRIMARY KEY (`idGrupos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`SubGrupos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`SubGrupos` (
  `idSubGrupos` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NULL,
  `Grupos_idGrupos` INT NOT NULL,
  PRIMARY KEY (`idSubGrupos`),
  INDEX `fk_SubGrupos_Grupos1_idx` (`Grupos_idGrupos` ASC),
  CONSTRAINT `fk_SubGrupos_Grupos1`
    FOREIGN KEY (`Grupos_idGrupos`)
    REFERENCES `fullcontrol`.`Grupos` (`idGrupos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Categorias` (
  `idCategorias` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`idCategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Produtos` (
  `idProdutos` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NULL,
  `Grupos_idGrupos` INT NOT NULL,
  `SubGrupos_idSubGrupos` INT NOT NULL,
  PRIMARY KEY (`idProdutos`),
  INDEX `fk_Produtos_Grupos1_idx` (`Grupos_idGrupos` ASC),
  INDEX `fk_Produtos_SubGrupos1_idx` (`SubGrupos_idSubGrupos` ASC),
  CONSTRAINT `fk_Produtos_Grupos1`
    FOREIGN KEY (`Grupos_idGrupos`)
    REFERENCES `fullcontrol`.`Grupos` (`idGrupos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produtos_SubGrupos1`
    FOREIGN KEY (`SubGrupos_idSubGrupos`)
    REFERENCES `fullcontrol`.`SubGrupos` (`idSubGrupos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullcontrol`.`Produtos_has_Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullcontrol`.`Produtos_has_Categorias` (
  `Produtos_idProdutos` INT NOT NULL,
  `Categorias_idCategorias` INT NOT NULL,
  PRIMARY KEY (`Produtos_idProdutos`, `Categorias_idCategorias`),
  INDEX `fk_Produtos_has_Categorias_Categorias1_idx` (`Categorias_idCategorias` ASC),
  INDEX `fk_Produtos_has_Categorias_Produtos1_idx` (`Produtos_idProdutos` ASC),
  CONSTRAINT `fk_Produtos_has_Categorias_Produtos1`
    FOREIGN KEY (`Produtos_idProdutos`)
    REFERENCES `fullcontrol`.`Produtos` (`idProdutos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produtos_has_Categorias_Categorias1`
    FOREIGN KEY (`Categorias_idCategorias`)
    REFERENCES `fullcontrol`.`Categorias` (`idCategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
