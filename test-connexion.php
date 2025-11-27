<?php
include 'config/database.php';

echo "<h1>Test de Connexion Quiz</h1>";

try {
    $database = new Database();
    $db = $database->getConnection();
    
    if ($db) {
        echo "<p style='color: green;'> Connexion MySQL réussie</p>";
        
        $tables = ['subjects', 'questions', 'options', 'scores'];
        foreach ($tables as $table) {
            $result = $db->query("SELECT COUNT(*) as count FROM $table");
            $row = $result->fetch();
            echo "<p>Table $table : {$row['count']} enregistrement(s)</p>";
        }
        
        $url = "http://" . $_SERVER['HTTP_HOST'] . dirname($_SERVER['REQUEST_URI']) . "/api/get_questions.php?subject=html&level=beginner";
        echo "<p><a href='$url' target='_blank'>Tester API Questions</a></p>";
        
    } else {
        echo "<p style='color: red;'>❌ Erreur connexion MySQL</p>";
    }
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Erreur: " . $e->getMessage() . "</p>";
}

echo "<hr>";
echo "<p><a href='index.html'>Aller à l'accueil du quiz</a></p>";
?>