import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${Label} {
        margin: 10px 0px;
    }
`;

const FormField = ({ label, name, id, type = 'text', ...props }) => {
    return ( 
        <Wrapper>
            <Label htmlFor={id}>Name</Label>
            <Input name={name} id={id} type={type} />
        </Wrapper>
     );
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
}
 
export default FormField;