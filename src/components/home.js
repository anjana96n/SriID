import React,{useContext} from 'react';
import { StyleSheet,  View } from 'react-native';
import{Formik} from 'formik';
import *as Yup from 'yup';
import {Input,Button,ListItem,Text} from 'react-native-elements';

import { MyContext } from '../context';

const StageOne =() =>{
const context = useContext(MyContext)

const renderDetails = () => (
  context.state.idnum.map((item,idx)=>(
      <ListItem
          key={idx}
          bottomDivider
          style={{ width:'100%' }}
          onLongPress={()=> context.removeID(idx)}
      >
          <ListItem.Chevron/>
          <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
          </ListItem.Content>
      </ListItem>
  ))
)
//console.log(context)

    return(
      <>
      <Formik 
      initialValues={{idn:''}}
      
      validationSchema={Yup.object({
        idn:Yup.string()
        .min(10,'enter valid id ')
        .max(15,'not more than 15 value')
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