CREATE DATABASE IF NOT EXISTS quiz_interactif;
USE quiz_interactif;

CREATE TABLE IF NOT EXISTS subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject_id INT,
    question_text TEXT NOT NULL,
    question_type ENUM('qcm', 'truefalse') NOT NULL,
    level ENUM('beginner', 'intermediate', 'expert') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS options (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT,
    option_text VARCHAR(255) NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS scores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    player_name VARCHAR(100) NOT NULL,
    subject_id INT,
    level ENUM('beginner', 'intermediate', 'expert'),
    score DECIMAL(5,2) NOT NULL,
    total_questions INT NOT NULL,
    percentage INT NOT NULL,
    quiz_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL
);


INSERT INTO subjects (name, description) VALUES 
('html', 'Langage de balisage pour structurer le contenu web'),
('css', 'Langage de style pour la présentation des pages web'),
('js', 'Langage de programmation pour le web interactif');

INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(1, 'Quelle balise est utilisée pour le titre le plus important ?', 'qcm', 'beginner'),
(1, 'HTML5 est la dernière version de HTML.', 'truefalse', 'beginner'),
(1, 'Quelle balise est utilisée pour créer une liste non ordonnée ?', 'qcm', 'beginner'),
(1, 'L''attribut ''required'' rend un champ de formulaire obligatoire.', 'truefalse', 'beginner'),
(1, 'Quel est le bon Doctype pour HTML5 ?', 'qcm', 'beginner');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(1, '<h1>', TRUE), (1, '<title>', FALSE), (1, '<p>', FALSE), (1, '<div>', FALSE),
(2, 'Vrai', TRUE), (2, 'Faux', FALSE),
(3, '<ol>', FALSE), (3, '<ul>', TRUE), (3, '<li>', FALSE), (3, '<dl>', FALSE),
(4, 'Vrai', TRUE), (4, 'Faux', FALSE),
(5, '<!DOCTYPE html>', TRUE), (5, '<!DOCTYPE HTML>', FALSE), (5, '<!DOCTYPE>', FALSE), (5, '<!DOCTYPE web>', FALSE);

INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(1, 'Quel élément HTML5 est utilisé pour du contenu autonome ?', 'qcm', 'intermediate'),
(1, 'L''API LocalStorage peut stocker plus de 5 Mo de données.', 'truefalse', 'intermediate'),
(1, 'Quelle balise est utilisée pour une citation en bloc ?', 'qcm', 'intermediate'),
(1, 'L''attribut ''alt'' est obligatoire pour toutes les images.', 'truefalse', 'intermediate'),
(1, 'Quelle méthode est utilisée pour valider un formulaire HTML ?', 'qcm', 'intermediate'),
(1, 'L''élément <canvas> nécessite JavaScript pour fonctionner.', 'truefalse', 'intermediate'),
(1, 'Quel élément est utilisé pour une barre de progression ?', 'qcm', 'intermediate'),
(1, 'La balise <header> ne peut être utilisée qu''une fois par page.', 'truefalse', 'intermediate');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(6, '<section>', FALSE), (6, '<div>', FALSE), (6, '<article>', TRUE), (6, '<content>', FALSE),
(7, 'Vrai', TRUE), (7, 'Faux', FALSE),
(8, '<quote>', FALSE), (8, '<blockquote>', TRUE), (8, '<cite>', FALSE), (8, '<q>', FALSE),
(9, 'Vrai', FALSE), (9, 'Faux', TRUE),
(10, 'checkValidity()', TRUE), (10, 'validate()', FALSE), (10, 'isValid()', FALSE), (10, 'verify()', FALSE),
(11, 'Vrai', TRUE), (11, 'Faux', FALSE),
(12, '<progress>', TRUE), (12, '<meter>', FALSE), (12, '<load>', FALSE), (12, '<bar>', FALSE),
(13, 'Vrai', FALSE), (13, 'Faux', TRUE);


INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(1, 'Quelle méthode permet de cloner un nœud DOM en profondeur ?', 'qcm', 'expert'),
(1, 'L''événement DOMContentLoaded se déclenche après le chargement complet des images.', 'truefalse', 'expert'),
(1, 'Quelle propriété permet d''accéder au premier enfant d''un élément ?', 'qcm', 'expert'),
(1, 'L''API History permet de modifier l''URL sans recharger la page.', 'truefalse', 'expert'),
(1, 'Quelle méthode est utilisée pour insérer un élément avant un autre ?', 'qcm', 'expert'),
(1, 'Web Components utilisent les Shadow DOM.', 'truefalse', 'expert'),
(1, 'Quel est l''attribut qui définit une relation entre le document courant et une ressource externe ?', 'qcm', 'expert'),
(1, 'Les Web Workers peuvent accéder directement au DOM.', 'truefalse', 'expert'),
(1, 'Quelle méthode permet de créer un élément avec un namespace ?', 'qcm', 'expert'),
(1, 'Service Worker fonctionne même hors ligne.', 'truefalse', 'expert');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(14, 'clone()', FALSE), (14, 'copyNode()', FALSE), (14, 'cloneNode(true)', TRUE), (14, 'deepClone()', FALSE),
(15, 'Vrai', FALSE), (15, 'Faux', TRUE),
(16, 'firstChild', FALSE), (16, 'childNodes[0]', FALSE), (16, 'children[0]', FALSE), (16, 'Toutes ces réponses', TRUE),
(17, 'Vrai', TRUE), (17, 'Faux', FALSE),
(18, 'insertBefore()', TRUE), (18, 'prepend()', FALSE), (18, 'before()', FALSE), (18, 'addBefore()', FALSE),
(19, 'Vrai', TRUE), (19, 'Faux', FALSE),
(20, 'rel', TRUE), (20, 'href', FALSE), (20, 'type', FALSE), (20, 'src', FALSE),
(21, 'Vrai', FALSE), (21, 'Faux', TRUE),
(22, 'createElement()', FALSE), (22, 'createElementNS()', TRUE), (22, 'createNS()', FALSE), (22, 'createElementWithNS()', FALSE),
(23, 'Vrai', TRUE), (23, 'Faux', FALSE);

INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(2, 'CSS signifie ''Cascading Style Sheets''.', 'truefalse', 'beginner'),
(2, 'Quelle propriété change la couleur de fond ?', 'qcm', 'beginner'),
(2, 'La propriété ''margin'' ajoute de l''espace à l''intérieur d''un élément.', 'truefalse', 'beginner'),
(2, 'Quelle propriété est utilisée pour changer la police de texte ?', 'qcm', 'beginner'),
(2, 'Les media queries sont utilisées pour le responsive design.', 'truefalse', 'beginner');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(24, 'Vrai', TRUE), (24, 'Faux', FALSE),
(25, 'color', FALSE), (25, 'bgcolor', FALSE), (25, 'background-color', TRUE), (25, 'bg-color', FALSE),
(26, 'Vrai', FALSE), (26, 'Faux', TRUE),
(27, 'font-name', FALSE), (27, 'font-family', TRUE), (27, 'text-font', FALSE), (27, 'typography', FALSE),
(28, 'Vrai', TRUE), (28, 'Faux', FALSE);

INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(2, 'Quelle propriété permet de créer des animations CSS ?', 'qcm', 'intermediate'),
(2, 'L''unité ''em'' est relative à la taille de police de l''élément parent.', 'truefalse', 'intermediate'),
(2, 'Quelle unité est relative à la taille de police de l''élément racine ?', 'qcm', 'intermediate'),
(2, 'Flexbox est unidirectionnel tandis que CSS Grid est bidirectionnel.', 'truefalse', 'intermediate'),
(2, 'Quelle propriété contrôle l''ordre d''empilement des éléments ?', 'qcm', 'intermediate'),
(2, 'La propriété ''position: fixed'' est relative à la fenêtre du navigateur.', 'truefalse', 'intermediate'),
(2, 'Quelle règle CSS permet de définir des media queries ?', 'qcm', 'intermediate'),
(2, 'Les variables CSS ne peuvent être utilisées que pour les couleurs.', 'truefalse', 'intermediate');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(29, 'transition', FALSE), (29, 'animation', FALSE), (29, 'transform', FALSE), (29, 'Les deux premiers', TRUE),
(30, 'Vrai', TRUE), (30, 'Faux', FALSE),
(31, 'em', FALSE), (31, 'rem', TRUE), (31, 'vh', FALSE), (31, '%', FALSE),
(32, 'Vrai', TRUE), (32, 'Faux', FALSE),
(33, 'z-index', TRUE), (33, 'stack-order', FALSE), (33, 'layer', FALSE), (33, 'order', FALSE),
(34, 'Vrai', TRUE), (34, 'Faux', FALSE),
(35, '@media', TRUE), (35, '@viewport', FALSE), (35, '@screen', FALSE), (35, '@query', FALSE),
(36, 'Vrai', FALSE), (36, 'Faux', TRUE);

INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(2, 'Quelle propriété permet de créer des masques CSS ?', 'qcm', 'expert'),
(2, 'CSS peut être utilisé pour créer des animations 3D.', 'truefalse', 'expert'),
(2, 'Quelle fonction CSS permet de calculer des valeurs ?', 'qcm', 'expert'),
(2, 'Les pseudo-éléments ::before et ::after nécessitent la propriété ''content''.', 'truefalse', 'expert'),
(2, 'Quelle règle permet de définir des polices personnalisées ?', 'qcm', 'expert'),
(2, 'CSS Grid permet de créer des layouts asymétriques.', 'truefalse', 'expert'),
(2, 'Quelle propriété permet de créer des dégradés CSS ?', 'qcm', 'expert'),
(2, 'La propriété ''will-change'' peut améliorer les performances.', 'truefalse', 'expert'),
(2, 'Quelle pseudo-classe cible le premier enfant d''un élément ?', 'qcm', 'expert'),
(2, 'Les Container Queries sont supportées par tous les navigateurs.', 'truefalse', 'expert');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(37, 'mask', FALSE), (37, 'clip-path', FALSE), (37, 'Les deux', TRUE), (37, 'Aucune', FALSE),
(38, 'Vrai', TRUE), (38, 'Faux', FALSE),
(39, 'math()', FALSE), (39, 'calc()', TRUE), (39, 'compute()', FALSE), (39, 'calculate()', FALSE),
(40, 'Vrai', TRUE), (40, 'Faux', FALSE),
(41, '@font-face', TRUE), (41, '@import-font', FALSE), (41, '@font-family', FALSE), (41, '@custom-font', FALSE),
(42, 'Vrai', TRUE), (42, 'Faux', FALSE),
(43, 'gradient', FALSE), (43, 'background-gradient', FALSE), (43, 'linear-gradient', TRUE), (43, 'Toutes ces réponses', FALSE),
(44, 'Vrai', TRUE), (44, 'Faux', FALSE),
(45, ':first-child', FALSE), (45, ':first-of-type', FALSE), (45, ':nth-child(1)', FALSE), (45, 'Toutes ces réponses', TRUE),
(46, 'Vrai', FALSE), (46, 'Faux', TRUE);


INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(3, 'JavaScript est le même que Java.', 'truefalse', 'beginner'),
(3, 'Quelle fonction affiche un message dans la console ?', 'qcm', 'beginner'),
(3, 'Les variables ''let'' peuvent être réaffectées.', 'truefalse', 'beginner'),
(3, 'Quelle est la syntaxe pour déclarer une variable immuable ?', 'qcm', 'beginner'),
(3, 'JavaScript est un langage typé statiquement.', 'truefalse', 'beginner');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(47, 'Vrai', FALSE), (47, 'Faux', TRUE),
(48, 'alert()', FALSE), (48, 'print()', FALSE), (48, 'console.log()', TRUE), (48, 'document.write()', FALSE),
(49, 'Vrai', TRUE), (49, 'Faux', FALSE),
(50, 'var', FALSE), (50, 'let', FALSE), (50, 'const', TRUE), (50, 'immutable', FALSE),
(51, 'Vrai', FALSE), (51, 'Faux', TRUE);


INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(3, 'Qu''est-ce qu''une closure en JavaScript ?', 'qcm', 'intermediate'),
(3, 'Les arrow functions ont leur propre binding ''this''.', 'truefalse', 'intermediate'),
(3, 'Quelle méthode transforme un objet en chaîne JSON ?', 'qcm', 'intermediate'),
(3, 'Le hoisting s''applique aux déclarations de fonctions et de variables.', 'truefalse', 'intermediate'),
(3, 'Comment créer un objet en JavaScript ?', 'qcm', 'intermediate'),
(3, 'JavaScript est un langage single-threaded.', 'truefalse', 'intermediate'),
(3, 'Quelle méthode permet de gérer les promesses ?', 'qcm', 'intermediate'),
(3, 'Toutes les valeurs en JavaScript sont des objets.', 'truefalse', 'intermediate');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(52, 'Une fonction dans une fonction', FALSE), (52, 'Une fonction avec accès à son scope parent', TRUE), (52, 'Une fonction anonyme', FALSE), (52, 'Une fonction fléchée', FALSE),
(53, 'Vrai', FALSE), (53, 'Faux', TRUE),
(54, 'JSON.stringify()', TRUE), (54, 'JSON.parse()', FALSE), (54, 'JSON.encode()', FALSE), (54, 'JSON.toString()', FALSE),
(55, 'Vrai', TRUE), (55, 'Faux', FALSE),
(56, '{}', FALSE), (56, 'new Object()', FALSE), (56, 'Object.create()', FALSE), (56, 'Toutes ces réponses', TRUE),
(57, 'Vrai', TRUE), (57, 'Faux', FALSE),
(58, 'then()', FALSE), (58, 'catch()', FALSE), (58, 'finally()', FALSE), (58, 'Toutes ces réponses', TRUE),
(59, 'Vrai', FALSE), (59, 'Faux', TRUE);

INSERT INTO questions (subject_id, question_text, question_type, level) VALUES
(3, 'Qu''est-ce que l''event loop en JavaScript ?', 'qcm', 'expert'),
(3, 'JavaScript supporte le multithreading natif avec Web Workers.', 'truefalse', 'expert'),
(3, 'Quelle méthode permet de cloner un objet en profondeur ?', 'qcm', 'expert'),
(3, 'Les Proxy peuvent intercepter les opérations sur les objets.', 'truefalse', 'expert'),
(3, 'Comment créer une classe en JavaScript ?', 'qcm', 'expert'),
(3, 'Les générateurs peuvent produire plusieurs valeurs avec ''yield''.', 'truefalse', 'expert'),
(3, 'Quelle API permet de travailler avec des données binaires ?', 'qcm', 'expert'),
(3, 'Le currying transforme une fonction à plusieurs arguments en une séquence de fonctions.', 'truefalse', 'expert'),
(3, 'Quelle méthode permet de gérer plusieurs promesses ?', 'qcm', 'expert'),
(3, 'Le garbage collection en JavaScript est manuel.', 'truefalse', 'expert');

INSERT INTO options (question_id, option_text, is_correct) VALUES
(60, 'Boucle d''événements', TRUE), (60, 'Gestionnaire d''événements', FALSE), (60, 'Cycle d''exécution', FALSE), (60, 'Mécanisme d''async', FALSE),
(61, 'Vrai', TRUE), (61, 'Faux', FALSE),
(62, 'Object.assign()', FALSE), (62, 'JSON.parse(JSON.stringify())', TRUE), (62, 'spread operator', FALSE), (62, 'Toutes ces réponses', FALSE),
(63, 'Vrai', TRUE), (63, 'Faux', FALSE),
(64, 'class', TRUE), (64, 'function', FALSE), (64, 'Les deux', FALSE), (64, 'Aucune', FALSE),
(65, 'Vrai', TRUE), (65, 'Faux', FALSE),
(66, 'TypedArray', FALSE), (66, 'ArrayBuffer', FALSE), (66, 'Blob', FALSE), (66, 'Toutes ces réponses', TRUE),
(67, 'Vrai', TRUE), (67, 'Faux', FALSE),
(68, 'Promise.all()', FALSE), (68, 'Promise.race()', FALSE), (68, 'Promise.any()', FALSE), (68, 'Toutes ces réponses', TRUE),
(69, 'Vrai', FALSE), (69, 'Faux', TRUE);