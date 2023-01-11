import React,{useContext} from 'react';
import { StyleSheet,  View } from 'react-native';
import{Formik} from 'formik';
import *as Yup from 'yup';
import {Input,Button,ListItem,Text} from 'react-native-elements';
import { MyContext } from '../context';

let yr;
let yr1;
let mn;
let mn1;
let i;


var getDaysInMonth = function(month,yr1) {
 return new Date(yr1, month, 0).getDate();
};

function getMonth(mn1) {
  if(mn1<getDaysInMonth(1,yr1)){
return 1;
  }
  else{
    for ( i=1 ; i < 12; i++) {
      mn1=mn1-getDaysInMonth(i,yr1);
       if(mn1<getDaysInMonth((i+1),yr1)){

        return i+1;
       }

  }
 } 
 };

 function getDay(mn1){
  if(mn1<getDaysInMonth(1,yr1)){
    return mn1;
      }
      else{
        for ( i=1 ; i < 12; i++) {
          mn1=mn1-getDaysInMonth(i,yr1);
           if(mn1<getDaysInMonth((i+1),yr1)){
    
            return mn1;
           }
    
      }
     } 
 }

 



const StageOne =() =>{
const context = useContext(MyContext)
const renderDetails = () => (
 
  context.state.idnum.map((item,idx)=>(
    yr=190+item[0]*1+item[1],
    yr1 = parseInt(yr),
    mn=(item[2]*100)+(item[3]*10)+(item[4]*1),
    mn1=parseInt(mn),  
      
    <Text key={idx}>Birthday Year :{yr1} 
          Month: {getMonth(mn1)}
          Day: {getDay(mn1)}
          </Text>
    
  ))
)
//console.log(context)

    return(
      <>
      <Formik 
      initialValues={{idn:''}}
      
      validationSchema={Yup.object({
        idn:Yup.string()
        .min(10,'Enter valid id ')
        .max(15,'Not more than 15 value')
        .required('Sorry id num is required')
      })}
      onSubmit={(values,{resetForm})=>{
        context.addID(values.idn)
        resetForm()

      }}
      >
      {({handleChange,handleBlur,handleSubmit,values,touched,errors})=>(
        <>
        <Text>Sri Lanka ID Card details</Text>

        <Input
      placeholder='INPUT ID CARD NUMBER'
      leftIcon={{ type: 'antdesign', name: 'idcard' }}
      inputContainerStyle={{
        marginHorizontal:50,
        marginTop:50
      }}

      renderErrorMessage={errors.idn && touched.idn}
      errorMessage={errors.idn}

      errorStyle={{
        marginHorizontal:50
      }}

      onChangeText={handleChange('idn')}
      onBlur={handleBlur('idn')}
      value={values.idn}
    />
    <Button
    buttonStyle={Styles.Button}
    title="Enter ID"
    onPress={handleSubmit}
    />
    
    </>
      )}
      
    </Formik>
    <View style={{padding:20,width:'100%'}}>
            {
                context.state.idnum && context.state.idnum.length > 0 ?
                    <>
                    <Text>Details</Text>
                     {renderDetails()}
              
                    </>
                :null
            }
        </View>
    </>
    )

}

const Styles=StyleSheet.create({

  Button:{
    backgroundColor:'#DB3EB1',
    marginTop:20
  }
})
export default StageOne;