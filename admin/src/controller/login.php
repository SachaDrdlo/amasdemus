<?php
class LoginController
{
    private $model;

    public function __construct(LoginModel $model)
    {
        $this->model = $model;
    }

    public function getUser($email)
    {
        $query = $this->model->db->prepare("SELECT email, password FROM users WHERE email = :email");
        $query->bindValue(":email", $email, PDO::PARAM_STR);
        $query->execute();
        return $query->fetch();
    }

    public function validateLogin(): bool
    {
        $result = $this->getUser($this->model->email);


        //    if (!empty($result) && password_verify($this->model->password, $result["password"])) {
        if (!empty($result) && $this->model->password == $result["password"]) {
            $_SESSION["session_id"] = md5($result["email"]);
            $_SESSION["user_ip"] = $_SERVER["REMOTE_ADDR"];

            return true;
        }

        return false;
    }
}
