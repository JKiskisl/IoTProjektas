import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { getDatabase, ref, child, push, update, remove } from 'firebase/database'

const DeleteorUpdate = ({route}) => {
    const [description, setDescription] = useState('')
  
    const { postpass } = route.params
  
    const db = getDatabase();
    const dbRef = ref(db, 'scannedItems/' + postpass.id);

    const handleSubmit = (event) => {
        event.preventDefault();
        update(dbRef, { description })
          .then(() => console.log('Data updated'))
          .catch((error) => console.log(error));
        setDescription('');
      };
  
    const deleteItem = (id) => {
        remove(dbRef)
        .then(() => console.log('success', id))
        .catch(() => console.log('nope'))
    }
  
    const successDelete = () =>{
      Alert.alert("Deleted succesfully")
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scanned Item {postpass.description}</Text>
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="description"
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => deleteItem(postpass.id)}>
            <View style={styles.deleteButton}>
              <Text style={styles.addButtonText}>DELETE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    )
}

export default DeleteorUpdate

const styles = StyleSheet.create({
    container: {
      flex: 2,
    },
    inputContainer: {
      backgroundColor: '#ffffff',
      borderTopColor: '#ededed',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 60,
      width: 60,
    },
    inputWrapper: {
      flex: 2,
    },
    input: {
      height: 40,
      padding: 7,
      backgroundColor: '#ededed',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
  
      marginBottom: 5,
    },
    addButtonText: {
      fontSize: 24,
      lineHeight: 24,
    },
    addButton: {
      width: 120,
      height: 40,
      backgroundColor: '#6cc900',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    addButtonContainer: {
      flex: 4,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    deleteButton: {
      width: 120,
      height: 40,
      backgroundColor: 'red',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
  })
  