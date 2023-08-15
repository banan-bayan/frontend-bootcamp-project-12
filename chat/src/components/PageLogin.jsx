import { loremIpsum } from 'lorem-ipsum';

const Login = () => (
  <>
  <h3 style={{background: 'pink'}}>LOGIN</h3>
  <div style={{background: 'lightgrey'}}>
    Page  content: { loremIpsum({ count: 5 })}
  </div>
</>
);

export default Login;