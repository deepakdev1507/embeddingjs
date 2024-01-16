(function() {
    // Create a style element for CSS
    var style = document.createElement('style');
    style.type = 'text/css';
    var css = `
    #chatbot {
        width: 300px;
        position: fixed;
        bottom: 0;
        right: 30px;
        border: 1px solid #ddd;
        background-color: #f9f9f9;
    }
    
    #chat-header {
        background-color: #4CAF50;
        color: white;
        padding: 10px;
        text-align: center;
    }
    
    #chat-body {
        height: 200px;
        overflow-y: auto;
        padding: 10px;
    }
    
    #chat-input {
        width: 70%;
        padding: 10px;
        border: 1px solid #ddd;
        margin: 10px;
    }
    
    #send-btn {
        width: 20%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }
    
    #send-btn:hover {
        background-color: #45a049;
    }
    
    `;
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);

    // Create the chatbot HTML
    var chatbotHtml = `
        <div id="chatbot">
            <div id="chat-header">Chatbot</div>
            <div id="chat-body"></div>
            <input type="text" id="chat-input" placeholder="Type a message...">
            <button id="send-btn">Send</button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatbotHtml);

    // Add the chatbot functionality
    document.getElementById('send-btn').onclick = function() {
        var input = document.getElementById('chat-input');
        var message = input.value.trim();
        if (message) {
            var chatBody = document.getElementById('chat-body');
            chatBody.innerHTML += '<div>User: ' + message + '</div>';
            chatBody.innerHTML += '<div style="color:blue;">Echo: ' + message + '</div>';
            input.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    };
})();
