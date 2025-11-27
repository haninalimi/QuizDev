const quizData = {
    html: {
        beginner: [
            { 
                q: "Quelle balise est utilisée pour le titre le plus important ?", 
                options: ["<h1>", "<title>", "<p>", "<div>"], 
                a: "<h1>",
                type: "qcm"
            },
            { 
                q: "L'attribut 'required' rend un champ de formulaire obligatoire.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle balise est utilisée pour créer une liste non ordonnée ?", 
                options: ["<ol>", "<ul>", "<li>", "<dl>"], 
                a: "<ul>",
                type: "qcm"
            },
            { 
                q: "HTML5 est la dernière version de HTML.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quel est le bon Doctype pour HTML5 ?", 
                options: ["<!DOCTYPE html>", "<!DOCTYPE HTML>", "<!DOCTYPE>", "<!DOCTYPE web>"], 
                a: "<!DOCTYPE html>",
                type: "qcm"
            }
        ],
        intermediate: [
            { 
                q: "Quel élément HTML5 est utilisé pour du contenu autonome ?", 
                options: ["<section>", "<div>", "<article>", "<content>"], 
                a: "<article>",
                type: "qcm"
            },
            { 
                q: "L'API LocalStorage peut stocker plus de 5 Mo de données.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle balise est utilisée pour une citation en bloc ?", 
                options: ["<quote>", "<blockquote>", "<cite>", "<q>"], 
                a: "<blockquote>",
                type: "qcm"
            },
            { 
                q: "L'attribut 'alt' est obligatoire pour toutes les images.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            },
            { 
                q: "Quelle méthode est utilisée pour valider un formulaire HTML ?", 
                options: ["checkValidity()", "validate()", "isValid()", "verify()"], 
                a: "checkValidity()",
                type: "qcm"
            },
            { 
                q: "L'élément <canvas> nécessite JavaScript pour fonctionner.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quel élément est utilisé pour une barre de progression ?", 
                options: ["<progress>", "<meter>", "<load>", "<bar>"], 
                a: "<progress>",
                type: "qcm"
            },
            { 
                q: "La balise <header> ne peut être utilisée qu'une fois par page.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            }
        ],
        expert: [
            { 
                q: "Quelle méthode permet de cloner un nœud DOM en profondeur ?", 
                options: ["clone()", "copyNode()", "cloneNode(true)", "deepClone()"], 
                a: "cloneNode(true)",
                type: "qcm"
            },
            { 
                q: "L'événement DOMContentLoaded se déclenche après le chargement complet des images.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            },
            { 
                q: "Quelle propriété permet d'accéder au premier enfant d'un élément ?", 
                options: ["firstChild", "childNodes[0]", "children[0]", "Toutes ces réponses"], 
                a: "Toutes ces réponses",
                type: "qcm"
            },
            { 
                q: "L'API History permet de modifier l'URL sans recharger la page.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle méthode est utilisée pour insérer un élément avant un autre ?", 
                options: ["insertBefore()", "prepend()", "before()", "addBefore()"], 
                a: "insertBefore()",
                type: "qcm"
            },
            { 
                q: "Web Components utilisent les Shadow DOM.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quel est l'attribut qui définit une relation entre le document courant et une ressource externe ?", 
                options: ["rel", "href", "type", "src"], 
                a: "rel",
                type: "qcm"
            },
            { 
                q: "Les Web Workers peuvent accéder directement au DOM.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            },
            { 
                q: "Quelle méthode permet de créer un élément avec un namespace ?", 
                options: ["createElement()", "createElementNS()", "createNS()", "createElementWithNS()"], 
                a: "createElementNS()",
                type: "qcm"
            },
            { 
                q: "Service Worker fonctionne même hors ligne.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            }
        ]
    },
    css: {
        beginner: [
            { 
                q: "CSS signifie 'Cascading Style Sheets'.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle propriété change la couleur de fond ?", 
                options: ["color", "bgcolor", "background-color", "bg-color"], 
                a: "background-color",
                type: "qcm"
            },
            { 
                q: "La propriété 'margin' ajoute de l'espace à l'intérieur d'un élément.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            },
            { 
                q: "Quelle propriété est utilisée pour changer la police de texte ?", 
                options: ["font-name", "font-family", "text-font", "typography"], 
                a: "font-family",
                type: "qcm"
            },
            { 
                q: "Les media queries sont utilisées pour le responsive design.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            }
        ],
        intermediate: [
            { 
                q: "Quelle propriété permet de créer des animations CSS ?", 
                options: ["transition", "animation", "transform", "Les deux premiers"], 
                a: "Les deux premiers",
                type: "qcm"
            },
            { 
                q: "L'unité 'em' est relative à la taille de police de l'élément parent.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle unité est relative à la taille de police de l'élément racine ?", 
                options: ["em", "rem", "vh", "%"], 
                a: "rem",
                type: "qcm"
            },
            { 
                q: "Flexbox est unidirectionnel tandis que CSS Grid est bidirectionnel.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle propriété contrôle l'ordre d'empilement des éléments ?", 
                options: ["z-index", "stack-order", "layer", "order"], 
                a: "z-index",
                type: "qcm"
            },
            { 
                q: "La propriété 'position: fixed' est relative à la fenêtre du navigateur.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle règle CSS permet de définir des media queries ?", 
                options: ["@media", "@viewport", "@screen", "@query"], 
                a: "@media",
                type: "qcm"
            },
            { 
                q: "Les variables CSS ne peuvent être utilisées que pour les couleurs.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            }
        ],
        expert: [
            { 
                q: "Quelle propriété permet de créer des masques CSS ?", 
                options: ["mask", "clip-path", "Les deux", "Aucune"], 
                a: "Les deux",
                type: "qcm"
            },
            { 
                q: "CSS peut être utilisé pour créer des animations 3D.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle fonction CSS permet de calculer des valeurs ?", 
                options: ["math()", "calc()", "compute()", "calculate()"], 
                a: "calc()",
                type: "qcm"
            },
            { 
                q: "Les pseudo-éléments ::before et ::after nécessitent la propriété 'content'.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle règle permet de définir des polices personnalisées ?", 
                options: ["@font-face", "@import-font", "@font-family", "@custom-font"], 
                a: "@font-face",
                type: "qcm"
            },
            { 
                q: "CSS Grid permet de créer des layouts asymétriques.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle propriété permet de créer des dégradés CSS ?", 
                options: ["gradient", "background-gradient", "linear-gradient", "Toutes ces réponses"], 
                a: "linear-gradient",
                type: "qcm"
            },
            { 
                q: "La propriété 'will-change' peut améliorer les performances.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle pseudo-classe cible le premier enfant d'un élément ?", 
                options: [":first-child", ":first-of-type", ":nth-child(1)", "Toutes ces réponses"], 
                a: "Toutes ces réponses",
                type: "qcm"
            },
            { 
                q: "Les Container Queries sont supportées par tous les navigateurs.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            }
        ]
    },
    js: {
        beginner: [
            { 
                q: "JavaScript est le même que Java.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            },
            { 
                q: "Quelle fonction affiche un message dans la console ?", 
                options: ["alert()", "print()", "console.log()", "document.write()"], 
                a: "console.log()",
                type: "qcm"
            },
            { 
                q: "Les variables 'let' peuvent être réaffectées.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle est la syntaxe pour déclarer une variable immuable ?", 
                options: ["var", "let", "const", "immutable"], 
                a: "const",
                type: "qcm"
            },
            { 
                q: "JavaScript est un langage typé statiquement.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            }
        ],
        intermediate: [
            { 
                q: "Qu'est-ce qu'une closure en JavaScript ?", 
                options: ["Une fonction dans une fonction", "Une fonction avec accès à son scope parent", "Une fonction anonyme", "Une fonction fléchée"], 
                a: "Une fonction avec accès à son scope parent",
                type: "qcm"
            },
            { 
                q: "Les arrow functions ont leur propre binding 'this'.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            },
            { 
                q: "Quelle méthode transforme un objet en chaîne JSON ?", 
                options: ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.toString()"], 
                a: "JSON.stringify()",
                type: "qcm"
            },
            { 
                q: "Le hoisting s'applique aux déclarations de fonctions et de variables.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Comment créer un objet en JavaScript ?", 
                options: ["{}", "new Object()", "Object.create()", "Toutes ces réponses"], 
                a: "Toutes ces réponses",
                type: "qcm"
            },
            { 
                q: "JavaScript est un langage single-threaded.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle méthode permet de gérer les promesses ?", 
                options: ["then()", "catch()", "finally()", "Toutes ces réponses"], 
                a: "Toutes ces réponses",
                type: "qcm"
            },
            { 
                q: "Toutes les valeurs en JavaScript sont des objets.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            }
        ],
        expert: [
            { 
                q: "Qu'est-ce que l'event loop en JavaScript ?", 
                options: ["Boucle d'événements", "Gestionnaire d'événements", "Cycle d'exécution", "Mécanisme d'async"], 
                a: "Boucle d'événements",
                type: "qcm"
            },
            { 
                q: "JavaScript supporte le multithreading natif avec Web Workers.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle méthode permet de cloner un objet en profondeur ?", 
                options: ["Object.assign()", "JSON.parse(JSON.stringify())", "spread operator", "Toutes ces réponses"], 
                a: "JSON.parse(JSON.stringify())",
                type: "qcm"
            },
            { 
                q: "Les Proxy peuvent intercepter les opérations sur les objets.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Comment créer une classe en JavaScript ?", 
                options: ["class", "function", "Les deux", "Aucune"], 
                a: "class",
                type: "qcm"
            },
            { 
                q: "Les générateurs peuvent produire plusieurs valeurs avec 'yield'.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle API permet de travailler avec des données binaires ?", 
                options: ["TypedArray", "ArrayBuffer", "Blob", "Toutes ces réponses"], 
                a: "Toutes ces réponses",
                type: "qcm"
            },
            { 
                q: "Le currying transforme une fonction à plusieurs arguments en une séquence de fonctions.", 
                options: ["Vrai", "Faux"], 
                a: "Vrai",
                type: "truefalse"
            },
            { 
                q: "Quelle méthode permet de gérer plusieurs promesses ?", 
                options: ["Promise.all()", "Promise.race()", "Promise.any()", "Toutes ces réponses"], 
                a: "Toutes ces réponses",
                type: "qcm"
            },
            { 
                q: "Le garbage collection en JavaScript est manuel.", 
                options: ["Vrai", "Faux"], 
                a: "Faux",
                type: "truefalse"
            }
        ]
    }
};