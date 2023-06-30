import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function Toolbar ({ activeTab, handleTabChange }){
  //  const[value, setValue] = useState(activeTab);

    // const handleChange = (val) => {
    //     setValue(val);
    //     handleTabChange(val);
    // }

    return (
        <ToggleButtonGroup 
            value={activeTab}
            onChange={(val) => handleTabChange(val)}
            name='tabs' 
            type='radio'
            >
        <ToggleButton value="all" id="all" name='tabs'>All</ToggleButton>
        <ToggleButton value="active" id="active" name='tabs'>Active</ToggleButton>
        <ToggleButton value="completed" id="completed" name='tabs'>Completed</ToggleButton>
        </ToggleButtonGroup>
    );
}