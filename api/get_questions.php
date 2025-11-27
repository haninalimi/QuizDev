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

    $subject = $_GET['subject'] ?? 'html';
    $level = $_GET['level'] ?? 'beginner';
    
    $subjectQuery = "SELECT id FROM subjects WHERE name = :subject";
    $subjectStmt = $db->prepare($subjectQuery);
    $subjectStmt->bindParam(':subject', $subject);
    $subjectStmt->execute();
    $subjectResult = $subjectStmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$subjectResult) {
        throw new Exception('Sujet non trouvé');
    }

    $subject_id = $subjectResult['id'];

    $query = "
        SELECT q.id, q.question_text, q.question_type, q.level
        FROM questions q
        WHERE q.subject_id = :subject_id AND q.level = :level
        ORDER BY RAND()
        LIMIT 10
    ";
    
    $stmt = $db->prepare($query);
    $stmt->bindParam(':subject_id', $subject_id);
    $stmt->bindParam(':level', $level);
    $stmt->execute();

    $questions = [];
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $optionsQuery = "SELECT option_text, is_correct FROM options WHERE question_id = :question_id";
        $optionsStmt = $db->prepare($optionsQuery);
        $optionsStmt->bindParam(':question_id', $row['id']);
        $optionsStmt->execute();
        
        $options = [];
        $correctAnswer = '';
        
        while ($option = $optionsStmt->fetch(PDO::FETCH_ASSOC)) {
            $options[] = $option['option_text'];
            if ($option['is_correct']) {
                $correctAnswer = $option['option_text'];
            }
        }

        $questions[] = [
            'q' => $row['question_text'],
            'options' => $options,
            'a' => $correctAnswer,
            'type' => $row['question_type']
        ];
    }

    echo json_encode([
        'success' => true,
        'questions' => $questions,
        'subject' => $subject,
        'level' => $level,
        'count' => count($questions)
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>