<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

include_once '../config/database.php';

try {
    $database = new Database();
    $db = $database->getConnection();

    $query = "
        SELECT 
            s.player_name, 
            sub.name as subject, 
            s.level, 
            s.score, 
            s.total_questions, 
            s.percentage, 
            DATE_FORMAT(s.quiz_date, '%d/%m/%Y %H:%i') as formatted_date
        FROM scores s
        INNER JOIN subjects sub ON s.subject_id = sub.id
        ORDER BY s.percentage DESC, s.score DESC, s.quiz_date DESC
        LIMIT 10
    ";

    $stmt = $db->prepare($query);
    $stmt->execute();

    $highscores = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $highscores[] = $row;
    }

    echo json_encode([
        'success' => true,
        'highscores' => $highscores,
        'count' => count($highscores)
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>