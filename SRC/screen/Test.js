import { View, Text ,Button} from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Test = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time,setTime]=useState('')
  const [date,setDate]=useState('')
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  
  const handleConfirm = (time) => {
    const tm=new Date(time)
    const x=tm.toLocaleTimeString()
    setTime(x)
    hideTimePicker();

    //date
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      const dt=new Date(date)
      const x=dt.toDateString()
      setDate(x)
      hideDatePicker();
    };
  };
  return (
    <>
    <View>
      <Button title="Show Date Picker" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
      
    </View>
    <View style={{width:200,height:150,borderRadius:10,borderColor:'red'}}>
        <Text>{time}</Text>
      </View>
    </>
  )
}

export default Test