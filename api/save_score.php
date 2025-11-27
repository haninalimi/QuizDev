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
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if (!$data) {
        throw new Exception('Données JSON invalides');
    }
    
    $database = new Database();
    $db = $database->getConnection();

    $subjectQuery = "SELECT id FROM subjects WHERE name = :subject";
    $subjectStmt = $db->prepare($subjectQuery);
    $subjectStmt->bindParam(':subject', $data['subject']);
    $subjectStmt->execute();
    
    $subjectResult = $subjectStmt->fetch(PDO::FETCH_ASSOC);
    if (!$subjectResult) {
        throw new Exception('Sujet non trouvé');
    }

    $query = "
        INSERT INTO scores 
        (player_name, subject_id, level, score, total_questions, percentage) 
        VALUES 
        (:player_name, :subject_id, :level, :score, :total_questions, :percentage)
    ";

    $stmt = $db->prepare($query);
    $stmt->bindParam(':player_name', $data['player_name']);
    $stmt->bindParam(':subject_id', $subjectResult['id']);
    $stmt->bindParam(':level', $data['level']);
    $stmt->bindParam(':score', $data['score']);
    $stmt->bindParam(':total_questions', $data['total_questions']);
    $stmt->bindParam(':percentage', $data['percentage']);

    if ($stmt->execute()) {
        echo json_encode([
            'success' => true,
            'message' => 'Score sauvegardé avec succès'
        ]);
    } else {
        throw new Exception('Erreur lors de la sauvegarde');
    }

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>