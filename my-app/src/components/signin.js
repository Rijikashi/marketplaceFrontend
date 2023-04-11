//import { useHistory } from 'react-router-dom';

const SignIn = () => {
  //const history = useHistory();

  // FB OAuth code
  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '{your-app-id}',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : '{api-version}'
  //   });
  //
  //   FB.AppEvents.logPageView();
  //
  // };
  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "https://connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));


  // handling google vs fb
  // i COULD hard code, but i should make too structs with different values, and hold the authURL in them
  // and then i feed in two different props, one is google, one is facebook.
  // this makes it more scalable. even though that is out of the scope of this implementation
  // it could also just be that google and fb oauth work differently

  const handleClick = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/oauth/callback`);
    //const authUrl = `https://oauth.provider.com/authorize?client_id=275523919118-opjldmrjr5laf88bb17p7shvirlvcdh0.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code`;
    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?scope=openid profile email&response_type=code&redirect_uri='+redirectUri+'&client_id=' + process.env.REACT_APP_GOOGLE_CLIENT_ID;
    window.location.replace(authUrl);
  };

  return (
    <div>
      <h1>Hello from login button</h1>
      <button onClick={handleClick}>
        Login with OAuth
      </button>
    </div>
  );
}

export default SignIn
