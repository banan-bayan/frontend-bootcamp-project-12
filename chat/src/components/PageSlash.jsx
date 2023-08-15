import { loremIpsum } from 'lorem-ipsum';

const Slash = () => (
  <>
  <h3 style={{background: 'teal'}}>SLASH</h3>
  <div style={{background: 'darkred'}}>
    Page  SLASH: { loremIpsum({ count: 3 })}
  </div>
</>
);

export default Slash;