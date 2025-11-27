<?php
class Database {
    private $host = "localhost";
    private $db_name = "quiz_interactif";
    private $username = "root";
    private $password = "root";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name, 
                $this->username, 
                $this->password,
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
            );
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            error_log("Erreur de connexion: " . $exception->getMessage());
        }
        return $this->conn;
    }
}
?>