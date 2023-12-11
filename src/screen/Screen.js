import { FlatList,  SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { IconButton } from 'react-native-paper'
import  { useState } from "react";
import Fall from '../components/Fall';




const TodoScreen = () => {
   const[todo, setTodo] = useState('');
   const[todoList, setTodoList] = useState([])
   const [editedTodo, setEditedTodo] = useState(null);


  //delete
  const handleDeleteTodo = (id) => {
    const updateTodoList = todoList.filter((todo)=> todo.id !== id)
    setTodoList(updateTodoList)
  }
  //edit
  const handleEditTodo = (todo) => {
      setEditedTodo(todo);
      setTodo(todo.title)

  };
//update
const handleUpdateTodo = () => {
    const updateTodo = todoList.map((item)=> {
        if(item.id === editedTodo.id){
            return {...item, title: todo}
        }
        return item

    });
    
    setTodoList(updateTodo);
    setEditedTodo(null);
    setTodo('');

} 
   const handleAddTodo= () => {

      if ( todo === ""){
        return;
      }

    setTodoList([...todoList, {id: Date.now().toString(), title: todo }]);
    setTodo('')

};

  
   const render = ({item, index}) => {
        return(
            <View style={{backgroundColor: '#81A1FB', 
            borderRadius:4, marginBottom: 10, 
            paddingVertical: 8, paddingHorizontal:6, 
            flexDirection:'row',
            alignItems:'center',
            shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.9,
            elevation: 1
            
            }}>
                <Text style={{color: 'white', flex:1, fontSize:25, fontWeight: 'bold'}}>{item.title}</Text>
                <IconButton icon='pencil' iconColor='#ffff'
                onPress={() => handleEditTodo(item)}
                />
                <IconButton icon='trash-can' iconColor='#ffff'
                onPress={() => handleDeleteTodo(item.id)}
                />
            </View>
        )
    }
  return (

<View style={{marginHorizontal: 17}}>
     <Text style={{color:'#81A1FB', textAlign:'center', marginTop:35, marginBottom: 5, fontSize: 30, 
     fontWeight:'bold'}}>CREATE A TODO </Text>
          <Text style={{color:'black', textAlign:'center', marginVertical: 5, fontSize: 17, 
     fontWeight:'light'}}>What's on your todo list </Text>
     
      <TextInput style={{ marginTop: 35, 
        borderWidth: 2, 
        borderColor: '#81A1FB',
        borderRadius:6,
        paddingVertical: 12,
        paddingHorizontal: 6,
    
        }}
        placeholder='Add todo'
        value={todo}
        onChangeText={(userText)=> setTodo(userText)}
        />
      {
        editedTodo?
        (
        <TouchableOpacity style={{
            backgroundColor:'black', borderRadius:6, 
            marginVertical: 35, 
            padding: 12
          }}
          onPress = {() => handleUpdateTodo()}
          >
    
            <Text style={{color:'white', 
            textAlign: 'center', 
            fontWeight: 'bold', 
             fontSize: 20,}}>SAVE</Text>
             
          </TouchableOpacity>
      
    ):(  
      <TouchableOpacity style={{
        backgroundColor:'black', borderRadius:6, 
        marginVertical: 35, 
        padding: 12
      }}
      onPress = {() => handleAddTodo()}
      >

        <Text style={{color:'white', 
        textAlign: 'center', 
        fontWeight: 'bold', 
         fontSize: 20,}}>ADD</Text>
         
      </TouchableOpacity>
    )}
       <FlatList data={todoList} renderItem={render}/>
       {todoList.length <= 0 && <Fall />}

    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})