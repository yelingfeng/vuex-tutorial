/**
 * Created by ylf on 2017/9/6.
 */
import styled from 'vue-styled-components';

const btnProps = { primary: Boolean };

const buttonStyle = styled('button', btnProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
`;

export default buttonStyle
