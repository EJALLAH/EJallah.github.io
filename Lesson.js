<!DOCTYPE html>
<html>
<head>
  <title>Greeting Page</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .box {
      background: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    input {
      padding: 10px;
      font-size: 16px;
    }

    button {
      padding: 10px 15px;
      font-size: 16px;
      margin-left: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box">
    <h1 id="message">Welcome</h1>
    <input id="name" type="text" placeholder="Enter your name">
    <button id="sayHello">Say Hello</button>
  </div>

  <script>
    let message = document.getElementById("message");
    let nameInput = document.getElementById("name");
    let button = document.getElementById("sayHello");

    button.addEventListener("click", function() {
      let name = nameInput.value;
      if (name === "") {
        message.textContent = "Please type your name.";
      } else {
        message.textContent = "Hello, " + name + "!";
      }
    });
  </script>
</body>
</html>
