-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Ago-2022 às 20:14
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `smart_coffee`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `access`
--

CREATE TABLE `access` (
  `id_access` int(11) NOT NULL,
  `user` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `access`
--

INSERT INTO `access` (`id_access`, `user`, `email`) VALUES
(1, 'João Victor', 'h.e.r.o.n@outlook.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clients`
--

CREATE TABLE `clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `coupon_code` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `client_recipes`
--

CREATE TABLE `client_recipes` (
  `id` int(10) UNSIGNED NOT NULL,
  `recipe_id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `client_recipe_ingredients`
--

CREATE TABLE `client_recipe_ingredients` (
  `ingredient_id` int(10) UNSIGNED NOT NULL,
  `client_recipe_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `complements`
--

CREATE TABLE `complements` (
  `recipe_id` int(10) UNSIGNED NOT NULL,
  `ingredient_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `complements`
--

INSERT INTO `complements` (`recipe_id`, `ingredient_id`) VALUES
(1, 2),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(2, 2),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(3, 2),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(4, 2),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(5, 2),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `preparation_time` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`, `preparation_time`, `photo`) VALUES
(1, 'Café', 45, 'images/grao-de-cafe.svg'),
(2, 'Açúcar', 10, 'images/acucar.svg'),
(3, 'Chocolate', 10, 'images/chocolate.svg'),
(4, 'Leite', 10, 'images/leite.svg'),
(5, 'Chantilly', 10, 'images/chantilly.svg'),
(6, 'Donuts - Super recheados', 45, 'images/donut.svg'),
(7, 'Cookie de Chocolate', 45, 'images/cookie.svg'),
(8, 'CupCake', 45, 'images/cupcake.svg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `recipes`
--

CREATE TABLE `recipes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `content` text NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `content`, `photo`) VALUES
(1, 'Café duplo', '', 'images/cafe-duplo.svg'),
(2, 'Café expresso', '', 'images/coffee.svg'),
(3, 'Mocha', '', 'images/mocha.svg'),
(4, 'Cappuccino', '', 'images/cappuccino.svg'),
(5, 'Americano', '', 'images/cafe-americano.svg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `recipe_ingredients`
--

CREATE TABLE `recipe_ingredients` (
  `id` int(10) UNSIGNED NOT NULL,
  `ingredient_id` int(10) UNSIGNED NOT NULL,
  `recipe_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `recipe_ingredients`
--

INSERT INTO `recipe_ingredients` (`id`, `ingredient_id`, `recipe_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 3, 3),
(5, 4, 3),
(6, 1, 4),
(7, 3, 4),
(8, 4, 4),
(9, 1, 5);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id_access`);

--
-- Índices para tabela `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `coupon_code_UNIQUE` (`coupon_code`);

--
-- Índices para tabela `client_recipes`
--
ALTER TABLE `client_recipes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_items_recipes_idx` (`recipe_id`),
  ADD KEY `fk_client_recipes_clients1_idx` (`client_id`);

--
-- Índices para tabela `client_recipe_ingredients`
--
ALTER TABLE `client_recipe_ingredients`
  ADD PRIMARY KEY (`ingredient_id`,`client_recipe_id`),
  ADD KEY `fk_complements_ingredients_idx` (`ingredient_id`),
  ADD KEY `fk_complements_orders_items_idx` (`client_recipe_id`);

--
-- Índices para tabela `complements`
--
ALTER TABLE `complements`
  ADD PRIMARY KEY (`recipe_id`,`ingredient_id`),
  ADD KEY `fk_ingredients_recipes_recipes_idx` (`recipe_id`),
  ADD KEY `fk_ingredients_recipes_ingredients_idx` (`ingredient_id`);

--
-- Índices para tabela `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Índices para tabela `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Índices para tabela `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_recipes_complements_recipes_idx` (`recipe_id`),
  ADD KEY `fk_recipes_complements_ingredients_idx` (`ingredient_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `access`
--
ALTER TABLE `access`
  MODIFY `id_access` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `client_recipes`
--
ALTER TABLE `client_recipes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `client_recipes`
--
ALTER TABLE `client_recipes`
  ADD CONSTRAINT `fk_client_recipes_clients1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_items_recipes` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `client_recipe_ingredients`
--
ALTER TABLE `client_recipe_ingredients`
  ADD CONSTRAINT `fk_complements_ingredients` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_complements_orders_items` FOREIGN KEY (`client_recipe_id`) REFERENCES `client_recipes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `complements`
--
ALTER TABLE `complements`
  ADD CONSTRAINT `fk_ingredients_recipes_ingredients` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ingredients_recipes_recipes` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD CONSTRAINT `fk_ingredients_has_recipes_ingredients1` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ingredients_has_recipes_recipes1` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
