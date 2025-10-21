const quizData = {
    html: {
        beginner: [
            { q: "Quelle balise est utilisée pour le titre le plus important ?", options: ["<h1>", "<title>", "<p>", "<div>"], a: "<h1>" },
            { q: "Quel attribut rend un champ de formulaire obligatoire ?", options: ["required", "validate", "must", "check"], a: "required" },
            { q: "Quelle balise est utilisée pour créer une liste non ordonnée ?", options: ["<ol>", "<ul>", "<li>", "<dl>"], a: "<ul>" },
            { q: "Quel est l'élément sémantique pour le contenu principal ?", options: ["<section>", "<main>", "<footer>", "<header>"], a: "<main>" },
            { q: "Quel est le bon Doctype pour HTML5 ?", options: ["<!DOCTYPE html>", "<!DOCTYPE HTML>", "<!DOCTYPE>", "<!DOCTYPE web>"], a: "<!DOCTYPE html>" }
        ],
        intermediate: [
            { q: "Quel élément HTML5 est utilisé pour du contenu autonome ?", options: ["<section>", "<div>", "<article>", "<content>"], a: "<article>" },
            { q: "Quelle API permet de stocker des données localement ?", options: ["LocalStorage", "WebStorage", "BrowserStorage", "DataStorage"], a: "LocalStorage" },
            { q: "Quelle balise est utilisée pour une citation en bloc ?", options: ["<quote>", "<blockquote>", "<cite>", "<q>"], a: "<blockquote>" },
            { q: "Quel attribut améliore l'accessibilité des images ?", options: ["title", "src", "alt", "description"], a: "alt" },
            { q: "Quelle méthode est utilisée pour valider un formulaire HTML ?", options: ["checkValidity()", "validate()", "isValid()", "verify()"], a: "checkValidity()" },
            { q: "Quel élément est utilisé pour une barre de progression ?", options: ["<progress>", "<meter>", "<load>", "<bar>"], a: "<progress>" },
            { q: "Quelle balise définit un en-tête pour un document ou une section ?", options: ["<head>", "<header>", "<heading>", "<hgroup>"], a: "<header>" },
            { q: "Quel élément est utilisé pour du contenu latéral ?", options: ["<sidebar>", "<aside>", "<nav>", "<side>"], a: "<aside>" }
        ],
        expert: [
            { q: "Quelle méthode permet de cloner un nœud DOM en profondeur ?", options: ["clone()", "copyNode()", "cloneNode(true)", "deepClone()"], a: "cloneNode(true)" },
            { q: "Quel événement se déclenche quand le DOM est complètement chargé ?", options: ["DOMContentLoaded", "windowLoad", "documentReady", "DOMReady"], a: "DOMContentLoaded" },
            { q: "Quelle propriété permet d'accéder au premier enfant d'un élément ?", options: ["firstChild", "childNodes[0]", "children[0]", "Toutes ces réponses"], a: "Toutes ces réponses" },
            { q: "Quelle API permet de manipuler l'historique du navigateur ?", options: ["History API", "Navigation API", "Browser API", "Window API"], a: "History API" },
            { q: "Quelle méthode est utilisée pour insérer un élément avant un autre ?", options: ["insertBefore()", "prepend()", "before()", "addBefore()"], a: "insertBefore()" },
            { q: "Quel est l'attribut qui définit une relation entre le document courant et une ressource externe ?", options: ["rel", "href", "type", "src"], a: "rel" },
            { q: "Quelle propriété CSS peut être manipulée via l'API HTML ?", options: ["dataset", "classList", "Les deux", "Aucune"], a: "Les deux" },
            { q: "Quelle méthode permet de créer un élément avec un namespace ?", options: ["createElement()", "createElementNS()", "createNS()", "createElementWithNS()"], a: "createElementNS()" },
            { q: "Quel événement est déclenché quand la visibilité de la page change ?", options: ["visibilitychange", "pageVisibility", "focus", "windowChange"], a: "visibilitychange" },
            { q: "Quelle interface représente un fragment de document ?", options: ["DocumentFragment", "NodeFragment", "Fragment", "DocPart"], a: "DocumentFragment" }
        ]
    },
    css: {
        beginner: [
            { q: "Quelle propriété change la couleur de fond ?", options: ["color", "bgcolor", "background-color", "bg-color"], a: "background-color" },
            { q: "Quelle propriété est utilisée pour changer la police de texte ?", options: ["font-name", "font-family", "text-font", "typography"], a: "font-family" },
            { q: "Que signifie l'acronyme CSS ?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], a: "Cascading Style Sheets" },
            { q: "Quel sélecteur a la plus haute spécificité ?", options: ["class", "id", "balise", "attribut"], a: "id" },
            { q: "Quel modèle est le cœur du CSS ?", options: ["DOM Model", "Box Model", "Flex Model", "Grid Model"], a: "Box Model" }
        ],
        intermediate: [
            { q: "Quelle propriété permet de créer des animations CSS ?", options: ["transition", "animation", "transform", "Les deux premiers"], a: "Les deux premiers" },
            { q: "Quelle unité est relative à la taille de police de l'élément racine ?", options: ["em", "rem", "vh", "%"], a: "rem" },
            { q: "Quelle propriété contrôle l'ordre d'empilement des éléments ?", options: ["z-index", "stack-order", "layer", "order"], a: "z-index" },
            { q: "Quelle règle CSS permet de définir des media queries ?", options: ["@media", "@viewport", "@screen", "@query"], a: "@media" },
            { q: "Quelle valeur de display rend un élément invisible mais garde son espace ?", options: ["none", "hidden", "invisible", "visibility: hidden"], a: "visibility: hidden" },
            { q: "Quelle propriété permet d'arrondir les coins d'un élément ?", options: ["border-radius", "corner-radius", "round-border", "border-rounding"], a: "border-radius" },
            { q: "Quelle pseudo-classe cible un élément au survol ?", options: [":active", ":hover", ":focus", ":over"], a: ":hover" },
            { q: "Quelle propriété permet de créer des ombres portées ?", options: ["shadow", "box-shadow", "element-shadow", "drop-shadow"], a: "box-shadow" }
        ],
        expert: [
            { q: "Quelle propriété permet de créer des masques CSS ?", options: ["mask", "clip-path", "Les deux", "Aucune"], a: "Les deux" },
            { q: "Quelle fonction CSS permet de calculer des valeurs ?", options: ["math()", "calc()", "compute()", "calculate()"], a: "calc()" },
            { q: "Quelle règle permet de définir des polices personnalisées ?", options: ["@font-face", "@import-font", "@font-family", "@custom-font"], a: "@font-face" },
            { q: "Quelle propriété permet de créer des dégradés CSS ?", options: ["gradient", "background-gradient", "linear-gradient", "Toutes ces réponses"], a: "linear-gradient" },
            { q: "Quelle pseudo-classe cible le premier enfant d'un élément ?", options: [":first-child", ":first-of-type", ":nth-child(1)", "Toutes ces réponses"], a: "Toutes ces réponses" },
            { q: "Quelle propriété permet de créer des colonnes CSS ?", options: ["columns", "column-count", "multi-column", "Les deux premiers"], a: "Les deux premiers" },
            { q: "Quelle propriété contrôle le comportement de défilement ?", options: ["scroll-behavior", "overflow-behavior", "scroll-snap", "Toutes ces réponses"], a: "scroll-behavior" },
            { q: "Quelle fonction permet d'appliquer des transformations 3D ?", options: ["translate3d()", "rotate3d()", "scale3d()", "Toutes ces réponses"], a: "Toutes ces réponses" },
            { q: "Quelle propriété permet de créer des variables CSS ?", options: ["--variable", "var()", "custom-property", "--* (avec var())"], a: "--* (avec var())" },
            { q: "Quelle règle permet de définir des keyframes d'animation ?", options: ["@keyframes", "@animation", "@frames", "@keyframe"], a: "@keyframes" }
        ]
    },
    js: {
        beginner: [
            { q: "Quelle fonction affiche un message dans la console ?", options: ["alert()", "print()", "console.log()", "document.write()"], a: "console.log()" },
            { q: "Quelle est la syntaxe pour déclarer une variable immuable ?", options: ["var", "let", "const", "immutable"], a: "const" },
            { q: "Comment vérifier le type d'une variable en JS ?", options: ["type()", "getType", "typeof", "whatType"], a: "typeof" },
            { q: "Quel est l'opérateur de stricte égalité ?", options: ["=", "==", "===", "!="], a: "===" },
            { q: "Quelle méthode ajoute un élément à la fin d'un tableau ?", options: ["add()", "push()", "insert()", "append()"], a: "push()" }
        ],
        intermediate: [
            { q: "Qu'est-ce qu'une closure en JavaScript ?", options: ["Une fonction dans une fonction", "Une fonction avec accès à son scope parent", "Une fonction anonyme", "Une fonction fléchée"], a: "Une fonction avec accès à son scope parent" },
            { q: "Quelle méthode transforme un objet en chaîne JSON ?", options: ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.toString()"], a: "JSON.stringify()" },
            { q: "Qu'est-ce que le hoisting en JavaScript ?", options: ["Remontée des déclarations", "Descente des déclarations", "Compilation du code", "Optimisation"], a: "Remontée des déclarations" },
            { q: "Comment créer un objet en JavaScript ?", options: ["{}", "new Object()", "Object.create()", "Toutes ces réponses"], a: "Toutes ces réponses" },
            { q: "Quelle méthode permet de gérer les promesses ?", options: ["then()", "catch()", "finally()", "Toutes ces réponses"], a: "Toutes ces réponses" },
            { q: "Qu'est-ce que le DOM ?", options: ["Document Object Model", "Data Object Model", "Digital Object Model", "Display Object Model"], a: "Document Object Model" },
            { q: "Quelle méthode permet d'appeler une fonction après un délai ?", options: ["setTimeout()", "setInterval()", "wait()", "delay()"], a: "setTimeout()" },
            { q: "Comment vérifier si une propriété existe dans un objet ?", options: ["hasOwnProperty()", "in operator", "Les deux", "Aucune"], a: "Les deux" }
        ],
        expert: [
            { q: "Qu'est-ce que l'event loop en JavaScript ?", options: ["Boucle d'événements", "Gestionnaire d'événements", "Cycle d'exécution", "Mécanisme d'async"], a: "Boucle d'événements" },
            { q: "Quelle méthode permet de cloner un objet en profondeur ?", options: ["Object.assign()", "JSON.parse(JSON.stringify())", "spread operator", "Toutes ces réponses"], a: "JSON.parse(JSON.stringify())" },
            { q: "Qu'est-ce qu'un Proxy en JavaScript ?", options: ["Un intermédiaire pour les objets", "Un serveur proxy", "Une fonction de redirection", "Un pattern de conception"], a: "Un intermédiaire pour les objets" },
            { q: "Comment créer une classe en JavaScript ?", options: ["class", "function", "Les deux", "Aucune"], a: "class" },
            { q: "Quelle API permet de travailler avec des données binaires ?", options: ["TypedArray", "ArrayBuffer", "Blob", "Toutes ces réponses"], a: "Toutes ces réponses" },
            { q: "Qu'est-ce que le currying en JavaScript ?", options: ["Transformation de fonctions", "Une technique de cuisine", "Un pattern obsolète", "Une méthode d'optimisation"], a: "Transformation de fonctions" },
            { q: "Quelle méthode permet de gérer plusieurs promesses ?", options: ["Promise.all()", "Promise.race()", "Promise.any()", "Toutes ces réponses"], a: "Toutes ces réponses" },
            { q: "Qu'est-ce que le garbage collection en JavaScript ?", options: ["Nettoyage de la mémoire", "Collection d'objets", "Optimisation du code", "Compression des données"], a: "Nettoyage de la mémoire" },
            { q: "Comment créer un générateur en JavaScript ?", options: ["function*", "generator()", "function generator()", "function**"], a: "function*" },
            { q: "Quelle méthode permet de partager de la mémoire entre threads ?", options: ["SharedArrayBuffer", "Web Workers", "Les deux", "Aucune"], a: "SharedArrayBuffer" }
        ]
    }
};