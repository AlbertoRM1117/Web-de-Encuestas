// Configura el SDK de AWS Cognito
AWS.config.region = 'us-east-1'; // Cambia a tu región de Cognito
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:2964b970-dd85-4c79-ae34-a57ceceeb659', // Cambia al ID de tu Identity Pool
});

// Inicializa el SDK de Cognito
var cognitoParams = {
    UserPoolId: 'us-east-1_HBl5q4FuJ', // Cambia al ID de tu User Pool
    ClientId: '5sa72ab1pfn3ji4kutsbtj7j66', // Cambia al ID de tu Cliente
    RedirectUri: 'https://creacion-de-ecnuestas.auth.us-east-1.amazoncognito.com'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(cognitoParams);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var authenticationData = {
        Username: username,
        Password: password,
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var userData = {
        Username: username,
        Pool: userPool,
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            console.log('Authentication successful');
            // Aquí puedes redirigir a otra página o realizar otras acciones después del inicio de sesión
            window.location.href = 'index.html';
        },
        onFailure: function(err) {
            console.error('Authentication failed:', err);
        },
    });
});