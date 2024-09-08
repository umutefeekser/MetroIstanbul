import { Dropdown } from 'react-native-element-dropdown';

export default ({data, value, setValue}) => {
  return (
    <Dropdown
      style={{
        height: 50,
        borderColor: 'gray',
        backgroundColor: "white",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 10
      }}
      selectedTextStyle={{fontSize: 18}}
      data={data}
      maxHeight={200}
      labelField="label"
      valueField="value"
      value={value}
      onChange={item => setValue(item.value)}
    />
  )
}