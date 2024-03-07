import './styles.css';

// Tipando o JavaScript
interface Props {
    value: String
}

const Title = (props: Props) => {
 return <h2 className="title">
    {props.value}
    </h2>
};

export default Title;