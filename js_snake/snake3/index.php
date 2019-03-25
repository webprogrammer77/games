<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>1</title>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
				
        <link href="css/styles.css" rel="stylesheet">
		</head>

    <body>
				<div class="fields"></div>

				<form  class="app">
					Очки: <input type="text" class="input_score" name="score">
					<div class="input_display">
						 Имя<br>
            <input type="text" name="name">
            <span class="error"></span>
            <br>
            Телефон<br>
            <input type="text" name="phone">
            <span class="error"></span>
            <br>
            Почта<br>
            <input type="text" name="email">
            <span class="error"></span>
            <br>
						<input type="button" class="send btn btn-success" value="отправить">
						<i class="fas fa-spinner"></i>
					</div>				
				</form>

				<div class="result"></div>
				<script src="js/jquery-3.2.0.min.js"></script>
        <script src="js/helpers.js"></script>
        <script src="js/matrix.js"></script>
        <script src="js/elem.js"></script>
        <script src="js/fruit.js"></script>
        <script src="js/wall.js"></script>
				<script src="js/snake.js"></script>
				<script src="js/mail.js"></script>
        <script src="js/scripts.js"></script>
        
    </body>
</html>
